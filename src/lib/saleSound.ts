/**
 * Sons das notificações de venda — sintetizados com Web Audio (sem arquivos).
 *  - playSaleSound(): "ka-ching" de caixa registradora (clique mecânico + 2 sinos + moedinhas + reverb)
 *  - playJoinSound(): chime suave subindo (novo revendedor)
 * O navegador só libera áudio depois de um gesto do usuário (clique/toque/tecla),
 * então `installAudioUnlock()` prepara o AudioContext no primeiro gesto.
 */

type Listener = () => void;

const STORAGE_KEY = "lov3-sound-muted";

let ctx: AudioContext | null = null;
let bus: GainNode | null = null;
let reverbIn: GainNode | null = null;
let unlocked = false;

let muted = (() => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
})();

const listeners = new Set<Listener>();
const emit = () => listeners.forEach((l) => l());

const makeImpulse = (c: AudioContext, seconds: number, decay: number) => {
  const len = Math.floor(c.sampleRate * seconds);
  const buf = c.createBuffer(2, len, c.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
  }
  return buf;
};

const getCtx = (): AudioContext | null => {
  if (ctx) return ctx;
  const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  ctx = new AC();

  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -16;
  comp.knee.value = 8;
  comp.ratio.value = 4;
  comp.attack.value = 0.002;
  comp.release.value = 0.18;
  comp.connect(ctx.destination);

  bus = ctx.createGain();
  bus.gain.value = 0.7;
  bus.connect(comp);

  // reverb curto, deixa o som "caro" e com espaço
  const conv = ctx.createConvolver();
  conv.buffer = makeImpulse(ctx, 1.3, 3.4);
  const wet = ctx.createGain();
  wet.gain.value = 0.2;
  reverbIn = ctx.createGain();
  reverbIn.connect(conv);
  conv.connect(wet);
  wet.connect(comp);

  return ctx;
};

const route = (node: AudioNode, send = 1) => {
  if (!ctx || !bus || !reverbIn) return;
  node.connect(bus);
  if (send > 0) {
    const s = ctx.createGain();
    s.gain.value = send;
    node.connect(s);
    s.connect(reverbIn);
  }
};

/** Sino metálico com parciais inarmônicas (cada uma decai num ritmo). */
const bell = (t0: number, freq: number, dur: number, vol: number) => {
  const c = ctx!;
  const out = c.createGain();
  out.gain.setValueAtTime(0.0001, t0);
  out.gain.exponentialRampToValueAtTime(vol, t0 + 0.004);
  out.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  route(out, 1);

  const partials: [number, number][] = [
    [1, 1],
    [2.01, 0.55],
    [2.76, 0.34],
    [4.07, 0.2],
    [5.43, 0.11],
  ];
  partials.forEach(([ratio, amp], i) => {
    const o = c.createOscillator();
    o.type = "sine";
    o.frequency.value = freq * ratio;
    const g = c.createGain();
    g.gain.setValueAtTime(amp, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur / (1 + i * 0.9));
    o.connect(g);
    g.connect(out);
    o.start(t0);
    o.stop(t0 + dur + 0.05);
  });
};

/** Estalo mecânico curto (gaveta da caixa). */
const click = (t0: number, vol: number, freq: number) => {
  const c = ctx!;
  const len = Math.floor(c.sampleRate * 0.045);
  const buf = c.createBuffer(1, len, c.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (c.sampleRate * 0.006));
  const src = c.createBufferSource();
  src.buffer = buf;
  const bp = c.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.value = freq;
  bp.Q.value = 1.4;
  const g = c.createGain();
  g.gain.value = vol;
  src.connect(bp);
  bp.connect(g);
  route(g, 0.3);
  src.start(t0);
};

/** Peso grave (dá corpo ao "ka"). */
const thump = (t0: number, vol: number) => {
  const c = ctx!;
  const o = c.createOscillator();
  o.type = "sine";
  o.frequency.setValueAtTime(170, t0);
  o.frequency.exponentialRampToValueAtTime(55, t0 + 0.12);
  const g = c.createGain();
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.16);
  o.connect(g);
  route(g, 0);
  o.start(t0);
  o.stop(t0 + 0.2);
};

/** Moedinhas: blips agudos aleatórios. */
const coins = (t0: number, count: number, vol: number) => {
  const c = ctx!;
  for (let i = 0; i < count; i++) {
    const t = t0 + Math.random() * 0.28;
    const o = c.createOscillator();
    o.type = "sine";
    o.frequency.value = 3200 + Math.random() * 2600;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.003);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.06 + Math.random() * 0.05);
    o.connect(g);
    route(g, 0.8);
    o.start(t);
    o.stop(t + 0.14);
  }
};

const ready = () => {
  if (muted || !unlocked) return null;
  const c = getCtx();
  if (!c) return null;
  if (c.state === "suspended") void c.resume();
  return c;
};

export const playSaleSound = () => {
  const c = ready();
  if (!c) return;
  const t = c.currentTime + 0.03;
  click(t, 0.9, 2200);
  thump(t, 0.45);
  click(t + 0.035, 0.5, 4200);
  bell(t + 0.07, 1318.5, 1.0, 0.32); // E6 — "cha"
  bell(t + 0.15, 1975.5, 1.25, 0.26); // B6 — "ching"
  coins(t + 0.12, 7, 0.05);
};

export const playJoinSound = () => {
  const c = ready();
  if (!c) return;
  const t = c.currentTime + 0.03;
  bell(t, 880, 0.7, 0.18); // A5
  bell(t + 0.09, 1318.5, 0.9, 0.16); // E6
  bell(t + 0.18, 1760, 1.1, 0.12); // A6
};

/** Libera o áudio no primeiro gesto do usuário. Retorna função de limpeza. */
export const installAudioUnlock = () => {
  if (unlocked) return () => {};
  const events = ["pointerdown", "touchstart", "keydown"] as const;
  const handler = () => {
    const c = getCtx();
    if (c && c.state === "suspended") void c.resume();
    unlocked = true;
    events.forEach((e) => window.removeEventListener(e, handler));
    emit();
  };
  events.forEach((e) => window.addEventListener(e, handler, { passive: true }));
  return () => events.forEach((e) => window.removeEventListener(e, handler));
};

export const soundStore = {
  subscribe(l: Listener) {
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  },
  isMuted: () => muted,
  toggle() {
    muted = !muted;
    try {
      localStorage.setItem(STORAGE_KEY, muted ? "1" : "0");
    } catch {
      /* storage indisponível */
    }
    emit();
    if (!muted) {
      // clique no botão já é gesto do usuário → toca uma prévia
      unlocked = true;
      playSaleSound();
    }
  },
};

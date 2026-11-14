import { useSyncExternalStore } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { soundStore } from "@/lib/saleSound";
import { cn } from "@/lib/utils";

export const SoundToggle = ({ className }: { className?: string }) => {
  const muted = useSyncExternalStore(soundStore.subscribe, soundStore.isMuted, () => false);
  return (
    <button
      type="button"
      onClick={() => soundStore.toggle()}
      aria-pressed={!muted}
      aria-label={muted ? "Ativar som das vendas" : "Desativar som das vendas"}
      title={muted ? "Ativar som das vendas" : "Desativar som das vendas"}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground",
        className,
      )}
    >
      {muted ? <VolumeX className="h-[18px] w-[18px]" /> : <Volume2 className="h-[18px] w-[18px]" />}
      {!muted && (
        <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_hsl(var(--success))]" />
      )}
    </button>
  );
};

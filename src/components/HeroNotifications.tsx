import logo from "@/assets/logo.png";

const notifications = [
  { name: "Lucas", time: "Agora" },
  { name: "Camila", time: "2 min" },
  { name: "Rafael", time: "5 min" },
  { name: "Juliana", time: "8 min" },
  { name: "Bruno", time: "12 min" },
  { name: "Amanda", time: "15 min" },
];

export const HeroNotifications = () => {
  return (
    <div className="hidden lg:block absolute right-[-80px] xl:right-[-40px] top-[100px] w-[260px] pointer-events-none">
      {notifications.map((n, i) => (
        <div
          key={i}
          className="flex items-center gap-2.5 rounded-xl border border-border/30 px-3 py-2 mb-3 shadow-lg animate-fade-in opacity-0"
          style={{
            background: "hsl(0 0% 10% / 0.5)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            transform: `translateX(${Math.sin((i / 5) * Math.PI) * 40}px) rotate(${2 + i * 0.5}deg)`,
            animationDelay: `${0.8 + i * 0.2}s`,
            animationFillMode: "forwards",
          }}
        >
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
            <img src={logo} alt="" className="w-5 h-5 object-contain" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-semibold text-primary leading-tight">
              Venda Aprovada! ✅
            </p>
            <p className="text-[10px] text-muted-foreground">
              Valor: <span className="text-foreground font-medium">R$ 147,00</span>
            </p>
          </div>
          <span className="text-[9px] text-muted-foreground whitespace-nowrap">{n.time}</span>
        </div>
      ))}
    </div>
  );
};

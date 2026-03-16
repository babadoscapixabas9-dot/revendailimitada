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
    <div
      className="hidden lg:block absolute right-[-60px] xl:right-[0px] top-[60px] w-[280px] pointer-events-none"
      style={{
        perspective: "800px",
      }}
    >
      <div
        style={{
          transform: "rotateY(-15deg) rotateX(8deg) rotateZ(-3deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {notifications.map((n, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 rounded-xl border border-border/30 px-3 py-2.5 mb-2.5 shadow-lg animate-fade-in opacity-0"
            style={{
              background: "hsl(0 0% 10% / 0.5)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              animationDelay: `${0.8 + i * 0.15}s`,
              animationFillMode: "forwards",
              transform: `translateZ(${(5 - i) * 4}px)`,
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
    </div>
  );
};

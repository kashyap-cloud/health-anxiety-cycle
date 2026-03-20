const PersonIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-48 h-48 mx-auto" fill="none">
    {/* Person sitting */}
    <circle cx="100" cy="85" r="18" fill="hsl(250 40% 75%)" /> {/* Head */}
    <ellipse cx="100" cy="130" rx="25" ry="30" fill="hsl(220 50% 80%)" /> {/* Body */}
    <ellipse cx="80" cy="155" rx="18" ry="8" fill="hsl(250 35% 78%)" /> {/* Left leg */}
    <ellipse cx="120" cy="155" rx="18" ry="8" fill="hsl(250 35% 78%)" /> {/* Right leg */}
    {/* Eyes */}
    <circle cx="94" cy="83" r="2" fill="hsl(240 20% 30%)" />
    <circle cx="106" cy="83" r="2" fill="hsl(240 20% 30%)" />
    {/* Smile */}
    <path d="M 95 90 Q 100 95 105 90" stroke="hsl(240 20% 30%)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

    {/* Thought bubble - static */}
    <g>
      <ellipse cx="155" cy="40" rx="30" ry="22" fill="hsl(250 50% 95%)" stroke="hsl(250 30% 82%)" strokeWidth="1.5" />
      <circle cx="125" cy="58" r="5" fill="hsl(250 50% 95%)" stroke="hsl(250 30% 82%)" strokeWidth="1" />
      <circle cx="118" cy="67" r="3" fill="hsl(250 50% 95%)" stroke="hsl(250 30% 82%)" strokeWidth="1" />
      <text x="155" y="44" textAnchor="middle" fontSize="16" fill="hsl(250 40% 55%)">🤔</text>
    </g>
  </svg>
);

interface WelcomeScreenProps {
  onNext: () => void;
}

const WelcomeScreen = ({ onNext }: WelcomeScreenProps) => {
  return (
    <div className="flex flex-col min-h-screen px-6 py-8 text-center"
         style={{ background: 'linear-gradient(160deg, hsl(230 30% 96%), hsl(250 35% 94%), hsl(220 40% 95%))' }}>

      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl font-bold text-foreground">
          Understanding Health Anxiety
        </h1>

        <p className="text-muted-foreground italic text-base leading-relaxed max-w-xs">
          "Ever wondered why health worries never go away — no matter how much you check? Here's exactly why."
        </p>

        <p className="text-sm text-muted-foreground/70">2 minute read</p>

        <PersonIllustration />
      </div>

      <button
        onClick={onNext}
        className="w-full py-4 rounded-full text-primary-foreground font-bold text-lg shadow-lg active:scale-[0.98] transition-transform"
        style={{ background: 'linear-gradient(135deg, hsl(250 40% 55%), hsl(260 45% 60%))' }}
      >
        Show Me →
      </button>
    </div>
  );
};

export default WelcomeScreen;
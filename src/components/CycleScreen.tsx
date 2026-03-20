import CycleWheel from "./CycleWheel";

interface CycleScreenProps {
  onNext: () => void;
}

const CycleScreen = ({ onNext }: CycleScreenProps) => {
  return (
    <div className="flex flex-col min-h-screen px-6 py-8 text-center"
         style={{ background: 'linear-gradient(160deg, hsl(230 30% 96%), hsl(250 35% 94%), hsl(220 40% 95%))' }}>
      <div className="flex-1 flex flex-col gap-5 overflow-y-auto pb-4">
        <h1 className="text-xl font-bold text-foreground mt-2">
          This is What's Happening in Your Brain
        </h1>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Health anxiety doesn't just appear and leave. It runs in a loop — and every time you check, you make that loop stronger.
        </p>

        <CycleWheel animated />

        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
          Each loop teaches your brain that the worry was worth checking. So it keeps coming back — each time a little louder.
        </p>

        {/* Highlight card */}
        <div className="rounded-2xl px-5 py-4 mx-auto max-w-xs"
             style={{ background: 'linear-gradient(135deg, hsl(250 50% 95%), hsl(220 50% 94%))' }}>
          <p className="text-sm font-semibold text-accent-foreground">
            💡 Checking gives relief — but never freedom.
          </p>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full py-4 rounded-full text-primary-foreground font-bold text-lg shadow-lg active:scale-[0.98] transition-transform mt-4"
        style={{ background: 'linear-gradient(135deg, hsl(250 40% 55%), hsl(260 45% 60%))' }}
      >
        I Recognise This →
      </button>
    </div>
  );
};

export default CycleScreen;
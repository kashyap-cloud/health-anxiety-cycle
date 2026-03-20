import { useState } from "react";
import CycleWheel, { NODES } from "./CycleWheel";

const TIPS = [
  "Notice it without reacting. Say to yourself — 'That's a trigger, not a fact.' Then take one slow breath before doing anything.",
  "Name the feeling out loud — 'I'm feeling anxious right now.' Naming it reduces its power. You don't need to fix it — just acknowledge it.",
  "This is the most important stage to interrupt. Delay the check by just 5 minutes. Then 10. Each delay weakens the habit.",
  "Remind yourself — this relief won't last. Real relief comes from tolerating uncertainty, not escaping it.",
  "Don't engage with the doubt. Say — 'There's that doubt again.' Then let it pass like a cloud without following it.",
];

const BreakCycleScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [tappedNodes, setTappedNodes] = useState<Set<number>>(new Set());

  const handleNodeTap = (index: number) => {
    setActiveNode(index === activeNode ? null : index);
    setTappedNodes((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };

  const allTapped = tappedNodes.size === 5;

  return (
    <div className="flex flex-col min-h-screen px-6 py-8 text-center"
         style={{ background: 'linear-gradient(160deg, hsl(230 30% 96%), hsl(250 35% 94%), hsl(220 40% 95%))' }}>
      <div className="flex-1 flex flex-col gap-5 overflow-y-auto pb-4">
        <h1 className="text-xl font-bold text-foreground mt-2">
          Here's How to Fight Back
        </h1>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Every stage of the cycle has a way to interrupt it. Tap each one to see what you can do:
        </p>

        <CycleWheel
          interactive
          activeNode={activeNode}
          onNodeTap={handleNodeTap}
        />

        {/* Expanded card */}
        {activeNode !== null && (
          <div
            key={activeNode}
            className="rounded-2xl px-5 py-4 mx-auto max-w-xs animate-slide-up"
            style={{ background: 'linear-gradient(135deg, hsl(250 50% 95%), hsl(220 50% 94%))' }}
          >
            <p className="text-xs font-bold text-accent-foreground mb-2">
              {NODES[activeNode].emoji} {NODES[activeNode].label.toUpperCase()}
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {TIPS[activeNode]}
            </p>
          </div>
        )}

        {/* All tapped message */}
        {allTapped && (
          <p className="text-sm text-foreground/80 leading-relaxed animate-fade-up mt-2">
            You now know exactly where the cycle lives — and how to interrupt it. That knowledge is powerful. 💙
          </p>
        )}
      </div>

      {allTapped && (
        <button
          className="w-full py-4 rounded-full text-primary-foreground font-bold text-lg shadow-lg active:scale-[0.98] transition-transform mt-4 animate-fade-up"
          style={{ background: 'linear-gradient(135deg, hsl(250 40% 55%), hsl(260 45% 60%))' }}
        >
          Complete ✓
        </button>
      )}
    </div>
  );
};

export default BreakCycleScreen;
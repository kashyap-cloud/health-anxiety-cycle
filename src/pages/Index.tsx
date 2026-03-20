import { useState } from "react";
import WelcomeScreen from "@/components/WelcomeScreen";
import CycleScreen from "@/components/CycleScreen";
import BreakCycleScreen from "@/components/BreakCycleScreen";

const Index = () => {
  const [screen, setScreen] = useState(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <div className="w-[375px] min-h-screen max-h-screen overflow-y-auto shadow-2xl rounded-3xl relative"
           style={{ maxHeight: '100dvh' }}>
        {screen === 0 && <WelcomeScreen onNext={() => setScreen(1)} />}
        {screen === 1 && <CycleScreen onNext={() => setScreen(2)} />}
        {screen === 2 && <BreakCycleScreen />}
      </div>
    </div>
  );
};

export default Index;
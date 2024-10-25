import { useEffect, useState } from "react";
import AnimatedText from "../components/AnimatedText";
import Raindrops from "../components/Raindrops";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleNext = () => {
    setAnswers([...answers, inputValue]);
    setInputValue("");
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-radial from-blue-900 via-blue-900 to-black"></div>
      <div className="relative z-10 text-center">
        {currentStep === 0 && (
          <AnimatedText
            text="The rain is relentless"
            delay={0}
            duration={4}
            onEnd={() => setCurrentStep(currentStep + 1)}
          />
        )}
        {currentStep === 1 && (
          <AnimatedText
            text="You find yourself alone, standing under the gray sky as water pours down"
            delay={0}
            duration={4}
            onEnd={() => setCurrentStep(currentStep + 1)}
          />
        )}
        {currentStep === 2 && (
          <AnimatedText
            text="soaking through your clothes"
            delay={0}
            duration={4}
            onEnd={() => setCurrentStep(currentStep + 1)}
          />
        )}
        {currentStep === 3 && (
          <AnimatedText
            text="The world around you feels empty"
            delay={0}
            duration={4}
            onEnd={() => setCurrentStep(currentStep + 1)}
          />
        )}
        {currentStep === 4 && (
          <AnimatedText
            text="Each raindrop seems to echo your thoughts, pulling you deeper into a quiet"
            delay={0}
            duration={4}
            onEnd={() => setCurrentStep(currentStep + 1)}
          />
        )}
        {currentStep === 5 && (
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-white mb-4">Your thoughts that echo in your head are</h1>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="px-4 py-2 mb-4 text-black rounded"
              placeholder="Type here..."
            />
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        )}
        {currentStep === 6 && (
          <AnimatedText
            text="But as you walk on, something shifts."
            delay={0}
            duration={4}
            onEnd={() => setCurrentStep(currentStep + 1)}
          />
        )}
        {currentStep === 7 && (
          <AnimatedText
            text="You begin to notice how the rain, though cold and heavy, is steady."
            delay={0}
            duration={4}
            onEnd={() => setCurrentStep(currentStep + 1)}
          />
        )}
        {currentStep === 8 && (
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-white mb-4">You feel that each raindrop carries away a worry or fear. Which one do you hope the rain will wash away first?</h1>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="px-4 py-2 mb-4 text-black rounded"
              placeholder="Type here..."
            />
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        )}
        {currentStep === 9 && (
          <AnimatedText
            text="It peeling away the layers of weariness and leaving something simpler, lighter."
            delay={0}
            duration={4}
            onEnd={() => setCurrentStep(currentStep + 1)}
          />
        )}
        {currentStep === 10 && (
          <AnimatedText
            text="And finally You spot a small light ahead"
            delay={0}
            duration={4}
            onEnd={() => setCurrentStep(currentStep + 1)}
          />
        )}
        {currentStep === 11 && (
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-white mb-4">As you see a light ahead, what kind of comfort do you most wish to find there?</h1>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="px-4 py-2 mb-4 text-black rounded"
              placeholder="Type here..."
            />
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        )}
        {currentStep === 12 && (
          <AnimatedText
            text="a warm glow from a nearby shelter"
            delay={0}
            duration={4}
            onEnd={() => setCurrentStep(currentStep + 1)}
          />
        )}
        {currentStep === 13 && (
          <AnimatedText
            text="As you step inside, you find yourself surrounded by warmth, and the quiet hum of the rain outside transforms into a comforting sound."
            delay={0}
            duration={4}
            onEnd={() => setCurrentStep(currentStep + 1)}
          />
        )}
        {currentStep === 14 && (
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-white mb-4">So you think about something small that has brought you a sense of peace in the past. Why does it give you comfort?</h1>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="px-4 py-2 mb-4 text-black rounded"
              placeholder="Type here..."
            />
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        )}
        {currentStep === 15 && (
          <AnimatedText
            text="You realize that, even on days that start gray and cold, warmth can still find its way to you"
            delay={0}
            duration={4}
            onEnd={() => setCurrentStep(currentStep + 1)}
          />
        )}
        {currentStep === 16 && (
          <AnimatedText
            text="The rain becomes a steady companion, like a rhythm that assures you everything will eventually be cleansed and renewed."
            delay={0}
            duration={4}
            onEnd={() => setCurrentStep(currentStep + 1)}
          />
        )}
      </div>
      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animate-fade-in-out {
          animation: fadeInOut 4s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}

export default App;
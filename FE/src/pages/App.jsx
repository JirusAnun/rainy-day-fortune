import { useEffect, useState, useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import FadeInOut from "../components/FadeInOut";
import Raindrops from "../components/Raindrops";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [answers, setAnswers] = useState([]);
  const fadeInOutRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleNext = () => {
    if (fadeInOutRef.current) {
      fadeInOutRef.current.triggerFadeOut();
    }
    setTimeout(() => {
      setAnswers([...answers, inputValue]);
      setInputValue("");
      setCurrentStep(currentStep + 1);
    }, 4000); // Wait for the fade-out animation to complete
  };

  const handleClick = () => {
    // Disable click-to-continue on text input steps
    if ([5, 8, 11, 14].includes(currentStep)) return;
    setCurrentStep(currentStep + 1);
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden flex items-center justify-center font-handWrite font-semibold tracking-[0.3rem] film-effect"
      onClick={handleClick}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 ${
          currentStep > 16 ? "bg-yellow-500" : "bg-gradient-radial from-blue-900 via-blue-900 to-black"
        }`}
      ></div>
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise"></div>

      <div className="relative z-10 text-center p-[10%]">
        {currentStep === 0 && (
          <AnimatedText
            text="The rain is relentless"
            delay={0}
            duration={4}
            onEnd={handleClick}
          />
        )}
        {currentStep === 1 && (
          <AnimatedText
            text="You find yourself alone, standing under the gray sky as water pours down"
            delay={0}
            duration={4}
            onEnd={handleClick}
          />
        )}
        {currentStep === 2 && (
          <AnimatedText
            text="soaking through your clothes"
            delay={0}
            duration={4}
            onEnd={handleClick}
          />
        )}
        {currentStep === 3 && (
          <AnimatedText
            text="The world around you feels empty"
            delay={0}
            duration={4}
            onEnd={handleClick}
          />
        )}
        {currentStep === 4 && (
          <AnimatedText
            text="Each raindrop seems to echo your thoughts, pulling you deeper into a quiet"
            delay={0}
            duration={4}
            onEnd={handleClick}
          />
        )}
        {currentStep === 5 && (
          <FadeInOut ref={fadeInOutRef} delay={0} duration={2}>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl text-white mb-4">
                Your thoughts that echo in your head are
              </h1>
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
          </FadeInOut>
        )}
        {currentStep === 6 && (
          <AnimatedText
            text="But as you walk on, something shifts."
            delay={0}
            duration={4}
            onEnd={handleClick}
          />
        )}
        {currentStep === 7 && (
          <AnimatedText
            text="You begin to notice how the rain, though cold and heavy, is steady."
            delay={0}
            duration={4}
            onEnd={handleClick}
          />
        )}
        {currentStep === 8 && (
          <FadeInOut ref={fadeInOutRef} delay={0} duration={2}>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl text-white mb-4">
                You feel that each raindrop carries away a worry or fear. Which
                one do you hope the rain will wash away first?
              </h1>
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
          </FadeInOut>
        )}
        {currentStep === 9 && (
          <AnimatedText
            text="It peeling away the layers of weariness and leaving something simpler, lighter."
            delay={0}
            duration={4}
            onEnd={handleClick}
          />
        )}
        {currentStep === 10 && (
          <AnimatedText
            text="And finally You spot a small light ahead"
            delay={0}
            duration={4}
            onEnd={handleClick}
          />
        )}
        {currentStep === 11 && (
          <FadeInOut ref={fadeInOutRef} delay={0} duration={2}>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl text-white mb-4">
                As you see a light ahead, what kind of comfort do you most wish
                to find there?
              </h1>
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
          </FadeInOut>
        )}
        {currentStep === 12 && (
          <AnimatedText
            text="a warm glow from a nearby shelter"
            delay={0}
            duration={4}
            onEnd={handleClick}
          />
        )}
        {currentStep === 13 && (
          <AnimatedText
            text="As you step inside, you find yourself surrounded by warmth, and the quiet hum of the rain outside transforms into a comforting sound."
            delay={0}
            duration={4}
            onEnd={handleClick}
          />
        )}
        {currentStep === 14 && (
          <FadeInOut ref={fadeInOutRef} delay={0} duration={2}>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl text-white mb-4">
                So you think about something small that has brought you a sense
                of peace in the past. Why does it give you comfort?
              </h1>
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
          </FadeInOut>
        )}
        {currentStep === 15 && (
          <AnimatedText
            text="You realize that, even on days that start gray and cold, warmth can still find its way to you"
            delay={0}
            duration={4}
            onEnd={handleClick}
          />
        )}
        {currentStep === 16 && (
          <AnimatedText
            text="The rain becomes a steady companion, like a rhythm that assures you everything will eventually be cleansed and renewed."
            delay={0}
            duration={4}
            onEnd={handleClick}
          />
        )}
        {currentStep === 17 && (
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-white mb-4">The End</h1>
          </div>
        )}
      </div>
      <Raindrops />
      <style>{`
        .film-effect {
          position: relative;
          filter: sepia(0.2) brightness(0.9) contrast(1.1);
        }

        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.90' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          opacity: 0.15;
        }

        @keyframes fadeIn {
          0% { opacity: 0; visibility: hidden; }
          100% { opacity: 1; visibility: visible; }
        }

        @keyframes fadeOut {
          0% { opacity: 1; visibility: visible; }
          100% { opacity: 0; visibility: hidden; }
        }

        .animate-fade-in {
          animation: fadeIn 2s ease-in-out forwards;
        }

        .animate-fade-out {
          animation: fadeOut 2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}

export default App;

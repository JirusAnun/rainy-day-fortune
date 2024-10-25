import { useEffect, useState } from "react";

const AnimatedText = ({ text, delay, duration, onEnd }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      const endTimer = setTimeout(() => {
        setVisible(false);
        if (onEnd) onEnd();
      }, duration);
      return () => clearTimeout(endTimer);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, duration, onEnd]);

  return (
    <h1 className={`text-4xl text-white mb-4 ${visible ? "animate-fade-in-out" : ""}`}>
      {text}
    </h1>
  );
};

export default AnimatedText;
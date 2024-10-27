import { useEffect, useState } from "react";

const AnimatedText = ({ text, delay, duration, onEnd }) => {
  const [visible, setVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay * 1000); // Convert delay to milliseconds

    return () => clearTimeout(timer);
  }, [delay]);

  const handleClick = () => {
    if (isAnimating) return; // Prevent click handling if animation is in progress

    setIsAnimating(true);
    setIsFadingOut(true);
    setTimeout(() => {
      setVisible(false);
      setIsFadingOut(false);
      setIsAnimating(false);
      if (onEnd) onEnd();
    }, duration * 1000); // Wait for the fade-out animation to complete
  };

  return (
    <h1
      className={`text-4xl text-white mb-4 ${visible ? "animate-fade-in" : ""} ${isFadingOut ? "animate-fade-out" : ""}`}
      onClick={handleClick}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      {text}
    </h1>
  );
};

export default AnimatedText;
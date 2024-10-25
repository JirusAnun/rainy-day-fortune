import { useEffect, useState, useImperativeHandle, forwardRef } from "react";

const FadeInOut = forwardRef(({ children, delay, duration, onEnd }, ref) => {
  const [visible, setVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay * 1000); // Convert delay to milliseconds

    return () => clearTimeout(timer);
  }, [delay]);

  useImperativeHandle(ref, () => ({
    triggerFadeOut: () => {
      if (isAnimating) return; // Prevent click handling if animation is in progress

      setIsAnimating(true);
      setIsFadingOut(true);
      setTimeout(() => {
        setVisible(false);
        setIsFadingOut(false);
        setIsAnimating(false);
        if (onEnd) onEnd();
      }, duration * 1000); // Wait for the fade-out animation to complete
    }
  }));

  return (
    <div
      className={`${visible ? "animate-fade-in" : ""} ${isFadingOut ? "animate-fade-out" : ""}`}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      {children}
    </div>
  );
});

export default FadeInOut;
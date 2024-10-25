import React from "react";

const Raindrops = () => {
  return (
    <>
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className={`absolute bottom-full bg-white animate-fall`}
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 10 + 10}px`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 1 + 1.5}s`,
          }}
        ></div>
      ))}
    </>
  );
};

export default React.memo(Raindrops);
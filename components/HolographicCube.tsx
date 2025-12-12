import React, { useEffect, useRef, useState } from 'react';

const HolographicCube: React.FC = () => {
  const [rotation, setRotation] = useState({ x: -15, y: 25 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate rotation based on cursor position relative to window center
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // Range: -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2; // Range: -1 to 1
      
      // Sensitivity factor - how much it rotates
      const targetRotateY = x * 30; // Rotate Y axis based on mouse X
      const targetRotateX = -y * 30; // Rotate X axis based on mouse Y

      setRotation({ x: targetRotateX, y: targetRotateY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="cube-wrapper opacity-100">
      <div 
        className="cube"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
        }}
      >
        {/* Outer Faces */}
        {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face) => (
          <div key={face} className={`cube-face ${face}`}>
            <div className="holo-grid" />
            <div className="corner-bracket top-left" />
            <div className="corner-bracket top-right" />
            <div className="corner-bracket bottom-left" />
            <div className="corner-bracket bottom-right" />
            {face === 'front' && <div className="holo-content">SC</div>}
          </div>
        ))}
        
        {/* Inner Core Cube (Spins independently) */}
        <div className="inner-cube">
             <div className="inner-face front" />
             <div className="inner-face back" />
             <div className="inner-face right" />
             <div className="inner-face left" />
             <div className="inner-face top" />
             <div className="inner-face bottom" />
        </div>
      </div>

      <style>{`
        .cube-wrapper {
          width: 400px;
          height: 400px;
          perspective: 1000px;
          display: flex;
          align-items: center;
          justify-content: center;
          /* Floating animation independent of mouse rotation */
          animation: float 6s ease-in-out infinite;
        }

        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.1s cubic-bezier(0.215, 0.61, 0.355, 1); /* Smooth mechanical feel */
        }

        .cube-face {
          position: absolute;
          width: 400px;
          height: 400px;
          /* Distinct Borders */
          border: 2px solid rgba(230, 126, 34, 0.8);
          /* Darker background for contrast against the stars */
          background: rgba(5, 10, 20, 0.6); 
          /* Strong Glow */
          box-shadow: 
            0 0 20px rgba(230, 126, 34, 0.2), 
            inset 0 0 40px rgba(230, 126, 34, 0.1);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          backface-visibility: visible;
        }

        /* Face Positioning */
        .front  { transform: rotateY(0deg) translateZ(200px); }
        .right  { transform: rotateY(90deg) translateZ(200px); }
        .back   { transform: rotateY(180deg) translateZ(200px); }
        .left   { transform: rotateY(-90deg) translateZ(200px); }
        .top    { transform: rotateX(90deg) translateZ(200px); }
        .bottom { transform: rotateX(-90deg) translateZ(200px); }

        /* Tech Grid Pattern */
        .holo-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(230, 126, 34, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(230, 126, 34, 0.3) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.5;
        }

        /* Tactical Corners */
        .corner-bracket {
          position: absolute;
          width: 30px;
          height: 30px;
          border: 4px solid #E67E22;
          box-shadow: 0 0 15px #E67E22;
        }
        .top-left { top: -2px; left: -2px; border-right: none; border-bottom: none; }
        .top-right { top: -2px; right: -2px; border-left: none; border-bottom: none; }
        .bottom-left { bottom: -2px; left: -2px; border-right: none; border-top: none; }
        .bottom-right { bottom: -2px; right: -2px; border-left: none; border-top: none; }

        /* Big SC Text */
        .holo-content {
          font-family: 'Syncopate', sans-serif;
          font-weight: 700;
          font-size: 140px;
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 0 0 40px rgba(230, 126, 34, 1);
          letter-spacing: -5px;
          animation: text-flicker 4s infinite;
        }

        /* Inner Cube Styling */
        .inner-cube {
          width: 140px;
          height: 140px;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -70px;
          margin-left: -70px;
          transform-style: preserve-3d;
          animation: spin-reverse 15s infinite linear;
        }

        .inner-face {
           position: absolute;
           width: 140px;
           height: 140px;
           background: rgba(230, 126, 34, 0.15);
           border: 2px solid #E67E22;
           box-shadow: 0 0 25px rgba(230, 126, 34, 0.6);
        }

        .inner-cube .front  { transform: rotateY(0deg) translateZ(70px); }
        .inner-cube .right  { transform: rotateY(90deg) translateZ(70px); }
        .inner-cube .back   { transform: rotateY(180deg) translateZ(70px); }
        .inner-cube .left   { transform: rotateY(-90deg) translateZ(70px); }
        .inner-cube .top    { transform: rotateX(90deg) translateZ(70px); }
        .inner-cube .bottom { transform: rotateX(-90deg) translateZ(70px); }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes spin-reverse {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(-360deg) rotateY(360deg); }
        }

        @keyframes text-flicker {
          0%, 100% { opacity: 1; }
          95% { opacity: 1; }
          96% { opacity: 0.8; }
          97% { opacity: 1; }
          98% { opacity: 0.5; }
          99% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default HolographicCube;
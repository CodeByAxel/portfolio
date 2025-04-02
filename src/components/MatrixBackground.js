import React, { useEffect } from "react";

function MatrixBackground() {
  useEffect(() => {
    const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");

    // Ajustar tamaño
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "アアイウエオカキクケコサシスセソタチツテトナニヌネノ";
    const matrixChars = characters.split("");
    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(0);

    const textColor = "#00ff00";

    function drawMatrix() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = textColor;
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, index) => {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const x = index * fontSize;

        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[index] = 0;
        }

        drops[index]++;
      });
    }

    const interval = setInterval(drawMatrix, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
  id="matrixCanvas"
  aria-hidden="true"
  role="presentation"
  style={{
    position: "fixed",
    opacity:"0.4",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100vw",
    height: "100vh",
  }}
></canvas>
  );
}

export default MatrixBackground;

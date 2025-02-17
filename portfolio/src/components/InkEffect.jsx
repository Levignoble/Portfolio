import { useEffect } from 'react';

const InkEffect = () => {
  useEffect(() => {
    const createInkDrop = (e) => {
      // Only create ink drop if clicking directly on the background
      if (e.target === document.body || e.target.classList.contains('app')) {
        const inkDrop = document.createElement('div');
        inkDrop.className = 'ink-drop';
        inkDrop.style.left = `${e.clientX}px`;
        inkDrop.style.top = `${e.clientY}px`;
        
        // Random size variation
        const size = 8 + Math.random() * 4;
        inkDrop.style.width = `${size}px`;
        inkDrop.style.height = `${size}px`;

        document.body.appendChild(inkDrop);

        // Remove the ink drop after animation
        inkDrop.addEventListener('animationend', () => {
          document.body.removeChild(inkDrop);
        });
      }
    };

    document.addEventListener('click', createInkDrop);

    return () => {
      document.removeEventListener('click', createInkDrop);
    };
  }, []);

  return null;
};

export default InkEffect; 
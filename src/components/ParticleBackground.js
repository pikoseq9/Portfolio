import React, { useState, useEffect, useMemo } from 'react';
import Particles, {initParticlesEngine} from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticleBackground() {
    const [init, setInit] = useState(false);
    const [particleColor, setParticleColor] = useState("#000000")
    const [backgroundColor, setBackgroundColor] = useState("#ffffff")

    const updateParticleColor = () => {
        const root = document.documentElement;
        const style = getComputedStyle(root);
        const particleColor = style.getPropertyValue("--accent").trim();
        const backgroundColor = style.getPropertyValue("--background").trim();
        if (particleColor) setParticleColor(particleColor);
        if (backgroundColor) setBackgroundColor(backgroundColor);
    }

   useEffect(() => {
    updateParticleColor();
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
 
  const particlesLoaded = (container) => {
    console.log("Particles Loaded:", container);
  };
 
  const options = useMemo(() => ({
    fullscreen: {
        enable: false,
        zIndex: -1
    },
    background: {
      color: backgroundColor,
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 2 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: particleColor },
      links: {
        color: particleColor,
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: { enable: true, area: 1080 },
        value: 150,
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.5, max: 1.5 },
        random: { enable: true },
      },
    },
    detectRetina: true,
  }), [particleColor, backgroundColor]);
 
  return (
    <div>
     {init && (
        <Particles
          id="tsparticles"
          options={options}
          particlesLoaded={particlesLoaded}
        />
      )}
    </div>
  );
}
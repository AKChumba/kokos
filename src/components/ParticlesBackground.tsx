import { useMemo } from "react";
import { Particles } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: -1 },
      background: {
        color: { value: "transparent" },
      },
      particles: {
        number: {
          value: 70,
          density: { enable: true, area: 800 },
        },
        color: { value: "#FD8804" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: { min: 1, max: 6 } },
        links: {
          enable: true,
          distance: 150,
          color: "#FD8804",
          opacity: 0.4,
          width: 3,
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: "none",
          random: false,
          straight: false,
          outModes: { default: "out" },
          bounce: false,
        },
      },
      interactivity: {
        // "canvas" requires the mouse event to land on the particles
        // canvas itself, but page content sits on top of it (it's a
        // fixed, negative-z-index full-page layer) and intercepts the
        // mousemove first. "window" listens on the whole window instead,
        // so hover/grab works everywhere regardless of DOM stacking.
        detectsOn: "window",
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: false },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 195,
            links: { opacity: 1 },
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return <Particles id="tsparticles" options={options} />;
};

export default ParticlesBackground;

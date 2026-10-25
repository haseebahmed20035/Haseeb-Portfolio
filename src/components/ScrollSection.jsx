import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

// Gives each major section a gentle, continuous passage through the viewport.
export default function ScrollSection({ children, index = 0 }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 96%", "end 4%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  const y = useTransform(progress, [0, 0.18, 0.82, 1], [54, 0, 0, -30]);
  const scale = useTransform(
    progress,
    [0, 0.18, 0.82, 1],
    [0.985, 1, 1, 0.992]
  );
  const opacity = useTransform(
    progress,
    [0, 0.12, 0.9, 1],
    [0.45, 1, 1, 0.72]
  );
  const lineScale = useTransform(progress, [0.04, 0.28], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={prefersReducedMotion ? undefined : { y, scale, opacity }}
      className="relative"
    >
      <motion.div
        aria-hidden="true"
        style={prefersReducedMotion ? undefined : { scaleX: lineScale }}
        className={`absolute left-1/2 top-8 h-px w-40 -translate-x-1/2 origin-center bg-gradient-to-r from-transparent ${
          index % 2 === 0 ? "via-primary/30" : "via-accent/30"
        } to-transparent`}
      />
      {children}
    </motion.div>
  );
}

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

// Scroll-linked ambient light that adds depth without competing with content.
export default function ScrollAtmosphere() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.001,
  });

  const cyanY = useTransform(progress, [0, 1], ["-18vh", "72vh"]);
  const cyanX = useTransform(progress, [0, 1], ["-12vw", "14vw"]);
  const limeY = useTransform(progress, [0, 1], ["75vh", "-14vh"]);
  const limeX = useTransform(progress, [0, 1], ["12vw", "-10vw"]);
  const rotate = useTransform(progress, [0, 1], [0, 55]);
  const scanY = useTransform(progress, [0, 1], ["4vh", "94vh"]);

  if (prefersReducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <motion.div
        style={{ x: cyanX, y: cyanY, rotate }}
        className="absolute left-[4%] top-0 h-[34rem] w-[34rem] rounded-full bg-primary/[0.075] blur-[150px]"
      />
      <motion.div
        style={{ x: limeX, y: limeY, rotate }}
        className="absolute bottom-0 right-[2%] h-[30rem] w-[30rem] rounded-full bg-accent/[0.06] blur-[145px]"
      />
      <motion.div
        style={{ y: scanY }}
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      />
    </div>
  );
}

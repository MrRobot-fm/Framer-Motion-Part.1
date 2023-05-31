import { motion } from 'framer-motion';

const AnimatedSquare = () => {
  return (
    <motion.div
      className="w-[15rem] h-[15rem] bg-white"
      animate={{
        scale: [1, 1, 1.5, 1.5, 1.5, 1.5, 1.5, 1],
        rotate: [0, 0, 0, 360, 360, 360, 360],
        x: [0, 0, 0, 0, 0, -100, 100, 0, 0]
      }}
      transition={{
        duration: 6,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 3
      }}
    />
  );
};

export default AnimatedSquare;

import { AnimatePresence, motion } from 'framer-motion';
import { AnimatedTextProps } from '../types/Props';

const AnimatedText = ({ letter, inputState }: AnimatedTextProps) => {
  return (
    <>
      <AnimatePresence mode="popLayout">
        <motion.p
          className="text-base text-white"
          key={letter}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: 20,
            opacity: 1,
            transition: {
              duration: 0.5
            }
          }}
          exit={{ y: 80, opacity: 0 }}
        >
          {inputState}
        </motion.p>
      </AnimatePresence>
    </>
  );
};

export default AnimatedText;

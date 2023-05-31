import { motion } from 'framer-motion';
import Heading from '../components/Heading';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-5rem)] bg-purple-500">
      <div className="overflow-hidden">
        <motion.div
          animate={{
            y: [300, 0, 0],
            scale: [0.8, 0.8, 1],
            opacity: [0, 0.4, 1]
          }}
          transition={{ ease: 'easeInOut', duration: 1.2 }}
        >
          <Heading title="Framer Motion" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

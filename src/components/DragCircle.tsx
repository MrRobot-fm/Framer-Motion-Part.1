import { motion } from 'framer-motion';

const DragCircle = () => {
  return (
    <motion.div
      className="w-[15rem] h-[15rem] rounded-full bg-white cursor-pointer shadow-2xl"
      drag
      dragSnapToOrigin={true}
      whileHover={{
        scale: 1.5,
        transition: {
          duration: 1
        }
      }}
      whileTap={{
        scale: 0.5,
        transition: {
          duration: 1.5
        }
      }}
    />
  );
};

export default DragCircle;

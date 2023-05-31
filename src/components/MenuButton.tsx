import { MenuButtonProps } from '../types/Props';
import { motion } from 'framer-motion';

const MenuButton = ({ isOpen, setIsOpen }: MenuButtonProps) => {
  return (
    <>
      <motion.button
        className="w-[7rem] py-3 bg-teal-400 rounded-lg text-white font-semibold shadow-md"
        onClick={() => setIsOpen(prev => !prev)}
        whileTap={{ scale: 0.95 }}
        whileHover={{ opacity: 0.85 }}
      >
        {isOpen ? 'Close' : 'Open'}
      </motion.button>
    </>
  );
};

export default MenuButton;

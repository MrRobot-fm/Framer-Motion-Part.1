import { motion } from 'framer-motion';
import { VerticalMenuProps } from '../types/Props';

const list = {
  open: {
    x: 0,
    transition: {
      duration: 1.2,
      staggerChildren: 0.2
    }
  },
  closed: {
    x: '100%',
    transition: {
      duration: 1,
      staggerChildren: 0.2
    }
  }
};

const item = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween'
    }
  },
  closed: { opacity: 0.3, x: 300 }
};

const VerticalMenu = ({ isOpen }: VerticalMenuProps) => {
  return (
    <motion.ul
      className="h-full w-[30rem] flex flex-col justify-evenly pl-10 font-medium text-[1.6rem] text-white bg-blue-500 rounded-tl-xl"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={list}
    >
      <motion.li variants={item}>Home</motion.li>
      <motion.li variants={item}>About</motion.li>
      <motion.li variants={item}>Works</motion.li>
      <motion.li variants={item}>Contact us</motion.li>
    </motion.ul>
  );
};

export default VerticalMenu;

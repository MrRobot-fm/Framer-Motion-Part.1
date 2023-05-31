import { motion } from 'framer-motion';
import { VerticalMenuProps } from '../types/Props';
import { item, list } from '../animations/variants';

const VerticalMenu = ({ isOpen }: VerticalMenuProps) => {
  return (
    <motion.ul
      className="h-full w-[30rem] flex flex-col justify-evenly pl-10 font-medium text-[1.6rem] text-white bg-blue-500 rounded-tl-xl shadow-lg"
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

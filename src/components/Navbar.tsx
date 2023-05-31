import { motion } from 'framer-motion';
import Link from './Link';
import { linkData } from '../data/linkData';

const Navbar = () => {
  return (
    <div className="h-[5rem] bg-purple-500 text-white text-lg font-semibold">
      <motion.div
        className="flex justify-center w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'linear' }}
      >
        <ul className="flex h-full w-[60%] justify-around items-center">
          {linkData.map(link => (
            <li key={link.id}>
              <Link
                path={link.path}
                active={link.isActive}
                name={link.linkName}
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;

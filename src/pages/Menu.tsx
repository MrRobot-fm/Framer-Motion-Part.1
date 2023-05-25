import { useState } from 'react';
import MenuButton from '../components/MenuButton';
import VerticalMenu from '../components/VerticalMenu';

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex justify-end items-center w-full h-[calc(100vh-5rem)] bg-purple-500 overflow-hidden gap-[10rem]">
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <VerticalMenu isOpen={isOpen} />
    </div>
  );
};

export default Menu;

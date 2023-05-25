import { Dispatch, SetStateAction } from 'react';

export interface ActiveProps {
  isActive: boolean;
}

export interface MenuButtonProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface LinkProps {
  path: string;
  active: ({ isActive }: ActiveProps) => string;
  name: string;
}

export interface VerticalMenuProps {
  isOpen: boolean;
}

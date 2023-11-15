import { Dispatch, SetStateAction } from 'react';

export interface HeadingProps {
  title: string;
}

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

export interface AnimatedInputProps {
  setInput: Dispatch<SetStateAction<string[] | null>>;
}

export interface AnimatedTextProps {
  letter: string | number;
  inputState: string[] | null;
}

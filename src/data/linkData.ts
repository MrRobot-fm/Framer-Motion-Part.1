import { ActiveProps } from '../types/Props';

export const active = ({ isActive }: ActiveProps) =>
  isActive ? 'text-yellow-400 ' : '';

export const linkData = [
  { id: 1, path: '/', linkName: 'Home Page', isActive: active },
  {
    id: 2,
    path: '/animated-square',
    linkName: 'Animated Square',
    isActive: active
  },
  {
    id: 3,
    path: '/vertical-menu',
    linkName: 'Vertical Menù',
    isActive: active
  },
  {
    id: 4,
    path: '/gesture',
    linkName: 'Gestures',
    isActive: active
  },
  {
    id: 5,
    path: '/animated-input',
    linkName: 'Animated Input',
    isActive: active
  }
];

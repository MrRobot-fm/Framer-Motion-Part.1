import { ChangeEvent } from 'react';
import { AnimatedInputProps } from '../types/Props';

const AnimatedInput = ({ setInput }: AnimatedInputProps) => {
  // Handle Input Change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput([e.target.value]);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Type me..."
        className="w-[20rem] h-[3rem] rounded-xl px-6 border border-teal-600 outline-none shadow-lg"
        onChange={handleChange}
      />
    </>
  );
};

export default AnimatedInput;

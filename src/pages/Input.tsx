import AnimatedInput from '../components/AnimatedInput';
import AnimatedText from '../components/AnimatedText';
import { useState } from 'react';

const Input = () => {
  const [inputState, setInputState] = useState<string[] | null>(null);

  return (
    <div className="h-[calc(100vh-5rem)] bg-purple-500 flex justify-center items-center">
      <div className="flex flex-col justify-center">
        <div>
          <AnimatedInput setInput={setInputState} />
        </div>
        <div className="ml-5 h-[10rem] w-[20rem]">
          {inputState?.map((letter, i) => (
            <AnimatedText key={i} letter={letter} inputState={inputState} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Input;

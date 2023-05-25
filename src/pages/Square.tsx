import AnimatedSquare from '../components/AnimatedSquare';

const Square = () => {
  return (
    <div className="flex justify-center items-center w-full h-[calc(100vh-5rem)] bg-purple-500">
      <AnimatedSquare />
    </div>
  );
};

export default Square;

import { HeadingProps } from '../types/Props';

const Heading = ({ title }: HeadingProps) => {
  return (
    <>
      <h1 className="text-[5rem] font-bold text-white tracking-wide drop-shadow-lg">
        {title}
      </h1>
    </>
  );
};

export default Heading;

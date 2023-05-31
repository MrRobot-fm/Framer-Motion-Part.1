import DragCircle from '../components/DragCircle';

const Gesture = () => {
  return (
    <div className="h-[calc(100vh-5rem)] flex justify-center items-center bg-purple-500 overflow-hidden">
      <DragCircle />
    </div>
  );
};

export default Gesture;

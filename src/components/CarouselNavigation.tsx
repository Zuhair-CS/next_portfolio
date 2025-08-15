interface CarouselNavigationProps {
  currentProject: number;
  totalProjects: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}

export default function CarouselNavigation({
  currentProject,
  totalProjects,
  onPrev,
  onNext,
  onDotClick,
}: CarouselNavigationProps) {
  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button 
        onClick={onPrev}
        className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 border border-gray-700 hover:border-blue-500 cursor-pointer"
      >
        ← Prev
      </button>
      {Array.from({ length: totalProjects }).map((_, index) => (
        <button
          key={index}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentProject 
              ? "bg-blue-500 scale-125" 
              : "bg-gray-600 hover:bg-gray-500"
          }`}
          onClick={() => onDotClick(index)}
        />
      ))}
      <button 
        onClick={onNext}
        className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 border border-gray-700 hover:border-blue-500 cursor-pointer"
      >
        Next →
      </button>
    </div>
  );
}
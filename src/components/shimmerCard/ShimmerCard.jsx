const ShimmerCard = () => {
  return (
    <div className="rounded-xl shadow-lg w-[24%] overflow-hidden bg-gray-100 animate-pulse">
      <div className="w-full h-60 bg-gray-300"></div>
      <div className="p-3 space-y-2">
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        <div className="flex items-center space-x-2">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;

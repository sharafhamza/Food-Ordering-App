const AccordionItem = ({ name, price, description, rating, image }) => {
  return (
    <div className="border-gray-200  px-5 cursor-pointer">
      <div className="rounded-lg shadow-sm flex items-start justify-between bg-white">
        <div>
          <div className="w-[20px] h-[20px] rounded-md border-2 translate-y-[5px] border-green-700 flex items-center justify-center bg-white cursor-pointer mb-4">
            <div className="w-[9px] h-[9px] bg-green-700 rounded-full"></div>
          </div>
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <p className="text-base text-black font-semibold mt-1">₹{price}</p>
          <div className="flex items-center text-green-600 text-sm mt-1">
            <span className="font-bold">★ {rating}</span>
            <span className="ml-1 text-gray-500">(4)</span>
          </div>
          <p className="text-gray-600 mt-2 text-lg font-medium">
            {description}
          </p>
        </div>
        <div>
          <img src="" />
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;

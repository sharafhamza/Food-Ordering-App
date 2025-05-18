const AccordionItem = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      {/* <div className="px-5 cursor-pointer border-b border-gray-300 pb-6 pt-3">
        <div className="rounded-lg  flex items-start justify-between  bg-white gap-x-6">
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
            <p className="text-gray-600 mt-2 text-base font-medium w-[600px]">
              "Crunchy Soft Paneer patty dunked in hot and sweet Korean glaze
              with Korean sesame mayo in premium Brioche buns for authentic
              Korean flavours. Qty: 228 Gms| Kcal: 695.26 | Carbs 67.94 Gms|
              Sugar: 16.99 Gms| Fat: 38.07 Gms| Saturated fat: 15.82 Gms|
              Protein: 20.20 Gms| Sodium: 1744.70 Mg. Contains: Gluten, Soybean
              , Milk "
            </p>
          </div>
          <div className="w-[155px] h-[160px] relative">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/2/d960f43e-3328-494f-909e-1d38c67f364d_7eda4a11-d26d-4375-86a3-dc94bb55e2d6.jpg"
              className="w-full h-full rounded-2xl"
            />
            <div className=" absolute bottom-0 right-0 -translate-x-[14px] translate-y-4">
              <button className="text-green-500 font-bold text-lg w-[120px] py-2 bg-white rounded-md border ">
                ADD
              </button>
            </div>
            <p className="mt-5 text-center font-semibold text-gray-500 text-sm">
              Customisable
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AccordionItem;

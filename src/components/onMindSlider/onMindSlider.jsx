import React from "react";

const OnMindSlider = ({ resData }) => {
  console.log(resData);

  // Safely extract and map over all imageIds
  const imageIds =
    resData?.[0]?.card?.card?.gridElements?.infoWithStyle?.info || [];

  return (
    <div className="max-w-[970px] mx-auto">
      <h1 className="font-bold text-2xl">What's on your mind?</h1>
      <div>
        {imageIds.map((item, index) => {
          const imageId = item?.imageId;
          return imageId ? (
            <img
              key={index}
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
                imageId
              }
              alt={`On mind ${index}`}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default OnMindSlider;

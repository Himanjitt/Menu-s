import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="res-card m-4 p-4 w-[200px] bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:bg-gray-300">
      <img
        className="res-log w-full h-32 object-cover rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <div px-2 py-2>
        <h3 className="font-bold py-4 text-lg mb-2 ">{name}</h3>
        <h4 className="text-gray-700 text-base leading-tight break-words">
          {cuisines.join(",")}
        </h4>
        <h4 className="text-gray-700 text-sm mt-1">{avgRating} stars</h4>
        <h4 className="text-gray-700 text-sm mt-1">{costForTwo}</h4>
        <h4 className="text-gray-700 text-sm mt-1">{sla?.slaString} </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;

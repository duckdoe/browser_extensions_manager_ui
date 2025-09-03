import Remove from "./Remove.jsx";
import Switch from "./Switch.jsx";

function Card({ data }) {
  return (
    <div className="bg-neutral-0 mb-4 p-4 rounded-2xl">
      <div className="flex gap-6">
        <img src={data.logo} alt={data.name} />
        <div>
          <h4 className="text-neutral-800 font-bold text-xl">{data.name}</h4>
          <p className="text-neutral-500 mt-1">{data.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <Remove />
        <Switch isActive={data.isActive} />
      </div>
    </div>
  );
}

export default Card;

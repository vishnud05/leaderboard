import { BadgeCheck, Dna, SparkleIcon } from "lucide-react";
import { DataItem } from "../types";

const Card = ({ traderData }: { traderData: DataItem }) => {
  return (
    <div className="relative flex flex-col border-2 bg-white border-gray-50 h-[25rem] font-poppins text-slate-800 w-72 rounded-lg shadow-md hover:shadow-lg transition-all duration-500">
      <div className="relative h-1/3 flex items-center justify-center opacity-50">
        <div className=" h-full w-full bg-gradient-to-r from-gray-50 via-green-400  to-yellow-400 blur-md"></div>
        <div className=" h-full w-full bg-gradient-to-r from-yellow-400 via-orange-400  to-transparent blur-md"></div>
        <h1 className="text-6xl flex pr-4 italic absolute right-4 font-semibold">
          {traderData.rank}{" "}
          <span className="text-lg">
            {traderData.rank === 1 ? "st" : traderData.rank === 2 ? "nd" : "rd"}
          </span>
        </h1>
      </div>
      <div className="absolute top-[5.5rem] left-[1rem] h-16 w-20">
        <div className="h-full w-full bg-slate-600 rounded-full border-2 border-gray-50"></div>
      </div>
      <div className="absolute top-[9rem] right-[1.5rem] h-8  flex items-center gap-2">
        <div className="bg-slate-50 rounded-md p-1">
          <Dna size={18} />
        </div>
        <div className="bg-slate-900 rounded-md flex items-center  px-1 ">
          <SparkleIcon size={22} fill="#FFD700" />
          <h1 className="text-gray-50 text-sm">{traderData.xScore}</h1>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col items-start mt-24 px-8 gap-y-5 py-4">
          <div className="w-full">
            <h1 className="flex items-center gap-2 text-xl font-semibold text-left ">
              {traderData.name}
              <span>
                <BadgeCheck size={28} color="white" fill="blue" />
              </span>
            </h1>
            <p className="text-left">{traderData.tradingStyle}</p>
          </div>

          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col">
              <h2 className="font-semibold">{traderData.alerts}</h2>
              <p className="text-sm text-gray-500 ">Alerts</p>
            </div>

            <div className="w-px bg-gray-300 h-8"></div>

            <div className="flex flex-col">
              <h2 className="font-semibold">{traderData.trades}</h2>
              <p className="text-sm text-gray-500 ">Trades</p>
            </div>
            <div className="w-px bg-gray-300 h-8"></div>
            <div className="flex flex-col">
              <h2 className="font-semibold">{traderData.avgGain}</h2>
              <p className="text-sm text-gray-500 ">Avg Gain</p>
            </div>
          </div>

          <button className="w-full rounded-md border-2 border-gray-500 px-4 py-2">
            <h1 className="font-semibold text-gray-800">Profile</h1>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;

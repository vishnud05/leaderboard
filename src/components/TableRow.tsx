import { Dna, NotebookIcon, SparkleIcon, UserPlus2Icon } from "lucide-react";
import { DataItem } from "../types";

const getBorderColor = (rank: number) => {
  switch (rank) {
    case 1:
      return "border-[#FFD700]";
    case 2:
      return "border-slate-500";
    case 3:
      return "border-[#CD7F32]";
    default:
      return "border-gray-300";
  }
};

const TableRow = ({ traderData }: { traderData: DataItem }) => {
  return (
    <div
      className={`w-full flex justify-between font-poppins items-center h-20 rounded-full border-[3px] ${getBorderColor(
        traderData.rank
      )} px-8`}
    >
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-3xl italic font-semibold">{traderData.rank}</h1>
        </div>
        <div className="h-10 w-10 rounded-full bg-slate-900"></div>
        <div>
          <h1 className="text-md font-semibold text-left">{traderData.name}</h1>
          <p className="text-sm text-gray-600 text-left">
            {traderData.tradingStyle}
          </p>
        </div>
        <div className="flex items-center gap-1 font-semibold bg-gray-300 rounded-md px-2 py-1 text-xs">
          <Dna size={12} />
          {traderData.trophies}
        </div>
        <div></div>
      </div>

      <div className=" gap-4 font-semibold items-center justify-between w-[40%] hidden lg:flex">
        <div className="flex flex-1 justify-between  pr-2">
          <h1>{traderData.streaks}</h1>
          <h1>
            {traderData.alerts}/{traderData.avgGain}
          </h1>
        </div>

        <div className="flex flex-1 justify-between  pr-2">
          <h1>
            {traderData.trades}/{traderData.avgGain}
          </h1>
          <h1>{traderData.avgGain}</h1>
        </div>
        <div className="flex flex-1 justify-between items-center">
          <div className="flex bg-slate-900 rounded-lg py-1 px-2 items-center">
            <SparkleIcon size={22} fill="#FFD700" />
            <p className="text-gray-50 text-sm font-normal">
              {traderData.xScore}
            </p>
          </div>
          <div className="p-2 rounded-full shadow-md bg-gray-200">
            <NotebookIcon size={22} />
          </div>
          <div className="p-2 rounded-full shadow-md bg-gray-200">
            <UserPlus2Icon size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableRow;

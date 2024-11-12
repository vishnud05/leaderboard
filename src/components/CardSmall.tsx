import { Zap } from "lucide-react";
import { SummaryItem } from "../types";

const CardSmall = ({ data }: { data: SummaryItem }) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl shadow-md px-3 py-3 font-poppins hover:shadow-lg transition-all duration-500">
      <div className="relative">
        <div className="absolute top-[-0.2rem] right-[-0.2rem] bg-green-500 rounded-full p-1">
          <Zap size={12} color="white" />
        </div>
        <div className="w-14 h-14 rounded-full bg-slate-900"></div>
      </div>
      <div className="flex flex-col justify-center items-start">
        <p className="text-xs text-slate-400">{data.title}</p>
        <h1 className="text-lg font-semibold">{data.name}</h1>
      </div>
      <div className="text-4xl font-bold italic ">{data.value}</div>
    </div>
  );
};
export default CardSmall;

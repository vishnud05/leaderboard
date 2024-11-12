const TableHeader = () => {
  return (
    <div
      className={`w-full text-gray-500 flex justify-between font-poppins items-center h-8 rounded-full px-8`}
    >
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-3xl italic font-semibold"></h1>
        </div>

        <div>
          <h1 className="  text-left">Name</h1>
          <p className="text-sm text-gray-600 text-left"></p>
        </div>

        <div></div>
      </div>

      <div className=" gap-4  items-center justify-between w-[40%] hidden lg:flex">
        <div className="flex flex-1 justify-between  pr-2">
          <h1>Streaks</h1>
          <h1>Alerts</h1>
        </div>
        <div className="flex flex-1 justify-between  pr-2">
          <h1>Trades</h1>
          <h1>Avg Gain</h1>
        </div>
        <div className="flex flex-1  justify-between  pr-2">
          <h1>Xscore</h1>
        </div>
      </div>
    </div>
  );
};
export default TableHeader;

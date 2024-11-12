import { useEffect, useState } from "react";
import { DataItem, SummaryItem } from "../types";
import CardSmall from "./CardSmall";

const getMaxTips = (data: DataItem[]) => {
  return data.reduce((acc, item) => {
    return item.trades > acc.trades ? item : acc;
  }, data[0]);
};

const getMaxAlerts = (data: DataItem[]) => {
  return data.reduce((acc, item) => {
    return item.alerts > acc.alerts ? item : acc;
  }, data[0]);
};

const getLongestStreaks = (data: DataItem[]) => {
  return data.reduce((acc, item) => {
    return item.streaks > acc.streaks ? item : acc;
  }, data[0]);
};

const getMaxXScore = (data: DataItem[]) => {
  return data.reduce((acc, item) => {
    return item.xScore > acc.xScore ? item : acc;
  }, data[0]);
};

const SummaryView = ({ data }: { data: DataItem[] }) => {
  const [summaryData, setSummaryData] = useState<SummaryItem[]>([]);
  console.log(data);

  if (data.length === 0) return null;
  useEffect(() => {
    setSummaryData([
      {
        title: "Max Tips",
        name: getMaxTips(data).name,
        value: getMaxTips(data).trades,
      },
      {
        title: "Max Alerts",
        name: getMaxAlerts(data).name,
        value: getMaxAlerts(data).alerts,
      },
      {
        title: "Max Streaks",
        name: getLongestStreaks(data).name,
        value: getLongestStreaks(data).streaks,
      },
      {
        title: "Max XScore",
        name: getMaxXScore(data).name,
        value: getMaxXScore(data).xScore,
      },
    ]);
  }, [data]);

  return (
    <>
      {summaryData?.map((item) => (
        <CardSmall key={item.title} data={item} />
      ))}
    </>
  );
};
export default SummaryView;

import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import TableRow from "./components/TableRow";
import { Loader2Icon } from "lucide-react";
import { DataItem } from "./types";
import SummaryView from "./components/SummaryView";
import TableHeader from "./components/TableHeader";

function App() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const url = import.meta.env.VITE_API_URL as string;
      const response = await fetch(`${url}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sortedData = useMemo(
    () => [...data].sort((a, b) => a.rank - b.rank),
    [data]
  );

  if (loading) {
    return (
      <main className="h-[calc(100vh-4rem)]  flex items-center justify-center">
        <Loader2Icon className="animate-spin" size={80} />
      </main>
    );
  }

  if (error) {
    return (
      <main className="h-[calc(100vh-4rem)]  flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl text-slate-900 font-bold font-poppins">
          :: ERROR ::
        </h1>
        <p>
          {error instanceof Error
            ? error.message
            : "An error occurred. Please try again"}
        </p>
      </main>
    );
  }

  return (
    <main className="relative flex flex-col items-center gap-10 py-16">
      <section className="flex flex-col md:flex-row justify-center gap-10 z-10">
        {sortedData.slice(1, 4).map((item) => (
          <Card key={item.rank} traderData={item} />
        ))}
      </section>
      <section className="hidden md:grid grid-cols-2 lg:flex gap-8 justify-between">
        <SummaryView data={sortedData.slice(1)} />
      </section>
      <section className="flex flex-col gap-2 w-full">
        <TableHeader />
        {sortedData.slice(1).map((item) => (
          <TableRow key={item.rank} traderData={item} />
        ))}
      </section>
      <h1 className="absolute hidden md:block text-9xl font-bold text-center left-1/2 top-0 -translate-y-4 -translate-x-1/2  -z-10 text-gray-300 ">
        Leaderboard
      </h1>
    </main>
  );
}

export default App;

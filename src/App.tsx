import { useEffect, useMemo, useState } from "react";
import Result from "./components/Result";
import Summary from "./components/Summary";
import { Data } from "./types";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/data.json");
        const jsonData: Data[] = await response.json();
        const dataWithIds = jsonData.map((data) => ({
          ...data,
          id: uuidv4(),
        }));
        setData(dataWithIds);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const prom = useMemo(
    () =>
      data.length > 0
        ? Math.round(
            data.reduce((total, item) => total + item.score, 0) / data.length
          )
        : 0,

    [data]
  );

  console.log(prom);
  return (
  <div className="max-w-4xl w-full h-[100vh] md:h-auto bg-slate-200 flex flex-col md:flex-row justify-between items-center shadow-lg overflow-hidden md:rounded-3xl">
      <Result prom={prom} />
      <Summary data={data} />
    </div>
  );
}

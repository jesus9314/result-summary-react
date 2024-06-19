import { Data } from "../types";
import SummaryComponent from "./SummaryComponent";

type SummaryProps = {
  data: Data[];
};
export default function Summary({ data }: SummaryProps) {
  return (
    <div className="h-full w-full p-10 flex flex-col gap-6 rounded-r-3xl">
      <h2 className="font-bold text-2xl">Summary</h2>
      <div className="w-full flex flex-col gap-4">
        {data.map((d) => (
          <SummaryComponent data={d} key={d.id} />
        ))}
      </div>
      <button className="bg-neutral-dark-gray-blue hover:bg-gradients-light-royal-blue transition text-white rounded-full text-xl capitalize py-4 shadow">
        continue
      </button>
    </div>
  );
}

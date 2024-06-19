import { Data } from "../types";

type SummaryComponentProps = {
  data: Data;
};
export default function SummaryComponent({ data }: SummaryComponentProps) {
  const getBgColor = (color: string) => {
    switch (color) {
      case "primary-light-red":
        return "bg-primary-light-red";
      case "primary-orangey-yellow":
        return "bg-primary-orangey-yellow";
      case "primary-green-teal":
        return "bg-primary-green-teal";
      case "primary-cobalt-blue":
        return "bg-primary-cobalt-blue";
    }
  };

  const getTextColor = (color: string) => {
    switch (color) {
      case "primary-light-red":
        return "text-primary-light-red";
      case "primary-orangey-yellow":
        return "text-primary-orangey-yellow";
      case "primary-green-teal":
        return "text-primary-green-teal";
      case "primary-cobalt-blue":
        return "text-primary-cobalt-blue";
    }
  };

  const bgClassColor = getBgColor(data.color);
  const textClassColor = getTextColor(data.color);

  return (
    <section
      className={`flex justify-between w-full capitalize ${bgClassColor} bg-opacity-10 ${textClassColor} p-4 rounded-lg`}
    >
      <span className="flex gap-2">
        <img src={data.icon} alt="" />
        {data.category}
      </span>
      <p className="text-neutral-dark-gray-blue">
        <span className="font-black">{data.score}</span>/100
      </p>
    </section>
  );
}

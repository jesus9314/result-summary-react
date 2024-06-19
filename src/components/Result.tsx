type ResultProps = {
  prom: number;
};

export default function Result({ prom }: ResultProps) {
  return (
    <div className="bg-gradient-to-b from-gradients-light-slate-blue to-gradients-light-royal-blue w-full rounded-b-3xl md:rounded-t-3xl flex flex-col items-center gap-6 py-8 md:py-20">
      <h2 className="text-neutral-light-lavender text-xl">Your Result</h2>
      <div className="flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-gradients-violet-blue to-gradients-persian-blue w-36 h-36 rounded-full">
        <span className="text-6xl font-black text-white">{prom}</span>
        <span className="text-neutral-light-lavender">of 100</span>
      </div>
      <div className="text-white flex flex-col items-center gap-4 px-44 md:px-28">
        <h2>Great</h2>
        <p className="text-neutral-light-lavender text-center">
          Your scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}

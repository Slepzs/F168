import { memo } from "react";

type Props = {
  times: string;
};

const Times: React.FC<Props> = ({ times }) => {
  // ToDo:: Calculate values

  return (
    <div className="absolute w-full h-full grid justify-center items-center">
      <div className="grid text-center gap-4">
        <span className="text-sm">Elapsed Time (2%)</span>
        <span className="text-white text-4xl">{times}</span>
        <span className="text-sm uppercase text-white">Anabolic</span>
      </div>
    </div>
  );
};

export default memo(Times);

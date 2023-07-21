import { memo } from "react";

type Props = {};

const MobileBuffer: React.FC<Props> = ({}) => {
  return <div className="w-full h-[15px] bg-primary py-4"></div>;
};

export default memo(MobileBuffer);

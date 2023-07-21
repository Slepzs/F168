import { memo } from "react";

type Props = {};

const MobileBuffer: React.FC<Props> = ({}) => {
  return <div className="w-full h-[10px] bg-primary"></div>;
};

export default memo(MobileBuffer);

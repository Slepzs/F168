import { memo } from "react";

type Props = {
  children: React.ReactNode;
  classes?: string;
};

const Card: React.FC<Props> = ({
  children,
  classes = "rounded-md drop-shadow-black",
}) => {
  return (
    <div className={`bg-primary rounded-md drop-shadow-black ${classes}`}>
      {children}
    </div>
  );
};

export default memo(Card);

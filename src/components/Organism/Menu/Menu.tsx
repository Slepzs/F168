import { memo } from "react";
import MobileBuffer from "~components/Atoms/MobileBuffer";

type Props = {};

const Menu: React.FC<Props> = ({}) => {
  return (
    <div className="absolute max-w-3xl">
      <div className="fixed bottom-0 left-0   w-full  mx-auto">
        <div className="grid grid-cols-2 max-w-3xl bg-primary mx-auto">
          <div className=" grid justify-center py-4">
            <div className="grid justify-center">
              <span className="bg-orange-400 w-2 h-2 rounded-full mx-auto my-2"></span>
              <span className=" text-white-faded px-4 uppercase text-small">
                Today
              </span>
            </div>
          </div>
          <div className="grid justify-center py-4">
            <div className="grid justify-center">
              <span className="bg-orange-400 w-2 h-2 rounded-full mx-auto my-2"></span>
              <span className=" text-white-faded px-4 uppercase text-small">
                me
              </span>
            </div>
          </div>
        </div>
        <MobileBuffer />
      </div>
    </div>
  );
};

export default memo(Menu);

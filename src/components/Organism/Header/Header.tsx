import { memo } from "react";
import Settings from "~components/Atoms/svg/Settings";

type Props = {};

const Header: React.FC<Props> = ({}) => {
  return (
    <header className="bg-black pb-4">
      <div className="grid grid-cols-3 items-center max-w-3xl px-5 py-4">
        <div>
          <span className="uppercase">F168</span>
        </div>
        <div>
          <div className="grid justify-center">Today</div>
        </div>
        <div className="grid justify-end">
          <div className="bg-primary p-2 rounded-full">
            <div className="text-white-faded  w-4 h-4">
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);

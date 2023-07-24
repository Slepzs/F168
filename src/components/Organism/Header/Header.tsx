import { memo } from "react";
import Settings from "~components/Atoms/svg/Settings";

type Props = {};

const Header: React.FC<Props> = ({}) => {
  return (
    <header className="bg-black pb-4">
      <div className="grid grid-cols-3 items-center max-w-3xl px-5 py-4">
        <div>
          <div className="relative w-[2.6rem] h-[1.6rem]">
            <span className="text-2xl text-white font-logo text-center absolute top-0 left-0">
              F168
            </span>
          </div>
        </div>
        <div>
          <div className="grid justify-center text-sm uppercase text-white">
            Today
          </div>
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

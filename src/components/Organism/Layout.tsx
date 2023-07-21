import { memo } from "react";
import Menu from "./Menu/Menu";
import Header from "./Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-black w-screen h-screen">
      <div className="max-w-3xl h-full w-full mx-auto">
        <div className="h-full">
          <Header />

          <div className="px-5">{children}</div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default memo(Layout);

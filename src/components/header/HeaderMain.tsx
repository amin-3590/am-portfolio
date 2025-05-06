import { useState } from "react";
import HeaderText from "./HeaderText";
import HeaderTab from "./HeaderTab";
import HeaderButton from "./HeaderButton";
import { GiHamburgerMenu } from "react-icons/gi";

const HeaderMain = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  return (
    <header className="max-w-[1300px] mx-auto mt-2 relative overflow-hidden">
      <nav className="max-w-[1200px] mx-auto fixed z-20 w-full h-[6rem] px-4 left-[50%] -translate-x-[50%] flex items-center gap-4">
        <div className="flex items-center justify-between p-6 w-full h-full border rounded-full border-orange-400 bg-stone-900">
          <HeaderText />
          <div className={`${isMenu ? "block" : "hidden"} lg:block`}>
            <HeaderTab />
          </div>
          <HeaderButton />
        </div>
        <div className="border border-orange-400 rounded-full p-6 bg-stone-900 block lg:hidden">
          <button
            className="text-2xl cursor-pointer border border-orange-400 rounded-full p-3"
            onClick={() => setIsMenu(!isMenu)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderMain;

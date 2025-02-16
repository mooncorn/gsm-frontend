import { TbCubeSpark } from "react-icons/tb";
import UserMenu from "./UserMenu";

const Header = ({ className }: { className?: string }) => {
  return (
    <div className={`bg-gray-800 border-b border-gray-700 ${className}`}>
      <nav className="p-3 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <TbCubeSpark className="text-2xl" />
          <span className="text-xl font-bold">GSHUB</span>
        </div>
        <UserMenu />
      </nav>
    </div>
  );
};

export default Header;

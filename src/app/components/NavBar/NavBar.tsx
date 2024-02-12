import Dropdown from "./Dropdown";

const NavBar = () => {
  return (
    <div className="px-6 sm:px-12 py-4 flex items-center justify-between shadow bg-white">
      <div className="flex-1 flex justify-center md:justify-start">
        <div className="cursor-pointer">Logo</div>
      </div>
      <div className="hidden md:flex items-center justify-center gap-8 flex-grow">
        <div className="cursor-pointer flex gap-1 items-center justify-center">
          <div>Dashboard</div>
        </div>
        <div className="cursor-pointer flex gap-1 items-center justify-center">
          <div>Classes</div>
        </div>
      </div>
      <div className="flex justify-end items-center md:flex-1">
        <Dropdown />
      </div>
    </div>
  );
};

export default NavBar;

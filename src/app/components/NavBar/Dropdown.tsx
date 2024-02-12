import React from "react";

const Dropdown = () => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="flex items-center gap-2 hover:bg-slate-200 p-2 rounded-md cursor-pointer w-36 justify-between"
      >
        <div className="flex flex-col">
          <div className="text-xs font-bold">John Doe</div>
          <div className="text-xs text-opacity-60">Admin</div>
        </div>
        <div className="w-10 rounded">
          <img
            className="rounded-full w-10 h-10 object-cover"
            alt="Tailwind CSS Navbar component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
      >
        <li>
          <a className="justify-between">Profile</a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;

import Sidebar from "@/components/Sidebar";
import { FaBarsStaggered } from "react-icons/fa6";

export default function layout({ children }) {
  return (
    <div className="drawer md:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="drawer-button md:hidden fixed top-8 right-8"
        >
          <FaBarsStaggered className="w-8 h-8" />
        </label>
        <div className="bg-base-200 px-8 py-12 min-h-screen">{children}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
}

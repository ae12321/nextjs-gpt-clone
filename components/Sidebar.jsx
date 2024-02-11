import Navbar from "./Navbar";
import Profile from "./Profile";
import SidebarHeader from "./SidebarHeader";

export default function Sidebar() {
  return (
    <div className="w-80 h-full bg-base-300 py-8 px-4 grid grid-rows-[auto,1fr,auto]">
      <SidebarHeader />
      <Navbar />
      <Profile />
    </div>
  );
}

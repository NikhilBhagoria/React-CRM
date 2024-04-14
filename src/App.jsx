import { useState } from 'react';
import './App.css'
import SideBar, { SidebarItem } from './components/SideBar/SideBar';
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex">
        <SideBar>
          <SidebarItem icon={<Home size={20} />} text="Home" />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active alert />
          <SidebarItem icon={<StickyNote size={20} />} text="Projects" />
          <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
          <SidebarItem icon={<Layers size={20} />} text="Tasks" />
          <SidebarItem icon={<Flag size={20} />} text="Reporting" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </SideBar>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import '../../App.css'
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from 'lucide-react'
import { Outlet } from 'react-router-dom'
import SideBar, { SidebarItem } from './SideBar'

function SideBarParent({ children }) {
  return (
    <>
      <div className="flex">
        <SideBar>
          <SidebarItem
            icon={<Home size={20} />}
            text="Home"
            to="/home"
            dropdownItems={[
              { to: '/submenu1', text: 'Submenu 1' },
              { to: '/submenu2', text: 'Submenu 2' },
            ]}
          />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" to="/dashboard" />
          <SidebarItem icon={<StickyNote size={20} />} text="Projects" to="/projects" />
          <SidebarItem icon={<Calendar size={20} />} text="Calendar" to="/calendar" />
          <SidebarItem icon={<Layers size={20} />} text="Tasks" to="/tasks" />
          <SidebarItem icon={<Flag size={20} />} text="Reporting" to="/reporting" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" to="/settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" to="/help" />
        </SideBar>
        {children}
      </div>
    </>
  )
}

export default SideBarParent

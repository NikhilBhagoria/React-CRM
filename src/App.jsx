import { useState } from 'react'
import './App.css'
import SideBar, { SidebarItem } from './components/SideBar/SideBar'
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

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
          <SidebarItem icon={<StickyNote size={20} />} text="Projects" to="/project" />
          <SidebarItem icon={<Calendar size={20} />} text="Calendar" to="/calendar" />
          <SidebarItem icon={<Layers size={20} />} text="Tasks" to="/tasks" />
          <SidebarItem icon={<Flag size={20} />} text="Reporting" to="/reporting" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </SideBar>
      </div>
    </>
  )
}

export default App

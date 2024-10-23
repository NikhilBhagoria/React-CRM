import { useState } from 'react'
import './App.css'
import SideBar, { SidebarItem } from './components/SideBar/SideBar'
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from 'lucide-react'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Outlet />
    </>
  )
}
export default App

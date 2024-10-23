import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react'
import { createContext, useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'

const SidebarContext = createContext()
export default function SideBar({ children }) {
  const [expanded, setExpanded] = useState(true)
  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <img src={''} className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`} />
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>

          <div className="border-t flex p-3">
            <img src={''} className="w-10 h-10 rounded-md" />
            <div
              className={`flex justify-between items-center transition-all ${
                expanded ? 'w-24 ml-3' : 'w-0 overflow-hidden'
              } `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">constGenius</h4>
                <span className="text-xs text-gray-600">constgenius@gmail.com</span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}

export function SidebarItem({ icon, text, to, alert, dropdownItems }) {
  const { expanded } = useContext(SidebarContext)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen)
  }
  // Use NavLink instead of li for routing
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? ' relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
            : `relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group`
        }
      >
        {icon}
        <span className={`transition-all ${expanded ? 'ml-3' : 'w-1 overflow-hidden'}`}>{text}</span>

        {!expanded && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
          >
            {text}
          </div>
        )}
      </NavLink>
      {/* Dropdown */}
      {dropdownItems && (
        <button onClick={handleDropdownToggle} className="absolute right-0 top-0 p-2 focus:outline-none">
          <MoreVertical size={20} />
        </button>
      )}
      {dropdownOpen && (
        <div className="absolute left-full top-0 mt-10 bg-white border shadow-lg rounded-md">
          {dropdownItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
              activeClassName="bg-indigo-200"
            >
              {item.text}
            </NavLink>
          ))}
        </div>
      )}
    </>
  )
}

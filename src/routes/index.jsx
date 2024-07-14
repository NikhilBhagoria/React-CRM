import SideBarWrapper from '../components/SideBar/SideBarWrapper'
import Dashboard from '../pages/Dashboard'
import Projects from '../pages/Projects'

const Routes = [
  {
    path: '/dashboard',
    element: (
      <>
        <SideBarWrapper>
          <Dashboard />
        </SideBarWrapper>
      </>
    ),
  },
  {
    path: '/',
    element: (
      <>
        <SideBarWrapper>
          <Dashboard />
        </SideBarWrapper>
      </>
    ),
  },
  ,
  {
    path: '/projects',
    element: (
      <>
        <SideBarWrapper>
          <Projects />
        </SideBarWrapper>
      </>
    ),
  },
]

export default Routes

import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import { BiObjectsVerticalTop } from 'react-icons/bi'
import { MdMenu } from 'react-icons/md'
import { TbArrowsLeftRight } from 'react-icons/tb'
import HorizontalView from './HorizontalView'
import Kanban from './Kanban'

import { v4 as uuidv4 } from 'uuid'

const tasksData = [
  {
    taskName: 'Research',
    estimate: '2d 4h',
    spentTime: '1d 2h',
    assignee: 'John Doe',
    priority: 'Medium',
    status: 'Done',
    progress: 100,
    id: uuidv4(),
  },
  {
    taskName: 'Design',
    estimate: '3d',
    spentTime: '1d 5h',
    assignee: 'Jane Smith',
    priority: 'High',
    status: 'In Progress',
    progress: 60,
    id: uuidv4(),
  },
  {
    taskName: 'Development',
    estimate: '5d',
    spentTime: '2d 3h',
    assignee: 'Alice Johnson',
    priority: 'High',
    status: 'In Progress',
    progress: 40,
    id: uuidv4(),
  },
  {
    taskName: 'Testing',
    estimate: '2d',
    spentTime: '0d 6h',
    assignee: 'Bob Brown',
    priority: 'Low',
    status: 'In Progress',
    progress: 20,
    id: uuidv4(),
  },
  {
    taskName: 'Deployment',
    estimate: '1d',
    spentTime: '0d 2h',
    assignee: 'Carol White',
    priority: 'Medium',
    status: 'Done',
    progress: 100,
    id: uuidv4(),
  },
  {
    taskName: 'Documentation',
    estimate: '3d',
    spentTime: '1d 1h',
    assignee: 'David Lee',
    priority: 'Medium',
    status: 'In Progress',
    progress: 50,
    id: uuidv4(),
  },
  {
    taskName: 'Bug Fixes',
    estimate: '2d',
    spentTime: '0d 5h',
    assignee: 'Eva Black',
    priority: 'High',
    status: 'In Progress',
    progress: 30,
    id: uuidv4(),
  },
  {
    taskName: 'Review',
    estimate: '1d',
    spentTime: '1d',
    assignee: 'Frank Green',
    priority: 'Low',
    status: 'Done',
    progress: 100,
    id: uuidv4(),
  },
  {
    taskName: 'Setup',
    estimate: '1d',
    spentTime: '0d 4h',
    assignee: 'Grace Adams',
    priority: 'Medium',
    status: 'In Progress',
    progress: 75,
    id: uuidv4(),
  },
  {
    taskName: 'Integration',
    estimate: '4d',
    spentTime: '1d 2h',
    assignee: 'Henry Moore',
    priority: 'High',
    status: 'In Progress',
    progress: 55,
    id: uuidv4(),
  },
  {
    taskName: 'Optimization',
    estimate: '2d',
    spentTime: '0d 3h',
    assignee: 'Ivy Wilson',
    priority: 'Medium',
    status: 'Done',
    progress: 100,
    id: uuidv4(),
  },
  {
    taskName: 'Training',
    estimate: '2d',
    spentTime: '1d',
    assignee: 'Jack Martinez',
    priority: 'Low',
    status: 'In Progress',
    progress: 40,
    id: uuidv4(),
  },
  {
    taskName: 'Configuration',
    estimate: '1d',
    spentTime: '0d 2h',
    assignee: 'Karen Anderson',
    priority: 'High',
    status: 'Done',
    progress: 100,
    id: uuidv4(),
  },
  {
    taskName: 'Maintenance',
    estimate: '3d',
    spentTime: '1d 1h',
    assignee: 'Liam Robinson',
    priority: 'Medium',
    status: 'In Progress',
    progress: 45,
    id: uuidv4(),
  },
  {
    taskName: 'Refactoring',
    estimate: '2d',
    spentTime: '0d 3h',
    assignee: 'Mia Davis',
    priority: 'High',
    status: 'In Progress',
    progress: 70,
    id: uuidv4(),
  },
  {
    taskName: 'Feedback',
    estimate: '1d',
    spentTime: '1d',
    assignee: 'Nathan Clark',
    priority: 'Low',
    status: 'Done',
    progress: 100,
    id: uuidv4(),
  },
  {
    taskName: 'Analysis',
    estimate: '2d 2h',
    spentTime: '1d 2h',
    assignee: 'Olivia Lewis',
    priority: 'Medium',
    status: 'In Progress',
    progress: 60,
    id: uuidv4(),
  },
  {
    taskName: 'Prototype',
    estimate: '3d',
    spentTime: '1d 4h',
    assignee: 'Paul Walker',
    priority: 'High',
    status: 'In Progress',
    progress: 50,
    id: uuidv4(),
  },
  {
    taskName: 'Cleanup',
    estimate: '1d',
    spentTime: '0d 1h',
    assignee: 'Quinn Harris',
    priority: 'Medium',
    status: 'Done',
    progress: 100,
    id: uuidv4(),
  },
  {
    taskName: 'Strategy',
    estimate: '2d',
    spentTime: '0d 5h',
    assignee: 'Riley Young',
    priority: 'High',
    status: 'In Progress',
    progress: 80,
    id: uuidv4(),
  },
  {
    taskName: 'Launch',
    estimate: '1d',
    spentTime: '0d 6h',
    assignee: 'Samantha King',
    priority: 'Medium',
    status: 'In Progress',
    progress: 65,
    id: uuidv4(),
  },
  {
    taskName: 'Audit',
    estimate: '2d',
    spentTime: '1d',
    assignee: 'Thomas Wright',
    priority: 'Low',
    status: 'Done',
    progress: 100,
    id: uuidv4(),
  },
  {
    taskName: 'Initial Planning',
    estimate: '1d',
    spentTime: '0d 0h',
    assignee: 'Alice Johnson',
    priority: 'High',
    status: 'Todo',
    progress: 0,
    id: uuidv4(),
  },
  {
    taskName: 'User Research',
    estimate: '3d',
    spentTime: '0d 0h',
    assignee: 'Bob Brown',
    priority: 'Medium',
    status: 'Todo',
    progress: 0,
    id: uuidv4(),
  },
  {
    taskName: 'Wireframe Design',
    estimate: '2d',
    spentTime: '0d 0h',
    assignee: 'Jane Smith',
    priority: 'High',
    status: 'Todo',
    progress: 0,
    id: uuidv4(),
  },
  {
    taskName: 'Backend Setup',
    estimate: '4d',
    spentTime: '0d 0h',
    assignee: 'Henry Moore',
    priority: 'Medium',
    status: 'Todo',
    progress: 0,
    id: uuidv4(),
  },
  {
    taskName: 'API Integration',
    estimate: '5d',
    spentTime: '0d 0h',
    assignee: 'Karen Anderson',
    priority: 'High',
    status: 'Todo',
    progress: 0,
    id: uuidv4(),
  },
  {
    taskName: 'Beta Testing',
    estimate: '2d',
    spentTime: '0d 0h',
    assignee: 'David Lee',
    priority: 'Medium',
    status: 'Todo',
    progress: 0,
    id: uuidv4(),
  },
  {
    taskName: 'Launch Marketing Campaign',
    estimate: '3d',
    spentTime: '0d 0h',
    assignee: 'Ivy Wilson',
    priority: 'High',
    status: 'Todo',
    progress: 0,
    id: uuidv4(),
  },
  {
    taskName: 'User Feedback Collection',
    estimate: '2d',
    spentTime: '0d 0h',
    assignee: 'Grace Adams',
    priority: 'Medium',
    status: 'Todo',
    progress: 0,
    id: uuidv4(),
  },
  {
    taskName: 'Final Report',
    estimate: '1d',
    spentTime: '0d 0h',
    assignee: 'Riley Young',
    priority: 'Low',
    status: 'Todo',
    progress: 0,
    id: uuidv4(),
  },
]

// Tailwind CSS Utility Classes can be used here
const Task = () => {
  return (
    <>
      <h3>Tasks</h3>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList className="flex items-center" style={{ justifyContent: 'center' }}>
          <Tab
            className=" rounded-md p-2 mr-2 bg-white hover:bg-primary-200 active:bg-primary-200"
            _selected={{ bg: 'white', color: 'primary.500', borderColor: 'primary.500', borderWidth: '2px' }}
          >
            <MdMenu size={25} className="text-primary" />
          </Tab>
          <Tab
            className="rounded-md bg-white p-2 mr-2 hover:bg-primary-100 active:bg-primary-200"
            _selected={{ bg: 'white', color: 'primary.500', borderColor: 'primary.500', borderWidth: '2px' }}
          >
            <BiObjectsVerticalTop size={25} className="text-primary" />
          </Tab>
          <Tab
            className="bg-white rounded-sm p-2 hover:bg-primary-100 active:bg-primary-200"
            _selected={{ bg: 'white', color: 'primary.500', borderColor: 'primary.500', borderWidth: '2px' }}
          >
            <TbArrowsLeftRight size={25} className="text-primary" />
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{/* <HorizontalView tasks={tasksData} /> */}</TabPanel>
          <TabPanel>
            <Kanban tasks={tasksData} />
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default Task

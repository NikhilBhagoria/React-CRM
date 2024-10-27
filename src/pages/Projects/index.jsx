import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import Task from '../../components/tasks'
const data = [
  {
    projectId: 'xyz',
    projectName: 'Main Project A',
    subProject: [
      {
        subProjectCode: 'MED-90988',
        subProjectName: 'Healthcare Application',

        subProjectId: 'abc',
        tasks: [
          { taskName: 'User Interface Design', taskId: 90, taskEstimations: 89 },
          { taskName: 'User Interface Development', taskId: 903, taskEstimations: 900 },
        ],
      },
      {
        subProjectCode: 'MED-90222',
        subProjectName: 'Healthcare Application',
        subProjectId: 'abc1',
        tasks: [
          { taskName: 'Web Development', taskId: 88, taskEstimations: 77 },
          { taskName: 'Front-End Development', taskId: 903, taskEstimations: 77 },
        ],
      },
      {
        subProjectCode: 'EDU-90988',
        subProjectName: 'Educational Platform',
        subProjectId: 'abc2',
        tasks: [
          { taskName: 'Web Development', taskId: 88, taskEstimations: 77 },
          { taskName: 'Front-End Development', taskId: 903, taskEstimations: 77 },
        ],
      },
    ],
  },
  {
    projectId: 'xyz1',
    projectName: 'Main Project B',
    subProject: [
      {
        subProjectCode: 'DEV-0000',
        subProjectName: 'Development Platform',
        subProjectId: 'abc',
        tasks: [
          { taskName: 'User Interface Design', taskId: 90, taskEstimations: 89 },
          { taskName: 'User Interface Development', taskId: 903, taskEstimations: 900 },
        ],
      },
      {
        subProjectCode: 'DEV-2000',
        subProjectName: 'Development Platform',
        subProjectId: 'abc1',
      },
      {
        subProjectCode: 'DEV-0900',
        subProjectName: 'Development Platform',
        subProjectId: 'abc2',
      },
      {
        subProjectCode: 'DEV-0901',
        subProjectName: 'Development Platform',
        subProjectId: 'abc3',
      },
    ],
  },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedSubProject, setSelectedSubProject] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleProjectChange = (e) => {
    setSelectedProject(data.find((project) => project.projectId === e.target.value))
    setSelectedSubProject(null) // Reset subproject when project changes
  }

  const handleSubProjectChange = (subProjectId) => {
    const subProject = selectedProject.subProject.find((sp) => sp.subProjectId === subProjectId)
    setSelectedSubProject(subProject)
  }

  const openDrawer = () => {
    setDrawerOpen(true)
  }

  const closeModal = () => {
    setDrawerOpen(false)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex space-x-4">
        {/* Dropdown Container */}
        <div className="w-1/5 bg-white p-8 rounded-xl">
          <div className="mb-4 w-auto">
            <Select label="Select Project" id="project" className="sm:text-sm" onChange={(e) => handleProjectChange(e)}>
              {data.map((project) => (
                <option key={project.projectId} value={project.projectId}>
                  {project.projectName}
                </option>
              ))}
            </Select>
          </div>
          <hr className="my-6" />
          {selectedProject && (
            <div>
              <ul className="list-disc flex flex-col gap-2">
                {selectedProject.subProject.map((subProject) => (
                  <li
                    key={subProject.subProjectId}
                    className={`flex flex-col cursor-pointer hover:bg-gray-200 rounded p-2 ${
                      selectedSubProject && selectedSubProject.subProjectId === subProject.subProjectId
                        ? 'bg-blue-50 border-r-[4px] border-blue-600'
                        : ''
                    }`}
                    onClick={() => handleSubProjectChange(subProject.subProjectId)}
                  >
                    <span className="text-gray-500">{subProject.subProjectCode}</span>
                    {subProject.subProjectName}
                    {selectedSubProject && selectedSubProject.subProjectId === subProject.subProjectId && (
                      <span
                        className="flex items-center text-blue-600 pt-1 text-sm cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation() // Prevent triggering the li click event
                          openDrawer()
                        }}
                      >
                        View Details
                        <FaAngleRight />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Task Board Container */}
        <div className="w-4/5">
          {selectedSubProject ? (
            <Task />
          ) : (
            // <>
            //   <h2 className="text-lg font-medium text-gray-700">Tasks:</h2>
            //   {selectedSubProject.tasks ? (
            //     <ul className="list-disc pl-5">
            //       {selectedSubProject.tasks.map((task) => (
            //         <li key={task.taskId} className="py-2">
            //           <strong>{task.taskName}</strong> (ID: {task.taskId}) - Estimations: {task.taskEstimations}
            //         </li>
            //       ))}
            //     </ul>
            //   ) : (
            //     <p>No tasks available for this sub-project.</p>
            //   )}
            // </>
            <p>Select a sub-project to view tasks.</p>
          )}
        </div>
      </div>

      {/* Modal Component */}
      <Modal isOpen={drawerOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              You can scroll the content behind the modal
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
        <div className="flex flex-col items-center justify-between px-4 pb-2">
          <p variant="h5" color="blue-gray">
            Sub-Project Details
          </p>
          {selectedSubProject ? (
            <>
              <p>
                <strong>Name:</strong> {selectedSubProject.subProjectName}
              </p>

              {selectedSubProject.tasks ? (
                <ul className="list-disc pl-5">
                  {selectedSubProject.tasks.map((task) => (
                    <li key={task.taskId} className="py-2">
                      <strong>{task.taskName}</strong> (ID: {task.taskId}) - Estimations: {task.taskEstimations}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No tasks available for this sub-project.</p>
              )}
            </>
          ) : (
            <p>No details available.</p>
          )}

          <Button onClick={closeModal} color="blue">
            Close
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default Projects

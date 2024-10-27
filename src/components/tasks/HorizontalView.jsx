import React from 'react'
import { Card, CardBody, CircularProgress, Tag, Text, VStack, Box } from '@chakra-ui/react'

// Component to display individual task
const TaskCard = ({ task }) => (
  <Card className="rounded-2xl mb-4">
    <CardBody className="flex flex-wrap justify-between">
      <VStack align="start" spacing={1}>
        <Text fontWeight="bold">Task Name</Text>
        <Text>{task.taskName}</Text>
      </VStack>
      <VStack align="start" spacing={1}>
        <Text fontWeight="bold">Estimate</Text>
        <Text>{task.estimate}</Text>
      </VStack>
      <VStack align="start" spacing={1}>
        <Text fontWeight="bold">Spent Time</Text>
        <Text>{task.spentTime}</Text>
      </VStack>
      <VStack align="start" spacing={1}>
        <Text fontWeight="bold">Assignee</Text>
        <Text>{task.assignee}</Text>
      </VStack>
      <VStack align="start" spacing={1}>
        <Text fontWeight="bold">Priority</Text>
        <Text color={task.priority === 'High' ? 'red.500' : 'yellow.500'}>{task.priority}</Text>
      </VStack>
      <Tag variant="solid" colorScheme={task.status === 'Done' ? 'green' : 'blue'} className="my-2">
        {task.status}
      </Tag>
      <CircularProgress
        value={task.progress}
        size="30px"
        className="pt-2"
        color={task.status === 'Done' ? 'green.400' : 'blue.400'}
      />
    </CardBody>
  </Card>
)

// Main component to display the list of tasks
const TaskList = (tasks) => {
  console.log(tasks)
  return (
    <Box p={4}>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </Box>
  )
}

export default TaskList

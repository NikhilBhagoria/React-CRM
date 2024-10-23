import React, { useState, useEffect } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import update from 'immutability-helper'
import Column from './Column'
import Card from './Card'

const columnsFromBackend = [
  {
    id: 'todo90', // Unique ID for Todo column
    name: 'Todo',
    items: [],
    color: 'hsl(0, 85%, 85%)',
  },
  {
    id: 'inprogress91', // Unique ID for In Progress column
    name: 'In Progress',
    items: [],
    color: 'hsl(60, 85%, 85%)',
  },
  {
    id: 'done92', // Unique ID for Done column
    name: 'Done',
    items: [],
    color: 'hsl(120, 85%, 85%)',
  },
]

function Kanban({ tasks = [] }) {
  const [columns, setColumns] = useState(columnsFromBackend)

  useEffect(() => {
    const updatedColumns = columnsFromBackend.map((column) => ({
      ...column,
      items: [], // Reset items before filtering
    }))
    tasks.forEach((task) => {
      if (task.status === 'In Progress') {
        updatedColumns[1].items.push(task) // Append to 'In Progress'
      } else if (task.status === 'Done') {
        updatedColumns[2].items.push(task) // Append to 'Done'
      } else if (task.status === 'Todo') {
        updatedColumns[0].items.push(task) // Append to 'Todo'
      }
    })

    setColumns(updatedColumns)
  }, [tasks])

  function onDragEnd(result) {
    if (!result.destination) return

    const { source, destination } = result

    if (source.droppableId !== destination.droppableId) {
      setColumns((old) => {
        const sourceColumnIndex = old.findIndex((column) => column.id === source.droppableId)
        const destinationColumnIndex = old.findIndex((column) => column.id === destination.droppableId)
        const dragCard = old[sourceColumnIndex].items[source.index]

        return update(old, {
          [sourceColumnIndex]: {
            items: { $splice: [[source.index, 1]] },
          },
          [destinationColumnIndex]: {
            items: { $splice: [[destination.index, 0, dragCard]] },
          },
        })
      })
    } else {
      setColumns((old) => {
        const columnIndex = old.findIndex((column) => column.id === source.droppableId)
        const dragCard = old[columnIndex].items[source.index]

        return update(old, {
          [columnIndex]: {
            items: {
              $splice: [
                [source.index, 1],
                [destination.index, 0, dragCard],
              ],
            },
          },
        })
      })
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map((column, index) => (
          <Column
            id={column.id}
            name={column.name}
            key={column.id}
            color={column.color}
            size={column.items.length}
            index={index}
          >


                                  {column.items.map((item, index) => (
              <Card id={item.id} index={index} content={item.content} key={item.id}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      border: '2px solid #E5E7EB',
                      borderRadius: 1000,
                      overflow: 'hidden',
                    }}
                  >
                    <img src={item.avatar} width="100%" height="100%" alt={item.taskName} />
                  </div>
                  <div style={{ marginLeft: 8, fontWeight: 600 }}>
                    <div>{item.taskName}</div>
                    <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>{item.estimate}</div>
                  </div>
                </div>
              </Card>
            ))}
          </Column>
        ))}
      </DragDropContext>
    </div>
  )
}

export default Kanban

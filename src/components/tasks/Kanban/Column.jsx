import React from 'react'
import { Droppable } from 'react-beautiful-dnd'

function Column({ id, color, name, children, size, index }) {
  return (
    <div key={id} style={{ marginRight: 10 }}>
      <div style={{ padding: '8px 0px' }}>
        <span
          style={{
            borderRadius: 4,
            padding: '2px 6px',
            backgroundColor: color,
            fontSize: '0.875rem',
          }}
        >
          {name}
        </span>
        <span style={{ marginLeft: 8, fontSize: '0.875rem', color: '#6B7280' }}>{size}</span>
      </div>
      <Droppable draggableId={`board-${children.id}`}>
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableId}
              ref={provided.innerRef}
              style={{
                borderRadius: 4,
                border: '2px solid #E5E7EB',
                background: snapshot.isDraggingOver && '#BFDBFE',
                padding: 4,
                width: 320,
                minHeight: 480,
              }}
            >
              {children}
              {provided.placeholder}
            </div>
          )
        }}
      </Droppable>
    </div>
  )
}

export default Column

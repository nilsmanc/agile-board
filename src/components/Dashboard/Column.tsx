import { Card } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { Draggable } from 'react-beautiful-dnd'
import { TaskState } from '../../types'

import Task from './Task'

const getItemStyle = (isDragging: boolean, draggableStyle: {}) => {
  return {
    padding: 8,
    marginBottom: 8,
    ...draggableStyle,
  }
}

const Column = ({ section }) => {
  return (
    <div>
      {section.tasks.map((task: TaskState, index: number) => {
        return (
          <Draggable draggableId={task.id} key={task.id} index={index}>
            {(provided, snapshot) => (
              <Card
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                <Task task={task} />
              </Card>
            )}
          </Draggable>
        )
      })}
    </div>
  )
}

export default observer(Column)

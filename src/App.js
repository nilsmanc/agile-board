import { observer } from 'mobx-react-lite'
import useStore from './hooks/useStore'

function App() {
  const { users, boards } = useStore()

  console.log(boards.active?.sections[0]?.toJSON())

  return <div>Start</div>
}

export default observer(App)

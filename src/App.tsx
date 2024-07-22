import Header from './components/header/index'
import Table from './components/table/index'
import { Content } from './App.styles'

function App() {
  return (
    <div>
      <Header />
      <Content>
        <Table />
      </Content>
    </div>
  )
}

export default App

import Card from "./components/Card"
import Header from "./components/Header"
import Items from "./components/Items"

import './styles.scss'

function App() {
  return (
    <div className="App">
      <Card>
        <Header />
        <Items />
      </Card>
    </div>
  )
}

export default App

import Card from "./components/Card"
import Header from "./components/Header"
import Items from "./components/Items"
import SwitchToggleTheme from "./components/SwitchToggleTheme"

import './styles.scss'

function App() {
  return (
    <div className="App">
      <Card>
        <Header>
          <SwitchToggleTheme />
        </Header>
        <Items />
      </Card>
    </div>
  )
}

export default App

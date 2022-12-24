
import './App.css'
import NavBar from './components/Navbar/NavBar'
import Title from './components/Title/Title'
import ItemListConteiner from './components/container/ItemListConteiner/ItemListConteiner'

function App() {

  return (
    <>
      <header>
        <Title />
        <NavBar />
      </header>
           
      <ItemListConteiner greeting={'En construcción 🚧'}/>
    </>
  )
}

export default App

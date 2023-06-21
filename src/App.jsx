import './App.css'
import { CallsPage } from './pages/CallsPage'
import { NavBar } from './widgets/NavBar/NavBar'
import { Header } from './widgets/header/Header'


export const App = () => {

  return (
    <>
      <NavBar />
      <Header />
      <div className='conteiner'>
        <CallsPage />
      </div>
    </>
  )
}

export default App

import { Outlet } from 'react-router'
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'
import './App.css'

function App() {

  return (
    <div className='flex flex-row'>
      <SideBar />
      <div className='flex flex-col w-6/7'>
        <TopBar />
        <div className='p-2 border h-14/15'>
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default App

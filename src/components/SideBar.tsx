import TopBar from "./TopBar"

export default function SideBar() {


  return (
    <div className='flex flex-col px-5 pb-2 min-h-screen min-w-40 w-1/7 border '>

      <div className='h-1/15 border items-center flex flex-row'>
        <h1>Title</h1>
      </div>

      <div className='py-1 border'>
        <button>New Ticket</button>
      </div>

      <div className='h-12/15 border'>
        <h3>Overview</h3>
        <h3>Tickets</h3>
      </div>

      <div className='border'>
        <h3>Username</h3>
        <h3>Settings</h3>
        <h3>Support</h3>
      </div>

    </div>
  )
}
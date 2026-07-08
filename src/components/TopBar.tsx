

export default function TopBar() {


  return (
    <div className='flex flex-row border h-1/15 p-1 items-center w-full justify-between'>

      <div className='border w-5/7'>
        <div>Search</div>
      </div>

      <div className='flex flex-row'>
        <h3>Notifications</h3>
        <h3>Profile</h3>
      </div>

    </div>
  )
}
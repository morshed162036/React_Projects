import './list.scss'
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from "../../component/navbar/Navbar";


const List = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        datable
      </div>
    </div>
  )
}

export default List
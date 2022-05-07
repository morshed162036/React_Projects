import "./new.scss"
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import  DriveFolderUploadOutlinedIcon  from "@mui/icons-material/DriveFolderUploadOutlined";
const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">Add User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="image_icon"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon"/>
                </label>
                <input type="file" id="file" style={{display:'none'}}/>
              </div>
              <div className="formInput">
                <label>UserName</label>
                <input type="text" placeholder="john_doe" />
              </div>
              <div className="formInput">
                <label>Name and Surname</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="+880 123 4567" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="mirpur, Dhaka" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="BD" />
              </div>
              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New
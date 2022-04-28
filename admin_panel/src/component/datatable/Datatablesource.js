export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
export const userRows = [
  {
    id: 1,
    username: "snow",
    img: "https://www.startech.com.bd/image/cache/catalog/laptop/acer/nitro-5-an515/nitro-5-an515-01-500x500.jpg",
    status: "active",
    email: "snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://www.startech.com.bd/image/cache/catalog/laptop/acer/nitro-5-an515/nitro-5-an515-01-500x500.jpg",
    status: "passive",
    email: "jamie@gmail.com",
    age: 25,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://www.startech.com.bd/image/cache/catalog/laptop/acer/nitro-5-an515/nitro-5-an515-01-500x500.jpg",
    status: "passive",
    email: "Lannister@gmail.com",
    age: 25,
  },
  {
    id: 4,
    username: "snowfall",
    img: "https://www.startech.com.bd/image/cache/catalog/laptop/acer/nitro-5-an515/nitro-5-an515-01-500x500.jpg",
    status: "active",
    email: "snowfall@gmail.com",
    age: 25,
  },
  {
    id: 5,
    username: "snow lannister",
    img: "https://www.startech.com.bd/image/cache/catalog/laptop/acer/nitro-5-an515/nitro-5-an515-01-500x500.jpg",
    status: "pending",
    email: "jamie@gmail.com",
    age: 25,
  },
  {
    id: 6,
    username: "Jamie Lannister",
    img: "https://www.startech.com.bd/image/cache/catalog/laptop/acer/nitro-5-an515/nitro-5-an515-01-500x500.jpg",
    status: "passive",
    email: "jamie@gmail.com",
    age: 25,
  },
];

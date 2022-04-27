import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const List = () => {
  const rows = [
    {
      id: 1153155,
      product: "Acer Nitro 5",
      img: "https://www.startech.com.bd/image/cache/catalog/laptop/acer/nitro-5-an515/nitro-5-an515-01-500x500.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 786,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2253155,
      product: "Playstation 5",
      img: "https://www.startech.com.bd/image/cache/catalog/laptop/acer/nitro-5-an515/nitro-5-an515-01-500x500.jpg",
      customer: "Smith Jon",
      date: "1 March",
      amount: 867,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 1153165,
      product: "Acer Nitro 2",
      img: "https://www.startech.com.bd/image/cache/catalog/laptop/acer/nitro-5-an515/nitro-5-an515-01-500x500.jpg",
      customer: "John Doy",
      date: "1 March",
      amount: 786,
      method: "Online",
      status: "Approved",
    },
    {
      id: 1153156,
      product: "Acer",
      img: "https://www.startech.com.bd/image/cache/catalog/laptop/acer/nitro-5-an515/nitro-5-an515-01-500x500.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 786,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="product_img" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;

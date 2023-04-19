import React from 'react';
import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Table1 = () => {
    const rows = [
        {
            id: 1143155,
            product: "Acer Nitro 5",
            img: "https://static.toiimg.com/thumb/resizemode-4,msid-83654869,imgsize-500,width-800/83654869.jpg",
            customer: "John Smith",
            date:"1 March",
            amount:785,
            method: "Cash on Delivery",
            status: "Approved",
        },

        {
            id: 2235235,
            product: "Playstation 5",
            img: "https://images.news18.com/ibnlive/uploads/2021/09/playstation-5-16312577723x2.jpg?impolicy=website&width=510&height=356",
            customer: "Michael Doe",
            date:"1 March",
            amount:900,
            method: "Online Payment",
            status: "Pending",
        },

        {
            id: 2342353,
            product: "Redragon S101",
            img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71EMEQKULsL._SL1500_.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 35,
            method: "Cash on Delivery",
            status: "Pending",
          },

          {
            id: 2357741,
            product: "Razer Blade 15",
            img: "https://images-cdn.ubuy.co.in/633f5c8092473b207e665257-razer-blade-15-base-gaming-laptop-oled.jpg",
            customer: "Jane Smith",
            date: "1 March",
            amount: 920,
            method: "Online Payment",
            status: "Approved",
          },

          {
            id: 2342355,
            product: "ASUS ROG Strix",
            img: "https://images.news18.com/ibnlive/uploads/2021/10/asus-rog-strix-g15-advantage-edition-review.jpeg",
            customer: "Harold Carol",
            date: "1 March",
            amount: 2000,
            method: "Online Payment",
            status: "Pending",
          },
    ];
  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className='tableCell'>Tracking ID</TableCell>
          <TableCell className='tableCell'>Product</TableCell>
          <TableCell className='tableCell'>Customer</TableCell>
          <TableCell className='tableCell'>Date</TableCell>
          <TableCell className='tableCell'>Amount</TableCell>
          <TableCell className='tableCell'>Payment Method</TableCell>
          <TableCell className='tableCell'>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((rows) => (
          <TableRow
            key={rows.id}
          >
            <TableCell>{rows.id}</TableCell>
            <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={rows.img} alt="" className="image"/>
                    {rows.product} 
                </div>
            

            </TableCell>
            <TableCell className="tableCell">{rows.customer}</TableCell>
            <TableCell className="tableCell">{rows.date}</TableCell>
            <TableCell className="tableCell">{rows.amount}</TableCell>
            <TableCell className="tableCell">{rows.method}</TableCell>
            <TableCell className="tableCell">
                <span className={`status ${rows.status}`}>{rows.status}</span>

            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Table1
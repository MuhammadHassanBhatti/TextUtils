import { Box, TextField } from "@mui/material";
import { React, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, department) {
  return { name, department };
}

const rows = [
  createData("Muhammad Hassan Bhatti", "Tech"),
  createData("Danish Ali", "Tech"),
  createData("Anas Mehboob", "Tech"),
  createData("Waleed Arshad", "Tech"),
  createData("Awais", "Tech"),
  createData("Atif", "Tech"),
  createData("Hamza Irfan", "Tech"),
  createData("Talha Mughal", "Tech"),
  createData("Rizwan Innayat", "Q/A"),
  createData("Memoona", "Q/A"),
  createData("Usama", "Q/A"),
  createData("Faisal Javeed", "Backend Developer"),
  createData("Sharjeel", "Python"),
  createData("Mahtab", "Python"),
];

const InputFieldSearch = () => {
  const [value, setValue] = useState("");
//   const [consoledValue, setConsoledValue] = useState("");
  const [filteredRows, setFilteredRows] = useState(rows);

  // For console the Value

  //   useEffect(() => {
  //     const handleValue = setTimeout(() => {
  //       setConsoledValue(value);
  //     }, 2000);
  //     return () => {
  //       clearTimeout(handleValue);
  //     };
  //   }, [value]);

  //   useEffect(() => {
  //     if (consoledValue) {
  //       console.log("Value:", consoledValue);
  //     }
  //   }, [consoledValue]);

  useEffect(() => {
    setFilteredRows(
      rows.filter((row) => row.name.toLowerCase().includes(value.toLowerCase()))
    );
  }, [value]);

  return (
    <Box sx={{ margin: "30px 0px 40px 150px" }}>
      <TextField
        label="Search Bar"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Box sx={{ margin: "30px 200px 30px 0px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Department</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.department}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default InputFieldSearch;

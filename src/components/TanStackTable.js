import React from "react";
import { useTable } from "react-table";

const TanStackTable = () => {
  const TableData = [
    {
      firstName: "Tanner",
      lastName: "Linsley",
      age: 33,
      visits: 100,
      progress: 50,
      status: "Married",
    },
    {
      firstName: "Kevin",
      lastName: "Vandy",
      age: 27,
      visits: 200,
      progress: 100,
      status: "Single",
    },
  ];

  const columns = [
    { Header: "First Name", accessor: "firstName" },
    { Header: "Last Name", accessor: "lastName" },
    { Header: "Age", accessor: "age" },
    { Header: "Visits", accessor: "visits" },
    { Header: "Progress", accessor: "progress" },
    { Header: "Status", accessor: "status" },
    //For Commit
    { Header: "First Name", accessor: "firstName" },
    { Header: "Last Name", accessor: "lastName" },
    { Header: "Age", accessor: "age" },
    { Header: "Visits", accessor: "visits" },
    { Header: "Progress", accessor: "progress" },
    { Header: "Status", accessor: "status" },
  ];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: TableData });

  return (
    <>
      <div className="tabelBorder">
        <table {...getTableProps()} style={{ width: "100%" }}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TanStackTable;

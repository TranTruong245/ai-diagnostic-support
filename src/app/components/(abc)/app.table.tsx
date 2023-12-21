"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

interface Column {
  id: "STT" | "patientId" | "patientName" | "population" | "size" | "density";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "STT", label: "STT", minWidth: 40 },
  { id: "patientId", label: "Mã bệnh nhân", minWidth: 70 },
  { id: "patientName", label: "Tên bệnh nhân", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 80,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 80,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 80,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  patientId: string;
  patientName: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  patientId: string,
  patientName: string,
  population: number,
  size: number
): Data {
  const density = population / size;
  return { patientId, patientName, population, size, density };
}

const rows = [
  createData("001", "NGuyễn Văn A", 1324171354, 3287263),
  createData("002", "NGuyễn Văn B", 1403500365, 9596961),
  createData("003", "NGuyễn Văn C", 60483973, 301340),
  createData("004", "NGuyễn Văn D", 327167434, 9833520),
  createData("005", "NGuyễn Văn A", 37602103, 9984670),
  createData("006", "NGuyễn Văn 1", 25475400, 7692024),
  createData("007", "NGuyễn Văn 2", 83019200, 357578),
  createData("008", "NGuyễn Văn 3", 4857000, 70273),
  createData("009", "NGuyễn Văn 4", 126577691, 1972550),
  createData("0010", "NGuyễn Văn 5", 126317000, 377973),
  createData("0011", "NGuyễn Văn 6", 67022000, 640679),
  createData("0012", "NGuyễn Văn 7", 67545757, 242495),
  createData("0013", "NGuyễn Văn 8", 146793744, 17098246),
  createData("0014", "NGuyễn Văn 9", 200962417, 923768),
  createData("0015", "NGuyễn Văn 10", 210147125, 8515767),
];
export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const getSTT = (index: number) => page * rowsPerPage + index + 1;

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.patientId}
                  >
                    <TableCell key="STT">{getSTT(index)}</TableCell>
                    {columns.slice(1).map((column) => {
                      const value = (row as any)[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>

          {/* <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((rows,index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.patientName}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody> */}
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

//Otion2
// "use client";
// import React, { useState } from "react";

// const sampleData = [
//   { id: 1, code: "BN001", patientId: "Nguyen Van A", status: true },
//   { id: 2, code: "BN002", name: "Tran Thi B", status: false },
//   // ...Thêm dữ liệu bệnh nhân khác
// ];

// const TableExample = () => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleChangePage = (newPage) => {
//     setPage(newPage);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="px-6 py-3 border-b border-gray-300">STT</th>
//             <th className="px-6 py-3 border-b border-gray-300">Mã bệnh nhân</th>
//             <th className="px-6 py-3 border-b border-gray-300">
//               Tên bệnh nhân
//             </th>
//             <th className="px-6 py-3 border-b border-gray-300">Trạng thái</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sampleData
//             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             .map((row, index) => (
//               <tr key={row.id}>
//                 <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{row.code}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{row.name}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <input type="checkbox" checked={row.status} readOnly />
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>

//       {/* Phân trang */}
//       <div className="mt-4">
//         <span className="mr-2">Số hàng trên mỗi trang:</span>
//         <select
//           className="p-2 border border-gray-300"
//           value={rowsPerPage}
//           onChange={(e) => setRowsPerPage(parseInt(e.target.value, 10))}
//         >
//           <option value={5}>5</option>
//           <option value={10}>10</option>
//           <option value={20}>20</option>
//         </select>

//         <span className="ml-4">Trang:</span>
//         <select
//           className="p-2 border border-gray-300"
//           value={page}
//           onChange={(e) => handleChangePage(parseInt(e.target.value, 10))}
//         >
//           {Array.from(
//             { length: Math.ceil(sampleData.length / rowsPerPage) },
//             (_, i) => i
//           ).map((pageNum) => (
//             <option key={pageNum} value={pageNum}>
//               {pageNum + 1}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default TableExample;

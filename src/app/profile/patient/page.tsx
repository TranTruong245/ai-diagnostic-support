"use client";
import StickyHeadTable from "@/app/components/(abc)/app.table";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  styled,
  tableCellClasses,
} from "@mui/material";
import Image from "next/image";

const Patient = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <div className=" min-h-screen w-full bg-red-50">
      <div className="relative flex ">
        <div className="absolute ">
          <Image
            className="z-0"
            src="/gray_brain.png"
            alt=""
            width={650}
            height={580}
          ></Image>
        </div>
        <div className="absolute flex flex-row z-10">
          <div className="col ml-[51px] mt-[23px]">
            <Image src={"/logohust.png"} alt="" width={61} height={89}></Image>
          </div>

          <div className="col mx-2 mt-[46px]">
            <Image src={"/logoseee.png"} alt="" width={235} height={46}></Image>
          </div>

          <div className="col mx-2 mt-[33px]">
            <Image
              src={"/logohospital.png"}
              alt=""
              width={82}
              height={79}
            ></Image>
          </div>
        </div>
        <div className=" z-10 mt-[200px]">
          <div>
            <div className="inline-block">
              <input
                type="text"
                className="border border-gray-400 py-2 px-4 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Nhập văn bản"
              />
            </div>
            <TextField
              id="outlined-basic"
              size="small"
              label="Outlined"
              variant="outlined"
              className="text-sm bg-white "
            />
            <button className="font-bold p-1 border-black border-1 bg-red-600 text-white rounded-lg">
              Tìm kiếm
            </button>
          </div>
          {/* <div className="space-x-3">
            <input type="text" placeholder="Mã bệnh nhân" />
            <input type="text" placeholder="Tên bệnh nhân" />
            <input type="text" placeholder="Ngày nhập viện" />
            <input type="text" placeholder="Ngày xuất viện" />
            <Button>Tìm kiếm </Button>
          </div> */}
          <div className="z-10">
            <div>
              {/* <TableContainer
                component={Paper}
                className="flex items-center justify-center"
              >
                <Table sx={{ minWidth: 500 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                      <StyledTableCell align="right">Calories</StyledTableCell>
                      <StyledTableCell align="right">
                        Fat&nbsp;(g)
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Carbs&nbsp;(g)
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Protein&nbsp;(g)
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.calories}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.fat}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.carbs}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.protein}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer> */}
            </div>
            <div className=" z-10 flex items-center justify-center">
              <StickyHeadTable />
            </div>
            <div className="flex justify-end">
              <button className=" font-bold p-1 border-black border-1 bg-red-600 text-white rounded-lg">
                Xuất dữ liệu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Patient;

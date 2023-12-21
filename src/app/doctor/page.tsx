// "use client";
// import StickyHeadTable from "@/app/components/(abc)/app.table";
// import {
//   Button,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
//   styled,
//   tableCellClasses,
// } from "@mui/material";
// import Image from "next/image";

// const Doctor = () => {
//   const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 14,
//     },
//   }));

//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     "&:last-child td, &:last-child th": {
//       border: 0,
//     },
//   }));

//   function createData(
//     name: string,
//     calories: number,
//     fat: number,
//     carbs: number,
//     protein: number
//   ) {
//     return { name, calories, fat, carbs, protein };
//   }

//   const rows = [
//     createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//     createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//     createData("Eclair", 262, 16.0, 24, 6.0),
//     createData("Cupcake", 305, 3.7, 67, 4.3),
//     createData("Gingerbread", 356, 16.0, 49, 3.9),
//   ];

//   return (
//     <div className=" min-h-screen  bg-red-50">
//       <div className="relative flex-none ">

//         <div className="absolute flex flex-row z-10">
//           <div className="col ml-[51px] mt-[23px] relative z-20">
//             <Image src={"/logohust.png"} alt="" width={61} height={89}></Image>
//           </div>

//           <div className="col mx-2 mt-[46px] relative z-20">
//             <Image src={"/logoseee.png"} alt="" width={235} height={46}></Image>
//           </div>

//           <div className="col mx-2 mt-[33px]">
//             <Image
//               src={"/logohospital.png"}
//               alt=""
//               width={82}
//               height={79}
//             ></Image>
//           </div>
//         </div>
//         <div className=" z-10 mt-[200px] flex h-screen ">
//           <div className="bg-gray-100 w-1/4 ">
//             {/* Add your dashboard content here */}

//             {/* Example Select Component */}
//             <label
//               htmlFor="example-select"
//               className="block text-gray-700 text-sm font-bold mb-2"
//             >
//               Select an Option:
//             </label>
//             <select
//               id="example-select"
//               className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//             >
//               <option value="option1">Option 1</option>
//               <option value="option2">Option 2</option>
//               <option value="option3">Option 3</option>
//             </select>
//           </div>
//           <div className="flex-1 justify-center items-center">
//             <div className="inline-block">
//               <input
//                 type="text"
//                 className="border border-gray-400 py-2 px-4 rounded-md focus:outline-none focus:border-blue-500"
//                 placeholder="Nhập văn bản"
//               />
//             </div>
//             <TextField
//               id="outlined-basic"
//               size="small"
//               label="Outlined"
//               variant="outlined"
//               className="text-sm bg-white "
//             />
//             <button className="font-bold p-1 border-black border-1 bg-red-600 text-white rounded-lg">
//               Tìm kiếm
//             </button>
//             <div className="z-10">
//               <div className=" ">
//                 <StickyHeadTable />
//                 <div className="flex justify-end">
//                   <button className=" font-bold p-1 border-black border-1 bg-red-600 text-white rounded-lg">
//                     Xuất dữ liệu
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Doctor;
"use client";

import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
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
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

const Doctor = () => {
  const datePickerStyle = {
    width: "150px", // Set the desired width
    // Add other styling properties as needed
  };
  return (
    <div className=" min-h-screen min-w-fit bg-red-50">
      <div className="absolute inset-0 z-0">
        {/* Ảnh làm nền */}
        <Image
          src="/gray_brain.png"
          alt=""
          className="flex z-0"
          width={500}
          height={300}
        />

        {/* Nội dung trang nằm ở đây */}
        <div className="z-10">{/* Nội dung trang */}</div>
      </div>
      <div className="relative ">
        <div className=" ">
          <div className="flex flex-row z-10">
            <div className="col ml-[51px] mt-[23px]  z-20">
              <Image src={"/logobk.png"} alt="" width={61} height={89}></Image>
            </div>

            <div className="col mx-2 mt-[46px]  z-20">
              <Image
                src={"/logoseee.png"}
                alt=""
                width={235}
                height={46}
              ></Image>
            </div>

            <div className="col mx-2 mt-[33px]">
              <Image src={"/logo103.png"} alt="" width={82} height={79}></Image>
            </div>
          </div>
          <div className=" z-10 flex mt-10 mr-4 ">
            <div className="ml-4">
              <div className="flex">
                <h2 className="font-bold text-xl text-red-600 ">Lọc</h2>
                <div className="mx-auto">
                  <Button
                    variant="contained"
                    size="small"
                    color="error"
                    className="rounded-lg bg-red-800 text-white text-sm  "
                  >
                    Xác nhận lọc
                  </Button>
                </div>
              </div>

              <div className="p-2 border-b-2">
                <label
                  htmlFor="check-in"
                  className="block text-gray-700 font-bold font-serif "
                >
                  Ngày vào viện
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker sx={{}} />
                </LocalizationProvider>
              </div>
              <div className="p-2 border-b-2">
                <label
                  htmlFor="check-out"
                  className="block text-gray-700 font-bold font-serif "
                >
                  Ngày ra viện
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker />
                </LocalizationProvider>
              </div>
            </div>
            <div className="flex-1 justify-center items-center ml-4">
              <div>
                <div className="flex justify-end space-x-2">
                  {/* <div className="inline-block">
                    <input
                      type="text"
                      className="border border-gray-400 py-2 px-4 rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Mã bệnh nhân"
                    />
                  </div> */}
                  <TextField
                    id="outlined-basic"
                    size="small"
                    label="Mã bệnh nhân"
                    variant="outlined"
                    className="text-sm bg-white "
                  />
                  <TextField
                    id="outlined-basic"
                    size="small"
                    label="Tên bệnh nhân"
                    variant="outlined"
                    className="text-sm bg-white "
                  />
                  <button className="font-bold p-1 border-black border-1 bg-red-600 text-white rounded-lg">
                    Tìm kiếm
                  </button>
                </div>
                <div className="p-3 flex justify-end space-x-1">
                  <button className="font-bold p-1 border-black border-1 bg-red-600 text-white rounded-lg ">
                    Thêm hồ sơ
                  </button>{" "}
                  <button className="font-bold p-1 border-black border-1 bg-red-600 text-white rounded-lg">
                    Chờ khám
                  </button>
                </div>
              </div>
              <div className="z-10">
                <div className=" ">
                  <StickyHeadTable />
                  <div className="flex justify-end mt-2">
                    <button className=" font-bold p-1 border-black border-1 bg-red-600 text-white rounded-lg">
                      Xuất dữ liệu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Doctor;

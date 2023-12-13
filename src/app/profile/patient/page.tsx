import { Button, Table } from "@mui/material"
import Image from 'next/image'

const Patient =  () =>{
    return(
        <div className="bg-red-50 min-h-screen">
            <div className="relative">
                <div className='absolute'>
                    <Image className='z-1' src="/gray_brain.png" alt=""width={650} height={580}></Image>
                </div>
                <div className='absolute flex flex-row z-10' >
                        <div className='col ml-[51px] mt-[23px]'>
                        <Image src={"/logohust.png"}alt='' width={61} height={89} className='z-10'></Image>
                        </div>

                        <div className='col mx-2 mt-[46px]'>
                        <Image src={"/logoseee.png"}alt='' width={235} height={46} className='z-10'></Image>
                        </div>

                        <div className='col mx-2 mt-[33px]'>
                        <Image src={"/logohospital.png"} alt='' width={82} height={79}></Image>
                        </div>
                </div>
                <div className="absolute z-10 mt-[200px]">
                    <div>
                        <button >Thêm hồ sơ bệnh nhân</button>
                    </div>
                    <div className="space-x-3" >
                        <input type="text" placeholder="Mã bệnh nhân" />
                        <input type="text" placeholder="Tên bệnh nhân" />
                        <input type="text" placeholder="Ngày nhập viện"/>
                        <input type="text" placeholder="Ngày xuất viện" />
                        <Button>Tìm kiếm </Button>
                    </div>
                    <div className="z-10">

                        
                        <table className="border-collapse border border-">
                            <thead className="">
                            <tr>
                                <th>#</th>
                                <th>Mã bệnh nhân</th>
                                <th>Tên bệnh nhân</th>
                                <th>Ngày nhập viện</th>
                                <th>Ngày ra viện</th>
                                <th>Ghi chú</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>23</td>
                                <td>Trần Văn A</td>
                                <td>10/10/2023</td>
                                <td>chưa có</td>
                                <td>sốt</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>23</td>
                                <td>Trần Văn A</td>
                                <td>10/10/2023</td>
                                <td>chưa có</td>
                                <td>sốt</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>23</td>
                                <td>Trần Văn A</td>
                                <td>10/10/2023</td>
                                <td>chưa có</td>
                                <td>sốt</td>
                            </tr>
                            </tbody>
                        </table>

                        <div>
                            <button>Xuất dữ liệu</button>
                        </div>
                    </div>
                </div>

            </div>
          
        </div>
    )
}
export default Patient;
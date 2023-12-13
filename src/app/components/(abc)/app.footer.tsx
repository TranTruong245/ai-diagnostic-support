// 'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { faEnvelope, faLocationDot, faMagnifyingGlass, faPhone } from "@fortawesome/free-solid-svg-icons"

export default function AppFooter(){
    return(
        <footer 
            className="footer-fixed-bottom w-full bg-red-700  text-white p-4 z-10" 
        >
        
            <section style={{ fontFamily: 'sans-serif'}}>
                <div className=" mt-5">
                <div className="flex flex-row items-center justify-center">
                    <div className="col-auto mx-auto text-white text-2xl ">
                        <p className="mb-3 ml-6 text-2xl">
                                Trường Điện - Điện tử
                        </p>
                        <p className="mb-3 ml-6 text-2xl">
                                Đại Học Bách Khoa Hà Nội
                        </p>
                        <ul >
                            <li className="mb-2"><LocationOnIcon className="mr-1"/>
                            Địa chỉ: Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội</li>
                            <li className="mb-2"><LocalPhoneIcon className="mr-1"/>
                            Liên hệ: 012348723628</li>
                            {/* <li className="mb-2"><EmailIcon className="mr-1"/>Email: dhbkhn@sis.hust.edu.vn</li> */}
                        </ul>
                    </div>
                    <div className="col-auto mx-auto text-white text-2xl">
                        <p className="mb-3 ml-6">Bệnh Viện Quân Y 103</p>
                        <ul>
                            <li className="mb-2"><LocationOnIcon className="mr-1"/>
                                Địa chỉ: Số 261 Đường Phùng, Phường Phúc La, Hà Đông, Hà Nội
                            </li>
                            <li className="mb-2"><LocalPhoneIcon className="mr-1"/>
                                Liên Hệ: 011312124214
                            </li>
                        </ul>
                    </div>               
                </div>
                
                </div>
            </section>
        </footer>
    )
}
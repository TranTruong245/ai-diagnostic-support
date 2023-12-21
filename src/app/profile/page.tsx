
import Image from 'next/image'
import Link from 'next/link';
const Profile =()=>{
    return(
        <div className=' min-h-screen bg-red-50'>
            <div className='relative'>
                <div className='absolute'>
                    <Image className='z-1' src="/gray_brain.png" alt=""width={650} height={580}></Image>
                </div>
                <div className='flex flex-row z-10 ' >
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
                <div className='flex flex-row absolute mt-52'>
                <div className='flex flex-col justify-center items-center col h-[600px] w-[600px] border-3'>
                    <div className=' row z-2 col h-[554px] w-[440px] bg-green-200 rounded-3xl shadow bordr-1'>
                        <div className='flex items-center justify-center mt-14'>
                            <Image src={'/Account.png'} alt='avt' height={309} width={271}></Image>
                        </div>
                        <ul>
                        <li className='flex items-center justify-center text-4xl font-bold text-red-600 mt-5'> Nguyễn Văn A</li>
                        <li className='flex items-center justify-center text-3xl mt-2'>Vai trò: Nhân viên</li>
                        </ul>
                    </div>
                    <div className='row mt-8'>
                        <button className='w-40 h-16 bg-red-700 rounded-3xl text-white  text-2xl font-bold' >
                        Xem hồ sơ
                        </button>
                    </div>
                </div>
                <div className='col'>
                    <p className='flex items-center justify-center text-red-300 text-6xl font-bold'>
                        Chức Năng
                    </p>
                        <div className=' grid gap-10 lap:gap-20 xl:grid-cols-2 text-5xl font-bold justify-center items-center mt-5' >
                            <Link href={'/profile/patient'}><div className='flex items-center justify-center lap:w-[489px] h-[184px] w-[320px] bg-slate-50 rounded-3xl shadow'>Bệnh nhân</div></Link>
                            <div className='flex items-center justify-center lap:w-[489px] h-[184px] w-[320px] bg-slate-50 rounded-3xl shadow'>Bác Sĩ</div>
                            <div className='flex items-center justify-center lap:w-[489px] h-[184px] w-[320px] bg-slate-50 rounded-3xl shadow'>Báo cáo</div>
                            <div className='flex items-center justify-center lap:w-[489px] h-[184px] w-[320px] bg-slate-50 rounded-3xl shadow'>Đăng xuất</div>

                        </div>
                </div>
            </div>

            
            </div>
               
                
                
            
            

           

        </div>
    )
}
export default Profile;
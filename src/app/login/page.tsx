'use client'
import { Box, Button, Checkbox, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react';
import { AccountCircle } from '@mui/icons-material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import AppFooter from '../components/(abc)/app.footer';
import Link from 'next/link';

export default function Login() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='relative flex flex-col'>

      <div className='absolute  '>
      <Image className='z-0' src="/gray_brain.png" alt=""width={900} height={900}></Image>
      </div>

      <div className='flex flex-row z-10'>
        <div className='col ml-[51px] mt-[23px]'>
          <Image src={"/hust.png"}alt='' width={371.2} height={150} className='z-10'></Image>
        </div>
        
        <div className='col mx-2 mt-[33px]'>
          <Image src={"/logohospital.png"} alt='' width={132} height={127}></Image>
        </div>
        
      </div>

      <div>
        <div className=" text-center text-pink-700 text-6xl font-extrabold mt-[53px] z-10">
          Hỗ trợ chuẩn đoán chấn thương sọ não bằng AI
        </div>
      </div>

      <div className='ml-[103px] mt-[90px] z-10'>
        <div  className='flex items-center w-[650px] h-[120px] my-[40px] bg-white rounded-3xl shadow border-2 border-red-500' >
          <div className='mx-2'>
          <Image src={'/Account.png'}alt='' width={56} height={59}></Image>
          </div>
          <input type="text" placeholder="Tài khoản" style={{width:"500px", height:"80px",fontSize:"30px",outline:"none"}}  />
        </div>

        <div className='flex items-center w-[650px] h-[120px]  bg-white rounded-3xl shadow border-2 border-red-500 z-10'>
          <div className='mx-2'>
          <Image src={'/Lock.png'}alt='' width={56} height={59}></Image>
          </div>
          {/* <input type="text" placeholder="Mật khẩu" style={{width:"500px", height:"80px",fontSize:"25px", border:"0",outline:'none'}}  />
          <VisibilityIcon sx={{fontSize: 45}}/> */}
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '500px', height: '80px', fontSize: '30px', border: 0, outline: 'none' }}
          />
          <div onClick={togglePasswordVisibility}>
            {showPassword ? <VisibilityOffIcon sx={{ fontSize: 45 }} /> : <VisibilityIcon sx={{ fontSize: 45 }} />}
          </div>
        </div>       
        <div className='flex flex-row my-4 gap-4'>
          <input type='checkbox' style={{width: '30px',height:'30px',fontSize: "20px", border: "2px"}} />
          <div className="w-56 h-12 text-black text-2xl font-light font-['Raleway'] underline ">  
            Nhớ Tài Khoản
          </div>
        </div>

        <div className='ml-[144px]'>
        <Link href={'/profile'}>
          <button className='w-96 h-20 border-2 border-white bg-pink-700 rounded-3xl text-white  text-2xl font-bold' >
          Đăng nhập 
          </button>
          </Link>
          <div className="mt-8 ml-20 mb-[211px] text-black text-xl ">Quên mật khẩu - Hỗ trợ</div>
        </div>
      </div>

      <div>        
        <div className='absolute top-0 bottom-auto right-0 z-0  hidden 2xl:block'>
          <Image src="/vector_1.png" alt=""width={1330} height={1000}></Image>
        </div>
      </div>

      <div className='absolute  top-[500px] right-60 z-1 hidden 2xl:block'>
        <Image src="/logonao.png" alt=""width={620} height={500}></Image>
      </div>
      <div className='z-10'>
        <AppFooter/>
      </div>
    </div>
  )
}


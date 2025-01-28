import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { HideEye, ShowEye } from "../../assets/icon/Icon"
import axios from 'axios'
import { API_REQUEST } from '../../hook/useEnv'
import { Context } from '../../context/Context'
import { Spin } from 'antd'
import { PATH } from "../../hook/usePath"

const SignIn = () => {
  const { setToken, setUserName } = useContext(Context)
  const [isLoading, setIsLoading] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [phone, setPhone] = useState("+998");
  const navigate = useNavigate()
  function handleSignIn(event) {
    event.preventDefault();
    setIsLoading(true)
    const data = {
      phone: event.target.phone.value,
      password: event.target.password.value
    }
    setTimeout(() => {
      axios.post(`${API_REQUEST}/user/login/`, data, {
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(res => {
        setToken(res.data.access);
        navigate(`${PATH.price}`)
      })
      setIsLoading(false)
    }, 1000);
  }

  // phone change
  function handlePhoneCHange(e) {
    const value = e.target.value;
    if (!value.startsWith("+998")) {
      setPhone("+998");
    } else {
      setPhone(value);
    }
  }
  // phone change
  return (
    <div className='w-[720px] border-[1px] border-black mx-auto mt-[40px] rounded-[15px]'>
      <div className='my-[150px] mx-[160px] text-center'>
        <p className='font-semibold text-[32px] leading-[43.2px] text-[#0D2079] mb-[46px]'>Tizimga kirish</p>
        <div className='flex items-center gap-10 mb-[44px]'>
          <NavLink to={PATH.signIn} className={`w-[180px] py-[20px] rounded-[12px] bg-white border-[1px] hover:scale-[1.1] duration-300 border-[#1E90FFCC] font-semibold text-[16px] leading-[19.2px] text-[#1E90FFCC]`}>Login</NavLink>
          <NavLink to={PATH.signUp} className={`w-[180px] py-[20px] rounded-[12px] bg-white border-[1px] border-[#1E90FFCC] hover:scale-[1.1] duration-300 font-semibold text-[16px] leading-[19.2px] text-[#1E90FFCC]`}>Ro’yxatdan o’tish</NavLink>
        </div>
        <form onSubmit={handleSignIn} className='w-full' autoComplete='off'>
          <label className='flex flex-col text-left mb-[22px]'>
            <span className='pl-[9px] font-light text-[15px] leading-[18.2px] text-[#828282]'>Ism-familiyangizni kiriting</span>
            <input onChange={(e) => setUserName(e.target.value)} required className='w-[400px] py-[20px] pl-[15px] pr-[4px] mt-[10px] rounded-[12px] bg-[#F1F1F1B2] outline-none border-[1px] border-transparent LoginInput' type="text" placeholder='Ism' aria-label='Your full name' />
          </label>
          <label className='flex flex-col text-left mb-[22px]'>
            <span className='pl-[9px] font-light text-[15px] leading-[18.2px] text-[#828282]'>Telefon raqamingizni kiriting</span>
            <input onChange={handlePhoneCHange} value={phone} required name='phone' className='w-[400px] py-[20px] pl-[15px] pr-[4px] mt-[10px] rounded-[12px] bg-[#F1F1F1B2] outline-none border-[1px] border-transparent LoginInput' type="tel" placeholder='+998' aria-label='Your number' />
          </label>
          <label className='flex flex-col text-left mb-[50px] relative'>
            <span className='pl-[9px] font-light text-[15px] leading-[18.2px] text-[#828282]'>Parol kiriting</span>
            <input required name='password' className='w-[400px] py-[20px] pl-[15px] pr-[4px] mt-[10px] rounded-[12px] bg-[#F1F1F1B2] outline-none border-[1px] border-transparent LoginInput' type={`${isPasswordVisible ? 'text' : 'password'}`} placeholder='******' aria-label='Your passowrd' />
            <div className='absolute right-[10px] bottom-[20px]'>
              {isPasswordVisible ?
                <button type='button' className='cursor-pointer' onClick={() => setIsPasswordVisible(false)}><ShowEye /></button>
                :
                <button type='button' className='cursor-pointer' onClick={() => setIsPasswordVisible(true)}><HideEye /></button>
              }
            </div>
          </label>
          <button type='submit' className='w-[400px] bg-[#1E90FFCC] hover:scale-[1.1] duration-300 mb-[24px] rounded-[8px] py-[18px] text-white font-semibold text-[20px] leading-[24px]'>{isLoading ? <Spin className='scale-[1.2] bg-transparent' size="large" /> : "Kirish"}</button>
          <a href='/' className='text-[#1E90FFCC] font-light text-[15px] leading-[18px]'>Login yoki parol <span className='text-black'>esingizdan chiqdimi?</span></a>
        </form>
      </div>
    </div>
  )
}

export default SignIn
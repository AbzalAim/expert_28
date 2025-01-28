import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Context } from '../context/Context'

const Profile = () => {
  const {userName} = useContext(Context)
  return (
    <>
      <div className='flex'>
        <div className='w-[22%] h-[92.8vh]'> <Navbar /> </div>
        <div className='w-[78%] h-[99vh] overflow-y-auto border-l-[1px] border-[#D3D3D3] pl-[68px] pt-[32px]'>
          <div>
            <h2 className='font-semibold text-[32px] leading-[38.73px] text-black'>Shaxsiy kabinet</h2>
            <div className='flex items-center gap-[45px] mt-[16px]'>
              <div className='rounded-full w-[129px] h-[129px] bg-gray-300'></div>
              {/* <img className='rounded-full w-[129px] h-[129px]' src="https://picsum.photos/300/200" alt="randow image" width={129} height={129} /> */}
              <div>
                <p className='font-semibold text-[40px] leading-[48.41px] text-black'>{userName}</p>
                <span className='font-semibold text-[16px] leading-[19.36px] text-[#979797]'>+998900294024</span>
              </div>
            </div>
            <div className='flex items-center gap-[30px] mt-[32px]'>
              <label className={`w-[123px] py-[8px] text-center border-[1px] border-[#1E90FFCC] rounded-[8px]`}>
                <span className='text-[#1E90FFCC]'>Change Avatar</span>
                <input className='border-none w-full h-full hidden' placeholder='Change Avatar' type='file' />
              </label>
              <button onClick={(e) => e.target.classList.add('isActive')} className={`${'isActive' ? "border-[#1E90FFCC] text-[#1E90FFCC]" : "text-[#949CB1] border-[#949CB1]"} w-[123px] py-[8px] text-center border-[1px] rounded-[8px]`}>One ID</button>
            </div>
          </div>
          <div className='mt-[32px] mb-[323px]'>
            <div className='flex items-center gap-[37px] mb-[38px]'>
              <p>Account Information</p>
              <span className='w-[709px] h-[3px] bg-[#F2F2F2]'></span>
            </div>
            <form className='flex items-center flex-wrap gap-[75px]'>
              <label className='flex flex-col'>
                <span className='font-semibold text-[20px] leading-[24.2px] text-[#949CB1]'>Ismingiz</span>
                <input className='w-[254px] py-[12px] pl-[15px] pr-[4px] mt-[10px] rounded-[12px] bg-transparent outline-none border-[2px] border-[#979797] focus:border-[#1E90FFCC] placeholder:text-black text-[#1E90FFCC]' type="text" placeholder='Katie' aria-label='Your Name' />
              </label>
              <label className='flex flex-col'>
                <span className='font-semibold text-[20px] leading-[24.2px] text-[#949CB1]'>Familiyangiz</span>
                <input className='w-[254px] py-[12px] pl-[15px] pr-[4px] mt-[10px] rounded-[12px] bg-transparent outline-none border-[2px] border-[#979797] focus:border-[#1E90FFCC] placeholder:text-black text-[#1E90FFCC]' type="text" placeholder='Pane' aria-label='Your surName' />
              </label>
              <label className='flex flex-col'>
                <span className='font-semibold text-[20px] leading-[24.2px] text-[#949CB1]'>Yoshingiz</span>
                <input className='w-[254px] py-[12px] pl-[15px] pr-[4px] mt-[10px] rounded-[12px] bg-transparent outline-none border-[2px] border-[#979797] focus:border-[#1E90FFCC] placeholder:text-black text-[#1E90FFCC]' type="num" placeholder='yosh kriting...' aria-label='Your age' />
              </label>
              <label className='flex flex-col'>
                <span className='font-semibold text-[20px] leading-[24.2px] text-[#949CB1]'>Jinsingiz</span>
                <select className='w-[254px] py-[12px] pl-[15px] pr-[4px] mt-[10px] rounded-[12px] bg-transparent outline-none border-[2px] border-[#979797] focus:border-[#1E90FFCC] placeholder:text-black text-[#1E90FFCC]'>
                  <option value="Erkak">Erkak</option>
                  <option value="Ayol">Ayol</option>
                </select>
              </label>
              <label className='flex flex-col'>
                <span className='font-semibold text-[20px] leading-[24.2px] text-[#949CB1]'>Viloyat</span>
                <select className='w-[254px] py-[12px] pl-[15px] pr-[15px] mt-[10px] rounded-[12px] bg-transparent outline-none border-[2px] border-[#979797] focus:border-[#1E90FFCC] placeholder:text-black focus:text-[#1E90FFCC]' type="select" placeholder='Katie' aria-label='Your Name' >
                  <option value="Toshkent">Andijon</option>
                  <option value="Toshkent">Buxoro</option>
                  <option value="Toshkent">Farg‘ona</option>
                  <option value="Toshkent">Jizzax</option>
                  <option value="Toshkent">Xorazm</option>
                  <option value="Toshkent">Namangan</option>
                  <option value="Toshkent">Navoiy</option>
                  <option value="Toshkent">Qashqadaryo</option>
                  <option value="Toshkent">Samarqand</option>
                  <option value="Toshkent">Sirdaryo</option>
                  <option value="Toshkent">Surxondaryo</option>
                  <option value="Toshkent">Toshkent viloyati</option>
                </select>
              </label>
              <label className='flex flex-col'>
                <span className='font-semibold text-[20px] leading-[24.2px] text-[#949CB1]'>Kadastr raqami </span>
                <input className='w-[254px] py-[12px] pl-[15px] pr-[4px] mt-[10px] rounded-[12px] bg-transparent outline-none border-[2px] border-[#979797] focus:border-[#1E90FFCC] placeholder:text-black text-[#1E90FFCC]' type="text" placeholder='15:16:02:09:01:0014:0001:058' aria-label='Your Name' />
              </label>
            </form>
            <div className='mt-[54px] flex items-center gap-[30px]'>
              <button className='w-[111px] py-[10px] text-center border-[1.21px] border-[#979797] text-[#979797] hover:text-white hover:bg-[#1E90FFCC] rounded-[8.48px]  duration-300 hover:border-transparent '>Bekor qilish</button>
              <button className='w-[111px] py-[10px] text-center border-[1.21px] border-[#979797] text-[#979797] hover:text-white hover:bg-[#1E90FFCC] rounded-[8.48px]  duration-300 hover:border-transparent '>Saqlash</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
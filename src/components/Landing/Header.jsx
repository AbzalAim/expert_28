import React, { useState } from 'react'
import { SiteLogo } from '../../assets/icon/Icon'
import { Link, useNavigate } from 'react-router-dom'
import { Select } from 'antd'
import { DownOutlined, GlobalOutlined } from '@ant-design/icons'
import { PATH } from '../../hook/usePath'


const Header = () => {
  const [activeNav, setActiveNav] = useState("/")
  const navigate = useNavigate()
  const NavbarList = [
    {
      id: 1,
      value: 'Asosiy',
      path: '/'
    },
    {
      id: 2,
      value: 'Foydalanish',
      path: '/foydalanish'
    },
    {
      id: 3,
      value: 'Narx',
      path: '/narx'
    },
    {
      id: 4,
      value: 'Bog’lanish',
      path: '/bog’lanish'
    },
  ]
  const languageOptions = [
    { value: 'Uzb', label: 'Uzb' },
    { value: 'Rus', label: 'Rus' }
  ];

  return (
    <header id='header' className='inline-block mt-[15px] z-30 w-full fixed top-0'>
      <div className='max-w-[1291px] mx-auto py-[21px] pr-[63px] pl-[54px] rounded-[46px] flex items-center justify-between'>
        <div className='flex items-center gap-[229px]'>
          <SiteLogo />
          <ul className='flex items-center gap-[34px]'>
            {NavbarList?.map(item => (
              <li key={item.id}>
                <Link onClick={() => setActiveNav(item.path)} className={`${activeNav == item.path && "text-black"} font-medium text-[14px] leading-[24px] text-[#414141] text-opacity-[60%]`} to={"#"}>{item.value}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center justify-between'>
          <Select
           suffixIcon={
            <div className="relative">
              <DownOutlined className="text-[#4ba6ffab] scale-[1.1] absolute left-[-80px] top-[1px] bottom-0" />
              <GlobalOutlined className="text-[#4ba6ffab] scale-[1.4] absolute right-0 top-0 bottom-0" />
            </div>
          }
          defaultValue={languageOptions[0].value}
          options={languageOptions}
          className="font-regular text-[14px] leading-[24px] placeholder:text-[#1E90FF] w-[100px] border-[2px] rounded-[8px] border-[#1E90FF] text-center"/>
          <div className='ml-[41px] flex items-center gap-[16px]'>
            <button onClick={() => navigate(`${PATH.signIn}`)} className='font-regular text-[16px] leading-[24px] text-[#414141]'>Log in</button>
            <button onClick={() => navigate(`${PATH.signUp}`)} className='w-[109px] py-[12px] text-center bg-[#1E90FF] rounded-[28px] text-white'>Sign up</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
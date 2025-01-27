import React, { useContext, useState } from 'react'
import { PATH } from "../hook/usePath"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { GuideIcon, LogAutIcon, NavAvaImg, NavHistoryImg, NavPriceImg } from "../assets/icon/Icon"
import { Modal } from 'antd'
import { Context } from '../context/Context'
import { CameraOutlined } from '@ant-design/icons'

const Navbar = () => {
  const { userName } = useContext(Context)
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false);
  const NavbarList = [
    {
      id: 1,
      title: "Mulk Baholash",
      path: PATH.price,
      img: <NavPriceImg />,
    },
    {
      id: 2,
      title: "Tarix",
      path: PATH.history,
      img: <NavHistoryImg />,
    },
    {
      id: 3,
      title: "Yo'riqnoma",
      path: PATH.guide,
      img: <GuideIcon />,
    },
    {
      id: 4,
      title: "Shaxsiy kabinet",
      path: PATH.profile,
      img: <NavAvaImg />,
    },
  ]

  function handleLogAutClick() {
    localStorage.clear()
    navigate(PATH.signIn)
    location.reload()
  }
  return (
    <div className='w-[100%] h-[100%] px-0 top-[56px] relative'>
      <ul className='absolute top-0 left-[25px] space-y-[11px]'>
        {NavbarList.map(item => (
          <li key={item.id} >
            <NavLink to={item.path} className={({ isActive }) => (isActive ? 'active w-[262px] border-none rounded-[8px] py-[6px] pl-[13px] flex items-center' : 'w-[262px] border-[1px] border-black rounded-[8px] py-[6px] pl-[13px] bg-white flex items-center')}>
              {item.img}
              <span className='w-[1px] h-[36px] bg-black ml-[15px] mr-[20px]'></span>
              <p>{item.title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className='absolute left-[25px] bottom-0'>
        <div className='w-[262px] px-5 pt-5 pb-[29px] rounded-tl-[15px] rounded-tr-[15px] border-[1px] border-[#000] border-b-0'>
          <p className='font-medium text-[14px] leading-[18.22px] text-black opacity-[30%]'>Shaxsiy kabinet</p>
          <div className='flex items-center gap-4 mt-[21px]'>
            <span className='rounded-full w-[48px] h-[48px] bg-gray-300'></span>
            {/* <img className='rounded-full w-[48px] h-[48px]' src="/" alt="randow image" width={48} height={48} /> */}
            <h3 className='font-medium text-[16px] leading-[20.83px] text-black'>{userName}</h3>
          </div>
          <button onClick={() => setOpenModal(true)} className='w-[226px] py-[14px] flex items-start pl-[20px] gap-[16px] mt-[40px] bg-[#1E90FFCC] rounded-[8px]'>
            <LogAutIcon />
            <p className='font-regular text-[16px] leading-[24px] text-white'>Chiqib ketish</p>
          </button>
        </div>
      </div>
      <Modal open={openModal} cancelText={`Bekor qilish`} okText={`Ha`} onCancel={() => setOpenModal(false)} onOk={handleLogAutClick} title={`Siz rostdanham Bu hisobdan chiqmoqchimisz ? `} />
    </div>
  )
}

export default Navbar
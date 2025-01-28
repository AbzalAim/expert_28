import React from 'react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '../../assets/icon/Icon'

const Footer = () => {
    return (
        <div className='p-[80px] bg-[#E8F7FF] flex items-center justify-between'>
            <div className='flex items-center gap-[37px]'>
                <div>
                    <strong className='font-semibold text-[14px] leading-[21px] text-[#0F172A]'>About E-Expert</strong>
                    <ul className='flex flex-col gap-[11px] mt-[12px]'>
                        <li className='font-semibold text-[14px] leading-[21px] text-[#9E9E9E]'>About E-Expert</li>
                        <li className='font-semibold text-[14px] leading-[21px] text-[#9E9E9E]'>About E-Expert</li>
                        <li className='font-semibold text-[14px] leading-[21px] text-[#9E9E9E]'>About E-Expert</li>
                    </ul>
                </div>
                <div>
                    <strong className='font-semibold text-[14px] leading-[21px] text-[#0F172A]'>Our Services</strong>
                    <ul className='flex flex-col gap-[11px] mt-[12px]'>
                        <li className='font-semibold text-[14px] leading-[21px] text-[#9E9E9E]'>About E-Expert</li>
                        <li className='font-semibold text-[14px] leading-[21px] text-[#9E9E9E]'>About E-Expert</li>
                        <li className='font-semibold text-[14px] leading-[21px] text-[#9E9E9E]'>About E-Expert</li>
                    </ul>
                </div>
                <div>
                    <strong className='font-semibold text-[14px] leading-[21px] text-[#0F172A]'>Pricing Plans</strong>
                    <ul className='flex flex-col gap-[11px] mt-[12px]'>
                        <li className='font-semibold text-[14px] leading-[21px] text-[#9E9E9E]'>About E-Expert</li>
                        <li className='font-semibold text-[14px] leading-[21px] text-[#9E9E9E]'>About E-Expert</li>
                        <li className='font-semibold text-[14px] leading-[21px] text-[#9E9E9E]'>About E-Expert</li>
                    </ul>
                </div>
            </div>
            <div>
                <ul className='flex items-center justify-end gap-[32px] mb-[53px]'>
                    <li><TwitterIcon /></li>
                    <li><FacebookIcon /></li>
                    <li><InstagramIcon /></li>
                    <li><LinkedinIcon /></li>
                </ul>
                <p className='font-regular text-[14px] leading-[20px] text-end text-[#475569]'>Yagnaobod, mumtoz mahallasi, 17 uy </p>
                <p className='font-regular text-[14px] leading-[20px] text-[#475569]'>© E-Expert 2023, Your Trusted Property Price Estimator</p>
            </div>
        </div>
    )
}

export default Footer
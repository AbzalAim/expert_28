import React from 'react'
import { ValuationItem1Icon, ValuationItem2Icon, ValuationItem3Icon, ValuationItem4Icon } from '../../assets/icon/Icon'

const Valuation = () => {
  return (
    <section className='mb-[177px] Valuation'>
        <div className='w-[1291px] mx-auto pb-[23px] flex justify-between gap-[36px]'>
            <h2 className='w-[373px] font-bold text-[36px] leading-[40px] mt-[40px]'>Aniq qulfni ochish Mulkni baholash</h2>
            <ul className='w-[860px] flex flex-wrap gap-[6px]'>
                <li className='w-[410px] py-[37px] pl-[27px] border-[2px] border-white rounded-[10px]'>
                    <ValuationItem1Icon/>
                    <div className='flex flex-col gap-[5px] mt-8'>
                        <h3 className='font-semibold text-[18px] leading-[28px] text-[#0F172A]'>Har tomonlama tahlil</h3>
                        <p className='font-regular text-[16px] leading-[24px] text-[#334155]'>Aniq mulk uchun ma'lumotlarga asoslangan yondashuvimizdan foydalaning baholash.</p>
                    </div>
                </li>
                <li className='w-[410px] py-[37px] pl-[27px] border-[2px] border-white rounded-[10px]'>
                    <ValuationItem2Icon/>
                    <div className='flex flex-col gap-[5px] mt-8'>
                        <h3 className='font-semibold text-[18px] leading-[28px] text-[#0F172A]'>Foydalanuvchi uchun qulay interfeys</h3>
                        <p className='font-regular text-[16px] leading-[24px] text-[#334155]'>Bizning intuitiv platformamizni osonlik bilan boshqaring.</p>
                    </div>
                </li>
                <li className='w-[410px] py-[37px] pl-[27px] border-[2px] border-white rounded-[10px]'>
                    <ValuationItem3Icon/>
                    <div className='flex flex-col gap-[5px] mt-8'>
                        <h3 className='font-semibold text-[18px] leading-[28px] text-[#0F172A]'>Ekspert fikrlari</h3>
                        <p className='font-regular text-[16px] leading-[24px] text-[#334155]'>Sanoat ekspertlaridan qimmatli tushunchalar oling.</p>
                    </div>
                </li>
                <li className='w-[410px] py-[37px] pl-[27px] border-[2px] border-white rounded-[10px]'>
                    <ValuationItem4Icon/>
                    <div className='flex flex-col gap-[5px] mt-8'>
                        <h3 className='font-semibold text-[18px] leading-[28px] text-[#0F172A]'>Har tomonlama tahlil</h3>
                        <p className='font-regular text-[16px] leading-[24px] text-[#334155]'>Aniq mulk uchun ma'lumotlarga asoslangan yondashuvimizdan foydalaning baholash.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Valuation
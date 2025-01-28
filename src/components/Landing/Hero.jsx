import React from 'react'
import HeroImg from "../../assets/images/HeroImg.png"
const Hero = () => {
    return (
        <section className='my-[150px] hero'>
            <div className='w-[1291px] mx-auto flex items-center justify-between'>
                <div className='text-center w-[589px]'>
                    <h1 className='font-semibold text-[45px] leading-[60px] mb-[28px]'>E-Expertga xush kelibsiz, sizning mulkni baholash o'yicha hamkor</h1>
                    <p className='w-[377px] mx-auto font-regular text-[18px] leading-[23px]'>We specialize in property prices valuation for flats, houses, and cars. Let's find the true value together.</p>
                </div>
                <img className='w-[672px] h-[563px]' src={HeroImg} alt="HeroImg" width={672} height={563} />
            </div>
        </section>
    )
}

export default Hero
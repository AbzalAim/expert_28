import React from 'react'
import worksItem1 from "../../assets/images/worksItem1.png"
import worksItem2 from "../../assets/images/WorksItem2.png"
import worksItem3 from "../../assets/images/worksItem3.png"
import worksItem4 from "../../assets/images/worksItem4.png"
import WorksStrelka from "../../assets/images/WorksStrelka.svg"
import BottomStrelka from "../../assets/images/BottomStrelka.svg"
const Works = () => {
    return (
        <section  className='mb-[220px] works'>
            <div className='w-[1141px] mx-auto'>
                <div className='relative'>
                    <h2 className='font-bold text-[36px] leading-[40px] text-[#0F172A] text-center'>Qanday ishlaydi</h2>
                    <div className='absolute top-0 left-[110px] w-[278px] rounded-[13px] worksCard pb-[34px] bg-[#ABD5FF]'>
                        <img className='mx-auto' src={worksItem1} alt="worksItem1" width={192} height={192} />
                    </div>
                    <div className='absolute top-0 right-[30px] w-[278px] rounded-[13px] worksCard pb-[34px] bg-[#ABD5FF]'>
                        <img className='mx-auto' src={worksItem2} alt="worksItem2" width={192} height={192} />
                    </div>
                    <div className='absolute top-[38%] left-0 text-center'>
                        <p className='font-regular text-[36px] leading-[40px] text-black mb-[23px]'>Ma’lumot yuklash</p>
                        <img className='mx-auto mb-[25px]' src={BottomStrelka} alt="BottomStrelka" width={10} height={59} />
                        <p className='font-regular text-[36px] leading-[40px] text-black'>Kochar-kochmas mulk baholash</p>
                    </div>
                    <img className='mx-auto mt-[91px] block' src={WorksStrelka} alt="WorksStrelka" width={265} height={514} />
                    <div className='absolute left-[110px] bottom-[-42px] w-[278px] rounded-[13px] worksCard pb-[34px] bg-[#ABD5FF]'>
                        <img className='mx-auto' src={worksItem3} alt="worksItem3" width={192} height={192} />
                    </div>
                    <div className='absolute right-[30px] bottom-[-42px] w-[278px] rounded-[13px] worksCard pb-[34px] bg-[#ABD5FF]'>
                        <img className='mx-auto' src={worksItem4} alt="worksItem4" width={192} height={192} />
                    </div>
                    <div className='absolute top-[38%] right-0 text-center'>
                        <p className='font-regular text-[36px] leading-[40px] text-black mb-[23px]'>Tolovni amalga oshirish</p>
                        <img className='mx-auto mb-[25px]' src={BottomStrelka} alt="BottomStrelka" width={10} height={59} />
                        <p className='font-regular text-[36px] leading-[40px] text-black'>Rasmiy ma’lumot olish</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works
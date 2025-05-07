import Image from "next/image"
import experience from '../../experience.json'


const Experience = () => {
    return(
        <div>
            <h1 className='text-[30px] lg:text-[38px] text-blue-500 font-[600]'>Experience</h1>
            {
                experience?.map((item)=>{
                    return(
                        <div className='mt-[30px] border-b pb-[20px]'>
                            <div className='flex'>
                                <div>
                                    <Image
                                        src={'/experience.png'}
                                        alt={'education'}
                                        width={150}
                                        height={150}
                                    />
                                </div>
                                <div className='ml-[10px]'>
                                        <p className='text-[14px] text-blue-500 font-[700]'>{item.duration}</p>
                                        <p className='text-[20px] lg:text-[24px] font-[600]'>{item.degree}</p>
                                        <p className='lg:text-[18px] font-[500]'>{item.school}</p>
                                        <p className='text-[#999] font-[300] mt-[10px]'>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
           
        </div>
    )
}

export default Experience;
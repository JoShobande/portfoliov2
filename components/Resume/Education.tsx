import Image from "next/image"
import education from '../../education.json'


const Education = () => {
    return(
        <div>
            <h1 className='text-[30px] lg:text-[38px] text-blue-500 font-[600]'>Education</h1>
            {
                education?.map((item)=>{
                    return(
                        <div className='mt-[30px] border-b pb-[20px]'>
                            <div className='flex'>
                                <div>
                                    <Image
                                        src={'/education.png'}
                                        alt={'education'}
                                        width={150}
                                        height={150}
                                    />
                                </div>
                                <div className='ml-[10px]'>
                                        <p className='text-[14px] text-blue-500 font-[700]'>{item.duration}</p>
                                        <p className='text-[20px] lg:text-[24px] font-[600]'>{item.degree}</p>
                                        <p className='lg:text-[18px] font-[500]'>{item.school}</p>
                                        <p className='text-[16px] text-[#999] font-[300] mt-[10px]'>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
           
        </div>
    )
}

export default Education;
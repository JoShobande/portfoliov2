import styles from './hero.module.scss'

const Hero = () => {
    return(
        <section className='absolute top-0'>
           <div className='grid grid-cols-2 h-screen w-screen relative'>
                <div className='bg-[#3e64ff] opacity-[0.1] z-[999]'/>
                <div/>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <div className='text-center'>
                        <h1 className='text-[15px] lg:text-[18px] font-bold text-[#0171BC] tracking-[5px]'>HEY! I AM</h1>
                        <h1 className='text-[38px] lg:text-[58px] font-bold mt-[10px] mb-[10px]'>Josephine Shobande</h1>
                        <h1 className='text-[28px] font-bold'>I'm a {''}
                            <span className={`underline decoration-2 decoration-[#0171BC]]-500 text-[#0171BC] ${styles['typewriter']}`}>
                                Software Engineer.
                            </span>
                        </h1>
                    </div>
                </div>
           </div>
          
        </section>
    )
}

export default Hero;
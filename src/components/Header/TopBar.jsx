import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"


const TopBar = () => {

    const [dillerAcikMi, setDillerAcikMi] = useState(false);

    const dilleriGoster = () => {
        setDillerAcikMi(!dillerAcikMi);
        console.log(dillerAcikMi);
        // Burada dilleri gösterme işlemi yapılacak 
    }
    const paralariGoster = () => {
        console.log("Paraları göster");
    }

    return (
        <div className=' flex justify-between items-center  shadow px-6'>
            <div className='flex justify-start items-center p2 gap-5 text-sm '>
                <a href="/">Hesap</a>
                <a href="/">Sipariş Takip</a>
                <a href="/">Destek</a>
            </div>
            <div className=' flex justify-start items-center p-2.5 gap-5 text-sm  select-none relative'>
                <div onClick={dilleriGoster} className='flex justify-center  cursor-pointer items-center gap-1' href="/">
                    <img src="/img/turkiye-icon.png" alt="" className='size-6' />Türkçe
                    <img src="/img/arrow-down-icon.png" alt="" className='size-3' />
                    <AnimatePresence>
                        {dillerAcikMi && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                className='absolute bg-amber-300 p-10 top-full left-0'>
                                Diller
                            </motion.div>)}
                    </AnimatePresence>
                </div>
                <div onClick={paralariGoster} className='flex justify-center  cursor-pointer items-center gap-1' href="/">
                    <img src="/img/currency-icon.png" alt="" className='size-6' />
                    TRY
                    <img src="/img/arrow-down-icon.png" alt="" className='size-3' />

                </div>
            </div>
        </div>
    )
}

export default TopBar
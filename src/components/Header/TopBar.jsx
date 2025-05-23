import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from "motion/react"


const TopBar = () => {

    const [dillerAcikMi, setDillerAcikMi] = useState(false);
    const [paralarAcikMi, setParalarAcikMi] = useState(false);

    const dillerRef = useRef(null);
    const paralarRef = useRef(null);

    useEffect(() => {

        const disariTiklanildiginda = (event) => {
            if (dillerRef.current && !dillerRef.current.contains(event.target) && paralarRef.current && !paralarRef.current.contains(event.target)) {
                setDillerAcikMi(false);
                setParalarAcikMi(false);
            }


        };

        document.addEventListener("mousedown", disariTiklanildiginda);

        return () => {
            document.removeEventListener("mousedown", disariTiklanildiginda);
        }

    }, [])


    const dilleriGoster = () => {
        setDillerAcikMi(!dillerAcikMi);
        paralarAcikMi ? setParalarAcikMi(false) : null;
        console.log(dillerAcikMi);
        // Burada dilleri gösterme işlemi yapılacak 
    }
    const paralariGoster = () => {
        setParalarAcikMi(!paralarAcikMi);
        dillerAcikMi ? setDillerAcikMi(false) : null;
        console.log(paralarAcikMi);
    }

    return (
        <div className=' flex justify-between items-center shadow px-6'>
            <div className='flex justify-start items-center gap-5 text-sm '>
                <a href="/" className='cursor-pointer select-none' >Hesap</a>
                <a href="/" className='cursor-pointer select-none'>Sipariş Takip</a>
                <a href="/" className='cursor-pointer select-none'>Destek</a>
            </div>
            <div className=' flex justify-start items-center  gap-5 text-sm  select-none relative'>
                <div
                    ref={dillerRef}
                    onClick={dilleriGoster} className='flex justify-center  cursor-pointer items-center gap-1' href="/p-2.5">
                    <img src="/img/turkiye-icon.png" alt="" className='size-6' />Türkçe
                    <img src="/img/arrow-down-icon.png" alt="" className='size-3' />
                    <AnimatePresence>
                        {dillerAcikMi && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                className='absolute shadow   top-full flex flex-col '>
                                <span className='py-1 pl-2 pr-2 flex justify-start 
                                hover:bg-gray-200 transition-colors items-center gap-1'>          <img src="/img/turkiye-icon.png" alt="" className='w-5' />Türkçe</span>
                                <span className='py-1 pl-2 pr-2 flex justify-start items-center gap-1  hover:bg-gray-200 transition-colors'>          <img src="/img/usa-icon.png" alt="" className='w-5' />English</span>
                                <span className='py-1 pl-2 pr-4 flex justify-start items-center gap-1  hover:bg-gray-200 transition-colors'>          <img src="/img/french-icon.png" alt="" className='w-5' />Français</span>
                                <span className='py-1 pl-2 pr-2 flex justify-start items-center gap-1  hover:bg-gray-200 transition-colors'>          <img src="/img/germany-icon.png" alt="" className='w-5' />Deutsch</span>
                            </motion.div>)}
                    </AnimatePresence>
                </div>
                <div
                    ref={paralarRef}
                    onClick={paralariGoster} className='flex justify-center cursor-pointer relative items-center p-2.5 gap-1' href="/">
                    <img src="/img/currency-icon.png" alt="" className='size-6' />TRY
                    <img src="/img/arrow-down-icon.png" alt="" className='size-3' />
                    <AnimatePresence>
                        {paralarAcikMi && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                className='absolute shadow   top-full flex flex-col '>
                                <span className='py-1 pl-2 pr-2 flex justify-start 
                                hover:bg-gray-200 transition-colors items-center gap-1'>          <img src="/img/turkiye-icon.png" alt="" className='w-5' />TRY</span>
                                <span className='py-1 pl-2 pr-2 flex justify-start items-center gap-1  hover:bg-gray-200 transition-colors'>          <img src="/img/usa-icon.png" alt="" className='w-5' />USD</span>

                                <span className='py-1 pl-2 pr-2 flex justify-start items-center gap-1  hover:bg-gray-200 transition-colors'>          <img src="/img/europe-icon.png" alt="" className='w-5' />EUR</span>
                            </motion.div>)}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default TopBar
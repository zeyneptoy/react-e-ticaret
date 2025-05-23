import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from "motion/react"


const TopBar = () => {

    const [dillerAcikMi, setDillerAcikMi] = useState(false);
    const [paralarAcikMi, setParalarAcikMi] = useState(false);

    const [seciliDil, setSeciliDil] = useState("Türkçe");
    const [seciliPara, setSeciliPara] = useState("TRY");

    const dillerRef = useRef(null);
    const paralarRef = useRef(null);


    useEffect(() => {
        const kayitliDil = localStorage.getItem("secilenDil");
        const kayitliPara = localStorage.getItem("secilenPara");

        if (kayitliDil) {
            setSeciliDil(kayitliDil);
        } else {
            localStorage.setItem("secilenDil", "Türkçe");
        }

        if (kayitliPara) {
            setSeciliPara(kayitliPara);
        } else {
            localStorage.setItem("secilenPara", "TRY");
        }
    }, [])



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

    const diliSec = (dil) => {
        setSeciliDil(dil);
        localStorage.setItem("secilenDil", dil);
        console.log(dil);
    };

    const paraSec = (para) => {
        setSeciliPara(para);
        localStorage.setItem("secilenPara", para);
        console.log(para);
    }

    return (
        <div className=' flex justify-center md:justify-between items-center shadow px-6'>
            <div className='justify-start items-center md:flex hidden  gap-5 text-sm '>
                <a href="/" className='cursor-pointer select-none' >Hesap</a>
                <a href="/" className='cursor-pointer select-none'>Sipariş Takip</a>
                <a href="/" className='cursor-pointer select-none'>Destek</a>
            </div>
            <div className=' flex justify-start items-center  gap-5 text-sm  select-none relative'>
                <div
                    ref={dillerRef}
                    onClick={dilleriGoster} className='flex justify-center  cursor-pointer items-center gap-1' href="/p-2.5">
                    <img src={`/img/${seciliDil}-icon.png`} alt="" className='size-6' />{seciliDil}
                    <img src="/img/arrow-down-icon.png" alt="" className='size-3' />
                    <AnimatePresence>
                        {dillerAcikMi && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                className='absolute shadow   top-full flex flex-col '>
                                <span onClick={() => diliSec("Türkçe")} className='py-1 pl-2 pr-2 flex justify-start 
                                hover:bg-gray-200 transition-colors items-center gap-1'> <img src="/img/Türkçe-icon.png" alt="" className='w-5' />Türkçe</span>
                                <span onClick={() => diliSec("English")} className='py-1 pl-2 pr-2 flex justify-start items-center gap-1  hover:bg-gray-200 transition-colors'>          <img src="/img/English-icon.png" alt="" className='w-5' />English</span>
                                <span onClick={() => diliSec("Français")} className='py-1 pl-2 pr-4 flex justify-start items-center gap-1  hover:bg-gray-200 transition-colors'>          <img src="/img/Français-icon.png" alt="" className='w-5' />Français</span>
                                <span onClick={() => diliSec("Deutsch")} className='py-1 pl-2 pr-2 flex justify-start items-center gap-1  hover:bg-gray-200 transition-colors'>          <img src="/img/Deutsch-icon.png" alt="" className='w-5' />Deutsch</span>
                            </motion.div>)}
                    </AnimatePresence>
                </div>
                <div
                    ref={paralarRef}
                    onClick={paralariGoster} className='flex justify-center cursor-pointer relative items-center p-2.5 gap-1' href="/">
                    <img src={`/img/${seciliPara}-icon.png`} alt="" className='size-6' />{seciliPara}
                    <img src="/img/arrow-down-icon.png" alt="" className='size-3' />
                    <AnimatePresence>
                        {paralarAcikMi && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                className='absolute shadow   top-full flex flex-col '>
                                <span onClick={() => paraSec("TRY")} className='py-1 pl-2 pr-2 flex justify-start 
                                hover:bg-gray-200 transition-colors items-center gap-1'>          <img src="/img/TRY-icon.png" alt="" className='w-5' />TRY</span>
                                <span onClick={() => paraSec("USD")} className='py-1 pl-2 pr-2 flex justify-start items-center gap-1  hover:bg-gray-200 transition-colors'>          <img src="/img/USD-icon.png" alt="" className='w-5' />USD</span>

                                <span onClick={() => paraSec("EUR")} className='py-1 pl-2 pr-2 flex justify-start items-center gap-1  hover:bg-gray-200 transition-colors'>          <img src="/img/EUR-icon.png" alt="" className='w-5' />EUR</span>
                            </motion.div>)}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default TopBar
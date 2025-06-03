import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';

const MiddleBar = () => {
    const [menuAcikMi, setmenuAcikMi] = useState(false);
    const [kategoriMiAcik, setKategoriMiAcik] = useState(true);
    const [menuMuAcik, setMenuMuAcik] = useState(false);

    const menuAc = () => {
        setmenuAcikMi(!menuAcikMi);
    };

    return (
        <div className="px-2 py-2 flex justify-between items-center shadow-md relative">
            <img
                onClick={menuAc}
                src="/img/menu.png"
                alt=""
                className="size-10 cursor-pointer"
            />
            <img src="/img/logo.png" alt="" />
            <img src="/img/shopping-bag.png" alt="" className="size-10" />

            <AnimatePresence>
                {menuAcikMi && (
                    <>
                        <motion.div
                            onClick={() => setmenuAcikMi(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="backdrop-blur-xs fixed inset-0 z-10 bg-black/20"
                        ></motion.div>

                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            className={` fixed left-0 top-0 z-20 bg-white w-[85vw] h-screen p-5 flex flex-col gap-5 `}
                        >
                            <div className="flex justify-between ">
                                <div className="flex gap-3 justify-start w-full">
                                    <img src="/img/profile.png" className="size-7" alt="" />
                                    <div className="relative">
                                        <span className="absolute text-xs bg-[#fdb2bb] w-4 h-4 rounded-full text-color flex justify-center items-center -right-2 -top-1">
                                            0
                                        </span>
                                        <img src="/img/heart.png" className="size-7" alt="" />
                                    </div>
                                </div>

                                <img
                                    onClick={() => setmenuAcikMi(false)}
                                    src="/img/close.png"
                                    className="size-5"
                                    alt=""
                                />
                            </div>

                            <div className="flex justify-center items-center relative">
                                <input
                                    type="text"
                                    className="border rounded-md border-gray-200 outline-0  py-1 px-2 w-full pr-12 placeholder:text-xs "
                                    placeholder="Bi'şeyler ara..."
                                />

                                <button className="bg-[#fdb2bb] py-2 px-2 border rounded-br-md rounded-tr-md border-[[#fdb2bb]] absolute right-0 shadow-2xl  shadow-amber-200 text-xs text-amber-50">
                                    Ara
                                </button>
                            </div>

                            <div className="flex gap-3  text-gray-500 items-center">
                                <span
                                    onClick={() => {
                                        setMenuMuAcik(false);
                                        setKategoriMiAcik(true);
                                    }}
                                    className={`${kategoriMiAcik ? 'text-black' : 'text-gray-150'}`}
                                >
                                    Kategoriler
                                </span>
                                <span>|</span>
                                <span
                                    onClick={() => {
                                        setKategoriMiAcik(false);
                                        setMenuMuAcik(!menuMuAcik);
                                    }}
                                    className={`${menuMuAcik ? 'text-black' : 'text-gray-150'}`}
                                >
                                    Menü
                                </span>
                            </div>

                            {kategoriMiAcik && <div>Kategori</div>}
                            {menuMuAcik && <div>Menü</div>}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MiddleBar;

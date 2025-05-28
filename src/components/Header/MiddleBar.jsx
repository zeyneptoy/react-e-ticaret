import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';

const MiddleBar = () => {
    const [menuAcikMi, setmenuAcikMi] = useState(false);

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
                            className={` fixed left-0 top-0 z-20 bg-white w-[85vw] h-screen `}
                        >
                            <div className="flex justify-between items-center p-4">

                                <div className='flex gap-3 justify-start w-full'>
                                    <img
                                        src="/img/profile.png"
                                        className="size-7"
                                        alt=""
                                    />
                                    <img
                                        src="/img/heart.png"
                                        className="size-7"
                                        alt=""
                                    />
                                </div>

                                <img
                                    onClick={() => setmenuAcikMi(false)}
                                    src="/img/close.png"
                                    className="size-5"
                                    alt=""
                                />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MiddleBar;

import React, { useState } from 'react'

const MiddleBar = () => {

    const [menuAcikMi, setmenuAcikMi] = useState(false);

    const menuAc = () => {
        setmenuAcikMi(!menuAcikMi);

    }

    return (
        <div className='px-2 py-2 flex justify-between items-center shadow-md relative'>
            <img onClick={menuAc} src="/img/menu.png" alt="" className='size-10 cursor-pointer' />
            <img src="/img/logo.png" alt="" />
            <img src="/img/shopping-bag.png" alt="" className='size-10' />


            <div className={
                `absolute left-0 top-0 bg-red-300 w-screen h-screen  ${!menuAcikMi ?"-translate-x-full" : ""}  `
            }>MENU</div>
        </div>
    )
}

export default MiddleBar
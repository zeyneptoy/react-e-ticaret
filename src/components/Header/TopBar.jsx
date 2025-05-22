import React from 'react'

const TopBar = () => {
    return (
        <div className=' flex justify-between items-center p-3 shadow px-6'>
            <div className='flex justify-start items-center p2 gap-5 text-sm '>
                <a href="/">Hesap</a>
                <a href="/">Sipariş Takip</a>
                <a href="/">Destek</a>
            </div>
            <div className=' flex justify-start items-center p-2 gap-5 text-sm'>
                <a className='flex justify-center items-center gap-1' href="/">
                    <img src="/img/turkiye-icon.png" alt="" className='size-6' />Türkiye
                    <img src="/img/arrow-down-icon.png" alt="" className='size-3' />
                </a>
                <a className='flex justify-center items-center gap-1' href="/">
                    <img src="/img/currency-icon.png" alt="" className='size-6' />
                    TRY
                    <img src="/img/arrow-down-icon.png" alt="" className='size-3' />

                </a>
            </div>
        </div>
    )
}

export default TopBar
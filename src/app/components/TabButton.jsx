import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonclasses = active ? 'text-white border-b border-purple-500' : 'text-[ADB7BE] border-b border-purple-500'
    return (
        <div>  <button onClick={selectTab}>
            <p className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500'> </p>
            {children}</button>
        </div>
    )
}

export default TabButton
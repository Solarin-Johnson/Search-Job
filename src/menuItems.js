import React from "react";

function MenuItems({ items }) {
    const grid = {
        gridTemplateColumns: `repeat(${items.length}, 1fr)`,
    }
    const home = () => {
        window.location.reload()
    }
    return (
        <div className='menu' style={grid}>
            {items.map((item, index) => (
                <div onClick={home} key={index} className='menuItems'>{item}</div>
            ))
            }
        </div>

    )
}
export default MenuItems
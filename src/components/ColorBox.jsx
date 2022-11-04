import React, { useState } from 'react';

const getRandomColor = () => {
    let lists =  ['green', 'red', 'black', 'yellow'];
    localStorage.setItem('color', lists[Math.trunc(Math.random()*4)]);

    return localStorage.getItem('color');
}

function ColorBox() {
    function handleChangeColor() {
        const newColor = getRandomColor();
        setColor(newColor);
    }

    const [color, setColor] = useState(() => {
        return localStorage.getItem('color');
    });
    return (
        <div className="color-box" style={{backgroundColor: color}} onClick={handleChangeColor}>
            COLOR BOX
        </div>


    );
}

export default ColorBox;
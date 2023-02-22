import React, {useState} from 'react';
import stylesInput from "../CSS/input.module.css"
import stylesBtn from "../CSS/button.module.css"

const FormControled = ({getWeather}) => {
    const [city, setCity] = useState("")
    const handleClick = () => {
        getWeather(city);
        setCity("")
    }

    const handleChange = e => {
        setCity(e.target.value)
    }
    return (
        <div>
            <input onChange={handleChange} type='text' value={city} placeholder='City' className={stylesInput.input}/>
            <button onClick={handleClick} className={stylesBtn.button}>Get weather </button>
        </div>
    );
}

export default FormControled;
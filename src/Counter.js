import {useState} from 'react';
import Select from "./select";

function Counter () {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        let currentValue = e.target.value;
        setInputValue(currentValue);
    }

    const onPlusBtn = () => {
        let select = document.getElementById('select');
        let shagUser = +select.value;
        setCounter(counter + shagUser);
    }

    const onMinusBtn = () => {
        let select = document.getElementById('select');
        let shagUser = +select.value;
        setCounter(counter - shagUser);
    }

    const resetCounter = () => {
        setCounter(0);
    }

    const cleanData = () => {
        setInputValue('');
    }

    return <div>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button className="plus" onClick={onPlusBtn}>Plus</button>
            <button className="minus" onClick={onMinusBtn}>Minus</button>
            <div>
                <button className="reset" onClick={resetCounter}>Reset</button>
            </div>
            <div>
                <Select/>
            </div>
            <div className="div-form">
                <form>
                    <input onChange={onInputChange} className="input-field" type="text" placeholder="input something..."/>
                    <button className="clean-btn" onClick={cleanData}>Clean</button>
                </form>
                <h2 className="form-value">Your data: {inputValue}</h2>
            </div>
        </div>
}

export default Counter;
import {useState} from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div className={classes.btn}>
            <div>Result: {count}</div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    )
}
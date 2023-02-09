import { useState } from "react";
import classes from './Counter.module.sass';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <button onClick={increment}>increment</button>
            <div className={classes.countValue}>{count}</div>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}
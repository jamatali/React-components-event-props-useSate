import { useState } from "react"

export default function Counter (props) {
    const [count, setCount] = useState(0);
    const countIncree = () => {
        setCount(count + 1);
    }
    const countDecr = () => {
        setCount(count - 1);
    }

    return(
        <>
        <h1>{props.x}</h1>
        <button onClick={countIncree}>Increment</button>
        <p>{count}</p>
        <button onClick={countDecr}>Decrement</button>
        </>
    )

}
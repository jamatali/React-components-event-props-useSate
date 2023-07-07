import { useState } from "react";
import Counter from "../../components/counter/Counter";

export default function Home () {
    const [text, setText] = useState("");
    const [input, setInput] = useState([]);
   const handleChange = (event) => {
    setText(event.target.value);
   }
   const handleClick = (dataChange) => {
        dataChange = [...input];
        dataChange.push(text);
        setInput(dataChange);
        
   }


    return (
    <>
    <input type="text" id="intext" placeholder="Enter text" onChange={handleChange}/>
    <button type="submit" onClick={handleClick}>submit</button>
     {input.map((h)=>{
        return(
            <Counter x = {h} />
        )
     })}
    </>
   
    )
}

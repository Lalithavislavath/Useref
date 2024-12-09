import { useState, useRef, useEffect } from "react";
 
function Filter() {
    const [inputValue, setInputValue] = useState(0)
    const inputRef = useRef(null)
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
 

    return (
        <div>
          <input type="number"  ref={inputRef}  value={inputValue} onChange={handleChange} placeholder="Write a divisor" />
         <p>Current Input Value: {inputValue}</p>
        </div>
    )
}
 
export default Filter;
import {useState} from 'react'

function Counter () {
    const[count, setCount] = useState (0)

    const handleAdd = () => {
setCount(count+1)
    }

    const handleRest = () => {
        setCount(count-1)
            }

return(
    <div>
        <p>{count}</p>
        <button onClick={handleAdd}>
        sumar
        </button>
        <button onClick={handleRest}>
        restar
        </button>
    </div>
)

}

export default Counter
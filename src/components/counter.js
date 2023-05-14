import {useState} from 'react'

const MyCounter = () => {
  let [count, setNumOfCount] = useState(0);
   let Clicks = ()=>{setNumOfCount(count + 1)}
   let decrease = ()=>{setNumOfCount(count - 1)}
   let reset = ()=>{setNumOfCount(count = 0)}

   return(
    <div>
        <p>Number of Clicks: {count}</p>
        <button onClick={Clicks}>Click Me</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
    </div>
   )

}
export default MyCounter
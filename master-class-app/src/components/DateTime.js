import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            <center>
            <h2> Time : {date.toLocaleTimeString()}</h2>
            <h2> Date : {date.toLocaleDateString()}</h2>
</center>
        </div>
    )
}

export default DateTime
import React, { useState, useEffect } from 'react'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    dateSpace: {
        // padding: theme.spacing(1)
        // spacing: {8},

         margin: "40px",
        padding: "1px"

    }
    }));

 const DateTime = () => {

  const classes = useStyles();

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            <center className={classes.dateSpace}>
            <h2> Time : {date.toLocaleTimeString()}</h2>
            <h2> Date : {date.toLocaleDateString()}</h2>
</center>
        </div>
    )
}

export default DateTime
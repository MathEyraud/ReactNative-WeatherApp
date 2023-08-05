import { useEffect, useState } from "react"
import { nowtoHHMM } from "../../services/date-service"
import { TextPrimary } from "../TextPrimary"
import { stylesClock } from "./style"

export function Clock(){

    const [time,setTime] = useState(nowtoHHMM());

    useEffect(()=> {

        const interval = setInterval(()=>{
            setTime(nowtoHHMM())
        },1000);

        return () => {
            clearInterval(interval);
        };

    },[])

    return (

        <>

            <TextPrimary>{nowtoHHMM()}</TextPrimary>

        </>

    )
}
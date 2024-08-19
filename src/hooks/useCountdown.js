import { useEffect, useState } from "react";


export default function useCountdown (endDate) {
    

    const [remainTime, setRemainTime] = useState({
        'days' : '00',
        'hours' : '00',
        'minutes' : '00',
        'seconds' : '00'
    })

    useEffect(() => {

        const interval = setInterval(()=>{

            const today = new Date()
            const diffTime = endDate - today;

            if (diffTime <= 0) {
                // If the countdown is complete
                return {
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00',
                };
            }

            const days = Math.floor(diffTime / (1000 * 60 * 60 * 24))
            const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((diffTime % (1000 * 60)) / 1000)

            setRemainTime({
            'days' : days.toString().padStart(2, '0'),
            'hours' : hours.toString().padStart(2, '0'),
            'minutes' : minutes.toString().padStart(2, '0'),
            'seconds' : seconds.toString().padStart(2, '0')})
        }, 1000)


        return () => {
            clearInterval(interval)
        }

    },[endDate])
    return remainTime
}
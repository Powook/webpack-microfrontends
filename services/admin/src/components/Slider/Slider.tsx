import { useEffect, useState } from 'react'
import styles from './Slider.scss'
import cl from 'classnames'
import { Loader } from '../Loader/Loader'

export function Slider() {
    const [card, setCard] = useState(null)
    const [number, setNumber] = useState(1)

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${number}`).then(x=>x.json()).then(x=>setCard(x))
        return ()=> setCard(null)
    }, [number])

    function handlePress() {
        setNumber(prev=>prev+1)
    }

    return (
        <div className={styles.slider}>
            <button onClick={()=>console.log('cancel')} className={cl(styles.cancel, styles.button)}>X</button>
            <div className={styles.card}>
                {card ? (
                    <>
                        <h1>{card.title}</h1>
                        <p>{card.body}</p>
                    </>
                ) : <Loader/>}

            </div>
            <button onClick={()=>handlePress()} className={cl(styles.accept, styles.button)}>V</button>
      </div>
    )
}
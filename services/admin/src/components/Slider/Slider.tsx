import { useEffect, useState } from 'react'
import styles from './Slider.scss'
import cl from 'classnames'
import { Loader } from '../Loader/Loader'
import { Button } from '@packages/shared'

export function Slider() {
    const [cards, setCards] = useState(null)
    const [number, setNumber] = useState(1)

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/`).then(x=>x.json()).then(x=>setCards(x))
        return ()=> setCards(null)
    }, [number])

    function handlePress() {
        setNumber(prev=>prev+1)
    }

    if (!cards?.length) {
        return <Loader/>
    }

    return (
        <div className={styles.slider}>
            {cards.map((card: any)=>(
                <div className={styles.card}>
                    <div className={styles.card_image}/>
                    <h2 className={styles.card_title}>{card.title}</h2>
                    <div className={styles.card_bottom}>
                        <span>Число откликов: {card.id}</span>
                        <Button type='outline' btnClass={styles.card_button} text="Подробнее" onClick={()=>{}}/>
                    </div>
            </div>
            ))}
      </div>
    )
}
import { useEffect, useState } from 'react'
import styles from './Slider.scss'
import { Loader } from '../Loader/Loader'
import { Button } from '@packages/shared'
import InfiniteScroll from 'react-infinite-scroll-component';

export function Slider() {
    const [cards, setCards] = useState([])
    const [page, setPage] = useState(0)

    const LIMIT=20

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=${LIMIT}`).then(x=>x.json()).then(x=>{
            setCards((p: any)=>[...p, ...x])
        })
    }, [page])

    if (!cards?.length) {
        return <Loader/>
    }

    function fetchMore() {
        setPage(prev=>prev+LIMIT)
    }

    return (
        <div>
            <InfiniteScroll className={styles.slider} hasMore={true} dataLength={cards?.length} next={fetchMore} loader={<Loader/>}>
            {cards.map((card: any)=>(
                <div className={styles.card}>
                    <div className={styles.card_image} style={{backgroundColor: `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`}}/>
                    <h2 className={styles.card_title}>{card.title}</h2>
                    <div className={styles.card_bottom}>
                        <span>Число откликов: {card.id}</span>
                        <Button type='outline' btnClass={styles.card_button} text="Подробнее" onClick={()=>{}}/>
                    </div>
            </div>
            ))}
            </InfiniteScroll>
      </div>
    )
}
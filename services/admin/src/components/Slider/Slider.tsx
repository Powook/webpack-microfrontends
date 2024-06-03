import { useEffect, useState } from 'react'
import styles from './Slider.scss'
import { Loader } from '../Loader/Loader'
import { Button } from '@packages/shared'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Card } from './Card';

export type CardData = {
    id: number;
    body: string;
    title: string;
    userId: number
}

export function Slider() {
    const [cards, setCards] = useState<CardData[]>([])
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
            {cards.map((card: CardData, key)=> <Card card={card} key={card.id}/>)}
            </InfiniteScroll>
      </div>
    )
}
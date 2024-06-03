import { title } from 'process';
import styles from './Card.scss'
import { Button } from '@packages/shared';
import { CardData } from './Slider';
import { memo } from 'react';

export type CardProps= {
  card: CardData
}

export const Card = memo(({card}: CardProps) => {
  return (
    <div className={styles.card} key={card.id}>
    <div className={styles.card_image} style={{backgroundColor: `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`}}/>
    <h2 className={styles.card_title}>{card.title}</h2>
    <div className={styles.card_bottom}>
        <span>Число откликов: {card.id}</span>
        <Button type='outline' btnClass={styles.card_button} text="Подробнее" onClick={()=>{}}/>
    </div>
</div>
  )
})
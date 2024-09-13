import { useEffect, useState } from 'react';
import { Image } from '../../api/api.interface';
import styles from './styles.module.css'
import useLikeImage from '../../Hooks/useLikeImage';
interface CardProps{
  card:Image
}

const Card = ({card}:CardProps) => {
  const [liked, setLiked] = useState(card.liked)
  const [counter, setCounter] = useState(card.likes_count)
  const likeImage = useLikeImage()
const toggleLikeImage = () => {

  setLiked(!liked)
  if (!liked && counter<=card.likes_count) {
    setCounter(counter+1)
  }
  else if(liked && counter>=card.likes_count ) {
    setCounter(counter-1)
  }
  
  }
  useEffect(() => {
    likeImage({id: card.id})
  }, [card.id,likeImage,liked])
  
  
  return (
    <div className={styles.card}>
      <img src={card.main_attachment.small} alt="" />
      <div className={styles.description}>
      <h4 className={styles.title}>{card.title}</h4>
     <div>
     <span className={styles.by}>{`by `}</span><span>{card.author}</span>
     </div>
      </div>
      
        <div className={styles.actions}>
          <button className={styles.btn} onClick={toggleLikeImage}>{counter} 
            <img src={liked? '/public/liked.svg':'/public/unliked.svg'} alt="" />
            </button>
            <button className={styles.btn}>000 <img src="/public/restart.svg" alt="" /></button>
        </div>
    </div>
  )
}

export default Card

import cl from 'classnames'
import styles from './Button.scss'

type ButtonProps= {
  text: string;
  onClick:()=>void;
  btnClass?: string;
  width?: number ;
  height?: number;
  type?: 'filled' | 'outline'
}

export function Button({text, onClick, btnClass, width, height, type='filled'}: ButtonProps) {
  return ( 
    <button onClick={onClick} style={{width: width || "auto", height: height || "2.3em"}} className={cl( btnClass, styles.btn,  type === 'filled' ? styles.filled_btn : styles.outline_btn)}> 
      {text}
    </button>)
}
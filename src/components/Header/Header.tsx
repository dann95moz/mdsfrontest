import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styles from './styles.module.css'

interface HeaderProps{
  inputValue: string,
  setInputValue: Dispatch<SetStateAction<string>>

}

const Header = ({inputValue, setInputValue}:HeaderProps) => {
  const handlechange = (e:ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }
  
  return (
    <header className={styles.container}>
      <img src="/public/Forma 1.svg" alt="" />
      <input type="text" className={styles.input} value={inputValue} onChange={handlechange} placeholder="You're looking for something?"/>
    </header>
  )
}

export default Header

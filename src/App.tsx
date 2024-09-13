import Card from './components/Card/Card';
import Header from './components/Header/Header';
import useApiData from './Hooks/useApiData';
import './App.css'
import { useEffect, useState } from 'react';
import { Image } from './api/api.interface';

function App() {
  const { data, isLoading, isError, error } = useApiData('');
  const [inputValue, setInputValue] = useState('')
  const [copyData, setCopyData] = useState<Image[]>()
  useEffect(() => {
    const filteredData = data?.filter(data => data.title.includes(inputValue))
    setCopyData(filteredData)
  }, [inputValue,data])
  
  if (isLoading) {
    return 'cargando';
  }

  if (isError) {
    return error.message;
  }
 
  if (data && copyData) {
   
    return (
      <main>
      <Header setInputValue={setInputValue} inputValue={inputValue} />
      <div className='card_container'>
      {copyData.map(image => (
          <Card card={image} key={image.id}/>
        ))}
      </div>
       
      </main>
    )
  }
  if (copyData && copyData.length === 0) {
    return (
      <p>No results found</p>
    )
  }

}

export default App

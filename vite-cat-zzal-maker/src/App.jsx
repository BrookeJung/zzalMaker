import './App.css'
import Title from './components/Title'
import Form from './components/Form'
import MainCard from './components/MainCard'
import Favorites from './components/Favorites'
import { fetchCatApi } from './api/cat'
import { jsonLocalStorage } from './lib/utils'
import React from 'react'

function App() {
  const [counter, setCounter] = React.useState(() => {
    return jsonLocalStorage.getItem("counter") || 0;
  });
  const [mainCat, setMainCat] = React.useState();
  const [favorites, setFavorites] = React.useState(() => {
    return jsonLocalStorage.getItem("favorites") || [];
  });

  const handleHeartClick = () => {
    const nextFavorites = [...favorites, mainCat];
    setFavorites(nextFavorites);
    jsonLocalStorage.setItem("favorites", nextFavorites);
  }

  const handleFavoriteClick = (index) => {
    const newFavorites = favorites.filter((cat, i) => i !== index);
    setFavorites(newFavorites);
    jsonLocalStorage.setItem("favorites", newFavorites);
  }

  const initCat = async () => {
    const newCat = await fetchCatApi('First cat');
    setMainCat(newCat);
  }

  React.useEffect(() => {
    initCat();
  }, []);

  const updateMainCat = async (value) => {
    const newCat = await fetchCatApi(value);
    setMainCat(newCat);
    setCounter((prev) => {
      const nextCounter = prev + 1;
      jsonLocalStorage.setItem("counter", nextCounter);
      return nextCounter
    }); // setCounter 의 첫번째인자로 기존값을 전달받아서 새로운 값에 변경
  }

  const alreadyFavorite = () => {
    return favorites.includes(mainCat);
  }

  React.useEffect(() => {
    alreadyFavorite();
  }, [mainCat]);

  return (
    <>
      <div id="app">
        <Title>{counter > 0 ? counter + '번째' : ''} 고양이 가라사대</Title>
        <Form updateMainCat={updateMainCat} />
        <MainCard img={mainCat} alreadyFavorite={alreadyFavorite()} handleHeartClick={handleHeartClick} />
        <Favorites favorites={favorites} onFavoriteClick={handleFavoriteClick} />
      </div>
    </>
  )
}

export default App

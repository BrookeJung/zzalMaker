const Favorites = ({ favorites, onFavoriteClick }) => {
    return (
        <ul className="favorites">
            {favorites.length === 0 && (
                <div style={{ color: "gray", textAlign: "center" }}>사진 위 하트를 눌러 고양이 사진을 모아보세요!</div>
            )}
            {favorites.map((src, index) => <CatItem src={src} title="고양이" key={index} onClick={() => onFavoriteClick(index)} />)}
        </ul>
    )
}

export default Favorites
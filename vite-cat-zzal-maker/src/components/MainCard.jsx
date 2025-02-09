const MainCard = ({ img, alreadyFavorite, handleHeartClick }) => {
    const handleHeartOver = () => {

    }
    const handleHeartOut = () => {

    }
    return (
        <div className="main-card">
            <img
                src={img}
                alt="고양이" width="400"
            />
            <button onClick={handleHeartClick}>{alreadyFavorite ? "💖" : "🤍"}</button>
        </div >
    )
}

export default MainCard
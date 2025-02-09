const CatItem = ({ src, title, onClick }) => (
    <li>
        <img src={src} alt={title} onClick={onClick} />
    </li>
)

export default CatItem
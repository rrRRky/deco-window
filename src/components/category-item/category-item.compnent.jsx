import './category-item.styles.scss'

const CategoryItem =({category}) =>{
    const {imgURL, title} = category;
    return(
        <div className="category-container">
            <div className="background-image" style={{ backgroundImage:`url(${imgURL})`}}/>
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem
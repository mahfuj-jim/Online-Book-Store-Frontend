import "./category.style.css"

const Category = () => {
    return (
        <div className="category">
            <h1 className="h1-text">Explore Our Top Catagories</h1>
            <br></br>

            <div className="row">
                <div className="category-col">
                    <img src={"/src/assets/higher_education.png"} alt="Higher Education"></img>
                    <div className="category-text">
                        <h3>Higher Education</h3>
                    </div>
                </div>
                <div className="category-col">
                    <img src={"/src/assets/management_books.png"} alt="Management Books"></img>
                    <div className="category-text">
                        <h3>Management Books</h3>
                    </div>
                </div>
                <div className="category-col">
                    <img src={"/src/assets/finance_books.png"} alt="Finance Books"></img>
                    <div className="category-text">
                        <h3>Finance Books</h3>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="category-col">
                    <img src={"/src/assets/commerce_books.png"} alt="Engineering Books"></img>
                    <div className="category-text">
                        <h3>Engineering Books</h3>
                    </div>
                </div>
                <div className="category-col">
                    <img src={"/src/assets/higher_education.png"} alt="Commerce Books"></img>
                    <div className="category-text">
                        <h3>Commerce Books</h3>
                    </div>
                </div>
                <div className="category-col">
                    <img src={"/src/assets/management_books.png"} alt="singapore"></img>
                    <div className="category-text">
                        <h3>Norway</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
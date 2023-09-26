import './intro.style.css';
import Button from '../elements/button/button.jsx';

const Intro = () => {
    return (
        <div className="intro">
            <div className="left-panel">
                <h2>Explore Beyond the Pages</h2>
                <p>Explore beyond the books. Discover literary accessories, stay informed with author interviews and literary news on our blog, and dive into a vibrant world where every page turned opens up new possibilities. Welcome to your literary gateway.</p>
                <Button title={"Explore Now"}></Button>
            </div>
            <div className="right-panel">
                <img src={'/src/assets/books.png'} alt="Example" width={'550px'} />
            </div>
        </div>
    );
}

export default Intro;
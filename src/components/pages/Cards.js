import "../css/Card.css";
import cost from '../assets/cost.png';
import time from '../assets/time.png';
import document from '../assets/document.png';
const Cards = () => {
    return (
        <div className="card-container">
            <div className="card"><img id="img1"
                    src={document}
                    alt="Card image"/>
                <h3>
                    Security</h3>
                <p>Protect your data with blockchain encryption.</p>
            </div>

            <div className="card"><img id="img1"
                    src={cost}
                    alt="Card image"/>
                <h3>Easy Sharing</h3>
                <p>Share your files with anyone securely using blockchain technology.</p>
            </div>
            <div className="card"><img id="img1"
                    src={time}
                    alt="Card image"/>
                <h3>Instant Download</h3>
                <p>Get access to your files instantly after purchase..</p>
            </div>
        </div>
    );
};

export default Cards;

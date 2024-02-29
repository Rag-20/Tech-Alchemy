import {ethers} from "ethers";
// import '../css/exporter.css';
import Memos from "./Memos";
const Review = ({contract_review, account, provider}) => {
    console.log(contract_review)
    console.log(account)
    const addReview = async (event) => {
        event.preventDefault();
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
        console.log(name, message, contract_review);
        const amount = {
            value: ethers.utils.parseEther("0.001")
        };
        const transaction = await contract_review.addReview(name, message, amount);
        await transaction.wait();
        console.log("Transaction is done");
    };
    return (
        <center>
            <div className="top">
                <form className="form"
                    onSubmit={addReview}>
                    <input type="text" id="name" name="data" placeholder="Name" className="textField"/><br></br>
                    <input type="text" id="message" name="data-name" placeholder="Review" className="textField"/><br></br>
                    <button type="submit" className="button">
                        Add Review
                    </button>
                </form>
                <div id="result"></div>
                {/* <p>
                {message}
                </p> */} </div>
            <Memos contract={contract_review}
                provider={provider}
                account={account}/>
        </center>
    );
};
export default Review;

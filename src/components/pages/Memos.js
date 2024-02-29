import {useState, useEffect} from "react";
import '../css/Memos.css';
const Memos = ({contract, account, provider}) => {
    const [memos, setMemos] = useState([]);
    // const { contract } = state;
    console.log("Hi")
    useEffect(() => {
        console.log("Hii")
        const memosMessage = async () => {
            console.log("Hiii")
            const memos = await contract.getMemos();
            setMemos(memos);
            console.log(memos)
        };
        contract && memosMessage();
    }, [contract]);

    return (
        <center>
            <div className="top">
                <h5 id="msg">Messages</h5>
                {
                memos.map((memo) => {
                    return (
                        <div className="container-fluid"
                            key={
                                Math.random()
                        }>
                            <table border={1}>
                                <tbody>
                                    <tr>
                                        <td id="data">
                                            {
                                            memo.name
                                        } </td>
                                        <td id="data">
                                            {
                                            new Date(memo.timestamp * 1000).toLocaleString()
                                        } </td>
                                        <td id="data">
                                            {
                                            memo.message
                                        } </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    );
                })
            } </div>
        </center>
    );
};
export default Memos;

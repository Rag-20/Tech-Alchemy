import {useEffect} from "react";
import "../css/Share.css";
const Share = ({contract}) => {
    const sharing = async () => {
        const address = document.querySelector("#address").value;
        await contract.allow(address);
        document.getElementById("result").innerHTML = "Access Granted"
    };
    const remove = async () => {
        const address = document.querySelector("#address").value;
        await contract.disallow(address);
        document.getElementById("result").innerHTML = "Access Revoked"
    }
    useEffect(() => {
        const accessList = async () => {
            const addressList = await contract.shareAccess();
            let select = document.querySelector("#selectNumber");
            const options = addressList;

            for (let i = 0; i < options.length; i++) {
                let opt = options[i];
                let e1 = document.createElement("option");
                e1.textContent = opt;
                e1.value = opt;
                select.appendChild(e1);
            }
        };
        contract && accessList();
    }, [contract]);
    return (
        <center>
            <div className="top">

                <div className="body">
                    <input type="text" id="address" className="textField" placeholder="Enter Address" title="Enter Metamask Address"></input>
                </div>
                {/* <form id="myForm">
            <select id="selectNumber" className="button1">
              <option id="address">People With Access</option>
            </select>
          </form> */}
                <button onClick={
                        () => sharing()
                    }
                    className="button"
                    title="Share Acces">Share</button>
                <button onClick={
                        () => remove()
                    }
                    className="button"
                    title="Revoke Access">Remove</button>
            </div>
            <div id="result"></div>

        </center>
    );
};
export default Share;

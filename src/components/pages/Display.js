import { useState } from "react";
import "../css/Display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector("#address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      console.log(e);
      //alert("You don't have access");
      document.getElementById("result").innerHTML = "You don't have access"
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
       console.log(str);
       console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          
          <a href={`https://gateway.pinata.cloud/ipfs/${item}`} key={i} target="_blank" id="link" rel="">
            { <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item}`}
              alt="new"
              className="image-list"
            ></img> }
          </a>
        );
      });
      setData(images);
    } else {
      document.getElementById("result").innerHTML = "No image to display"
      //alert("No image to display");
    }
  };
  return (
    <center>
            <div className="top">
            
      <input
        type="text"
        placeholder="Enter Address"
        id="address"
        className="textField"
        title="Enter Metamask Address"
      ></input>
      <button className="button" onClick={getdata} title="Click Here to Display Images">
        View
      </button>
      <div id="result"></div>
      <div className="image-list">{data}</div>
    </div>
    </center>
  );
};
export default Display;

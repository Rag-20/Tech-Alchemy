import {useState} from "react";
import axios from "axios";
import "../css/Verify.css";

const Verify = ({contract, account, provider}) => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("No image selected");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (file) {
            try {
                const formData = new FormData();
                formData.append("file", file);
                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        pinata_api_key: `b2e3a82cf3f882bc0aeb`,
                        pinata_secret_api_key: `7a2aff56b95a1db24887b2e9ae2ccc2379ea662ac0fbc324a851839a4edb86f2`,
                        "Content-Type": "multipart/form-data"
                    }
                });
                const ImgHash = `${
                    resFile.data.IpfsHash
                }`;
                // const signer = contract.connect(provider.getSigner());
                const signer = contract.connect(provider.getSigner());
                const result = await signer.verifyImage(ImgHash);
                console.log(result);
                console.log(typeof(result));
                const res = JSON.parse(JSON.stringify(result))
                console.log(res);
                // alert(result);
                if (res) {
                    document.getElementById("result").innerHTML = "Verified Successfully!";
                } else {
                    document.getElementById("result").innerHTML = "Unsuccessful!";
                }
            } catch (e) {
                console.log(e);
                // alert("Unable to Verify image");
                document.getElementsById("result").innerHTML = "Unsuccessfully!";
            }
        }

        setFileName("No image selected");
        setFile(null);
    };
    const retrieveFile = (e) => {
        const data = e.target.files[0];
        // files array of files object
        // console.log(data);
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(data);
        reader.onloadend = () => {
            setFile(e.target.files[0]);
        };
        setFileName(e.target.files[0].name);
        e.preventDefault();
    };
    return (
        <center>
            <div className="top">
                <form className="form"
                    onSubmit={handleSubmit}>
                    <input disabled={
                            !account
                        }
                        type="file"
                        id="file-upload"
                        name="data"
                        className="upload-files"
                        onChange={retrieveFile}/>
                    <button type="submit" className="upload"
                        disabled={
                            !file
                        }
                        title="Click here to Verify Document">
                        Verify File
                    </button>

                </form>
                <div id="result"></div>
            </div>
        </center>

    );
};
export default Verify;

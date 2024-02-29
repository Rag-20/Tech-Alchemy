import {useState} from "react";
import React from "react";
import axios from "axios";
import "../css/Upload.css";
import Spinner from "./Spinner";

const Upload = ({contract, account, provider}) => {
    const [showGif, setShowGif] = React.useState(false);
    console.log(contract, account)
    const handleClick = () => {
        setShowGif(!showGif);
        setTimeout(() => setShowGif(false), 11000);
    }
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
                        pinata_api_key: `9be60b0f3bd4cc6a971c`,
                        pinata_secret_api_key: `beae265e19f564314734158aa3d4254eff323bb9aee22d98fb664103b5b8d5df`,
                        "Content-Type": "multipart/form-data"
                    }
                });
                const ImgHash = `${
                    resFile.data.IpfsHash
                }`;
                console.log(ImgHash);
                const signer = contract.connect(provider.getSigner());
                signer.add(account, ImgHash);


                document.getElementById("result").innerHTML = "Document Uploaded Successfully!";


            } catch (e) {
                document.getElementById("result").innerHTML = "Document Uploading Failed!";
            }
        }
        setFileName("No image selected");
        setFile(null);

    };
    const retrieveFile = (e) => {
        const data = e.target.files[0];
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
                        title="Upload Files (.jpg, .jpeg, .png)"
                        onClick={handleClick}>
                        Upload
                    </button>
                    <Spinner showGif={showGif}/>
                </form>
                <div id="result"></div>
            </div>

        </center>

    );
};
export default Upload;

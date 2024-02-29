import {useState} from "react";
import axios from "axios";
import "../css/FileUpload.css";

const FileUpload = ({contract, account, provider, network}) => {
    var ImgHash;
    const [file, setFile] = useState(null);
    let errorMessage = "";
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
                ImgHash = `${
                    resFile.data.IpfsHash
                }`;
                console.log(ImgHash)
                const signer = contract.connect(provider.getSigner());
                const result = await signer.addImage(ImgHash);
                errorMessage = "";
                document.getElementById("result").innerHTML = "Document Uploaded Successfully!";
            } catch (e) {
                console.log(Object.keys(e));
                document.getElementById("result").innerHTML = "Document Uploading Failed!";
               // alert("Unable to upload image to Pinata");
            }
        }
        setFileName("No image selected");
        setFile(null);
    }
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
    const [data, setData] = useState("");

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
                        onChange={retrieveFile}
                        className="upload-files"/><br></br>
                    {/* <span className="textArea">Image: {fileName}</span> */}
                    <button type="submit" className="upload"
                        disabled={
                            !file
                        }
                        title="Click here to Upload Document">
                        Upload
                    </button>
                </form>
                <div id="result"></div>
            </div>
        </center>
    );
};
export default FileUpload;

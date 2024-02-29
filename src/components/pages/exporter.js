import "../css/exporter.css"
const Exporter = ({contract, account, provider}) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(account)
        const address = document.getElementById("add-exporter-address").value; // files array of files object
        console.log(address);
        console.log(contract);
        const name = document.getElementById("add-exporter-name").value; // files array of files object
        console.log(name);
        const userAddress = window.userAddress;
        console.log(userAddress);
        try {
            if (account == '0x4782B7c76f1a86f763Cc229F11087241ffdC2143') {
                if (address.length == 42 && name) {
                    const signer = contract.connect(provider.getSigner());
                    console.log(signer);
                    signer.addExporter(address, name);
                    setTimeout(() => {
                        document.getElementById("result").innerHTML = "Exporter Added Successfully";
                    }, 10000)
                } else {
                    document.getElementById("result").innerHTML = "Incorrect Input";
                }
            } else { // alert("UnSuccessful");
                document.getElementById("result").innerHTML = "Only Admin Can Perform This Action";
            }
        } catch (e) { // alert("error")
            console.log(e)
            document.getElementById("result").innerHTML = "Only Admin Can Perform This Action";
        }


    }
    const deleteExporter = async (e) => {
        console.log(account)
        e.preventDefault();
        const address = document.getElementById("add-exporter-address").value; // files array of files object
        console.log(address)
        console.log(contract);
        const name = document.getElementById("add-exporter-name").value; // files array of files object
        console.log(name);
        const userAddress = window.userAddress;
        console.log(userAddress);
        try {
            if (account == '0x4782B7c76f1a86f763Cc229F11087241ffdC2143') {
                if (address.length == 42 && name) {
                    const signer = contract.connect(provider.getSigner());
                    console.log(signer);
                    signer.deleteExporter(address);
                    setTimeout(() => {
                        document.getElementById("result").innerHTML = "Exporter Deleted Successfully";
                    }, 10000)
                } else {
                    document.getElementById("result").innerHTML = "Incorrect Input";
                }
            } else { // alert("UnSuccessful");
                document.getElementById("result").innerHTML = "Only Admin Can Perform This Action";
            }
        } catch (e) {
            console.log(e)
            document.getElementById("result").innerHTML = "Only Admin Can Perform This Action";
        }


    }
    return (
        <center>
            <div className="top">
                <input disabled={
                        !account
                    }
                    type="text"
                    id="add-exporter-address"
                    name="data"
                    placeholder="Exporter Address"
                    title="Enter Exporter Metamask Address"
                    className="textField"/><br></br>
                <input disabled={
                        !account
                    }
                    type="text"
                    id="add-exporter-name"
                    name="data-name"
                    placeholder="Exporter Name"
                    className="textField"
                    title="Enter Exporter Name"/><br></br>
                <button type="submit" className="button"
                    onClick={handleSubmit}
                    title="Click here to Add Exporter">
                    Add Exporter
                </button>
                <button type="submit" className="button"
                    onClick={deleteExporter}
                    title="Clich here to Delete Exporter">
                    Delete Exporter
                </button>
                <div id="result"></div>
                {/* <p>
                {message}
                </p> */} </div>
        </center>
    );
};
export default Exporter;

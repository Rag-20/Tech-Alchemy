import {React} from "react";
import loading from "../assets/loading.gif"

function Spinner(props) {
    return (
        <div className="text-center">
            {
            props.showGif && <img src={loading}
                alt="loading"
                style={
                    {
                        width: "70px",
                        height: "70px"
                    }
                }/>
        } </div>
    )
}

export default Spinner;

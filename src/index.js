import React from "react";
import ReactDOM from "react-dom";

import './styles/app.scss'

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Hello everyone!</h1>
                </div>
            </div>  
        )
    }
}

let Application = document.getElementById("app");

ReactDOM.render(<App />, Application);
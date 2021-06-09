import React, {Component} from 'react';

class Application extends Component {

    render(){
        let name = "Laura";

        return (
            <div>
                <h1> Hello {name} </h1>
                <span> This is your shit </span>
            </div>
        )
    }

}

export default Application; //il faut l'appeler pour qu'il apparaisse
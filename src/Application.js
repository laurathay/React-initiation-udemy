import React, {Component} from 'react';

class Application extends Component {

    constructor(props){
        super(props);

        }

        componentWillMount(props, state){

        }

        componentDidMount(props, state){
            console.log("Mounted with", props, state);
        }

        componentWillReceiveProps(props){

        }

        componentWillUpdate(props, state){
            if(this.props.name !== props.name){
                //do something
            }
        }

        componentDidUpdate(props, state){
            
        }

    }

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
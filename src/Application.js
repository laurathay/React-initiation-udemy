import React, {Component} from 'react';

class Application extends Component {

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            overTen: false
        }

    }

    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }

    componentDidUpdate(props, state){
        // console.log("It got from", state, "to", this.state) // on voit que le state c'est le premier puis this state est actuel au nombre de clic donc 0 et 1 on voit apparaitre
        if(this.state.count > 10){
           this.setState({overTen}): true;
        }
    }
    

    render(){
        let name = "Laura";
        let {count} = this.state;

//e c'est l'évènement donc au clic = cet evenement active le handleclick au dessus
        return( 
            <div>
                <h1> Hi {name} you clicked the button {count} times </h1>
                <span> This is your shit </span>

                <button onClick={(e) => this.handleClick()}> Click Me </button> 
            </div>
        )
    }

}

export default Application; //il faut l'appeler pour qu'il apparaisse
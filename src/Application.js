import React, {Component} from 'react';
import HighScore from './HighScore';
import "./css/style.css";

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
        if(this.state.count > 10 && this.state.count != state.count && !this.state.overTen ){ // pour ne pas qu'il sois répété, juste qu'une seule fois qu'il sois différent 
            console.log("updating up to 10 and more");
            this.setState({overTen: true});
        }
    }
    
    resetCount = (e) => {
        console.log("Event is", e);
        this.setState ({
            count: 0,
            overTen: false,
        });
    }

    render(){
        let name = "Laura";
        let {count} = this.state;

//e c'est l'évènement donc au clic = cet evenement active le handleclick au dessus
        return( 
            <div>
                <h1> Hi {name} you clicked the button {count} times </h1>
                
                <h3> You can't beat me </h3>

                <HighScore 
                    overTen={this.state.overTen}
                    onReset={this.resetCount}
                />

                <span>
                         <button onClick={() => this.handleClick()}> Click Me </button> 
                </span>
            </div>
        )
    }

}

export default Application; //il faut l'appeler pour qu'il apparaisse
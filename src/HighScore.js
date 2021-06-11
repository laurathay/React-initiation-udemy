import React, {Component} from 'react';

class HighScore extends Component {
    render(){
        if(this.props.overTen){
            return( 
                <h3> You can beat me one day maybe
                    <button onClick={(e) => this.props.onReset(e)}>
                        Reset
                    </button>
                </h3>
              ) 
        }else{
            return(null);
        }
    }
}

export default HighScore;
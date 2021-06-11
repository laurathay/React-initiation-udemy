import { ReactComponent } from "*.svg";
import React, {Component} from 'react';

class HighScore extends Component {
    render(){
        if(this.props.overTen){
            return( 
                <h3> You can beat me one day maybe </h3>
              ) 
        }else{
            return(null);
        }
    }
}

export default HighScore;
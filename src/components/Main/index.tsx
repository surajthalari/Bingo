/*tslint:disable*/
import * as React from 'react';
import {Square} from "../Square";
import './index.css';



export class Main extends React.Component<{},{value:number,playerName: string[]}>{
    constructor(props:any){
        super(props);
        const players: string[]=[];
        
        players[0]="Bhanu";
        players[1]="Nihanth";
        players[2]="Prakash";
        this.state={
         value: -1,
         playerName:players
        }
    } 


    public handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
        //   alert(e.target.value);
        if(!isNaN(e.target.value)){
          this.setState({ value : e.target.value });
        }
        else{
            alert("Please Enter Number")
        }
          e.target.value=null;
        }
      }
    
    

    
    public render () {
        return (
          <div id='mainDiv'>
          <div id='mainInsideDiv'>
          <div className="row">
              <div className="col-lg-4 col-sm-12 col-md-12"><Square playerName={this.state.playerName[0]} value={this.state.value}/></div>
              <div className="col-lg-4 col-sm-12 col-md-12"><Square playerName={this.state.playerName[1]} value={this.state.value}/> </div>
              <div className="col-lg-4 col-sm-12 col-md-12"><Square playerName={this.state.playerName[2]} value={this.state.value}/></div>
          </div>  
          </div>
          <div className="col-xs-2">
            <label id="label">Enter The Number:</label>
            <input className="form-control" id="ex1" type="text" onKeyPress={this.handleKeyPress}/> 
          </div>
          </div>
        )
    }
}
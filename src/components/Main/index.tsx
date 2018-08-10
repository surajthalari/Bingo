/*tslint:disable*/
import * as React from 'react';
import {Square} from "../Square";
import './index.css';



export class Main extends React.Component<{},{value:number}>{
    constructor(props:any){
        super(props);
        this.state={
         value: -1
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
              <div className="col-lg-4"><Square value={this.state.value}/></div>
              <div className="col-lg-4"><Square value={this.state.value}/> </div>
              <div className="col-lg-4"><Square value={this.state.value}/></div>
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
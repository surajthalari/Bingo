/*tslint:disable*/
import * as React from 'react';
import "./index.css";
import { Redirect } from 'react-router';
//import {RouteElement} from "../RouteElement";

interface proptype {
  value:number;
  playerName:string
}

export class Square extends React.Component<proptype, { values:  number[],enteredValues:  Set<string>,checkValues: Set<number>}> {
  constructor(props: proptype){
    super(props);
    const enteredValues= new Set<string>();
    const valuesDuplicates: number[] = this.randomNumbers();
    const checkValues= new Set<number>();
    this.state={values: valuesDuplicates,
      enteredValues:enteredValues,
      checkValues:checkValues};
   }  

  public randomNumbers(): number[] {
      const set = new Set();
      while(set.size!==9){
          set.add(Math.floor(Math.random() * (20)) + 1);
      }
      const iterator = set.values();
      const valueDuplicate: number[]=[];
      for(let i: number=0;i<9;i++){
        valueDuplicate.push(iterator.next().value)
      }
      return valueDuplicate;
    }
  
    public render() {
     
      return (
    <div>
        <div className="row">
          {this.displaySpan(this.state.values[0])}
          {this.displaySpan(this.state.values[1])}
          {this.displaySpan(this.state.values[2])}
        </div>      

        <div className="row">
          {this.displaySpan(this.state.values[3])}
          {this.displaySpan(this.state.values[4])}
          {this.displaySpan(this.state.values[5])}
        </div>        

        <div className="row">
          {this.displaySpan(this.state.values[6])}
          {this.displaySpan(this.state.values[7])}
          {this.displaySpan(this.state.values[8])}
        </div> 

    </div>
      );
    }

  public displaySpan(valueDup: number): React.ReactFragment {
    this.state.enteredValues.add(`${this.props.value}`);
    const indexValue: number = this.state.values.indexOf(valueDup);
    const idValue:string = `value${indexValue}`;
    const valueDuplicate: string = `${valueDup}`;
    for(let index=0;index<this.state.enteredValues.size;index++){
      if(!this.state.enteredValues.has(valueDuplicate)){
        return <div className="col-lg-2 col-sm-3 col-md-3 " id={idValue}>{valueDup}</div>; 
      }
      else{
        this.state.checkValues.add(indexValue);
        this.checkMethod();
        return <div className="col-lg-2 col-sm-3 col-md-3 strikethrough" id={idValue}><span>{valueDup}</span></div>;

      }
    }
   return <div className="col-lg-2" id={idValue}>{valueDup}</div>; 
  }

public checkMethod(): void{
  if(this.state.checkValues.has(0) && this.state.checkValues.has(1) && this.state.checkValues.has(2) || this.state.checkValues.has(3) && this.state.checkValues.has(4) && this.state.checkValues.has(5) || this.state.checkValues.has(6) && this.state.checkValues.has(7) && this.state.checkValues.has(8) || this.state.checkValues.has(0) && this.state.checkValues.has(3) && this.state.checkValues.has(6) || this.state.checkValues.has(1) && this.state.checkValues.has(4) && this.state.checkValues.has(7) || this.state.checkValues.has(2) && this.state.checkValues.has(5) && this.state.checkValues.has(8)|| this.state.checkValues.has(0) && this.state.checkValues.has(4) && this.state.checkValues.has(8) || this.state.checkValues.has(2) && this.state.checkValues.has(4) && this.state.checkValues.has(6)){
    // console.log(this.props.playerName);
    console.log("BINGO!!!");
     debugger
      
        <Redirect push to="/winner"/>
      
    
  }
}


}
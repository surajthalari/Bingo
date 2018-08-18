/*tslint:disable*/
import * as React from 'react';

// interface proptype{
//  user : string;
// }

export class Winner extends React.Component<any> {
    
    public constructor(props: any){
        
        super(props);
        debugger

    }
    
    
    public render(){
        return (<div>
            <h2>User: {this.props.match.params.user}</h2>
          </div>);
    }
}
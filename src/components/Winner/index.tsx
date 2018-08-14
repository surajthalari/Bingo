import * as React from "react";

export class Winner extends React.Component {
    
    public render(){
        const arr: string[]=window.location.href.split("/");
        return (
            
            <div>
                {arr[4]}
            </div>
        );
    }

}

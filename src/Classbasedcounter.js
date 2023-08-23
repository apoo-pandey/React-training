import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state={
            specialCount:0,
        };
        /*this.increase=this.increase.bind(this);
        this.decrease=this.decrease.bind(this);*/
    }

    //life-cycle mount
    componentDidMount(){
        console.log("component mounted");
    }
    //life-cycle hook which is fired when component is unmounted
    componentWillUnmount(){
        console.log("component unmounted");
    }
    increase=()=>{
        console.log(this);
        this.setState({ specialCount: this.state.specialCount+1});
    }
    decrease=()=>{
        this.setState({specialCount: this.state.specialCount-1});
    }
    render(){
        return(
            <div>
                <h1>{this.state.specialCount}</h1>
                <button onClick={this.increase}>increase</button>
                <button onClick={this.decrease}>decrease</button>
            </div>
        );
    }
}

export default Counter;
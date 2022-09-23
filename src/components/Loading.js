import React, { Component } from "react";

class Loading extends Component {
    componentWillUnmount(){
        console.log('se desmonto')
    }

    render(){
        return <p className="loading">Loading...</p>
    }
}

export { Loading }
import  React  from "react";
import  ReactDOM from "react-dom";
import './index.css'

// var React = require('react');
// var ReactDOM = require('react-dom');
// require('./index.css');

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello am from react js...</h1>
            </div>
        )
    }
}
ReactDOM.render(
<App />,
document.getElementById('root'))
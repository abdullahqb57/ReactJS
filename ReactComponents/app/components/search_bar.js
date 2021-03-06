import React, { Component } from "react"; //const component = React.component

class SearchBar extends Component{
   constructor(props){
       super(props)
       this.state = {term : "hello" };
       this.onInputChange = this.onInputChange.bind(this);
   }
   render(){
       return(
           <div>
               <input onChange={this.onInputChange}/>
               value : {this.state.term} >
           </div>
       )
   }
   onInputChange(event){
       this.setState({term :event.target.value})
   }
}

export default SearchBar;
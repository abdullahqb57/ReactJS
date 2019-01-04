import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
const API_KEY = "AIzaSyC1pmGCYBP8YauWM_7g7UWGuXOWDCQoiDs";

//creating component format jsx

const App = function(){
    return <div>
        <SearchBar />
    </div>
}

//rendering component
ReactDOM.render(<App />,document.querySelector(".container"));

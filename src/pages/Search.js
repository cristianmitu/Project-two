import React from "react";
// import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form>
      <input type="text" id="name" name="name"></input>
      <input type="submit" id="submit" value="submit"></input>

    </form>
    
  );
}

export default SearchForm;

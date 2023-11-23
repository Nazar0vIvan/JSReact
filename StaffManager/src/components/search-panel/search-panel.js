import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: "",
    }
  }

  onUpdateSearch = (e) => {
    const term = e.target.value; // get new string from search input 
    this.setState({term}); // update state of this SearchPane
    this.props.onUpdateSearch(term); // call onUpdateSearch from app.js
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={this.state.term}
        onChange={this.onUpdateSearch}
      />
    );
  }
};

export default SearchPanel;


import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {

  state = {searchTerm: ""};

  onChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.filterList(this.state.searchTerm);
  }

  render() {
    return (
      <div className="searchBar">
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} type="text" placeholder={this.props.placeholder || "Search Something"} />
        </form>
      </div>
    );
  }
}

export default SearchBar;

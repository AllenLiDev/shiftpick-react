import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ term: ''});
    this.props.filterShifts(this.state.term);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label>Filter</label>
            <input type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
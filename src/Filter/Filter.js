import React, { Component } from 'react';

class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;

    return (
      <div>
        <label>
          Find contacts by name
          <input type="text" name="filter" value={filter} onChange={onChange} />
        </label>
      </div>
    );
  }
}
export default Filter;

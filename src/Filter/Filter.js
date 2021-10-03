import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
export default Filter;

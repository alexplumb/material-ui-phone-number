import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import Flags from 'country-flag-icons/react/3x2'

class Item extends React.PureComponent {
  render() {
    const ref = React.createRef();
    const {
      name, iso2, dialCode, localization,
      itemRef, native, className = '', ...restProps
    } = this.props;

    if (native) {
      return (
        <option
          className="country"
          data-dial-code="1"
          data-country-code={iso2}
          value={iso2}
          {...restProps}
        >
          {localization || name}
          {' '}
          {`+${dialCode}`}
        </option>
      );
    }

    const FlagComponent = Flags[iso2.toUpperCase()];

    return (
      <MenuItem
        ref={ref}
        className="country"
        data-dial-code="1"
        data-country-code={iso2}
        {...restProps}
      >
        {Boolean(FlagComponent) && (
          <div className={className}>
            <FlagComponent />
          </div>
        )}

        <span className="country-name">
          {localization || name}
        </span>

        <span className="dial-code">{`+${dialCode}`}</span>
      </MenuItem>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  iso2: PropTypes.string.isRequired,
  dialCode: PropTypes.string.isRequired,
  itemRef: PropTypes.func.isRequired,
  localization: PropTypes.string,
  native: PropTypes.bool,
};

Item.defaultProps = {
  localization: null,
  native: false,
};

export default Item;

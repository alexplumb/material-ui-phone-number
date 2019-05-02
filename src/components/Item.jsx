import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, RootRef } from '@material-ui/core';

export default class Item extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    iso2: PropTypes.string.isRequired,
    dialCode: PropTypes.string.isRequired,
    itemRef: PropTypes.func.isRequired,
    localization: PropTypes.string,
    native: PropTypes.bool,
  };

  static defaultProps = {
    localization: null,
    native: false,
  };

  render() {
    const {
      name, iso2, dialCode, localization, itemRef, native, ...restProps
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

    return (
      <RootRef rootRef={node => itemRef(node)}>
        <MenuItem
          className="country"
          data-dial-code="1"
          data-country-code={iso2}
          {...restProps}
        >
          <div className={`flag ${iso2} margin`} />

          <span className="country-name">
            {localization || name}
          </span>

          <span className="dial-code">{`+${dialCode}`}</span>
        </MenuItem>
      </RootRef>
    );
  }
}

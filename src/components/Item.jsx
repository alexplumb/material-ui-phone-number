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
  };

  static defaultProps = {
    localization: null,
  };

  render() {
    const {
      name, iso2, dialCode, localization, itemRef, ...restProps
    } = this.props;

    return (
      <RootRef rootRef={node => itemRef(node)}>
        <MenuItem
          className="country"
          data-dial-code="1"
          data-country-code={iso2}
          onClick={() => this.handleFlagItemClick({
            iso2, dialCode, name,
          })}
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

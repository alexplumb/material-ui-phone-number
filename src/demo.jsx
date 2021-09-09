import React from 'react';
import { render } from 'react-dom';
import MaterialUiPhoneNumber from './index';

class ChangeDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: '',
    };
  }

  render() {
    const { number } = this.state;

    return (
      <div>
        Current number: {number}
        <br />
        <MaterialUiPhoneNumber
          defaultCountry="it"
          preferredCountries={['it', 'se']}
          onChange={(e) => {
            this.setState({ number: e });
          }}
        />
      </div>
    );
  }
}

export default render(
  <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: '15px' }}>
    <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
      <p>v1.1.0</p>
      <p>Exclude countries (usa, canada)</p>
      <MaterialUiPhoneNumber
        defaultCountry="no"
        excludeCountries={['us', 'ca']}
      />
      <p>Only countries</p>
      <MaterialUiPhoneNumber defaultCountry="gb" onlyCountries={['gb', 'es']} />
      <p>Preferred countries</p>
      <MaterialUiPhoneNumber
        defaultCountry="it"
        preferredCountries={['it', 'se']}
      />
      <p>onChange</p>
      <ChangeDemo />
      <p>Native</p>
      <MaterialUiPhoneNumber
        defaultCountry="it"
        preferredCountries={['it', 'se']}
        native
      />
    </div>

    <div style={{ display: 'inline-block', marginLeft: '40px' }}>
      <p>v2</p>
      <p>Auto country detect by value</p>
      <MaterialUiPhoneNumber value="+3802343252" />
      <p>Disabled area codes with disableAreaCodes</p>
      <MaterialUiPhoneNumber defaultCountry="us" disableAreaCodes />
      <p>Disabled flag by default</p>
      <p>Customizable placeholder</p>
    </div>

    <div
      style={{
        display: 'inline-block',
        marginLeft: '40px',
        verticalAlign: 'top',
        marginTop: '35px',
      }}
    >
      <p>Custom region selected: {"{'europe'}"}</p>
      <MaterialUiPhoneNumber defaultCountry="it" regions="europe" />
      <p>Custom regions selected: {"{['north-america', 'carribean']}"}</p>
      <MaterialUiPhoneNumber
        defaultCountry="ca"
        regions={['north-america', 'carribean']}
      />
      <p>Disabled dropdown</p>
      <MaterialUiPhoneNumber
        onlyCountries={['us']}
        defaultCountry="us"
        disableDropdown
        placeholder="(702) 123-4567"
      />
      <p>Disabled dropdown and country code</p>
      <MaterialUiPhoneNumber
        onlyCountries={['us']}
        defaultCountry="us"
        disableAreaCodes
        disableCountryCode
        disableDropdown
        placeholder="(702) 123-4567"
      />
    </div>
  </div>,
  document.getElementById('root')
);

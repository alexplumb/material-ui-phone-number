import React from 'react';
import { render } from 'react-dom';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import MaterialUiPhoneNumber from './index';

class ChangeDemo extends React.Component {
  state = {
    number: '',
  };

  render() {
    const { number } = this.state;

    return (
      <div>
        Current number:
        {' '}
        {number}

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

const theme = createMuiTheme();

export default render(
  <ThemeProvider theme={theme}>
    <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: '15px' }}>
      <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
        <p>v1.1.0</p>
        <p>Exclude countries (usa, canada)</p>
        <MaterialUiPhoneNumber
          defaultCountry="no"
          excludeCountries={['us', 'ca']}
        />
        <p>Only countries</p>
        <MaterialUiPhoneNumber
          defaultCountry="gb"
          onlyCountries={['gb', 'es']}
        />
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
        <MaterialUiPhoneNumber
          value="+3802343252"
        />
        <p>Disabled area codes with disableAreaCodes</p>
        <MaterialUiPhoneNumber
          defaultCountry="us"
          disableAreaCodes
        />
        <p>Disabled flag by default</p>
        <p>Customizable placeholder</p>
        <p>Customizable styles</p>
        <MaterialUiPhoneNumber
          disableAreaCodes
          placeholder="Type your phone here"
          inputStyle={{
            width: '300px',
            height: '35px',
            fontSize: '13px',
            paddingLeft: '48px',
            borderRadius: '5px',
          }}
          buttonStyle={{ borderRadius: '5px 0 0 5px' }}
          dropdownStyle={{ width: '300px' }}
        />
        <p>Customizable classes</p>
        <MaterialUiPhoneNumber
          containerClass="react-tel-input"
          inputClass="custom-phone-input"
          buttonClass="custom-phone-button"
          dropdownClass="custom-dropdown"
        />
      </div>

      <div style={{
        display: 'inline-block', marginLeft: '40px', verticalAlign: 'top', marginTop: '35px',
      }}
      >
        <p>
          Custom region selected:
          {' '}
          {'{\'europe\'}'}
        </p>
        <MaterialUiPhoneNumber
          defaultCountry="it"
          regions="europe"
        />
        <p>
          Custom regions selected:
          {' '}
          {'{[\'north-america\', \'carribean\']}'}
        </p>
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
    </div>
  </ThemeProvider>,
  document.getElementById('root'),
);

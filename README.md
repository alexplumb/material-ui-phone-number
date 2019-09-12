# material-ui-phone-number
Highly customizable phone input component with auto formatting. Based on the wonderful [react-phone-input-2](https://github.com/bl00mber/react-phone-input-2) package.

It looks like this, but in Material Design:

![alt tag](https://media.giphy.com/media/l378A8qFNzgiuPUre/giphy.gif)

Uses @material-ui/core/TextField for rendering the phone input

## Installation

```shell-script
npm install material-ui-phone-number --save
```

## Usage

```jsx
React.render(
  <MuiPhoneNumber defaultCountry={'us'} onChange={handleOnChange}/>,
  document.getElementById('root')
);
```

Your handler for the ``onChange`` event should expect a string as
parameter, where the value is that of the entered phone number. For example:

```jsx
function handleOnChange(value) {
   this.setState({
      phone: value
   });
}
```

## Options
<table>
  <tr>
    <th> Name </th>
    <th> Type </th>
    <th> Description </th>
    <th> Example </th>
  </tr>
  <tr>
    <td> excludeCountries </td>
    <td> array </td>
    <td> array of country codes to be excluded </td>
    <td> ['cu','cw','kz'] </td>
  </tr>
  <tr>
    <td> onlyCountries </td>
    <td> array </td>
    <td> country codes to be included </td>
    <td> ['cu','cw','kz'] </td>
  </tr>
  <tr>
    <td> preferredCountries </td>
    <td> array </td>
    <td> country codes to be at the top </td>
    <td> ['cu','cw','kz'] </td>
  </tr>
  <tr>
    <td> defaultCountry </td>
    <td> string </td>
    <td> initial country </td>
    <td> 'us' </td>
  </tr>

  <tr>
    <td> inputClass </td>
    <td> string </td>
    <td colspan="2"> class for input </td>
  </tr>
  <tr>
    <td> dropdownClass </td>
    <td> string </td>
    <td colspan="2"> class for dropdown container </td>
  </tr>

  <tr>
    <td> autoFormat </td>
    <td> bool </td>
    <td colspan="2"> on/off auto formatting, true by default </td>
  </tr>
  <tr>
    <td> disableAreaCodes </td>
    <td> bool </td>
    <td colspan="2"> disable local codes for all countries </td>
  </tr>
  <tr>
    <td> disableCountryCode </td>
    <td> bool </td>
    <td colspan="2"> false by default </td>
  </tr>
  <tr>
    <td> disableDropdown </td>
    <td> bool </td>
    <td colspan="2"> false by default </td>
  </tr>
  <tr>
    <td> enableLongNumbers </td>
    <td> bool </td>
    <td colspan="2"> false by default </td>
  </tr>
  <tr>
    <td> countryCodeEditable </td>
    <td> bool </td>
    <td colspan="2"> true by default </td>
  </tr>

  <tr>
    <td colspan="4"><b>Supported TextField props</b></td>
  </tr>

  <tr>
    <td> value </td>
    <td> string </td>
    <td colspan="2"> input state value </td>
  </tr>
  <tr>
    <td> placeholder </td>
    <td> string </td>
    <td colspan="2"> placeholder for the TextField input </td>
  </tr>
  <tr>
    <td> label </td>
    <td> string | element</td>
    <td colspan="2"> label for the TextField </td>
  </tr>
  <tr>
    <td> name </td>
    <td> string </td>
    <td colspan="2"> input name </td>
  </tr>
  <tr>
    <td> required </td>
    <td> bool </td>
    <td colspan="2"> false by default </td>
  </tr>
  <tr>
    <td> disabled </td>
    <td> bool </td>
    <td colspan="2"> disable input and dropdown </td>
  </tr>
    <tr>
    <td> helperText </td>
    <td> string </td>
    <td colspan="2"> TextField helper text </td>
  </tr>
    <tr>
    <td> inputProps </td>
    <td> object </td>
    <td colspan="2"> props that get spread to TextField InputProps </td>
  </tr>
  <tr>
    <td> inputRef </td>
    <td> function </td>
    <td colspan="2"> callback for getting the input reference </td>
  </tr>

  <tr>
    <td> autoFocus </td>
    <td> bool </td>
    <td colspan="2"> autoFocus input </td>
  </tr>

  <tr>
    <td> error </td>
    <td> boolean </td>
    <td colspan="2"> TextField error state </td>
  </tr>

  <tr>
    <td> margin </td>
    <td> 'none' | 'dense' | 'normal' </td>
    <td colspan="2"> for adjusting vertical spacing of the TextField </td>
  </tr>

  <tr>
    <td> variant </td>
    <td> string </td>
    <td colspan="2"> 'standard' by default </td>
  </tr>

  <tr>
    <td> fullWidth </td>
    <td> boolean </td>
    <td colspan="2"> TextField property - false by default </td>
  </tr>
</table>

### Regions

<table>
  <tr>
    <th> Name </th>
    <th> Type </th>
    <th> Description </th>
  </tr>
  <tr>
    <td> regions </td>
    <td> array/string </td>
    <td> to only show codes from selected regions </td>
  </tr>
</table>

<table>
  <tr>
    <th> Regions </th>
  </tr>
  <tr>
    <td> ['america', 'europe', 'asia', 'oceania', 'africa'] </td>
  </tr>
  <tr>
    <th> Subregions </th>
  </tr>
  <tr>
    <td> ['north-america', 'south-america', 'central-america', 'carribean', 'european-union', 'ex-ussr', 'middle-east', 'north-africa'] </td>
  </tr>
</table>

Regions selected: {'europe'}
```jsx
<MuiPhoneInput
  defaultCountry='it'
  regions={'europe'}
/>
```

Regions selected: {['north-america', 'carribean']}
```jsx
<MuiPhoneInput
  defaultCountry='ca'
  regions={['north-america', 'carribean']}
/>
```

### Localization

<table>
  <tr>
    <th> Name </th>
    <th> Type </th>
  </tr>
  <tr>
    <td> localization </td>
    <td> object </td>
  </tr>
</table>

```jsx
<MuiPhoneInput
  onlyCountries=['de', 'es']
  localization={{'Germany': 'Deutschland', 'Spain': 'España'}}
/>
```

### Supported events

<table>
  <tr>
    <td> onChange </td>
    <td> onFocus </td>
    <td> onBlur </td>
    <td> onClick </td>
    <td> onKeyDown </td>
  </tr>
</table>

Country data object not returns from onKeyDown event

<table>
  <tr>
    <th> Data </th>
    <th> Type </th>
    <th> Description </th>
  </tr>
  <tr>
    <td> value/event </td>
    <td> string/object </td>
    <td> the event or the phone number </td>
  </tr>
  <tr>
    <td> country data </td>
    <td> object </td>
    <td> the country object { name, dialCode, country code (iso2 format) } </td>
  </tr>
</table>

## License

Based on [react-phone-input-2](https://github.com/bl00mber/react-phone-input-2)

Based on [react-phone-input](https://github.com/razagill/react-phone-input) using [MIT](https://opensource.org/licenses/MIT)

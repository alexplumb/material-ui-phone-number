import { TextFieldProps } from "@mui/material";
import * as React from "react";

type CountryData = {
  name?: string
  dialCode?: string
  countryCode?: string
}

export type MuiPhoneNumberProps = TextFieldProps & {
  autoFormat?: boolean;
  classes?: any;
  countryCodeEditable?: boolean;
  defaultCountry?: string;
  disableAreaCodes?: boolean;
  disableCountryCode?: boolean;
  disableDropdown?: boolean;
  dropdownClass?: string;
  enableLongNumbers?: boolean;
  excludeCountries?: string[];
  inputClass?: string;
  onChange: (value: string, countryData: CountryData) => void;
  onlyCountries?: string[];
  preferredCountries?: string[];
  regions?: [string] | string;
};

declare const MuiPhoneNumber: React.FC<MuiPhoneNumberProps>;

export default MuiPhoneNumber;

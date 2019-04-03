# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.5.0] - 2019-04-03
### Added
- [Added support for `fullWidth` TextField prop](https://github.com/alexplumb/material-ui-phone-number/issues/8)
### Fixed
- [Fixed an issue where `onChange` wouldn't work correctly if there was no value property](https://github.com/alexplumb/material-ui-phone-number/issues/7)

## [1.4.0] - 2019-03-11
### Added
- Add support for `variant` TextField prop

## [1.3.0] - 2019-02-15
### Fixed
- [Fixed several issues with out-of-date documentation](https://github.com/alexplumb/material-ui-phone-number/issues/5)
### Added
- [Added support for `error` prop](https://github.com/alexplumb/material-ui-phone-number/issues/3)

## [1.2.3] - 2018-12-07
### Fixed
- Fixed a React warning caused by having the first child of a menu being a React.Fragment
### Changed
- Added @material-ui/core to webpack externals and removed lodash from externals

## [1.2.1] - 2018-11-14
### Added
- Added support for `inputProps` TextField parameter

## [1.2.0] - 2018-11-14
### Fixed
- [Fixed an issue with flags.png being loaded twice](https://github.com/alexplumb/material-ui-phone-number/issues/2)
### Added
- Re-added support for `disableDropdown` parameter

## [1.1.2] - 2018-10-30
### Fixed
- Fixed a spooky issue with the wrong value being sent to the onChange event listener

## [1.1.1] - 2018-10-30
### Fixed
- Fixed a regression caused by moving on* event listeners to InputProps

## [1.1.0] - 2018-10-30
### Fixed
- Fixed an issue with dropdowns not popping over the flag button
- Fixed an issue with the divider not appearing in the dropdown
- Fixed a regression with the dropdown not scrolling to the selected country
### Added
- Added support for `helperText` TextField property
### Changed
- Set `error` property on the TextField for invalid phone numbers
### Security
### Deprecated

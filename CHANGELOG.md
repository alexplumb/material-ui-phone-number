# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2021-10-12
### Changed
- Replaced flag sprite sheet with country-flag-icons package
### Technical
- This package no longer supports versions of material-ui under v5

## [2.2.6] - 2019-03-20
### Fixed
- [The dropdown should now be correctly attached to the field](https://github.com/alexplumb/material-ui-phone-number/issues/50)

## [2.2.5] - 2019-12-05
### Changed
- Moved `@material-ui/core` back to peerDependencies

## [2.2.4] - 2019-11-13
### Fixed
- Fixed an issue with builds not being generated correctly - see https://github.com/alexplumb/material-ui-phone-number/issues/34 and https://github.com/alexplumb/material-ui-phone-number/issues/32

## [2.2.3] - 2019-11-12
### Changed
- Changed `clsx` to `clsx`
- Moved all packages to dependencies rather than peerDependencies

## [2.2.2] - 2019-10-17
### Fixed
[Fixed a regression caused by updating to `@material-ui/core@4.5`](https://github.com/alexplumb/material-ui-phone-number/issues/31)

## [2.2.1] - 2019-10-02
### Fixed
- [Fixed a regression caused by switching from `componentWillReceiveProps` to `componentDidUpdate`](https://github.com/alexplumb/material-ui-phone-number/issues/28)
- Fixed a regression with setting the `value` property

## [2.2.0] - 2019-10-02
### Added
- [Added support for all remaining TextField properties](https://github.com/alexplumb/material-ui-phone-number/issues/27)

## [2.1.0] - 2019-08-27
### Changed
- [**BREAKING** If you were previously using `InputProps`, change it to `inputProps` with a lowercase `i`](https://github.com/alexplumb/material-ui-phone-number/issues/20)
- Removed `@material-ui/styles` dependency

## [2.0.1] - 2019-07-17
### Fixed
- [Changed the phone number format for Sweden](https://github.com/alexplumb/material-ui-phone-number/pull/19)
- Update lodash for security vulnerability
- [Removed reliance on theme providers](https://github.com/alexplumb/material-ui-phone-number/issues/18)

## [2.0.0-beta0] - 2019-05-02
### Added
- Added support for a new `native` property for people who want to use a native select for the button dropdown
### Changed
- Added support for material-ui 4
- Added `clsx` to peer dependencies
- Added `lodash` to peer dependencies

## [1.6.0] - 2019-04-23
### Changed
- Moved material-ui and react to peer dependencies
### Fixed
- [Added missing .npmignore file](https://github.com/alexplumb/material-ui-phone-number/issues/10)

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

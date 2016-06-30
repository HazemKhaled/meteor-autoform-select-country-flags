# Country flags select

Simple select for countries using selectize (supports multiple selection)

## Prerequisites

```
$ meteor add aldeed:autoform
```

## Installation

```
$ meteor add newnectar:meteor-autoform-select-country-flags
```

## Usage

### Single selection

In collection schema make field type: String

```javascript
{{> afQuickField name='country' type='countryFlags'}}
{{> afQuickField name='country' type='countryFlags' firstOption='Select a country'}}
```

### Multiple selection (maxItems - number of countries to select)

In collection schema make field type: [String]

```javascript
{{> afQuickField name='country' type='countryFlags' multiple=true maxItems=5}}
{{> afQuickField name='country' type='countryFlags' multiple=true maxItems=5 firstOption='Select a country'}}
```

### Helpers

In templates get long name or flag

```javascript
Name: {{> countryName country='GB'}}
Flag: {{> countryFlag country='GB'}}
```

In code return the long name

```javascript
CountryFlags.forName('gb');
CountryFlags.forName('US');
```

## Changelog

06/30/2016
- bug fix (thanks @szimmers)

03/05/2016
- bug fix (thanks @ritchieng)

02/19/2016
- fixes

02/16/2016
- client helpers

02/13/2016
- country codes changed to upper case (https://en.wikipedia.org/wiki/ISO_3166-1)

01/29/2016
- multiple selection

### todo
- tests


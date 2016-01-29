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

###Single selection

In collection schema make field type: String

```javascript
{{> afQuickField name='country' type='countryFlags'}}
{{> afQuickField name='country' type='countryFlags' firstOption='Select a country'}}
```

###Multiple selection (maxItems - number of countries to select)

In collection schema make field type: [String]

```javascript
{{> afQuickField name='country' type='countryFlags' multiple=true maxItems=5}}
{{> afQuickField name='country' type='countryFlags' multiple=true maxItems=5 firstOption='Select a country'}}
```

## Changelog

01/29/2016
- multiple selection

### todo
- tests


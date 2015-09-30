# Country flags select

Simple select for countries.

## Prerequisites

```
$ meteor add aldeed:autoform
$ meteor add jeremy:selectize
$ meteor add chhib:selectize-bootstrap-3
$ meteor add jss:flag-icon
```

## Installation

```
$ meteor add newnectar:meteor-autoform-select-country-flags
```

## Usage

```javascript
{{> afQuickField name='country' type='countryFlags' multiple=false}}
{{> afQuickField name='country' type='countryFlags' multiple=false firstOption='Select a country'}}
```


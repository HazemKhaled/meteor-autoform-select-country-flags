# Country flags select (Autoform meteor)

Simple select for countries.

## Prerequisites

```
$ meteor add chhib:selectize-bootstrap-3
$ meteor add jss:flag-icon
$ meteor add aldeed:autoform
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


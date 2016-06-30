AutoForm.addInputType("countryFlags", {
  template: "countryFlags",
  valueOut() {
    if (this[0].selectize) {
      return this[0].selectize.getValue();
    }
  },
  contextAdjust(context) {    
    context.atts.autocomplete = 'off';
    let itemAtts = _.clone(context.atts);
    context.items = [];

    // add default option
    context.items.push({
      name: context.name,
      label: (!_.isUndefined(context.atts.firstOption) && typeof context.atts.firstOption === 'string' ? 
                  context.atts.firstOption : 'Select an option'),
      value: '',
      _id: '',
      selected: false,
      atts: itemAtts
    });

    // make default value upperCase
    context.value = context.value.constructor === Array ? 
                          context.value.map(function(e) { return e.toUpperCase() }) : 
                          context.value.toUpperCase();

    return context;

  }
});

Template.countryFlags.helpers({
  optionAtts() {
    let item = this,
        atts = { value: item.value };
    if (item.selected) {
      atts.selected = '';
    }
    return atts;
  },  
  atts() {    
    let atts = _.clone(this.atts);
    atts = AutoForm.Utility.addClass(atts, 'form-control');
    return atts;
  },
});

Template.countryFlags.events({
  "click .selectized": function (event) {
    $(event.toElement).next().children(":first-child").children("input:first").focus();
  }
});

Template.countryFlags.onRendered(() => {
  let name = Template.currentData().name,
      select = `select[name=${name}]`,
      element = this.$(select);

  element.selectize({
      maxItems: !element.attr('multiple') ? 1 : element.attr('maxItems'),
      labelField: 'name',
      valueField: 'code',
      searchField: ['name', 'code'],
      options: COUNTRIES, 
      items: Template.currentData().value.constructor === Array ? Template.currentData().value : [Template.currentData().value],
      render: {
        item: function(item, escape) {
            return '<div><span class="flag-icon flag-icon-' + escape(item.code.toLowerCase()) + '"></span>&nbsp;' + escape(item.name) + '</div>';
        },
        option: function(item, escape) {
            return '<div><span class="flag-icon flag-icon-' + escape(item.code.toLowerCase()) + '"></span>&nbsp;' + escape(item.name) + '</div>';
        }
    },           
    });
});

Template.countryFlags.onDestroyed(() => {
  let name = Template.currentData().name,
      select = `select[name=${name}]`;
  if (this.$(select) && this.$(select)[0]) {
    this.$(select)[0].selectize.destroy();
  }
});

Template.countryName.helpers({
  longCountryName(name) {
    return CountryFlags.forName(name);
  }
});

Template.countryFlag.helpers({
  flagFor(name) {
    return escape(name.toLowerCase());
  }
});

CountryFlags = {
  forName(name) {
    let _name = name ? name.toUpperCase() : '', 
        country = null;
    COUNTRIES.forEach(function (c) {
      if (c.code === _name) {
        country = c;
      }
    });
    return country ? country.name : undefined;
  }
}



AutoForm.addInputType("countryFlags", {
  template: "countryFlags",
  valueOut: function () {
    if (this[0].selectize) {
      return this[0].selectize.getValue();
    }
  },
  contextAdjust: function (context) {    
    context.atts.autocomplete = 'off';
    var itemAtts = _.clone(context.atts);
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
  optionAtts: function () {
    var item = this
    var atts = {
      value: item.value
    };
    if (item.selected) {
      atts.selected = '';
    }
    return atts;
  },  
  atts: function () {    
    var atts = _.clone(this.atts);
    atts = AutoForm.Utility.addClass(atts, 'form-control');
    return atts;
  },
});

Template.countryFlags.events({
  "click .selectized": function (event) {
    $(event.toElement).next().children(":first-child").children("input:first").focus();
  }
});

Template.countryFlags.rendered = function () {
  this.$('select').selectize({
      maxItems: !this.$('select').attr('multiple') ? 1 : this.$('select').attr('maxItems'),
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
};

Template.countryFlags.destroyed = function () {
  this.$('select')[0].selectize.destroy();
};

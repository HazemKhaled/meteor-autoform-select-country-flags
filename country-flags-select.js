AutoForm.addInputType("countryFlags", {
  template: "countryFlags",
  valueOut: function () {
    if (this[0].selectize) {
      return this[0].selectize.getValue()[0];
    }
  },
  contextAdjust: function (context) {    
    var itemAtts = _.clone(context.atts);

    context.items = [];

    // add default option
    context.items.push({
      name: context.name,
      label: 'Select an option',
      value: '',
      _id: '',
      selected: false,
      atts: itemAtts
    });

    return context;
  }
});

Template.countryFlags.helpers({
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
      maxItems: 1,
      labelField: 'name',
      valueField: 'code',
      searchField: ['name', 'code'],
      options: COUNTRIES, 
      items: [Template.currentData().value],
      render: {
        item: function(item, escape) {
            return '<div><span class="flag-icon flag-icon-' + escape(item.code) + '"></span>&nbsp;' + escape(item.name) + '</div>';
        },
        option: function(item, escape) {
            return '<div><span class="flag-icon flag-icon-' + escape(item.code) + '"></span>&nbsp;' + escape(item.name) + '</div>';
        }
    },           
    });
};

Template.countryFlags.destroyed = function () {
  this.$('select')[0].selectize.destroy();
};

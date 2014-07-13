var options = {
    events_source: '../_assets/plugins/calendar/events.json',
    view: 'month',
    tmpl_path: '../_assets/plugins/calendar/tmpls/',
    tmpl_cache: false,
    // remove 'day' key to default to current day
    day: '2013-03-16',
    onAfterViewLoad: function(view) {
        $('#calendar-wrapper h4').text(this.getTitle());
    },
    classes: {
        months: {
            general: 'label'
        }
    }
};
var calendar = $("#calendar").calendar(options);
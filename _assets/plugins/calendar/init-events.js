var options = {
    events_source: '../_assets/plugins/calendar/events.json',
    view: 'month',
    tmpl_path: '../_assets/plugins/calendar/tmpls/',
    tmpl_cache: false,
    // remove 'day' key to default to current day
    day: '2013-03-16',
    onAfterViewLoad: function(view) {
        $('#calendar-wrapper h4').text(this.getTitle());
        // $('.btn-group button').removeClass('active');
        // $('button[data-calendar-view="' + view + '"]').addClass('active');
    },
    classes: {
        months: {
            general: 'label'
        }
    }
};
var calendar = $("#calendar").calendar(options);

// (function($) {

// 	"use strict";

// 	var options = {
// 		events_source: 'events.json.php',
// 		view: 'month',
// 		tmpl_path: 'tmpls/',
// 		tmpl_cache: false,
// 		day: '2013-03-12',
// 		onAfterEventsLoad: function(events) {
// 			if(!events) {
// 				return;
// 			}
// 			var list = $('#eventlist');
// 			list.html('');

// 			$.each(events, function(key, val) {
// 				$(document.createElement('li'))
// 					.html('<a href="' + val.url + '">' + val.title + '</a>')
// 					.appendTo(list);
// 			});
// 		},
// 		onAfterViewLoad: function(view) {
// 			$('.page-header h3').text(this.getTitle());
// 			$('.btn-group button').removeClass('active');
// 			$('button[data-calendar-view="' + view + '"]').addClass('active');
// 		},
// 		classes: {
// 			months: {
// 				general: 'label'
// 			}
// 		}
// 	};

// 	var calendar = $('#calendar').calendar(options);

(function($) {
	$('a[data-calendar-nav]').each(function() {
		var $this = $(this);
		$this.click(function() {
			calendar.navigate($this.data('calendar-nav'));
		});
	});

	// $('.btn-group button[data-calendar-view]').each(function() {
	// 	var $this = $(this);
	// 	$this.click(function() {
	// 		calendar.view($this.data('calendar-view'));
	// 	});
	// });

	// $('#first_day').change(function(){
	// 	var value = $(this).val();
	// 	value = value.length ? parseInt(value) : null;
	// 	calendar.setOptions({first_day: value});
	// 	calendar.view();
	// });

	// $('#language').change(function(){
	// 	calendar.setLanguage($(this).val());
	// 	calendar.view();
	// });

	// $('#events-in-modal').change(function(){
	// 	var val = $(this).is(':checked') ? $(this).val() : null;
	// 	calendar.setOptions({modal: val});
	// });
	// $('#events-modal .modal-header, #events-modal .modal-footer').click(function(e){
	// 	//e.preventDefault();
	// 	//e.stopPropagation();
	// });
}(jQuery));
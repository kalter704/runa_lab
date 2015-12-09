// jQuery 1.7.1, jQuery UI 1.9.2

var monthNames = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
   
$(document).ready(function() {
  $("input[name='месяц']").autocomplete( {
   delay: 300,
   minLength: 0,
   source: monthNames
  });
  $("input[name='месяц']").focus(function() {
   $(this).autocomplete("search", $(this).val());
  });
});
// //Edit 'key' and 'columns' to connect your spreadsheet

// //enter google sheets key here
// var key =
//   "https://docs.google.com/spreadsheets/d/19nPqTvg6QWrxygfIZJI2dayXzLsC2M7gZbKeoeraFMY/pubhtml";

// //"data" refers to the column name with no spaces and no capitals
// //punctuation or numbers in your column name
// //"title" is the column name you want to appear in the published table
// var columns = [{
//   "data": "acronym",
//   "title": "Acronym"
// }, {
//   "data": "definition",
//   "title": "Definition"
// }, {
//   "data": "domain",
//   "title": "Domain"
// }];


// $(document).ready(function() {

//   function initializeTabletopObject() {
//     Tabletop.init({
//       key: key,
//       callback: function(data, tabletop) {
//         writeTable(data); //call up datatables function
//       },
//       simpleSheet: true,
//       debug: false
//     });
//   }

//   initializeTabletopObject();

//   function writeTable(data) {
//     //select main div and put a table there
//     //use bootstrap css to customize table style: http://getbootstrap.com/css/#tables
//     $('#graphic').html(
//       '<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-condensed table-responsive" id="mySelection"></table>'
//     );

//     //initialize the DataTable object and put settings in
//     $("#mySelection").DataTable({
//       "autoWidth": false,
//       "data": data,
//       "lengthChange": false,
//       // "pagination": false,
//       "columns": columns,
//       "order": [
//         [1, "acronym"]
//       ], //order on second column
//       "pagingType": "false" //no page numbers
//         //uncomment these options to simplify your table
//         //"paging": false,
//         //"searching": false,
//         //"info": false
//     });
//   }
// });
// //end of writeTable



//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key =
  "https://docs.google.com/spreadsheets/d/19nPqTvg6QWrxygfIZJI2dayXzLsC2M7gZbKeoeraFMY/pubhtml";

//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [{
  "data": "acronym",
  "title": "Acronym"
}, {
  "data": "definition",
  "title": "Definition"
}, {
  "data": "domain",
  "title": "Domain"
}];


$(document).ready(function() {

  function initializeTabletopObject() {
    Tabletop.init({
      key: key,
      callback: function(data, tabletop) {
        writeTable(data); //call up datatables function
      },
      simpleSheet: true,
      debug: false
    });
  }

  initializeTabletopObject();

  function writeTable(data) {
    //select main div and put a table there
    //use bootstrap css to customize table style: http://getbootstrap.com/css/#tables
    $('#graphic').html(
      '<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-condensed table-responsive" id="mySelection"></table>'
    );

    //initialize the DataTable object and put settings in
    $("#mySelection").DataTable({
      "autoWidth": false,
      "lengthChange": false,

      "data": data,
      "columns": columns,
      "order": [
        [2, "desc"]
      ], //order on second column
      "pagingType": "simple" //no page numbers
        //uncomment these options to simplify your table
        //"paging": false,
        //"searching": false,
        //"info": false
    });
  }
});
//end of writeTable

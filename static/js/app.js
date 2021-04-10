// from data.js
var tableData = data;


// select the table body
var tbody = d3.select("tbody");

// populate the table with each UFO sighting
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// create event to filter the table on button click

var button = d3.select("#filter-btn");
var form = d3.select("#form");

// create events for both click and ENTER key
button.on("click", findSightings);
form.on("submit",findSightings);

// Create the function to run for both events
function findSightings() {

    // prevent the page from refreshing
    d3.event.preventDefault();
  
    // select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // get the value property of the input element
    var dateSelected = inputElement.property("value");

    // print the value to the console
    console.log(dateSelected);

    if (dateSelected === ""){
        var filteredData = tableData;    
    }
    else {
    var filteredData = tableData.filter(s =>s.datetime === dateSelected);
    }

    tbody.html("");

    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

    }
 

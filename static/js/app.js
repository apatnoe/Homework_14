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

    // filter the table

        // var filteredData = tableData.filter(ufoSighting=> ufoSighting.datetime === dateSelected);

    // console.log(filteredData)

    // filteredData.forEach((ufoSighting) => {
    //     var row = tbody.append("tr");
    //     Object.entries(ufoSighting).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   });

    for (i = 0; i < tbody.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }



}
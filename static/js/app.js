// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
data.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");
// Getting a reference to the input element on the page with the id property set to 'input-field'

//console.log(newDate);


function handleClick() {
    d3.event.preventDefault();
    console.log("A button was clicked!");
    // We can use d3 to see the object that dispatched the event
    console.log(d3.event.target);

    var inputField = d3.select("#datetime");
    var newDate = inputField.property("value");
    var filteredData = tableData.filter(specificSighting => specificSighting.datetime === newDate);
    console.log(filteredData);
    console.log(newDate);

    //var table = document.getElementById("tableid");
    //or use :  var table = document.all.tableid;
   
    tbody.html("")

    filteredData.forEach(function(reducedSighting) {
      console.log(reducedSighting);
      var new_row = tbody.append("tr");
      Object.entries(reducedSighting).forEach(function([key, value]) {
      console.log(key, value);
          // Append a cell to the row for each value
        var new_cell = new_row.append("td");
        new_cell.text(value);
        });
    });
  };
  
// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);
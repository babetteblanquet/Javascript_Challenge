// from data.js
var tableData = data;

// Creating a variable to get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(tableData);

//Appending the table with each ufo data with Arrow Functions
tableData.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

//Filtering the data with date
//Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Remove any ufo from the variable tbody 
  tbody.html("");

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime.form-control");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Console log the input value and the tableData
  console.log(inputValue);
  console.log(tableData);

  //Filter the tableData based on the input Value
  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  //Console log the filteredData
  console.log(filteredData);

  //// Display the filtered data in the table - appending with arrow functions
filteredData.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

 

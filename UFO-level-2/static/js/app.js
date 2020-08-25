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

//Filtering the data with five filters: date, city, state, country, shape

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
  
  // Select the input elements and get the raw HTML node
  var inputDate = d3.select("#datetime.form-control");
  var inputCity = d3.select("#city.form-control");
  var inputState = d3.select("#state.form-control");
  var inputCountry = d3.select("#country.form-control");
  var inputShape = d3.select("#shape.form-control");

  // Get the value property of the input elements
      var inputValueDate = inputDate.property("value");
      var inputValueCity = inputCity.property("value");
      var inputValueState = inputState.property("value");
      var inputValueCountry = inputCountry.property("value");  
      var inputValueShape = inputShape.property("value");
  
  // Console log the input values and the tableData
  console.log(inputValueDate);
  console.log(inputValueCity);
  console.log(inputValueState);
  console.log(inputValueCountry);
  console.log(inputValueShape);
  console.log(tableData);

  //Filter the tableData based on all the input Values

  // var values = [inputValueDate, inputValueCity, inputValueState, inputValueCountry, inputValueShape]

  // values.forEach((value) => {

  //   if (value != "") {
  //     var filteredData = tableData.filter(ufo => 
  //       ufo.datetime === inputValueDate && 
  //       ufo.city === inputValueCity &&
  //       ufo.state === inputValueState &&
  //       ufo.country === inputValueCountry &&
  //       ufo.shape === inputValueShape);
  //   }
  //   else {
    var filteredData = tableData.filter(ufo => 
      ufo.datetime === tableData.datetime && 
      ufo.city === tableData.city &&
      ufo.state === tableData.state &&
      ufo.country === tableData.country &&
      ufo.shape === tableData.shape);
  //   }
  // });

  
  

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

 

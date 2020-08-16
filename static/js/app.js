// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");
    
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      console.log(cell.text(val));
    });
  });
}

// Keep track of all filters
var filters = {};

function updateFilters() {

  let elementChange = d3.select(this);
  let elementValue = elementChange.property("value");
  let elementID = elementChange.attr("id");

  if (elementValue) {
    filters[elementID] = elementValue;
  }
  else {
    delete filters[elementID];
  }
  filterTable();
}

// This function will replace your handleClick function
// function updateFilters() {

//   // Save the element, value, and id of the filter that was changed
//   // let date = ['datetime', d3.select("#datetime").property("value")];
//   // let city = ['city', d3.select("#city").property("value")];
//   // let state = ['state', d3.select("#state").property("value")];
//   // let country = ['country', d3.select("#country").property("value")];
//   // let shape = ['shape', d3.select("#shape").property("value")];



//   // If a filter value was entered then add that filterId and value
//   // to the filters list. Otherwise, clear that filter from the filters object
//     if (date) {
//       filters.date = [date[0], date[1]]
//     }
//     else filters = filters;
//     if (city) {
//       filters.city = [city[0], city[1]]
//     }
//     else filters = filters;
//     if (state) {
//       filters.state = [state[0], state[1]]
//     }
//     else filters = filters;
//     if (country) {
//       filters.country = [country[0], country[1]]
//     }
//     else filters = filters;
//     if (shape) {
//       filters.shape = [shape[0], shape[1]]
//     }
//     else filters = filters;
//   // Call function to apply all filters and rebuild the table
//   filterTable();
// }

function filterTable() {

  // set the filteredData to the existing tableData
  let filteredData = tableData;

  // loop through all of the filters and keep any data that matches the filter values
  //for (var i = 0; i < filters.length; i++) {
    //filteredData = filteredData.filter(row => row.filters[i] === (filters[i]("value")));
  //};
  Object.values(filters).forEach(([key,value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });

  //Use .slice above!

  // Finally, rebuild the table using the filtered Data
buildTable(filteredData);
}

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);

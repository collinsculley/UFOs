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
    });
  });
}

// Keep track of all filters
var filters = {};

// This function will replace your handleClick function
function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
    if (date) {
      filters = filters.append("date")
    }
    else pass;
    if (city) {
      filters = filters.append("city")
    }
    else pass;
    if (state) {
      filters = filters.append("state")
    }
    else pass;
    if (country) {
      filters = filters.append("country")
    }
    else pass;
    if (shape) {
      filters = filters.append("shape")
    }
    else pass;
  // Call function to apply all filters and rebuild the table
  filterTable();
}

function filterTable() {

  // set the filteredData to the existing tableData
  let filteredData = tableData;

  // loop through all of the filters and keep any data that matches the filter values
  for (var i = 0; i < filters.length; i++) {
    filteredData = filteredData.filter(row => row.filters[i] === (filters[i]("value")));
  }

  // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
}

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll("#filter-btn").on("click", filterTable);

// Build the table when the page loads
buildTable(tableData);

// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Building 'data' Table
function buildTable(data) {
    // clear existing data
    tbody.html("");

    // loop through each object in the data and append row/cells for each value
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");

        // loop through each field in dataRow and add each value as table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
};

// filter by date function
function handleClick() {
    // grab datetime value from the filter
    let date = d3.select("#datetime").property("value");
    // set default filter and save it to new variable
    let filteredData = tableData;
    // if statement to check if date was entered and filter on it
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // rebuilt table using refiltered data.  If NaN entered, use origional tableData
    buildTable(filteredData);
};

// attach 'event' to 'listen' for the button click
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when page loads
buildTable(tableData);


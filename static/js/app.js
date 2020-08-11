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
}


function saveTable() {
    /* Get the HTML data using Element by Id */
    var table = document.getElementById("body");
    var numbers = document.getElementById("collumNumbers");
    var namafile = document.getElementById("namaFile").value;
    var header = "No,NIM,Nama";

    x = numbers.innerHTML;
    x = parseInt(x);
    console.log(table.innerHTML);
    console.log(x)
    /* Declaring array variable */
    var rows = [];

      //iterate through rows of table
    for(var i=1,row; row = table.rows[i];i++){
        //rows would be accessed using the "row" variable assigned in the for loop
        //Get each cell value/column from the row
        column1 = row.cells[0].innerText;
        column2 = row.cells[1].innerText;
        column3 = row.cells[2].innerText;
 
    /* add a new records in the array */
        rows.push(
            [
                column1,
                column2,
                column3,
            ]
        );
 
        }

    csvContent = "data:text/csv;charset=utf-8,";
    row = header;
    csvContent += row + "\r\n";
        /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
    rows.forEach(function(rowArray){
        row = rowArray.join(",");
        csvContent += row + ",a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a\r\n";
    });

    /* create a hidden <a> DOM node and set its download attribute */
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", namafile + ".csv");
    document.body.appendChild(link);
        /* download the data file named "Stock_Price_Report.csv" */
    link.click();
}
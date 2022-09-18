function saveAbsen() {
    /* Get the HTML data using Element by Id */
    var table = document.getElementById("body");
    var inputFileName = document.getElementById("fileUpload").value;
    inputFileName = inputFileName.slice(12,-4)
    var year = new Date();
    var month = new Date();
    var day = new Date();
    var namafile = inputFileName + "-" + day.getDate() + "/" + (month.getMonth()+1) + "/" + year.getFullYear();
    var header = "No,NIM,Nama";
    /* Declaring array variable */
    var rows = [];

    //iterate through rows of table
    for(var i=1,row; row = table.rows[i];i++){
        //rows would be accessed using the "row" variable assigned in the for loop
        //Get each cell value/column from the row
        column1 = row.cells[0].innerText;
        column2 = row.cells[1].innerText;
        column3 = row.cells[2].innerText;
        var test = []
        for (let index = (i-1) * 16; index < i * 16; index++) {
            var repeat = 0;
            if (document.getElementsByClassName("absen")[index].checked) {
                test[(index - ((i-1) * 16))] = "hadir";
            } else {
                test[(index - ((i-1) * 16))] = "tidak_hadir";
            }
            repeat++;

        }
    /* add a new records in the array */
        rows.push(
            [
            column1,                    
            column2,                    
            column3,
            test[0],                    
            test[1],
            test[2],
            test[3],
            test[4],
            test[5],
            test[6],
            test[7],
            test[8],
            test[9],
            test[10],
            test[11],
            test[12],
            test[13],
            test[14],
            test[15],
            ]
        );
    }
    csvContent = "data:text/csv;charset=utf-8,";
    row = header;
    csvContent += row + "\r\n";
    
    /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
    rows.forEach(function(rowArray){
        row = rowArray.join(",");
        csvContent += row + "\r\n";
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
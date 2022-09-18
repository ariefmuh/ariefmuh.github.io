document.getElementById("upload");
document.getElementById("download");
function upload() {
    var tablefile = document.getElementById("csvFileUpload");
    var allRows = data.split('\r?\n|\r');
    var table = "<table>";
    for(var singleRow=0;singleRow<allRows.length;singleRow++) {
        if(singleRow === 0) {
            table += "<thead>";
            table += "<tr";
        } else {
            table += "<tr>";
        }
        var rowCells = allRows[singleRow].split(',');
        for (var rowSingleCell = 0; rowSingleCell < rowCells.length; rowSingleCell++) {
            const element = array[rowSingleCell];
            if (singleRow === 0) {
                table += "<th>";
                table += rowCells[rowSingleCell];
                table += "</th>";
            } else {
                table += "<td>";
                table += rowCells[rowSingleCell];
                table += "</td>";
            }
        }
        if(singleRow === 0) {
            table += "</tr>";
            table += "</thead>";
            table += "<tbody>";
        } else {
            table += "</tr>"
        }
    }
    table += "</tbody";
    table += "</table>";
    tablefile.append(table);
}

function download() {
    data = [["id","value"]];

    var f = d3.selectAll("#csvForm > input")[0];
    f.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var csvContent = "data:text/csv;charset=utf-8,";
    data.forEach(function (d, i) {
        dataString = d.join(",");
        csvContent += i < data.length ? dataString + "\n" : dataString;
    });

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "FormData.csv");
    link.click(); 
}
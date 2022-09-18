function addTable() {
    var myTableDiv = document.getElementById("body");
    var name = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var numbers = document.getElementById("collumNumbers");
    x = numbers.innerHTML;
    x++;
    numbers.innerHTML = x;

    var table = document.createElement('TR');
    table.border = '1';
  
    for (var i = 0; i < 1; i++) {
      var td = document.createElement('TD');
      td.width = '20';
      td.appendChild(document.createTextNode(x));
      table.appendChild(td);
      var td = document.createElement('TD');
      td.width = '100';
      td.appendChild(document.createTextNode(nim));
      table.appendChild(td);
      var td = document.createElement('TD');
      td.width = '150';
      td.appendChild(document.createTextNode(name));
      table.appendChild(td);
    }
    myTableDiv.appendChild(table);
  }
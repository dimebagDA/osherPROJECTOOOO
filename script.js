function doIt() {
            
    var color = document.getElementById("color").value;
    var name = document.getElementById("name").value;
   

    var tables = document.getElementsByTagName("table");
    for (k = 0; k < tables.length; k++) {
        var rows = tables[k].getElementsByTagName("tr");
        for (i = 0; i < rows.length; i++) {
            var tds = rows[i].getElementsByTagName("td")
            for (j = 0; j < tds.length; j++)
                if (tds[j].innerHTML.includes(name))
                    tds[j].style.background = color;
        }
    }
}


document.addEventListener("DOMContentLoaded", function() {
    var cellsFromTable1 = document.querySelectorAll("#osher_table1 td");
    var cellsFromTable2 = document.querySelectorAll("#osher_table2 td");
    var cellsFromTable3 = document.querySelectorAll("#osher_table3 td");

    const allCells = [...cellsFromTable1, ...cellsFromTable2, ...cellsFromTable3];
    allCells.forEach(function(cell) {
        cell.addEventListener("click", function() {
            var text = this.innerHTML;
            this.innerHTML = "<input type='text' value='" + text + "'>";
            var input = this.querySelector("input");
            input.focus();

            input.addEventListener("blur", function() {
                cell.innerHTML = this.value;
            });

            input.addEventListener("keydown", function(event) {
                if (event.keyCode === 13) { // Enter key
                    cell.innerHTML = this.value;
                }
            });
        });
    });
});
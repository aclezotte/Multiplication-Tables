function multTable() {
    function addP(content) {
    var para = document.createElement("p");
    var node = document.createTextNode(content);
    para.appendChild(node);
    var element = document.getElementById("multTable");
    element.appendChild(para);
    }
    
    for (i = 1; i <= 12; i++) {
        for (j = 1; j <= 12; j++) {
            console.log(i + " * " + j + " = " + (i * j));
            addP(i + " * " + j + " = " + (i * j));
        }
    }
}

multTable();

function tableCreator(){
    var body = document.getElementsByTagName('body')[0];
    var table = document.createElement('table');
    table.style.width = '100%';
    table.setAttribute('border', '1');
    var tblBody = document.createElement('tblBody');
    for (var i = 0; i < 8; i++){
        var tr = document.createElement('tr');
        for (var j = 0; j < 8; j++){
                var td = document.createElement('td');
                tr.appendChild(td)
        }
        tblBody.appendChild(tr);
    }
    table.appendChild(tblBody);
    body.appendChild(table);
}
tableCreator();
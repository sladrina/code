function chessboard() {
    var newTable = document.createElement( 'table' ),
        letter = [ '','A','B','C','D','E','F','G','H','' ],
        blackFigures1 = [ '8','&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;','8' ],
        whiteFigures1 = [ '1','&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9821;','&#9816;','&#9814;','1' ],
        blackFigures2 = [ '7','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','7' ],
        whiteFigures2 = [ '2','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','2' ];
    for ( var i = 0, a = 9; a >= 0, i < 10; i++, a-- ) {
        var newTr = newTable.insertRow(i);
        for ( var j = 0; j < 10; j++ ) {
            var newTd = newTr.insertCell(j);
            switch (i) {
                case 0:
                    newTd.innerText = letter[j];
                    break;

                case 1:
                    newTd.innerHTML = blackFigures1[j];
                    break;

                case 2:
                    newTd.innerHTML = blackFigures2[j];
                    break;

                case 7:
                    newTd.innerHTML = whiteFigures2[j];
                    break;

                case 8:
                    newTd.innerHTML = whiteFigures1[j];
                    break;

                case 9:
                    newTd.innerText = letter[j];
                    break;
                default:
                    if (j === 0 ||j === 9 ) {
                        newTd.innerHTML = a;
                    }
                    break;
            }
        }
    }
    var elements = document.getElementsByClassName( 'task511' );
    document.body.appendChild( newTable );
};
chessboard();

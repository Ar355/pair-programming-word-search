const wordSearch = (letters, word) => { 
    
    //FLAG WILL SWITCH TO TRUE IF WORD IS FOUND IN ARRAYS
    let flag = false;

    //SEARCH FOR WORD IN HORIZONTAL ARRAY
    const horizontalJoin = letters.map(ls => ls.join(''))

    if (horizontalJoin.includes(word)){
        //return true;
        flag = true
    }


    //TRANPOSES INTO VERTICAL ARRAY
    let rows = letters[0].length;
    let verticalArray = [];

    for (let i = 0; i < rows; i++){
        verticalArray.push([]);
    }
    
    for (let i in letters) {
        for (let j in letters[i]){
            verticalArray[j].push(letters[i][j]);
        }
    }

    //SEARCH FOR WORD IN VERTICAL ARRAY
    const verticalJoin = verticalArray.map(ls => ls.join(''))

     for (let l of verticalJoin) {
        //console.log("-->", l);
        if (l.includes(word)) {
            //console.log(`Found ${word} at ${l}`);
            //return true;
            flag = true;
        } 
    }
    
    return flag;

}

module.exports = wordSearch

// wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'LARRY');


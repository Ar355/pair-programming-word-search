//SEARCHES FOR WORD IN MATRIX
const wordSearch = (letters, word) => { 
    
    //FLAG WILL SWITCH TO TRUE IF WORD IS FOUND IN ARRAYS
    let flag = false;

    //SEARCH FOR WORD IN HORIZONTAL ARRAY
    const horizontalJoin = letters.map(ls => ls.join(''))

    if (horizontalJoin.includes(word)){
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
         
        if (l.includes(word)) {
            flag = true;
        } 
    }
    
    return flag;

}

module.exports = wordSearch




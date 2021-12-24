// Code your solutions in this file

// ================== function writeCards
function writeCards(arrStr,eventName) {

    let arrMsgs = [];
    debugger;
    for (let i = 0; i < arrStr.length; i++ ) {
        debugger;
        arrMsgs.push(`Thank you, ${arrStr[i]}, for the wonderful ${eventName} gift!`);
        debugger;
    } //end for loop
    
    return arrMsgs;
} // ================ end of function writeCards

// ================== function countDown 
function countDown(positiveNumber){
    if (positiveNumber < 0){
        return "not a positive number"
    }else{
        do {
            console.log(positiveNumber);
            positiveNumber-- ;
        } while (positiveNumber >= 0);
        // end loop of do ... while
    } //end if else
}// ================ end of function countDown
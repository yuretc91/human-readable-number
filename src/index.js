module.exports = function toReadable (number) {
    const firstNumberArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const secondNumberArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const bigNumberArr = ['thousand', 'million', 'billion'];
    //let number = prompt('Write a number');
    let arrOfNumber = [];
    let stringOfNumber = '';
    function smallNumber(num, firstArr, secondArr){
        return((Math.trunc(num/100)>0?(firstArr[Math.trunc(num/100)-1]+' hundred '):'')+(num%100>0?(num%100<20?firstArr[Math.trunc(num%100)-1]:(secondArr[Math.trunc(num%100/10)-2]) + (num%100%10==0?'':' '+firstArr[num%100%10-1])):''));
    }
    //console.log(number);
    for(let i = number.length; i >= 0; i--){
        if(i-3>0){
            arrOfNumber.unshift(number.substring(i,i-3));
            i = i-2;
        }else{
            arrOfNumber.unshift(number.substring(i,0));
            i =-1;
        }
    }
    console.log(arrOfNumber);
    for(let i=0;i<arrOfNumber.length;i++){
        stringOfNumber = stringOfNumber+' '+smallNumber(arrOfNumber[i], firstNumberArr, secondNumberArr)+(arrOfNumber[i]>0?(arrOfNumber.length-2-i>=0?' '+bigNumberArr[arrOfNumber.length-2-i]:''):'');
        //console.log(stringOfNumber);
    }
    return(stringOfNumber);
}
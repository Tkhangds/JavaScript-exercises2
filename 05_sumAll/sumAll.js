const sumAll = function(num1,num2) {
    let ans = 0,start = 0,end = 0;

    if(typeof(num1) != typeof(1) || typeof(num2) != typeof(1)){
        return "ERROR";
    }

    if(num1 < 0 || num2 < 0){
        return "ERROR";
    }
    
    if(num1 > num2){
        start = num2;
        end = num1;
    } else {
        start = num1;
        end = num2;
    }

    for(let i = start; i < end + 1;i++){
        ans += i;
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;

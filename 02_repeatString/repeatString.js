const repeatString = function(sum, num) {
    if(num < 0){
        return "ERROR";
    }
    let ans = "";
    for(let i = 0; i < num;i++){
        ans += sum;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;

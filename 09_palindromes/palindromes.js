const palindromes = function (string) {
    string = string.toLowerCase().replaceAll(' ','');
    
    let check = "";

    for(let i = 0; i < string.length;i++){
        if(!!string[i].match(/^[.,:!?]/)){}
        else check = check + string[i];
    }

    for(let i = 0;i < check.length/2+1;i++){
        if(check[i] != check[check.length - i -1]){
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;

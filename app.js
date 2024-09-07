function isLucky(num){
    if(+num[0] + +num[1] + +num[2]  == +num[3] + +num[4] + +num[5]){
        console.log("true");
    }else{
        console.log("false");
    }
}
isLucky("043142");

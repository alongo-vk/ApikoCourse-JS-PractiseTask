let convert = function(bytes){
    console.log(`${(bytes/1000000).toFixed(2)} Mb`);
}

convert.call(this, 12300000);
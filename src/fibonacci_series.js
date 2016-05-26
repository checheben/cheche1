'use strict';

function fibonacci_series(n) {
	var arr = [];
	for(var i=0; i<=n; i++){
		if(i<2){
			arr[i] = i;
		}else{
			arr[i] = arr[i-1]+arr[i-2];
		}	
	}
	return arr;
}

module.exports = fibonacci_series;

function createCalculator() {
	calculator=function(){};
	calculator.value_=0;
	calculator.value=function(){
		return calculator.value_
	};
	calculator.add=function(num){
		calculator.value_+=num
	};
	calculator.subtract=function(num){
		calculator.value_-=num
	};
	return calculator;
};

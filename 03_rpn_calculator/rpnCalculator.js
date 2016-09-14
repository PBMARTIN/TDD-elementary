function RPNCalculator(){
	this.ls=[];
	this.push=function(num){
		this.ls.push(num)
	};
};
	
RPNCalculator.prototype.plus=function(){
	if (this.ls.length>1) {
		this.ls[this.ls.length-2]+=this.ls.pop()
	}
	else {
		throw "rpnCalculator is empty"
	}
};
RPNCalculator.prototype.minus=function(){
	if (this.ls.length>1) {
		this.ls[this.ls.length-2]-=this.ls.pop()
	}
	else {
		throw "rpnCalculator is empty"
	}
};
RPNCalculator.prototype.times=function(){
	if (this.ls.length>1) {
		this.ls[this.ls.length-2]*=this.ls.pop()
	}
	else {
		throw "rpnCalculator is empty"
	}
};
RPNCalculator.prototype.divide=function(){
	if (this.ls.length>1) {
		this.ls[this.ls.length-2]/=this.ls.pop()
	}
	else {
		throw "rpnCalculator is empty"
	}
};
RPNCalculator.prototype.value=function(){
		return this.ls[this.ls.length-1]
};
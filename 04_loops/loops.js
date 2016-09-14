function repeat(str,num) {
	output="";
	for (var i=0;i<num;i++) {
		output+=str
	}
	return output
}
function sum(array) {
	output=0;
	for (i of array) {
		output += i
	}
	return output
}
function gridGenerator(rc) {
	output=""
	for (var r=0; r<rc; r++) {
		if (r%2===0){
			token="#"
		}
		else {
			token=" "
		};
		for (var c=0; c<rc; c++) {
			output+=token;
			if (token==="#"){
				token=" "
			}
			else {
				token= "#"
			}
		}
		output+="\n"
	}
	return output
}
function join(array,delimiter='') {
	output='';
	for (var i of array) {
		output += i+delimiter
	}
	if (output.slice(output.length-1,output.length)===delimiter){
		output=output.slice(0,output.length-1)
	}
	return output
}
function paramify(obj) {
	output="";
	for (var i of Object.keys(obj).sort()){
		output+=i+'='+obj[i]+'&';
	}
	return output.slice(0,output.length-1)
}
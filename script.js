function fibonacci(num) {
var a=0,b=1;
	console.log(a);
	for(var i=1;i<=num;i++)
		{
			var temp=a+b;
			console.log(temp);
			a=b;
			b=temp;
		}
}

module.exports = fibonacci;

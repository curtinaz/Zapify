// CHART 1 

var ctx = document.getElementById('myChart').getContext('2d');

		function MoreChartOptions(){} 
var ChartData = {
	labels : ["January","February","March","April","May","June","July",],
	datasets : [
		{
		data : [65,8,90,81,56,55,40,],
		backgroundColor :['rgba(25,118,179,1)','rgba(46,204,113,1)','rgba(155,89,182,1)','rgba(241,196,15,1)','rgba(189,195,199,1)','rgba(83,21,119,0.3)','rgba(205,251,187,0.7)',],
		borderColor : ['rgba(136,136,136,0.5)','rgba(170,170,170,1)','rgba(155,89,182,1)','rgba(241,196,15,1)','rgba(189,195,199,1)','rgba(83,21,119,0.4)','rgba(205,251,187,1)',],
		label:"2013"},

		{
		data : [21,48,40,19,96,27,100,],
		backgroundColor :['rgba(25,118,179,1)','rgba(46,204,113,1)','rgba(155,89,182,1)','rgba(241,196,15,1)','rgba(189,195,199,1)','rgba(83,21,119,0.3)','rgba(205,251,187,0.7)',],
		borderColor : ['rgba(136,136,136,0.5)','rgba(170,170,170,1)','rgba(155,89,182,1)','rgba(241,196,15,1)','rgba(189,195,199,1)','rgba(83,21,119,0.4)','rgba(205,251,187,1)',],
		label:"2014"},

]
	};
ChartOptions= {
responsive:false,
	layout:{padding:{top:12,left:12,bottom:12,},},
	plugins:{
datalabels:{display:false},
},
legend:{display:false},elements: {
	arc: {borderWidth:0.01,
},
	line: {
},
	rectangle: {
},
},
tooltips:{
},
hover:{
	mode:'nearest',
	animationDuration:400,
},
};
 DrawTheChart(ChartData,ChartOptions,"chart-01","doughnut");

ctx.canvas.parentNode.style.height = '33%';
ctx.canvas.parentNode.style.width = '33%';
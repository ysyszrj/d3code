/**
 * d3 simple demo to draw scatter
 * Created by artemis_zrj on 2016/3/15.
 * 负责绘制散点图
 */

function draw_scatter(positions,lables,selector){

	var div = d3.select(selector)[0][0];

	var client_width = div.clientWidth;
	var client_height = div.clientHeight;

	var margin = {top: 10, right: 10, bottom: 10, left: 10},
	    width = client_width - margin.left - margin.right,
	    height = client_height - margin.top - margin.bottom;

	var r = width;

	var x = d3.scale.linear()
    .range([margin.left, width]);

	var y = d3.scale.linear()
	    .range([margin.top,height]);

	var color = ["#3366cc", "#ff9900", "#109618", "#990099", "#0099c6",
	             "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99",
	             "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262",
	             "#5574a6", "#3b3eac", "#dc3912"];

	var svg = d3.select("#scatter_plot").append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


	x.domain(d3.extent(positions, function(d) { return d[0]; })).nice();
	y.domain(d3.extent(positions, function(d) { return d[1]; })).nice();
	


	svg.selectAll(".circle_class")
		    .data(positions)
		    .enter().append("circle")
		    .attr("class", "circle_class")
		    .each(draw_one_circle);

	function draw_one_circle(circle,index){
		var word_id = circle.index,
			x1 = x(circle[0]),
			y1 =  y(circle[1]);

		d3.select(this)
			.attr("class", "circle_" + word_id)
			.attr("cx", x1)
			.attr("cy", y1)
			.attr("r", "6px")
			.attr("fill",color[lables[index]]);
	}
}

/**
 * Created by artemis_zrj on 2016/3/15.
 * 负责绘制散点图
 */

function draw_scatter(){
	var position = g.data.position;
	//var raw_tokens = g.all_data.sent_data;
	var lable_data = g.data.labels;

	//词云
	var div = document.getElementById("scatter_plot");
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


//	var color = d3.scale.category10();
//	var color = d3.scale.category20b();

//	var color = ["#a55194","#1f77b4","#637939"," #d6616b","#7f2704","#e377c2",
//	             "#bcbd22","#17becf","#8c564b","#b30000","#252525"];
	var color = ["#3366cc", "#ff9900", "#109618", "#990099", "#0099c6",
	             "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99",
	             "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262",
	             "#5574a6", "#3b3eac", "#dc3912"];

	var svg = d3.select("#scatter_plot").append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


	x.domain(d3.extent(position, function(d) { return d[0]; })).nice();
	y.domain(d3.extent(position, function(d) { return d[1]; })).nice();
	//weight_z.domain(d3.extent(sent_data, function(d) { return d.weight; })).nice();


	var all_text = svg.selectAll(".circle_class")
		    .data(position)
		    .enter().append("circle")
		    .attr("class", "circle_class")
		    .each(draw_one_word);

	//all_text.on("mouseover", function(d,i){
	//	$("#review_"+i).css("color",$(this).attr("fill"));
	//});
    //
	//all_text.on("mouseout", function(d,i){
	//	$("#review_"+i).css("color","#000");
	//});

	function draw_one_word(word,index){
		var word_id = word.index,
			x1 = x(word[0]),
			y1 =  y(word[1]);

		d3.select(this)
			.attr("class", "circle_" + word_id)
			.attr("cx", x1)
			.attr("cy", y1)
			.attr("r", "6px")
			.attr("fill",color[lable_data[index]]);
	}
}

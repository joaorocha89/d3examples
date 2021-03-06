// Generated by CoffeeScript 1.8.0
var h, halfh, halfw, margin, totalh, totalw, w;

h = 600;

w = 900;

margin = {
  left: 60,
  top: 40,
  right: 40,
  bottom: 40,
  inner: 5
};

halfh = h + margin.top + margin.bottom;

totalh = halfh * 2;

halfw = w + margin.left + margin.right;

totalw = halfw * 2;

d3.json("data.json", function(data) {
  var mychart, textbox;
  mychart = curvechart().xlab("Age (weeks)").ylab("Body weight").height(h).width(w).margin(margin).strokewidthhilit(4).commonX(true);
  d3.select("div#chart").datum(data).call(mychart);
  textbox = d3.select("div#chart svg").append("text").attr("class", "title").text("").attr("y", margin.top / 2).attr("x", margin.left).style("text-anchor", "start");
  return mychart.curvesSelect().on("mouseover.text", function(d, i) {
    return textbox.text("ind " + (i + 1));
  }).on("mouseout.text", function() {
    return textbox.text("");
  });
});

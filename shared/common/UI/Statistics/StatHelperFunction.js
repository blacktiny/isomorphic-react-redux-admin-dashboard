// import * as d3 from 'd3';

export const ProcessChartData = (dataScope, postStatData) => {
  let graphData = [],
    values = [];
  if (dataScope && dataScope.weekly === true) {
    for (const key in postStatData) {
      let tempObj = {};
      tempObj.x = postStatData[key].duration;
      tempObj.y = postStatData[key].value;
      values.push(tempObj);
    }
  } else if (dataScope.monthly === true) {
    for (const key in postStatData) {
      let tempObj = {};
      tempObj.x = postStatData[key].duration;
      tempObj.y = postStatData[key].value;
      values.push(tempObj);
    }
  } else {
    for (const key in postStatData) {
      let tempObj = {};
      tempObj.x = postStatData[key].duration;
      tempObj.y = postStatData[key].value;
      values.push(tempObj);
    }
  }
  return graphData.concat({ values: values });
};

// export const DrawGraph = graphData => {
//   let data = [];
//   graphData &&
//     graphData.map(singleGraphPoint => {
//       data.push(singleGraphPoint);
//     });
//   // console.log(data, 'data');

//   // Graph Drawing start

//   // done code with BAR chart *****************************
//   const svgWidth = 1000,
//     svgHeight = 500,
//     barPadding = 5,
//     margin = 10;
//   const barWidth = svgWidth / data.length;

//   d3.axisTop();
//   d3.axisRight();
//   d3.axisBottom();
//   d3.axisLeft();

//   const svg = d3
//     .select('svg')
//     .attr('width', svgWidth)
//     .attr('height', svgHeight);

// const xScale = d3
//   .scaleLinear()
//   // .domain([0, d3.max(data)])
//   .domain(
//     data.map(s => {
//       console.log(s);
//       return s.duration;
//     })
//   )
//   .range([0, svgWidth]);

//   const yScale = d3
//     .scaleLinear()
//     // .domain([0, d3.max(data)])
//     .domain(data.map(s => s.value))
//     .range([0, svgHeight]);

//   const x_axis = d3.axisBottom().scale(xScale);
//   const y_axis = d3.axisLeft().scale(yScale);

//   const barChart = svg
//     .selectAll('rect')
//     .data(data.map(s => s.value))
//     .enter()
//     .append('rect')
//     .attr('y', function(d) {
//       return svgHeight - d;
//     })
//     .attr('height', function(d) {
//       return d;
//     })
//     .attr('width', barWidth - barPadding)
//     .attr('transform', function(d, i) {
//       const translate = [barWidth * i, 0];
//       return 'translate(' + translate + ')';
//     })
//     .attr('fill', '#008489');

//   const text = svg
//     .selectAll('text')
//     .data(data.map(s => s.value))
//     .enter()
//     .append('text')
//     .text(function(d) {
//       return d;
//     })
//     .attr('y', function(d, i) {
//       return svgHeight - d - 2;
//     })
//     .attr('x', function(d, i) {
//       return barWidth * i;
//     })
//     .attr('fill', '#008489');

//   svg
//     .append('g')
//     .attr('transform', 'translate(50, 10)')
//     .call(y_axis);

//   const xAxisTranslate = svgHeight - 20;
//   svg
//     .append('g')
//     .attr('transform', 'translate(50, ' + xAxisTranslate + ')')
//     .call(x_axis);

//   svg
//     .append('text')
//     .attr('x', -svgHeight / 2 - margin)
//     .attr('y', margin / 2.4)
//     .attr('transform', 'rotate(-90)')
//     .attr('text-anchor', 'middle')
//     .text('Post View');

//   svg
//     .append('text')
//     .attr('x', svgWidth / 2 + margin)
//     .attr('y', 40)
//     .attr('text-anchor', 'middle')
//     .text('Duration ');
// };

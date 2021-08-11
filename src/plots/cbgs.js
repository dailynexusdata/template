import * as d3 from 'd3';

const makePlot = (mapData) => {
  const container = d3.select('#census-cbgs2020');

  container.selectAll('*').remove();

  const projection = d3
    .geoMercator()
    .scale(700000)
    .rotate([119.8626, -34.41768])
    .translate([250, 200]);

  const size = { height: 400, width: 525 };
  //   const projection = d3
  //     .geoAlbersUsa()
  //     .fitSize([size.width / 2, size.height / 2], mapData)
  //     .scale(100);

  const path = d3.geoPath().projection(projection);

  const svg = container.append('svg');

  svg.attr('height', size.height).attr('width', size.width);
  // .style('border', '1px solid black');

  //   svg
  //     .append('g')
  //     .attr('fill', 'white')
  //     .attr('stroke', 'black')
  //     .datum(mapData)
  //     .append('path')
  //     .attr('d', path);
  //   return;
  const area = svg.append('g').attr('fill', 'white').attr('stroke', 'black');

  const colors = {
    sb: 'red',
    iv: 'blue',
    goleta: 'orange',
  };

  const inCity = (prop) => {
    console.log(prop);
    if (prop.GEOID === '060839803001') {
      return 'sb';
    }
    if (['002936', '002926', '002924'].includes(prop.TRACTCE)) {
      return 'iv';
    }

    return 'goleta';
  };

  svg
    .append('svg')
    .selectAll('path')
    .data(mapData.features)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('fill', (d) => colors[inCity(d.properties)])
    .attr('stroke', 'black')
    .on('mouseover', (event, d) => {
      console.log(d.properties);
    });
};

export default makePlot;

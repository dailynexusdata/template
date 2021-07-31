/**
 * @file
 * @author
 * @since
 */
import './styles.scss';
import * as d3 from 'd3';

// import other files here

(async () => {
  // Import CSV File
  //   const data = d3.csv('dist/data/_____.csv', (d) => {
  //     return {};
  //   });

  // Import JSON file
  //   const data = d3.json('dist/data/_____.json');

  const resize = () => {
    // call functions here with data
  };

  window.addEventListener('resize', () => {
    resize();
  });

  resize();
})();

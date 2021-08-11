/**
 * @file
 * @author
 * @since
 */
import './styles.scss';
import * as d3 from 'd3';

// import other files here
import makeCbgs from './cbgs';

(async () => {
  const map = await d3.json('dist/data/iv.json');

  const resize = () => {
    makeCbgs(map);
  };

  window.addEventListener('resize', () => {
    resize();
  });

  resize();
})();

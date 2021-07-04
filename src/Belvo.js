import useScript from './hooks/useScript'
import createWidget from './utils/initBelvo'

function Belvo() {
  useScript('https://cdn.belvo.io/belvo-widget-1-stable.js', createWidget);
  return (
    <div id="belvo" />
  );
}

export default Belvo;

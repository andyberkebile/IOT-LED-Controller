
import App from '../../lib/views/app.js';

var attachElement = document.getElementById('app');

var state = {};

var page;

// Create new app and attach to element
page = new App({
    state: state
  });

page.renderToDOM(attachElement);

console.log("BOOOOM")
console.log('JS Loaded?');
console.log('Yes it is');

$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', 'thirdPage']
  });
});


var hasStorage = (function () {
  try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
    return true;
  } catch (exception) {
    return false;
  }
}());

function showModal() {
  $('#fb-modal').show();
}

$('#closeBtn').click(function () {
  $('#fb-modal').hide();
});

var DAY = 8 * 60 * 60 * 1000;

$(document).ready(function () {
  if (!hasStorage) {
    return;
  }
  var visit = localStorage.getItem('visit');
  if (visit && visit !== 'done' && Date.now() - visit > DAY) {
    showModal();
    localStorage.setItem('visit', 'done');
  }
  if (visit === null) {
    localStorage.setItem('visit', Date.now());
  }

});
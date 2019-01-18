var hasStorage = (function () {
  try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
    return true;
  } catch (exception) {
    return false;
  }
}());

function showPopup() {
  $('#cookie-popup').show();
}

$('#cookie-accept-btn').click(function () {
  $('#cookie-popup').hide();
  localStorage.setItem('cookiePopup', 'true');
});

$(document).ready(function () {
  if (!hasStorage) {
    return;
  }
  var cookiePopup = localStorage.getItem('cookiePopup');
  if (cookiePopup === null) {
    showPopup();
  }
});
$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
      var username = $('#username').val();
      var password = $('#password').val();
      $.ajax({
        url: 'http://127.0.0.1:5500/index.html#',
        type: 'POST',
        data: {username: username, password: password},
        success: function(data) {
          console.log('Đăng nhập thành công');
          window.location.replace('http://127.0.0.1:5500/html1.html');
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log('Đăng nhập thất bại: ' + textStatus);
        }
      });
    });
  });
  
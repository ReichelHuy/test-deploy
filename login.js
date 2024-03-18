$(document).ready(function() {
    $('#login-form').on('submit', function(e) {
      e.preventDefault()
  
      const username = $('#username').val()
      const password = $('#password').val()
  
      // Kiểm tra giá trị nhập vào
      if(username.trim() == '' || password.trim() == '') {
        alert('Please enter your username and password')
        return
      }
  
      // Đưa thông tin đăng nhập lên server
      $.ajax({
        type: 'POST',
        url: 'login.php',
        data: {
          username: username,
          password: password
        },
        success: function(response) {
          if(response.trim() == 'success') {
            alert('Login successful!')
            window.location.href = 'index.html'
          } else {
            alert(response)
          }
        },
        error: function(error) {
          console.log(error)
        }
      })
    })
  })
  
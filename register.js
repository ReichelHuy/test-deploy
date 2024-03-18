$(document).ready(function() {
    $('#register-form').on('submit', function(e) {
      e.preventDefault()
  
      const username = $('#username').val()
      const email = $('#email').val()
      const password = $('#password').val()
      const confirmPassword = $('#confirm-password').val()
  
      // Kiểm tra giá trị nhập vào
      if(username.trim() == '' || email.trim() == '' || password.trim() == '' || confirmPassword.trim() == '') {
        alert('Please enter all required fields')
        return
      }
  
      if(password != confirmPassword) {
        alert('Password and confirm password do not match')
        return
      }
  
      // Đưa thông tin đăng ký lên server
      $.ajax({
        type: 'POST',
        url: 'register.php',
        data: {
            username: username,
            email: email,
            password: password
          },
          success: function(response) {
            if(response.trim() == 'success') {
              alert('Register successful!')
              window.location.href = 'login.html'
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
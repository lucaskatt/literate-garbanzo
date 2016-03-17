function matchPasswords()
{
  var pass1 = document.getElementByID('password')
  var pass2 = document.getElementByID('passwordConfirm')

  if (pass1 == pass2)
    message.innerHTML = "The passwords match"
  else
    message.innerHTML = "The passwords do not match"
}

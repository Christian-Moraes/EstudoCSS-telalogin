/*Abre e fecha olho/Mostra e esconde senha*/
const input = document.querySelector('.senhalogin input')
const eye = document.querySelector('.senhalogin .fa-eye-slash')

eye.addEventListener('click', () => {
  if (input.type === 'password') {
    input.type = 'text'

    eye.classList.remove('fa-eye-slash')
    eye.classList.add('fa-eye')
  } else {
    input.type = 'password'

    eye.classList.remove('fa-eye')
    eye.classList.add('fa-eye-slash')

    lock.style.color = '#ffffff'
  }

  overlay.classList.toggle()
})

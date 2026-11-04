
let loginBtn = document.querySelector('#loginBtn')
let closeModal = document.querySelector('#closeModal')
let authOverlay = document.querySelector('#authOverlay')

let btn = document.querySelector('.submit')
let login = document.querySelector('.login')
let inputPassword = document.querySelector('.pasid')
let error = document.querySelector('.eroor')


authOverlay.classList.add('active')


loginBtn.addEventListener('click', () => {
    authOverlay.classList.add('active')
    login.focus()
})


closeModal.addEventListener('click', () => {
    error.textContent = 'Avval tizimga kiring!'
})


btn.addEventListener('click', () => {

    let loginValue = login.value.trim()
    let passwordValue = inputPassword.value

    error.textContent = ''

    if (!loginValue || !passwordValue) {
        error.textContent = 'Login va parolni kiriting!'
        return
    }

    if (loginValue === '54321' && passwordValue === '12345') {

        authOverlay.classList.remove('active')

        login.value = ''
        inputPassword.value = ''

    } else {

        error.textContent = 'Login yoki parol xato!'

    }

})


inputPassword.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        btn.click()
    }
})

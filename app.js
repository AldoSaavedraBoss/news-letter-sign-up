$form = document.querySelector('#form')
$input = document.querySelector('#emailId')
$button = document.querySelector('#btn')
$error_label = document.querySelector('#error_label')
$modal = document.querySelector('#modal')
$modal_btn = document.querySelector('#modal_btn')
let error = false

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
console.log($modal_btn)
$form.addEventListener('submit', (e) => {
    e.preventDefault()
    error = EMAIL_REGEX.test($input.value)
    if (!error) {
        $input.classList.add("border-[#FF6257]")
        $input.classList.add("bg-[#FF625722]")
        $error_label.classList.remove("hidden")
        $error_label.classList.add("block")
        return
    }
    $modal.classList.remove('hidden')
    $modal_btn.addEventListener('click', function(){
    $modal.classList.add('hidden')
})
})

$input.addEventListener('click', () => {
    $input.classList.remove("border-[#FF6257]")
    $input.classList.remove("bg-[#FF625722]")
    $error_label.classList.add("hidden")
    $error_label.classList.remove("block")
})
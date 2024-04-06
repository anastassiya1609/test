
document.getElementById('burger-menu').addEventListener('click', function(e){
    e.preventDefault()
    e.target.classList.toggle('active')
})
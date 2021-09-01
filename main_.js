let span = document.querySelector('.up');
window.onscroll =()=> {
    if(this.scrollY >= 1000 ){
        span.classList.add('show')
    } else {
        span.classList.remove('show')
    }
}
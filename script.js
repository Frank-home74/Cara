const bar = dokument.getElementById('bar');
const close = dokument.getElementById('close');
const nav = dokument.getElementById('navbar')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');  
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');  
    })
}
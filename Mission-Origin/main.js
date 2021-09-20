/*Abre e fecha o menu*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')


for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

/*Clicou em um item, fecha o menu*/
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

/* Sombra da pagina no scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

Window.addEventListener('scroll', function () {
  if(window.scrollY >= navHeight){
    header.classList.add('scroll')
  }else {
    header.classList.remove('scroll')
  }
})


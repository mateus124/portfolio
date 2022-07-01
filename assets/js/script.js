/* Tabs */

const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filtro-ativo')
        })
        target.classList.add('filtro-ativo')

        tabs.forEach(t =>{
            t.classList.remove('tab-ativo')
        })
        tab.classList.add('tab-ativo')
    })
})

/* Animação */

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal(`.infor-eu`);
sr.reveal(`.profile-border`, {delay: 500});
sr.reveal(`.sobre-mim`, {delay: 600});
sr.reveal(`.sociais`, {delay: 700});
sr.reveal(`.experiencia`, {interval: 100, delay: 700});
sr.reveal(`.extra`, {delay: 800});
sr.reveal(`.tabs`, {delay: 900});
sr.reveal(`.filtro-ativo`, {delay: 950});
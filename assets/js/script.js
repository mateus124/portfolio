/* Tabs */


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
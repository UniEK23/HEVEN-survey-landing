// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
});
}, {threshold:0.15});
revealEls.forEach(el=>io.observe(el));

// journey strip fill on load
window.addEventListener('load', ()=>{
setTimeout(()=>{
    document.getElementById('fill').style.width = '100%';
    document.querySelectorAll('#nodes span').forEach((n, i)=>{
    setTimeout(()=>n.classList.add('on'), i*140 + 200);
    });
}, 400);
});

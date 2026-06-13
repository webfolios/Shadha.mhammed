
document.querySelectorAll('.card').forEach(c=>{
c.addEventListener('mouseenter',()=>c.style.transform='translateY(-8px)');
c.addEventListener('mouseleave',()=>c.style.transform='translateY(0)');
});

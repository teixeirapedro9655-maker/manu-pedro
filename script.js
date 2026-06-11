
const startDate = new Date('2025-12-10T00:00:00');
function updateCounter(){
  const now = new Date();
  const diff = Math.max(0, now - startDate);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor(diff / 3600000) % 24;
  const minutes = Math.floor(diff / 60000) % 60;
  const seconds = Math.floor(diff / 1000) % 60;
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}
updateCounter(); setInterval(updateCounter, 1000);

const grid = document.getElementById('photoGrid');
window.PHOTOS.forEach((file, i)=>{
  const img = document.createElement('img');
 img.src = `${file}`;
  img.alt = `Memória de Manu e Pedro ${i+1}`;
  img.loading = 'lazy';
  img.addEventListener('click',()=>openModal(img.src));
  grid.appendChild(img);
});

const modal = document.getElementById('photoModal');
const modalImg = document.getElementById('modalImg');
function openModal(src){ modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); modalImg.src=src; }
document.getElementById('closeModal').onclick=()=>{ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); };
modal.addEventListener('click', e=>{ if(e.target===modal) document.getElementById('closeModal').click(); });

const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

function spawnHeart(){
  const h=document.createElement('div');
  h.className='heart'; h.textContent=Math.random()>.5?'♥':'♡';
  h.style.left=Math.random()*100+'vw';
  h.style.fontSize=(14+Math.random()*24)+'px';
  h.style.animationDuration=(5+Math.random()*5)+'s';
  document.getElementById('hearts').appendChild(h);
  setTimeout(()=>h.remove(),10000);
}
setInterval(spawnHeart, 650);

const musicBtn = document.getElementById('musicBtn');
musicBtn.addEventListener('click', ()=>{
  window.open('https://www.youtube.com/results?search_query=Eu+e+minha+casa+Jullyane+N%C3%B3s+Dois', '_blank', 'noopener,noreferrer');
});

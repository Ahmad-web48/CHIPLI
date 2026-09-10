const shippingRules={DE:{name:'Deutschland',price:3,eta:'bis zu 5 Tage'},AT:{name:'Österreich',price:8,eta:'bis zu 10 Tage'},CH:{name:'Schweiz',price:8,eta:'bis zu 10 Tage'}};
const eur=n=>new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(n);
document.querySelector('[data-menu]')?.addEventListener('click',()=>document.querySelector('.nav').classList.toggle('open'));
document.querySelectorAll('[data-country]').forEach(select=>select.addEventListener('change',e=>{
 const r=shippingRules[e.target.value]; document.querySelectorAll('[data-shipping]').forEach(el=>el.textContent=eur(r.price)); document.querySelectorAll('[data-total]').forEach(el=>el.textContent=eur(110+r.price)); document.querySelectorAll('[data-eta]').forEach(el=>el.textContent=r.eta);
}));
document.querySelector('[data-checkout-form]')?.addEventListener('submit',e=>{e.preventDefault();const card=document.querySelector('[data-confirmation]');card.hidden=false;card.scrollIntoView({behavior:'smooth'});});

/* ═════════ Lakbay Mindoro — App Logic ═════════ */

/* ---------- DATA ---------- */
const EXPERIENCES = [
  { id:1, cat:'sea', tag:'Sea & Dive', title:'White Beach Island Hopping', img:'https://images.unsplash.com/photo-1559494007-9f5847c49d94?q=80&w=900&auto=format&fit=crop', price:1499, duration:'6 hours · 9am–3pm', rating:'4.9 (812)', desc:'Hop Haligi, Starfish Bay & the Underground Cave with snorkel stops at Coral Garden — the perfect first-day sampler.', features:['Small-group boat (max 12)','Snorkel gear + life vest','Boodle-fight beach lunch','Underwater photos included'] },
  { id:2, cat:'sea', tag:'Sea & Dive', title:'Verde Passage Fun Dive', img:'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=900&auto=format&fit=crop', price:3800, duration:'Half-day · 2 dives', rating:'5.0 (436)', desc:'Dive the “center of marine biodiversity” — Canyons, Shark Airport & Coral Garden with a PADI master (max 4:1).', features:['2 guided dives + full gear','Dive computer & briefing','Marine park fees covered','Hot lunch + logbook stamp'] },
  { id:3, cat:'sea', tag:'Sea & Dive', title:'Apo Reef Day Sail & Snorkel', img:'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=900&auto=format&fit=crop', price:9500, duration:'2D1N · Mar–May only', rating:'4.9 (204)', desc:'Sail to the Philippines’ largest reef: snorkel with turtles & reef sharks, sleep aboard under the stars.', features:['DENR permits arranged','Liveaboard bunk + meals','Snorkel / dive options','Reef-ranger talk onboard'] },
  { id:4, cat:'mountain', tag:'Mountain', title:'Mt. Halcon Minor Trek', img:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=900&auto=format&fit=crop', price:4200, duration:'2D1N · beginner-friendly', rating:'4.8 (318)', desc:'Trek to the Karayawan ridgeline: river crossings, mossy forest & sunrise over the Verde Passage.', features:['DENR permit + porters','Accredited mountain guide','Camp meals + tents','Satellite comms for safety'] },
  { id:5, cat:'culture', tag:'Culture', title:'Tamaraw Falls + Mangyan Village', img:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900&auto=format&fit=crop', price:1200, duration:'Full day · 8am–4pm', rating:'4.9 (655)', desc:'Swim beneath 423-ft cascades then share lunch and stories with an Iraya-Mangyan community.', features:['Mangyan-led guiding','Village donation included','Falls entrance + lunch','Nito bracelet souvenir'] },
  { id:6, cat:'culture', tag:'Culture', title:'Nito Weaving & Suyat Workshop', img:'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=900&auto=format&fit=crop', price:850, duration:'3 hours · daily', rating:'5.0 (189)', desc:'Learn suyat script and weave your own coaster with master artisans — 100% of fees go to weavers.', features:['All materials + take-home craft','Cultural orientation','Merienda (native snacks)','Scholarship fund share'] },
];

const PACKAGES = [
  { name:'Puerto Galera Escape', dur:'3D2N', price:8999, tag:'Bestseller · First-timers & Couples', img:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    dest:'White Beach · Coral Garden · Tamaraw Falls · Mangyan Village', market:'Domestic weekenders, couples, barkadas (2–12 pax)',
    inc:['2N beachfront hotel (twin sharing, breakfast)','Roundtrip Batangas–Galera fastcraft tickets','Full-day island hopping + snorkel gear + lunch','Tamaraw Falls + Mangyan Village tour','Hotel transfers & terminal assistance','All entrance & environmental fees'],
    exc:['Lunches/dinners not stated (~₱300/meal)','Dive upgrades (₱3,800/2 dives)','Travel insurance (add ₱350)','Personal expenses'],
    itin:[
      ['Day 1 — Welcome to Galera','Manila → Batangas (bus) → fastcraft to White Beach. Check-in, sunset swim, welcome dinner & fire-dance show at the beachfront.'],
      ['Day 2 — Island Hopping','9am boat to Coral Garden, Haligi Beach, Starfish Bay & Underground Cave. Boodle-fight lunch on board. Optional sunset paraw sail (₱600).'],
      ['Day 3 — Falls & Culture → Manila','Morning Tamaraw Falls swim + Mangyan Village visit with weaving demo. Lunch, souvenir stop, 3pm fastcraft back to Batangas.']] },
  { name:'Apo Reef Dive Expedition', dur:'4D3N', price:24500, tag:'Divers & Eco Travelers · Mar–May', img:'https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=1200&auto=format&fit=crop',
    dest:'Apo Reef Natural Park · Sablayan · Pandan Island', market:'Certified divers (Open Water+), underwater photographers, eco groups',
    inc:['3N stay (Sablayan eco-lodge + 1N liveaboard bunk)','6 guided dives + tanks, weights & dive master (4:1)','All DENR Apo Reef permits & conservation fees','Full-board meals on expedition days','Sablayan transfers & Pandan Island day trip',' DAN-linked dive insurance for trip duration'],
    exc:['Gear rental (₱1,200/day if needed)','Nitrox fills (₱400/tank)','Alcoholic drinks','Flights to San Jose (we can book)'],
    itin:[
      ['Day 1 — Manila → Sablayan','Fly/drive to Sablayan. Dive check + buoyancy refresher at Pandan Island. Gear fitting & expedition briefing.'],
      ['Day 2 — Sail to Apo Reef','6am departure (2–3 hrs). 2 reef dives (Shark Airport, Coral Garden). Sunset snorkel with turtles. Sleep aboard.'],
      ['Day 3 — Apo Reef + Lagoon','2 dives ( Apo Pinnacle, Wreck Point) + lagoon kayak & ranger station visit. Sail back to Sablayan.'],
      ['Day 4 — Pandan Island → Home','Beach morning, seafood lunch, souvenir market, transfer to San Jose airport.']] },
  { name:'Mindoro Grand Circuit', dur:'5D4N', price:18750, tag:'Adventure & Culture · Groups & Schools', img:'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
    dest:'Puerto Galera · Mt. Halcon Basecamp · Mangyan Heritage Village · Naujan Lake', market:'Mountaineers, school/corporate groups (6–30 pax), culture seekers',
    inc:['4N mixed stay (resort + basecamp tents + homestay)','Halcon minor trek w/ permits, guides, porters & meals','All tours: island hop, lake paddle, village immersion','Private van + boat transfers throughout','Dedicated tour leader + first-aider','Group drone video + edited photo gallery'],
    exc:['Summit upgrade to full Halcon climb (+₱3,500, 4D3N)','Alcoholic beverages','Personal trek gear (rentals from ₱500)','Tips (at discretion)'],
    itin:[
      ['Day 1 — Arrival & Beach','Calapan arrival, drive to Galera. Afternoon island-hop taster + welcome dinner.'],
      ['Day 2 — Tamaraw & Village','Falls morning, Mangyan Village lunch & suyat weaving workshop. Drive to Halcon jump-off.'],
      ['Day 3 — Halcon Trek','Trek to Karayawan Camp via Dulangan River. Campfire dinner & star-gazing.'],
      ['Day 4 — Sunrise & Lake','Sunrise ridge walk, descend, transfer to Naujan Lake for sunset paddle & birdwatching.'],
      ['Day 5 — Farewell','Heritage breakfast, calamansi grove visit, departure via Calapan–Batangas.']] },
];

const GALLERY = [
  { src:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop', cap:'White Beach at golden hour — Puerto Galera', cat:'beach' },
  { src:'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800&auto=format&fit=crop', cap:'Powder-soft shoreline, Aninuan Beach', cat:'beach' },
  { src:'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=800&auto=format&fit=crop', cap:'Outrigger crossing to Haligi Island', cat:'beach' },
  { src:'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop', cap:'Snorkeling Coral Garden marine sanctuary', cat:'dive' },
  { src:'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=800&auto=format&fit=crop', cap:'Fun dive over Verde Passage coral walls', cat:'dive' },
  { src:'https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=800&auto=format&fit=crop', cap:'Turquoise drop-off at Apo Reef lagoon', cat:'dive' },
  { src:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop', cap:'Mt. Halcon ridgeline above the clouds', cat:'mountain' },
  { src:'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=800&auto=format&fit=crop', cap:'Mossy forest trail — Dulangan River basin', cat:'mountain' },
  { src:'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop', cap:'Coastal highway to Bulalacao sandbars', cat:'mountain' },
  { src:'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop', cap:'Nito weaving with Iraya-Mangyan artisans', cat:'culture' },
  { src:'https://images.unsplash.com/photo-1531761535209-180857e963b9?q=80&w=800&auto=format&fit=crop', cap:'Suyat script workshop — Mangyan heritage', cat:'culture' },
  { src:'https://images.unsplash.com/photo-1559494007-9f5847c49d94?q=80&w=800&auto=format&fit=crop', cap:'Aerial of Puerto Galera bay & resorts', cat:'beach' },
];

let TESTIMONIALS = [
  { n:'Sofia R. — Makati', s:5, t:'The Galera Escape was flawless. Fastcraft tickets were already booked, our guide Kuya Ben knew every snorkel spot, and the boodle-fight lunch was a highlight. Worth every peso!', d:'3D2N · March 2026' },
  { n:'Daniel K. — Berlin', s:5, t:'Dove Apo Reef with Lakbay — 6 dives, sharks on 4 of them. Small group, serious safety briefing, and the liveaboard night sky was unreal. Best dive op I have used in SE Asia.', d:'Apo Reef · April 2026' },
  { n:'UP Mountaineers Batch ’25', s:5, t:'They handled 28 students on the Grand Circuit without a hitch — permits, meals, even a drone video for our org primer. The Mangyan immersion was respectful and genuinely moving.', d:'Grand Circuit · Feb 2026' },
  { n:'Aiko T. — Osaka', s:4, t:'Seas were choppy in July but they rebooked our island-hop free and added the weaving workshop instead. Honest, fast replies on Viber. Will return in dry season!', d:'Galera · July 2026' },
];

const FAQS = [
  ['How do I get to Mindoro from Manila?','Take a bus (Jam/DLTB, ~2.5 hrs) to Batangas Port, then a fastcraft to Puerto Galera (45–60 min) or Calapan (1–2 hrs). We meet you at the port with name placards and handle terminal fees. Detailed timetables are on the “How to Get There” page.'],
  ['What is included in the package price?','Everything stated under “Inclusions”: accommodation, listed transfers & tours, permits, gear, guide, and stated meals. Exclusions (personal meals, upgrades, insurance) are listed beside each package — no hidden “environmental fees” on arrival.'],
  ['What happens if there’s a typhoon or cancelled sailing?','Safety first: if PAGASA or the Coast Guard cancels trips, you choose — free rebooking within 12 months or 100% refund of payments for the affected day. No expiring vouchers.'],
  ['Is Apo Reef open year-round?','No — Apo Reef Natural Park is open roughly March–May and by special permit windows. DENR closes it June–September for reef recovery. Book 30+ days ahead; we process your permits for you.'],
  ['Do I need to be a certified diver?','For island-hopping and snorkeling, no. For fun dives, you need at least an Open Water certification (or take our ₱5,500 Discover Scuba intro). Full PADI courses are available weekly.'],
  ['Is Mt. Halcon suitable for beginners?','The Minor Trek (2D1N, Karayawan Camp) suits fit beginners. The full summit (4D3N, 2,582 m) is rated 9/9 difficulty and requires prior major climbs + DENR clearance. We assess every trekker by phone before confirming.'],
  ['How do I pay? Is my slot secured?','Your inquiry is free. We reply within 2 hours; pay 20% (GCash, Maya, card, bank) to lock slots, balance 7 days before travel. You receive an official receipt and voucher with hotline numbers.'],
];

/* ---------- HELPERS ---------- */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const peso = n => '₱' + n.toLocaleString('en-PH');
function toast(msg){ const t=$('#toast'); t.textContent=msg; t.classList.remove('hidden'); t.classList.add('show'); clearTimeout(t._h); t._h=setTimeout(()=>{t.classList.add('hidden');t.classList.remove('show');},3200); }
function refreshIcons(){ if(window.lucide) lucide.createIcons(); }
function copyPromo(){ navigator.clipboard?.writeText('LAKBAY15'); toast('Promo code LAKBAY15 copied — 15% off Galera Escape!'); }
function socialClick(net){ toast(`Opening Lakbay Mindoro on ${net}… (link your real page URL before submission)`); return false; }
function shareTo(net){ if(net==='copy'){ navigator.clipboard?.writeText(location.href); toast('Link copied — share the island love!'); } else toast(`Sharing to ${net}…`); }

/* ---------- SPA ROUTER ---------- */
const PAGES = ['home','about','experiences','packages','gallery','visit','booking','contact','guide'];
function go(page){
  if(!PAGES.includes(page)) page='home';
  $$('.page').forEach(p=>p.classList.toggle('active', p.dataset.page===page));
  $$('#desktopNav .nav-link[data-nav]').forEach(a=>a.classList.toggle('active', a.dataset.nav===page));
  $$('#mobileMenu .m-link').forEach(a=>a.classList.toggle('active', a.dataset.nav===page));
  // Highlight Guide dropdown when on visit / guide sub-pages
  const guideBtn = document.querySelector('[data-nav-group="guide"]');
  const guideLinks = [...document.querySelectorAll('.dropdown-panel .drop-link')];
  const onGuide = (page==='visit'||page==='guide');
  if(guideBtn) guideBtn.classList.toggle('active', onGuide);
  guideLinks.forEach(a=>a.classList.toggle('active', a.dataset.nav===page));
  $('#mobileMenu').classList.add('hidden');
  const dd = $('#guideDropdown'); if(dd){ dd.classList.remove('open'); guideBtn?.setAttribute('aria-expanded','false'); }
  if(('#'+page)!==location.hash) history.replaceState(null,'','#'+page);
  scrollTop();
  if(page==='visit') setTimeout(initMap, 120);
}
/* Lenis-aware scrolling: instant top on page change, smooth glide to anchors */
function scrollTop(){ if(window.__lenis) window.__lenis.scrollTo(0,{immediate:true}); else window.scrollTo({top:0}); }
function scrollToEl(sel){ const el=$(sel); if(!el) return; if(window.__lenis) window.__lenis.scrollTo(el,{offset:-80,duration:1.4}); else el.scrollIntoView({behavior:'smooth'}); }
document.addEventListener('click', e=>{
  const faqLink = e.target.closest('[data-scroll-faq]');
  if(faqLink){ e.preventDefault(); go('packages'); setTimeout(()=>scrollToEl('#faq'), 150); return; }
  const nav = e.target.closest('[data-nav]'); if(nav){ e.preventDefault(); go(nav.dataset.nav); }
  const book = e.target.closest('[data-book]'); if(book){ prefillBooking(book.dataset.book); }
  // Close guide dropdown when clicking outside
  if(!e.target.closest('#guideDropdown')) $('#guideDropdown')?.classList.remove('open');
});
window.addEventListener('hashchange', ()=>go(location.hash.replace('#','')||'home'));

/* ---------- RENDER: EXPERIENCES ---------- */
function expCard(x){
  return `<article class="card overflow-hidden group hover:-translate-y-1 transition-transform" data-cat="${x.cat}">
    <div class="relative h-52 overflow-hidden"><img src="${x.img}" alt="${x.title}" loading="lazy" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"/>
    <span class="absolute top-3 left-3 rounded-md bg-white/95 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-ocean-800">${x.tag}</span>
    <span class="absolute bottom-3 right-3 rounded-md bg-ocean-950/80 text-white px-3 py-1 text-xs font-bold inline-flex items-center gap-1"><i data-lucide="star" class="w-3.5 h-3.5 text-amber-400"></i> ${x.rating}</span></div>
    <div class="p-5">
      <div class="flex items-start justify-between gap-2"><h3 class="font-bold text-lg leading-snug">${x.title}</h3></div>
      <p class="text-xs font-bold text-palm-600 mt-1 inline-flex items-center gap-1"><i data-lucide="clock" class="w-3.5 h-3.5"></i> ${x.duration}</p>
      <p class="text-sm text-slate-600 mt-2">${x.desc}</p>
      <ul class="mt-3 space-y-1 text-[13px] text-slate-600">${x.features.map(f=>`<li class="flex items-start gap-1.5"><i data-lucide="check" class="w-4 h-4 mt-0.5 text-palm-600 shrink-0"></i><span>${f}</span></li>`).join('')}</ul>
      <div class="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
        <p><span class="text-2xl font-extrabold text-ocean-800">${peso(x.price)}</span><span class="text-xs text-slate-400"> /pax</span></p>
        <button data-book="${x.title}" class="btn-primary !py-2 !px-4 text-sm">Inquire <i data-lucide="arrow-right" class="w-4 h-4"></i></button>
      </div></div></article>`;
}
function renderExperiences(){
  $('#experiencesGrid').innerHTML = EXPERIENCES.map(expCard).join('');
  $('#homeExperiences').innerHTML = EXPERIENCES.slice(0,3).map(expCard).join('');
  refreshIcons();
}
$$('#expFilters .f-btn').forEach(b=>b.addEventListener('click', ()=>{
  $$('#expFilters .f-btn').forEach(x=>x.classList.remove('active')); b.classList.add('active');
  const f=b.dataset.filter;
  $$('#experiencesGrid .card, #experiencesGrid article').forEach(c=>{
    c.style.display = (f==='all'||c.dataset.cat===f)?'':'none';
  });
}));

/* ---------- RENDER: PACKAGES ---------- */
function renderPackages(){
  $('#homePackages').innerHTML = PACKAGES.map((p,i)=>`
    <article class="card overflow-hidden flex flex-col">
      <div class="relative h-44"><img src="${p.img}" alt="${p.name}" loading="lazy" class="h-full w-full object-cover"/><span class="absolute top-3 left-3 rounded-md bg-sand-400 px-3 py-1 text-[11px] font-extrabold uppercase">${p.tag}</span></div>
      <div class="p-5 flex flex-col flex-1">
        <p class="text-xs font-bold text-ocean-600 uppercase tracking-widest">${p.dur}</p>
        <h3 class="font-display text-xl font-bold text-ocean-900">${p.name}</h3>
        <p class="text-sm text-slate-500 mt-1">${p.dest}</p>
        <p class="mt-2 text-2xl font-extrabold text-ocean-800">${peso(p.price)} <span class="text-xs font-medium text-slate-400">/pax</span></p>
        <div class="mt-4 flex gap-2"><button data-book="${p.name} — ${p.dur}" class="btn-primary flex-1 justify-center !py-2.5 text-sm">Book This</button><button onclick="go('packages')" class="btn-ghost !py-2.5 text-sm">Itinerary</button></div>
      </div></article>`).join('');

  $('#packagesDetail').innerHTML = PACKAGES.map((p,i)=>`
    <article class="card overflow-hidden">
      <div class="grid lg:grid-cols-2">
        <div class="relative min-h-[240px]"><img src="${p.img}" alt="${p.name}" loading="lazy" class="absolute inset-0 h-full w-full object-cover"/><span class="absolute top-4 left-4 rounded-md bg-white/95 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-ocean-800">${p.tag}</span></div>
        <div class="p-6 sm:p-8">
          <p class="text-xs font-extrabold uppercase tracking-[0.2em] text-palm-600">${p.dur} · ${p.dest}</p>
          <h2 class="font-display text-3xl font-bold text-ocean-900 mt-1">${i+1}. ${p.name}</h2>
          <p class="text-sm text-slate-500 mt-1 inline-flex items-center gap-1.5"><i data-lucide="target" class="w-4 h-4 text-palm-600"></i> Target market: ${p.market}</p>
          <p class="mt-2 text-3xl font-extrabold text-ocean-800">${peso(p.price)} <span class="text-sm font-medium text-slate-400">estimated /pax (twin sharing)</span></p>
          <div class="grid sm:grid-cols-2 gap-3 mt-4 text-[13px]">
            <div class="rounded-lg bg-palm-50 border border-palm-200 p-4"><p class="font-extrabold text-palm-700 mb-1 flex items-center gap-1.5"><i data-lucide="check" class="w-4 h-4"></i> INCLUSIONS</p><ul class="space-y-1 text-slate-600">${p.inc.map(x=>`<li>• ${x}</li>`).join('')}</ul></div>
            <div class="rounded-lg bg-slate-50 border border-slate-200 p-4"><p class="font-extrabold text-slate-500 mb-1 flex items-center gap-1.5"><i data-lucide="x" class="w-4 h-4"></i> EXCLUSIONS</p><ul class="space-y-1 text-slate-500">${p.exc.map(x=>`<li>• ${x}</li>`).join('')}</ul></div>
          </div>
          <div class="mt-4 space-y-2" id="itin-${i}">
            <p class="font-extrabold text-sm text-ocean-800 flex items-center gap-1.5"><i data-lucide="calendar" class="w-4 h-4"></i> SUGGESTED DAY-TO-DAY ITINERARY</p>
            ${p.itin.map(([d,txt],k)=>`<div class="itin-day ${k===0?'open':''}"><button class="itin-head" onclick="toggleItin(this)"><span>${d}</span><i data-lucide="plus" class="w-4 h-4 shrink-0"></i></button><div class="itin-body">${txt}</div></div>`).join('')}
          </div>
          <div class="mt-5 flex flex-wrap gap-2">
            <button data-book="${p.name} — ${p.dur}" class="btn-primary">Inquire / Book This Package <i data-lucide="arrow-right" class="w-4 h-4"></i></button>
            <button onclick="shareTo('copy')" class="btn-ghost text-sm inline-flex items-center gap-1.5"><i data-lucide="link" class="w-4 h-4"></i> Copy Itinerary Link</button>
          </div>
        </div>
      </div></article>`).join('');
  refreshIcons();
}
function toggleItin(btn){ btn.parentElement.classList.toggle('open'); }

/* ---------- GALLERY + LIGHTBOX ---------- */
let galList = GALLERY, lbIndex = 0;
function renderGallery(){
  $('#galleryGrid').innerHTML = galList.map((g,i)=>`
    <figure class="g-card" onclick="openLightbox(${i})">
      <img src="${g.src}" alt="${g.cap}" loading="lazy"/><span class="g-tag">${g.cat}</span>
      <figcaption class="g-cap">${g.cap}</figcaption></figure>`).join('');
}
$$('#galFilters .f-btn').forEach(b=>b.addEventListener('click', ()=>{
  $$('#galFilters .f-btn').forEach(x=>x.classList.remove('active')); b.classList.add('active');
  const f=b.dataset.gfilter; galList = f==='all'?GALLERY:GALLERY.filter(g=>g.cat===f); renderGallery();
}));
function openLightbox(i){ lbIndex=i; updateLB(); const l=$('#lightbox'); l.classList.remove('hidden'); l.classList.add('flex'); document.body.style.overflow='hidden'; window.__lenis?.stop(); }
function updateLB(){ const g=galList[lbIndex]; $('#lbImg').src=g.src.replace('w=800','w=1600'); $('#lbCap').textContent=`${lbIndex+1}/${galList.length} — ${g.cap}`; }
function stepLightbox(d){ lbIndex=(lbIndex+d+galList.length)%galList.length; updateLB(); }
function closeLightbox(){ $('#lightbox').classList.add('hidden'); $('#lightbox').classList.remove('flex'); document.body.style.overflow=''; window.__lenis?.start(); }
document.addEventListener('keydown', e=>{ if(e.key==='Escape'){ closeLightbox(); closeModal(); } if(!$('#lightbox').classList.contains('hidden')){ if(e.key==='ArrowRight')stepLightbox(1); if(e.key==='ArrowLeft')stepLightbox(-1); } });

/* ---------- TESTIMONIALS ---------- */
let tIndex = 0;
function stars(s){ return '★'.repeat(s)+'☆'.repeat(5-s); }
function renderTestimonials(){
  const visible = TESTIMONIALS.slice(tIndex, tIndex+3);
  const list = visible.length?visible:TESTIMONIALS.slice(0,3);
  $('#testimonialTrack').innerHTML = list.map(t=>`
    <div class="t-card"><p class="font-bold tracking-widest flex items-center gap-1 text-amber-500"><i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i> ${t.s}.0 <span class="text-slate-400 font-semibold">· ${t.d}</span></p>
    <p class="text-sm text-slate-700 mt-2">“${t.t}”</p><p class="text-xs font-extrabold text-ocean-800 mt-2">— ${t.n}</p></div>`).join('');
  refreshIcons();
}
function moveTestimonial(d){ tIndex=(tIndex+d+TESTIMONIALS.length)%TESTIMONIALS.length; renderTestimonials(); }
$('#reviewForm').addEventListener('submit', e=>{
  e.preventDefault();
  const n=$('#revName').value.trim(), s=+$('#revStars').value, t=$('#revText').value.trim();
  if(!n||!t) return toast('Please complete your name and review.');
  TESTIMONIALS.unshift({n, s, t, d:'Just now · verified guest'}); tIndex=0; renderTestimonials();
  e.target.reset(); toast('Salamat! Your review is now live below.');
});

/* ---------- FAQ ---------- */
function renderFAQ(){
  $('#faqList').innerHTML = FAQS.map(([q,a])=>`
    <div class="faq-item"><button class="faq-q" onclick="this.parentElement.classList.toggle('open');refreshIcons()"><span>${q}</span><i data-lucide="plus" class="text-ocean-600"></i></button><p class="faq-a">${a}</p></div>`).join('');
  refreshIcons();
}

/* ---------- BOOKING ---------- */
const BASE_PRICES = { 'Puerto Galera Escape — 3D2N (₱8,999)':8999, 'Apo Reef Dive Expedition — 4D3N (₱24,500)':24500, 'Mindoro Grand Circuit — 5D4N (₱18,750)':18750, 'Custom / Private Tour':12000, 'Puerto Galera Escape — 3D2N':8999, 'Apo Reef Dive Expedition — 4D3N':24500, 'Mindoro Grand Circuit — 5D4N':18750 };
function guestCount(){ const v=$('#bkGuests').value; return v==='6+'?6:parseInt(v); }
function calcEstimate(){
  const pkg=$('#bkPackage').value; const base=BASE_PRICES[pkg]||8999; let g=guestCount();
  let total=base*g; if(g>=5) total=Math.round(total*0.9);
  $('#bkEstimate').innerHTML=`${peso(total)} <span class="text-sm font-medium text-slate-500">for ${g}${$('#bkGuests').value==='6+'?'+':''} pax${g>=5?' · 10% group discount applied':''}</span>`;
}
['bkPackage','bkGuests'].forEach(id=>document.addEventListener('change', e=>{ if(e.target.id===id) calcEstimate(); }));
function prefillBooking(pkgName){
  go('booking');
  const sel=$('#bkPackage');
  const match=[...sel.options].find(o=>pkgName && (o.text===pkgName||o.text.startsWith(pkgName.split('—')[0].trim())));
  if(match) sel.value=match.text||match.value;
  calcEstimate();
  setTimeout(()=>$('#bkName').focus({preventScroll:true}),450);
  toast(`"${pkgName}" selected — complete the form to check availability.`);
}
function setErr(id,msg){ const s=document.querySelector(`[data-err="${id}"]`); if(s)s.textContent=msg||''; const i=document.getElementById(id); if(i)i.classList.toggle('invalid',!!msg); }
$('#bookingForm').addEventListener('submit', e=>{
  e.preventDefault(); let ok=true;
  const name=$('#bkName').value.trim(), email=$('#bkEmail').value.trim(), phone=$('#bkPhone').value.trim(), date=$('#bkDate').value, pkg=$('#bkPackage').value;
  setErr('bkName', name.length<3?'Please enter your full name.':''); if(name.length<3)ok=false;
  setErr('bkEmail', !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)?'Enter a valid email.':''); if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))ok=false;
  setErr('bkPhone', phone.replace(/\D/g,'').length<10?'Enter a valid mobile number.':''); if(phone.replace(/\D/g,'').length<10)ok=false;
  setErr('bkDate', !date?'Pick your preferred date.':(new Date(date)<new Date(new Date().toDateString())?'Date must be in the future.':'')); if(!date||new Date(date)<new Date(new Date().toDateString()))ok=false;
  setErr('bkPackage', !pkg?'Choose a package.':''); if(!pkg)ok=false;
  if(!$('#bkAgree').checked){ toast('Please accept the travel guidelines to continue.'); return; }
  if(!ok){ toast('Please fix the highlighted fields.'); return; }
  const ref='LM-'+Math.floor(1000+Math.random()*9000);
  $('#refCode').textContent=ref;
  $('#successText').innerHTML=`Thank you, <strong>${name.split(' ')[0]}</strong>! Reference <strong>${ref}</strong> for <strong>${pkg}</strong> on <strong>${date}</strong> (${guestCount()} pax, est. <strong>${$('#bkEstimate').textContent.trim()}</strong>). We will email <strong>${email}</strong> within 2 hours.`;
  const all=JSON.parse(localStorage.getItem('lm_inquiries')||'[]');
  all.push({ref,name,email,phone,date,pkg,guests:guestCount(),notes:$('#bkNotes').value,at:new Date().toISOString()});
  localStorage.setItem('lm_inquiries',JSON.stringify(all));
  const m=$('#successModal'); m.classList.remove('hidden'); m.classList.add('flex');
  e.target.reset(); calcEstimate();
});
function closeModal(){ $('#successModal').classList.add('hidden'); $('#successModal').classList.remove('flex'); }

/* ---------- OTHER FORMS ---------- */
$('#heroSearch').addEventListener('submit', e=>{
  e.preventDefault();
  const map={'Puerto Galera':'Puerto Galera Escape — 3D2N (₱8,999)','Apo Reef':'Apo Reef Dive Expedition — 4D3N (₱24,500)','Mt. Halcon Trek':'Mindoro Grand Circuit — 5D4N (₱18,750)','Mindoro Grand Circuit':'Mindoro Grand Circuit — 5D4N (₱18,750)'};
  go('booking');
  if(map[$('#heroDest').value]) $('#bkPackage').value=map[$('#heroDest').value];
  if($('#heroDate').value) $('#bkDate').value=$('#heroDate').value;
  const g=$('#heroGuests').value; if(g.startsWith('5')) $('#bkGuests').value='6+'; else if(g.startsWith('1')) $('#bkGuests').value='1';
  calcEstimate(); toast('Checking availability — finish the inquiry to lock your slots!');
});
$('#contactForm').addEventListener('submit', e=>{ e.preventDefault(); toast('Message sent! We reply within 2 hours (8am–8pm PHT).'); e.target.reset(); });
$('#newsletterForm').addEventListener('submit', e=>{ e.preventDefault(); toast('Welcome aboard! Your ₱500 voucher was sent to '+$('#newsletterEmail').value); e.target.reset(); });
$('#footerNews').addEventListener('submit', e=>{ e.preventDefault(); toast('Subscribed! Watch your inbox for promo fares.'); e.target.reset(); });

/* ---------- COUNTERS ---------- */
function animateCounters(){
  $$('.stat-num').forEach(el=>{
    const target=parseFloat(el.dataset.count), dec=+(el.dataset.decimal||0);
    const suffix=el.dataset.suffix || (target>=1000?'+':'');
    const t0=performance.now(), dur=1400;
    (function tick(t){ const p=Math.min(1,(t-t0)/dur), e=1-Math.pow(1-p,3), v=target*e;
      el.textContent = (dec?v.toFixed(dec):Math.round(v).toLocaleString())+suffix;
      if(p<1)requestAnimationFrame(tick); })(t0);
  });
}

/* ---------- MAP (Leaflet — no API key needed) ---------- */
let map=null;
function initMap(){
  if(map){ map.invalidateSize(); return; }
  map=L.map('map').setView([13.2,121.0],8);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'© OpenStreetMap'}).addTo(map);
  [['Puerto Galera<br><small>White Beach · Diving capital</small>',13.525,120.954],
   ['Calapan City<br><small>Lakbay HQ · ferry hub</small>',13.411,120.766],
   ['Mt. Halcon<br><small>2,582 m · permit required</small>',12.9,121.05],
   ['Apo Reef<br><small>Natural Park · Mar–May</small>',12.657,120.414],
   ['Batangas Port<br><small>Main jump-off from Manila</small>',13.755,121.041]
  ].forEach(([t,la,ln])=>L.marker([la,ln]).addTo(map).bindPopup(`<strong>${t}</strong>`));
}
function flyTo(coords,label){ if(!map)initMap(); map.flyTo(coords,11,{duration:1.2}); toast(`Flying to ${label}…`); }
function locateUser(){ if(!navigator.geolocation) return toast('Geolocation not supported.'); navigator.geolocation.getCurrentPosition(p=>{ const c=[p.coords.latitude,p.coords.longitude]; map.setView(c,10); L.marker(c).addTo(map).bindPopup('You are here').openPopup(); }); }

/* ---------- CHROME (mobile menu, header, dropdown) ---------- */
$('#mobileBtn').addEventListener('click', ()=>$('#mobileMenu').classList.toggle('hidden'));
window.addEventListener('scroll', ()=>$('#siteHeader').classList.toggle('scrolled', scrollY>10));
document.querySelector('[data-nav-group="guide"]')?.addEventListener('click', e=>{
  e.preventDefault(); e.stopPropagation();
  const dd = $('#guideDropdown');
  const open = dd.classList.toggle('open');
  e.currentTarget.setAttribute('aria-expanded', open ? 'true' : 'false');
});

/* ---------- SMOOTH SCROLL (Lenis — heavy, buttery inertia) ---------- */
(function initSmooth(){
  if(!window.Lenis) return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const lenis = new Lenis({ lerp:0.085, wheelMultiplier:1, smoothWheel:true });
  window.__lenis = lenis;
  (function raf(time){ lenis.raf(time); requestAnimationFrame(raf); })(performance.now());
})();

/* ---------- INIT ---------- */
(function init(){
  renderExperiences(); renderPackages(); renderGallery(); renderTestimonials(); renderFAQ(); calcEstimate();
  const d=$('#bkDate'); if(d) d.min=new Date().toISOString().split('T')[0];
  const hd=$('#heroDate'); if(hd) hd.min=new Date().toISOString().split('T')[0];
  go(location.hash.replace('#','')||'home');
  animateCounters();
  refreshIcons();
})();

const KEY='jeeAscensionV5';
const UNIT_DEADLINES=[
 ['Maths','Algebra','2026-10-18'],['Maths','Trigonometry','2026-10-25'],['Maths','Coordinate Geometry','2026-11-05'],['Maths','Calculus','2026-12-01'],['Maths','Vectors & 3D','2026-12-10'],
 ['Physics','Mechanics I','2026-10-22'],['Physics','Mechanics II','2026-10-29'],['Physics','Properties of Matter','2026-11-07'],['Physics','Thermal Physics','2026-11-14'],['Physics','Waves & Oscillations','2026-11-21'],['Physics','Experimental Physics — Part A','2026-11-23'],
 ['Physics','Electrostatics & Current Electricity','2026-12-04'],['Physics','Magnetism','2026-12-10'],['Physics','EMI & AC','2026-12-16'],['Physics','Optics','2026-12-22'],['Physics','Modern Physics','2026-12-27'],['Physics','EM Waves & Semiconductors','2026-12-30'],['Physics','Experimental Physics — Part B','2026-12-31'],
 ['Chemistry','Physical I','2026-10-23'],['Chemistry','Physical II','2026-11-30'],['Chemistry','Inorganic I','2026-12-10'],['Chemistry','Inorganic II','2026-12-10'],['Chemistry','Organic I','2026-12-18'],['Chemistry','Organic II','2026-12-31']
];
const DEFAULT_TEST_CHAPTERS=['Sets','Quadratic Equations','Kinematics','Periodic Table','Structure of Atom'];
const DEFAULT_UNIT_CHAPTERS={
 'Algebra':['Sets','Relations & Functions','Complex Numbers','Quadratic Equations','Sequence & Series','Permutation & Combination','Binomial Theorem','Matrices & Determinants','Statistics','Probability'],
 'Trigonometry':['Trigonometric Ratios & Identities','Trigonometric Equations','Properties of Triangles','Inverse Trigonometric Functions'],
 'Coordinate Geometry':['Straight Lines','Circles','Parabola','Ellipse','Hyperbola'],
 'Calculus':['Functions','Limits','Continuity & Differentiability','Application of Derivatives','Indefinite Integration','Definite Integration & Area','Differential Equations'],
 'Vectors & 3D':['Vectors','3D Geometry'],
 'Mechanics I':['Units, Dimensions & Vectors','Kinematics','Newton’s Laws of Motion','Friction','Work, Energy & Power','Circular Motion','Centre of Mass','Momentum & Collisions'],
 'Mechanics II':['Rotational Motion','Gravitation'],
 'Properties of Matter':['Elasticity','Fluid Statics','Buoyancy','Surface Tension','Viscosity','Bernoulli’s Principle and Fluid Flow'],
 'Thermal Physics':['Thermal Properties of Matter','Calorimetry','Heat Transfer','Thermodynamics','Kinetic Theory of Gases'],
 'Waves & Oscillations':['Simple Harmonic Motion','Waves on a String','Sound Waves','Air Columns and Resonance','Beats','Doppler Effect'],
 'Experimental Physics — Part A':['Units and measurements','Significant figures and measurement errors','Vernier callipers (internal/external diameter and depth)','Screw gauge (wire/sheet thickness)','Simple pendulum: amplitude-squared vs time','Mass by principle of moments using a metre scale','Young’s modulus of a wire','Surface tension by capillary rise and detergent effect','Viscosity by terminal velocity','Speed of sound using resonance tube','Specific heat capacity of a solid by mixtures','Specific heat capacity of a liquid by mixtures','Experimental graphs, observations and error calculations'],
 'Electrostatics & Current Electricity':['Electric Charges and Fields','Electrostatic Potential and Capacitance','Current Electricity'],
 'Magnetism':['Moving Charges and Magnetism','Magnetism and Matter'],
 'EMI & AC':['Electromagnetic Induction','Alternating Current'],
 'Optics':['Ray Optics','Wave Optics'],
 'Modern Physics':['Dual Nature of Matter and Radiation','Atoms','Nuclei'],
 'EM Waves & Semiconductors':['Electromagnetic Waves','Semiconductor Electronics'],
 'Experimental Physics — Part B':['Focal length of concave mirror and convex lens (u-v method)','Resistance and Ohm’s law experiment','Resistivity of a wire using metre bridge','Comparison of EMFs using potentiometer','Internal resistance of a cell using potentiometer','Multimeter: identify transistor terminals and NPN/PNP type','Multimeter: diode/LED direction and component working check','Resistance using post office box','Experimental graphs, observations and error calculations'],
 'Physical I':['Mole Concept','Structure of Atom','States of Matter','Thermochemistry','Thermodynamics'],
 'Physical II':['Redox Reactions','Chemical Equilibrium','Ionic Equilibrium','Solutions','Electrochemistry','Chemical Kinetics'],
 'Inorganic I':['Periodic Table','Chemical Bonding'],
 'Inorganic II':['p-Block Elements (Class 11)','p-Block Elements (Class 12, if included)','d- and f-Block Elements','Coordination Compounds','Qualitative Analysis'],
 'Organic I':['General Organic Chemistry','Isomerism','Hydrocarbons','Haloalkanes & Haloarenes','Alcohols, Phenols & Ethers'],
 'Organic II':['Aldehydes & Ketones','Carboxylic Acids','Amines','Biomolecules','Practical Organic Chemistry']
};
const PHASE_DEADLINES={
 'Maths|Algebra|1':'2026-10-18','Maths|Algebra|2':'2026-10-18','Maths|Trigonometry|1':'2026-10-25','Maths|Trigonometry|2':'2026-10-25','Maths|Coordinate Geometry|1':'2026-11-05','Maths|Coordinate Geometry|2':'2026-11-05','Maths|Calculus|1':'2026-11-05','Maths|Calculus|2':'2026-12-01','Maths|Vectors & 3D|1':'2026-12-10','Maths|Vectors & 3D|2':'2026-12-10',
 'Physics|Mechanics I|1':'2026-10-22','Physics|Mechanics II|1':'2026-10-29','Physics|Properties of Matter|1':'2026-11-07','Physics|Thermal Physics|1':'2026-11-14','Physics|Waves & Oscillations|1':'2026-11-21','Physics|Experimental Physics — Part A|1':'2026-11-23','Physics|Electrostatics & Current Electricity|2':'2026-12-04','Physics|Magnetism|2':'2026-12-10','Physics|EMI & AC|2':'2026-12-16','Physics|Optics|2':'2026-12-22','Physics|Modern Physics|2':'2026-12-27','Physics|EM Waves & Semiconductors|2':'2026-12-30','Physics|Experimental Physics — Part B|2':'2026-12-31',
 'Chemistry|Physical I|1':'2026-10-23','Chemistry|Physical II|1':'2026-10-29','Chemistry|Physical II|2':'2026-11-30','Chemistry|Inorganic I|1':'2026-11-03','Chemistry|Inorganic I|2':'2026-12-10','Chemistry|Inorganic II|1':'2026-11-06','Chemistry|Inorganic II|2':'2026-12-10','Chemistry|Organic I|1':'2026-11-15','Chemistry|Organic I|2':'2026-12-18','Chemistry|Organic II|2':'2026-12-31'
};
function chapterPhase(subject,unit,name){
 const n=String(name||'').toLowerCase();
 if(subject==='Physics')return unit==='Experimental Physics — Part A'||['Mechanics I','Mechanics II','Properties of Matter','Thermal Physics','Waves & Oscillations'].includes(unit)?1:2;
 if(subject==='Chemistry'){
  if(unit==='Physical I')return 1;
  if(unit==='Physical II')return /solutions|electrochemistry|chemical kinetics|surface chemistry/.test(n)?2:1;
  if(unit==='Inorganic I')return /coordination/.test(n)?2:1;
  if(unit==='Inorganic II')return /class 11/.test(n)?1:2;
  if(unit==='Organic I')return /general organic|isomerism|hydrocarbons/.test(n)?1:2;
  if(unit==='Organic II')return 2;
 }
 if(subject==='Maths'){
  if(unit==='Algebra')return /matrices|determinants/.test(n)?2:1;
  if(unit==='Trigonometry')return /inverse trigonometric/.test(n)?2:1;
  if(unit==='Coordinate Geometry')return 1;
  if(unit==='Calculus')return /functions/.test(n)?1:2;
  if(unit==='Vectors & 3D')return 2;
 }
 return 1;
}
function phaseOneCompleteFor(obj){
 return obj.deadlines.every(d=>(obj.chapterUnits?.[d.name]||[]).filter(c=>chapterPhase(d.subject,d.name,c.name)===1).every(c=>c.done));
}
function defaultChapters(name,subject=''){return (DEFAULT_UNIT_CHAPTERS[name]||[]).map(n=>({id:uid(),name:n,done:false,phase:chapterPhase(subject,name,n)}));}
function ensureUnitChaptersFor(obj){
 if(!obj.chapterUnits)obj.chapterUnits={};
 obj.deadlines.forEach(d=>{
  if(!Array.isArray(obj.chapterUnits[d.name]))obj.chapterUnits[d.name]=defaultChapters(d.name,d.subject);
  const list=obj.chapterUnits[d.name];
  list.forEach(c=>{if(c.phase!==1&&c.phase!==2)c.phase=chapterPhase(d.subject,d.name,c.name)});
  (DEFAULT_UNIT_CHAPTERS[d.name]||[]).forEach(name=>{if(!list.some(c=>String(c.name).toLowerCase()===name.toLowerCase()))list.push({id:uid(),name,done:false,phase:chapterPhase(d.subject,d.name,name)})});
 });
}
function ensureUnitChapters(){ensureUnitChaptersFor(s)}
function migrateLegacyChaptersFor(obj){
 const listFor=name=>obj.chapterUnits[name]||(obj.chapterUnits[name]=[]);
 const move=(fromUnit,oldName,toUnit,newName)=>{
  const from=listFor(fromUnit),source=from.find(c=>String(c.name).toLowerCase()===oldName.toLowerCase());
  if(!source)return;
  const to=listFor(toUnit);let target=to.find(c=>String(c.name).toLowerCase()===newName.toLowerCase());
  if(target)target.done=!!(target.done||source.done);else to.push({...source,id:uid(),name:newName,phase:chapterPhase((obj.deadlines.find(d=>d.name===toUnit)||{}).subject||'',toUnit,newName)});
  obj.chapterUnits[fromUnit]=from.filter(c=>c!==source);
 };
 move('Mechanics II','Properties of Fluids','Properties of Matter','Fluid Statics');
 move('Physical I','Equilibrium','Physical II','Chemical Equilibrium');
 move('Inorganic I','Coordination Compounds','Inorganic II','Coordination Compounds');
 const inorganic=listFor('Inorganic II');
 const oldP=inorganic.find(c=>String(c.name).toLowerCase()==='p-block elements');
 if(oldP){let target=inorganic.find(c=>String(c.name).toLowerCase()==='p-block elements (class 11)');if(target)target.done=!!(target.done||oldP.done);else {oldP.name='p-Block Elements (Class 11)';oldP.phase=1;}if(target)obj.chapterUnits['Inorganic II']=inorganic.filter(c=>c!==oldP);}
 move('Organic II','Biomolecules & Polymers','Organic II','Biomolecules');
}

function unitProgress(name){let c=s.chapterUnits?.[name]||[];if(!c.length)return {done:!!s.units[name],pct:s.units[name]?100:0,total:0,doneCount:0,remaining:0};let done=c.filter(x=>x.done).length;let pct=Math.round(done/c.length*100);return {done:pct===100,pct,total:c.length,doneCount:done,remaining:c.length-done};}
function unitUrgency(d){let p=unitProgress(d.name),days=daysUntil(d.date);let remaining=100-p.pct;let pace=remaining/Math.max(1,days);let pressure=pace+(days<=3?15:days<=7?8:0)+(days<0?50:0);let label=days<0?'MISSED':pressure>=45?'CRITICAL':pressure>=25?'HIGH':pressure>=12?'MEDIUM':'LOW';return {days,remaining,pace,pressure,label,p};}
function unitChecklist(d,context='progress'){
  let list=s.chapterUnits?.[d.name]||[],u=unitUrgency(d);
  const q=x=>esc(JSON.stringify(String(x)));
  const inputId=`newuc-${context}-${d.id}`;
  const lockedPhase2=!phaseOneCompleteFor(s);
  return `<div class="unitcheck"><div class="row"><div><b>${esc(d.name)}</b><div class="muted">${u.p.doneCount}/${u.p.total} chapters · ${u.p.pct}% complete · deadline ${esc(d.date)}</div></div><span class="urg ${u.label.toLowerCase()}">${u.label}</span></div><div class="bar"><div class="fill" style="width:${u.p.pct}%"></div></div><p class="muted">${u.remaining}% work remaining · ${u.days<0?'deadline passed':u.days+' days left'} · about ${Math.ceil(u.pace)} percentage-points/day needed</p>${list.map(c=>{const ph=chapterPhase(d.subject,d.name,c.name),locked=ph===2&&lockedPhase2;return `<div class="checkitem ${c.done?'done':''}"><label><input type="checkbox" ${c.done?'checked':''} ${locked?'disabled':''} title="${locked?'Phase 2 unlocks after all Phase 1 chapters are complete':''}" onchange="toggleUnitChapter(${q(d.name)},${q(c.id)})"><span>${esc(c.name)} <small class="phase-tag">P${ph}</small></span></label><span class="chapter-actions"><button type="button" onclick="editUnitChapter(${q(d.name)},${q(c.id)})">Edit</button><button type="button" onclick="deleteUnitChapter(${q(d.name)},${q(c.id)})">Delete</button></span></div>`}).join('')}<div class="row"><input id="${esc(inputId)}" placeholder="Add chapter"><button type="button" onclick="addUnitChapter(${q(d.id)},${q(inputId)})">Add Chapter</button><button type="button" onclick="toggleUnitById(${q(d.id)})">${u.p.done?'Undo completion':'Mark complete'}</button></div></div>`
}

const NAV=[['command','Command'],['todo','To-Do'],['phases','Phase Plan'],['deadlines','Deadlines'],['backlog','Backlog'],['tests','Test Hub'],['time','Time Core'],['progress','Progress'],['courses','Courses'],['stats','Stats'],['daily','Daily Report'],['monthly','Monthly Stats'],['review','Daily Review'],['settings','Settings']];
const fresh=()=>({xp:0,tasks:[],tests:[],units:{},chapterUnits:{},deadlines:UNIT_DEADLINES.map(([subject,name,date])=>({id:uid(),subject,name,date})),planV66DatesApplied:false,backlog:[],penalties:{},courses:[],sessions:[],activity:[],cfg:{hours:6,penalty:50,dailyBacklogPenalty:20,dailyTargetXP:100,monthlyTargetXP:2500},ready:{concepts:false,practice:false,unfamiliar:false,timed:false,doubts:false,revision:false},review:'',dayClosed:false,timer:{mode:'stopped',started:0,elapsed:0},lastDate:today()});
let s=load();
ensureUnitChapters();
function load(){try{let raw=JSON.parse(localStorage.getItem(KEY)||'null')||{};let out=Object.assign(fresh(),raw);
if(!Array.isArray(out.deadlines))out.deadlines=[];const applyV66PlanDates=!out.planV66DatesApplied;UNIT_DEADLINES.forEach(([subject,name,date])=>{let existing=out.deadlines.find(d=>d.subject===subject&&d.name===name);if(existing){if(applyV66PlanDates)existing.date=date;}else out.deadlines.push({id:uid(),subject,name,date})});out.planV66DatesApplied=true;ensureUnitChaptersFor(out);migrateLegacyChaptersFor(out);ensureUnitChaptersFor(out);if(!Array.isArray(out.tasks))out.tasks=[];out.tasks=out.tasks.map(t=>({...t,subtasks:Array.isArray(t.subtasks)?t.subtasks.map(st=>({...st,id:st.id||uid(),name:String(st.name||'Subtask'),done:!!st.done})):[]}));if(!Array.isArray(out.courses))out.courses=[];if(!out.penalties||typeof out.penalties!=='object')out.penalties={};out.courses=out.courses.map(c=>({...c,id:c.id||uid(),name:String(c.name||'Untitled course'),url:String(c.url||''),progress:Math.max(0,Math.min(100,Number(c.progress)||0))}));if(!Array.isArray(out.activity))out.activity=[];if(!Array.isArray(out.backlog))out.backlog=[];if(!out.cfg)out.cfg={hours:6,penalty:50,dailyTargetXP:100,monthlyTargetXP:2500};if(out.cfg.dailyBacklogPenalty==null)out.cfg.dailyBacklogPenalty=20;if(out.cfg.dailyTargetXP==null)out.cfg.dailyTargetXP=100;if(out.cfg.monthlyTargetXP==null)out.cfg.monthlyTargetXP=2500;delete out.weak;delete out.revision;delete out.questions;localStorage.setItem(KEY,JSON.stringify(out));return out}catch(e){return fresh()}}
function save(){localStorage.setItem(KEY,JSON.stringify(s));render()}
function today(){let d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function uid(){return Date.now()+Math.random().toString(16).slice(2)}
function esc(x){return String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function daysUntil(d){return Math.ceil((new Date(d+'T23:59:59')-new Date())/86400000)}
function late(d){return String(d).slice(0,10) < today()}
function fmtMin(m){m=Math.max(0,Math.round(m));return `${Math.floor(m/60)}h ${m%60}m`}
function toast(x){const e=document.getElementById('toast');e.textContent=x;e.style.display='block';setTimeout(()=>e.style.display='none',1600)}
function penaltyCheck(){
  if(!Array.isArray(s.backlog))s.backlog=[];
  if(!s.penalties||typeof s.penalties!=='object')s.penalties={};
  if(!Array.isArray(s.activity))s.activity=[];
  if(!s.cfg)s.cfg={hours:6,dailyBacklogPenalty:20,dailyTargetXP:100,monthlyTargetXP:2500};
  if(s.cfg.dailyBacklogPenalty==null)s.cfg.dailyBacklogPenalty=20;
  let changed=false;
  const nextDate=date=>{const d=new Date(String(date)+'T12:00:00');d.setDate(d.getDate()+1);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};
  const ensureMissed=(ref,name,desc,due)=>{
    let item=s.backlog.find(b=>b.source==='deadline'&&b.sourceId===ref);
    if(!item){
      item={id:uid(),name,desc,xp:0,mins:30,due,source:'deadline',sourceId:ref,done:false,createdDate:today(),lastDailyPenaltyDate:due,dailyPenaltyTotal:0,dailyPenaltyDays:0};
      s.backlog.push(item);changed=true;
    }
    return item;
  };
  const checkUnit=x=>{
    const ref='unit:'+x.id, complete=unitProgress(x.name).done;
    let linked=s.backlog.find(b=>b.source==='deadline'&&b.sourceId===ref);
    if(complete){
      if(linked&&!linked.done){linked.done=true;linked.autoResolvedByCompletion=true;linked.lastDailyPenaltyDate=today();changed=true;}
      return;
    }
    if(late(x.date)){
      if(linked&&linked.done&&linked.autoResolvedByCompletion){linked.done=false;linked.autoResolvedByCompletion=false;linked.lastDailyPenaltyDate=today();changed=true;}
      const before=!!linked;
      ensureMissed(ref,'Missed deadline: '+x.name,'Automatic backlog from unit deadline',x.date);
      if(!before){s.activity.push({id:uid(),date:today(),at:Date.now(),type:'deadline_missed',name:x.name,xp:0,mins:0});changed=true;}
    }
  };
  const checkTest=t=>{
    const ref='test:'+t.id, complete=t.status==='complete';
    let linked=s.backlog.find(b=>b.source==='deadline'&&b.sourceId===ref);
    if(complete){
      if(linked&&!linked.done){linked.done=true;linked.autoResolvedByCompletion=true;linked.lastDailyPenaltyDate=today();changed=true;}
      return;
    }
    if(t.date&&late(t.date)){
      if(linked&&linked.done&&linked.autoResolvedByCompletion){linked.done=false;linked.autoResolvedByCompletion=false;linked.lastDailyPenaltyDate=today();changed=true;}
      const before=!!linked;
      ensureMissed(ref,'Missed test deadline: '+t.name,'Automatic backlog from test deadline',t.date);
      if(!before){s.activity.push({id:uid(),date:today(),at:Date.now(),type:'deadline_missed',name:t.name,xp:0,mins:0});changed=true;}
    }
  };
  s.deadlines.forEach(checkUnit);s.tests.forEach(checkTest);
  const todayKey=today(),perItem=Math.max(0,Number(s.cfg.dailyBacklogPenalty)||0);
  s.backlog.forEach(item=>{
    if(item.done)return;
    // Legacy backlog items start accruing from the day this version first sees them; no retroactive charges.
    if(!item.lastDailyPenaltyDate){item.lastDailyPenaltyDate=todayKey;item.createdDate=item.createdDate||todayKey;item.dailyPenaltyTotal=Number(item.dailyPenaltyTotal)||0;item.dailyPenaltyDays=Number(item.dailyPenaltyDays)||0;changed=true;}
    if(item.dailyPenaltyTotal==null){item.dailyPenaltyTotal=0;changed=true;}
    if(item.dailyPenaltyDays==null){item.dailyPenaltyDays=0;changed=true;}
    let dueDate=nextDate(item.lastDailyPenaltyDate);
    while(dueDate<=todayKey){
      const before=Number(s.xp)||0,actual=Math.min(before,perItem);
      s.xp=Math.max(0,before-perItem);
      item.dailyPenaltyTotal+=actual;item.dailyPenaltyDays+=1;
      s.activity.push({id:uid(),date:dueDate,at:Date.now(),type:'backlog_daily_penalty',name:item.name,xp:-actual,penaltyDue:perItem,mins:0});
      item.lastDailyPenaltyDate=dueDate;changed=true;
      dueDate=nextDate(dueDate);
    }
  });
  if(changed)localStorage.setItem(KEY,JSON.stringify(s));
}
function nav(){document.getElementById('nav').innerHTML=NAV.map(([id,n])=>`<button onclick="show('${id}')">${n}</button>`).join('')}
function show(id){document.querySelectorAll('.page').forEach(e=>e.classList.remove('active'));document.getElementById('p-'+id)?.classList.add('active');location.hash=id}
function page(id,title,body){return `<section class="page" id="p-${id}"><h2>${title}</h2>${body}</section>`}
function activeTasks(){return s.tasks.filter(t=>!t.done)}
function estimateRemaining(){return activeTasks().reduce((a,t)=>a+(+t.mins||30),0)+s.tests.filter(t=>t.status!=='complete').reduce((a,t)=>a+t.chapters.filter(c=>!c.done).reduce((b,c)=>b+(+c.mins||30),0),0)}
function readiness(){return Object.values(s.ready).filter(Boolean).length}
function priorityScoreTask(t){let score=0,now=new Date();if(t.due){let d=daysUntil(t.due);score+=d<0?100:d<=1?70:d<=3?45:d<=7?25:8}score+=Math.min(30,(+t.mins||30)/10);score+=t.priority==='High'?25:t.priority==='Medium'?12:0;return score}
function priorities(){let arr=activeTasks().map(t=>({type:'task',id:t.id,name:t.name,mins:+t.mins||30,score:priorityScoreTask(t),why:'task'}));s.deadlines.forEach(x=>{let u=unitUrgency(x);if(!u.p.done)arr.push({type:'unit',id:x.id,name:x.name,mins:Math.max(30,u.p.remaining*1.5),score:Math.round(u.pressure*2),why:`${u.p.pct}% done · ${u.label.toLowerCase()} urgency`});});s.tests.filter(t=>t.status!=='complete').forEach(t=>{let rem=t.chapters.filter(c=>!c.done).reduce((a,c)=>a+(+c.mins||30),0);let d=daysUntil(t.date);arr.push({type:'test',id:t.id,name:'Test: '+t.name,mins:Math.max(30,rem),score:(late(t.date)?140:100-Math.max(0,d)*4)+(t.priority==='High'?30:0),why:'test deadline'});});return arr.sort((a,b)=>b.score-a.score)}
function reality(){let cap=s.cfg.hours*60,rem=estimateRemaining(),target=Math.round(cap*.82),planned=Math.min(target,rem),ratio=rem/Math.max(1,cap);let status=ratio>1.15?'OVERLOADED':ratio>.9?'AGGRESSIVE':'REALISTIC';return {cap,rem,target,planned,status}}
function command(){let r=reality(),p=priorities().slice(0,5);return `<div class="card"><h3>Reality Check</h3><div class="row"><div class="field"><label>Hours I can genuinely give today<input id="hours" type="number" min="0.5" step="0.5" value="${s.cfg.hours}"></label></div><button onclick="saveHours()">Recalculate</button></div><p><b class="${r.status==='REALISTIC'?'good':r.status==='AGGRESSIVE'?'warn':'danger'}">${r.status}</b> · ${fmtMin(r.rem)} estimated active work · ${fmtMin(r.planned)} recommended today.</p><div class="bar"><div class="fill" style="width:${Math.min(100,r.planned/Math.max(1,r.cap)*100)}%"></div></div><p class="muted">The engine keeps ~18% of your entered capacity as buffer instead of filling every minute.</p></div><div class="card"><h3>What Should I Do Now?</h3>${p.length?p.map((x,i)=>`<div class="item"><span class="badge">#${i+1}</span> <span class="priority">${esc(x.name)}</span> · ${fmtMin(x.mins)} <span class="muted">· ${x.why}</span>${x.type==='task'?` <button class="right" onclick="completeTask('${x.id}')">Complete</button>`:''}</div>`).join(''):'<p>No active work. Add tasks or tests.</p>'}</div><div class="grid"><div class="card"><h3>Today's Capacity</h3><div class="big">${s.cfg.hours}h</div><p class="muted">Recommended: ${fmtMin(r.planned)}</p></div><div class="card"><h3>XP</h3><div class="big">${s.xp}</div><p class="muted">Productive timer minutes also earn XP.</p></div><div class="card"><h3>Test Readiness</h3><div class="big">${readiness()}/6</div></div></div>`}
function taskForm(t){return `<div class="grid"><label>Name<input id="n-${t.id}" value="${esc(t.name)}"></label><label>Description<input id="d-${t.id}" value="${esc(t.desc)}"></label><label>Minutes<input id="m-${t.id}" type="number" value="${t.mins||30}"></label><label>XP<input id="x-${t.id}" type="number" value="${t.xp||10}"></label><label>Priority<select id="p-${t.id}">${['Low','Medium','High'].map(x=>`<option ${t.priority===x?'selected':''}>${x}</option>`).join('')}</select></label><label>Due date<input id="u-${t.id}" type="date" value="${t.due||''}"></label><label>Unit<input id="unit-${t.id}" value="${esc(t.unit||'')}"></label></div><button onclick="editTask('${t.id}')">Save</button>`}
function taskSubtasks(t){
  const list=Array.isArray(t.subtasks)?t.subtasks:[];
  const done=list.filter(x=>x.done).length;
  const pct=list.length?Math.round(done/list.length*100):0;
  const tid=esc(t.id);
  return `<div class="subtasks"><div class="row subhead"><b>Subtasks</b><span class="muted">${done}/${list.length} complete · ${pct}%</span></div><div class="bar"><div class="fill" style="width:${pct}%"></div></div>${list.map(st=>{const sid=esc(st.id);return `<div class="subtask ${st.done?'done':''}"><label><input type="checkbox" ${st.done?'checked':''} onchange="toggleSubtask('${tid}','${sid}')"><span>${esc(st.name)}</span></label><button type="button" onclick="editSubtask('${tid}','${sid}')">Edit</button><button type="button" onclick="deleteSubtask('${tid}','${sid}')">Delete</button></div>`}).join('')}<div class="row subadd"><input id="subnew-${tid}" placeholder="Add a subtask"><button type="button" onclick="addSubtask('${tid}')">Add subtask</button></div></div>`
}
function todo(){let all=s.tasks;return `<div class="card"><h3>Add Task</h3><div class="grid"><label>Name<input id="newName" placeholder="e.g. Mechanics COM practice"></label><label>Description<input id="newDesc"></label><label>Minutes<input id="newMins" type="number" value="45"></label><label>XP<input id="newXp" type="number" value="10"></label><label>Priority<select id="newPriority"><option>Medium</option><option>High</option><option>Low</option></select></label><label>Due date<input id="newDue" type="date"></label><label>Unit<input id="newUnit"></label></div><button onclick="addTask()">Add Task</button></div>${all.map(t=>`<div class="item ${t.done?'done':''} ${t.source==='deadline'?'overdue':''}"><span class="badge">${t.source==='deadline'?'BACKLOG':'TASK'}</span> <b>${esc(t.name)}</b> · ${t.mins||30}m · ${t.xp||0} XP${t.source==='deadline'?`<p class="danger">Automatic missed-deadline backlog.</p>`:`${taskSubtasks(t)}<details><summary>Edit task details</summary>${taskForm(t)}</details><p><button onclick="toggleTask('${t.id}')">${t.done?'Undo':'Complete'}</button> <button onclick="moveTask('${t.id}',-1)">↑</button> <button onclick="moveTask('${t.id}',1)">↓</button> <button onclick="deleteTask('${t.id}')">Delete</button></p>`}</div>`).join('')||'<p>No tasks.</p>'}` }
function addTask(){const name=document.getElementById('newName'),desc=document.getElementById('newDesc'),mins=document.getElementById('newMins'),xp=document.getElementById('newXp'),priority=document.getElementById('newPriority'),due=document.getElementById('newDue'),unit=document.getElementById('newUnit');if(!name||!name.value.trim()){toast('Enter a task name');return}s.tasks.push({id:uid(),name:name.value.trim(),desc:desc?.value||'',mins:+mins?.value||30,xp:+xp?.value||0,priority:priority?.value||'Medium',due:due?.value||'',unit:unit?.value||'',done:false,subtasks:[],created:Date.now()});save();toast('Task added')}
function editTask(id){let t=s.tasks.find(x=>x.id===id);if(!t)return;t.name=document.getElementById('n-'+id).value;t.desc=document.getElementById('d-'+id).value;t.mins=+document.getElementById('m-'+id).value||30;t.xp=+document.getElementById('x-'+id).value||0;t.priority=document.getElementById('p-'+id).value;t.due=document.getElementById('u-'+id).value;t.unit=document.getElementById('unit-'+id).value;save();toast('Task updated')}
function addSubtask(taskId){let t=s.tasks.find(x=>String(x.id)===String(taskId));let input=document.getElementById('subnew-'+taskId);let name=(input?.value||'').trim();if(!t||!name)return;if(!Array.isArray(t.subtasks))t.subtasks=[];t.subtasks.push({id:uid(),name,done:false});save();toast('Subtask added')}
function toggleSubtask(taskId,subtaskId){let t=s.tasks.find(x=>String(x.id)===String(taskId));let st=t?.subtasks?.find(x=>String(x.id)===String(subtaskId));if(!st)return;st.done=!st.done;save()}
function editSubtask(taskId,subtaskId){let t=s.tasks.find(x=>String(x.id)===String(taskId));let st=t?.subtasks?.find(x=>String(x.id)===String(subtaskId));if(!st)return;let name=prompt('Edit subtask:',st.name);if(name===null)return;name=name.trim();if(!name)return;st.name=name;save();toast('Subtask updated')}
function deleteSubtask(taskId,subtaskId){let t=s.tasks.find(x=>String(x.id)===String(taskId));if(!t||!Array.isArray(t.subtasks))return;let st=t.subtasks.find(x=>String(x.id)===String(subtaskId));if(!st||!confirm('Delete subtask "'+st.name+'"?'))return;t.subtasks=t.subtasks.filter(x=>String(x.id)!==String(subtaskId));save()}
function toggleTask(id){let t=s.tasks.find(x=>x.id===id);if(!t)return;t.done=!t.done;let delta=t.done?(+t.xp||0):-(+t.xp||0);s.xp=Math.max(0,s.xp+delta);s.activity.push({id:uid(),date:today(),at:Date.now(),type:t.done?'task_complete':'task_undo',name:t.name,xp:delta,mins:t.done?(+t.mins||0):0});save()}
function completeTask(id){toggleTask(id)}
function deleteTask(id){s.tasks=s.tasks.filter(x=>x.id!==id);save()}
function moveTask(id,d){let i=s.tasks.findIndex(x=>x.id===id),j=i+d;if(i<0||j<0||j>=s.tasks.length)return;[s.tasks[i],s.tasks[j]]=[s.tasks[j],s.tasks[i]];save()}
function deadlines(){ensureUnitChapters();let units=s.deadlines.map(x=>({kind:'Unit',subject:x.subject||'',name:x.name,date:x.date,done:unitProgress(x.name).done,id:x.id}));let tests=s.tests.map(t=>({kind:'Test',subject:t.subject||'',name:t.name,date:t.date,done:t.status==='complete',id:t.id}));let all=[...units,...tests].sort((a,b)=>a.date.localeCompare(b.date));let active=all.filter(x=>!x.done);return `<div class="card"><h3>Deadline Radar</h3><p class="muted">You can edit a deadline anytime. Completed items leave the active queue; missed active deadlines enter backlog automatically.</p><p><button onclick="addDeadline()">+ Add Deadline</button></p>${active.length?active.map(x=>`<div class="item ${late(x.date)?'overdue':''}"><span class="badge">${x.kind}</span> <b>${esc(x.name)}</b> · ${x.date} · ${late(x.date)?'<span class="danger">MISSED</span>':daysUntil(x.date)+' days left'} <span class="right"><button onclick="editDeadline('${x.id}','${x.kind}')">Edit</button>${x.kind==='Unit'?` <button onclick="toggleUnitById('${x.id}')">Mark complete</button>`:''}</span></div>`).join(''):'<p class="good">No active deadlines.</p>'}</div><div class="card"><h3>Completed / Archived</h3>${all.filter(x=>x.done).map(x=>`<div class="item done"><span class="badge">${x.kind}</span> ${esc(x.name)} · ${x.date} <button class="right" onclick="editDeadline('${x.id}','${x.kind}')">Edit</button>${x.kind==='Unit'?` <button onclick="toggleUnitById('${x.id}')">Undo</button>`:''}</div>`).join('')||'<p>Nothing completed yet.</p>'}</div><div class="card"><h3>Unit Deadline List</h3>${s.deadlines.map(x=>`<div class="item"><b>${esc(x.subject)}</b> · ${esc(x.name)} · ${x.date}<button class="right" onclick="editDeadline('${x.id}','Unit')">Edit</button> <button onclick="deleteDeadline('${x.id}')">Delete</button></div>`).join('')}</div><div class="card"><h3>Chapter-by-Chapter Unit Progress</h3><p class="muted">Check off chapters here or in Progress Board. Completion percentage and urgency update from these checkboxes.</p>${s.deadlines.map(x=>unitChecklist(x,'deadlines')).join('')}</div>`}
function toggleUnitChapter(unit,cid){ensureUnitChapters();let c=(s.chapterUnits[unit]||[]).find(x=>x.id===cid);if(!c)return;c.done=!c.done;s.units[unit]=unitProgress(unit).pct===100;s.activity.push({id:uid(),date:today(),at:Date.now(),type:c.done?'chapter_complete':'chapter_undo',name:unit+' · '+c.name,xp:0,mins:0});save()}
function addUnitChapter(id,inputId='newuc-progress-'+id){ensureUnitChapters();let d=s.deadlines.find(x=>x.id===id);if(!d)return;let input=document.getElementById(inputId);let name=(input?.value||'').trim();if(!name)return;s.chapterUnits[d.name].push({id:uid(),name,done:false});save();toast('Chapter added')}
function editUnitChapter(unit,cid){ensureUnitChapters();let c=(s.chapterUnits[unit]||[]).find(x=>x.id===cid);if(!c)return;let name=prompt('Chapter name:',c.name);if(name===null)return;name=name.trim();if(!name)return;c.name=name;save();toast('Chapter updated')}
function deleteUnitChapter(unit,cid){ensureUnitChapters();let list=s.chapterUnits[unit]||[];let c=list.find(x=>x.id===cid);if(!c)return;if(!confirm('Delete chapter "'+c.name+'" from this unit?'))return;s.chapterUnits[unit]=list.filter(x=>x.id!==cid);s.units[unit]=unitProgress(unit).pct===100;save();toast('Chapter deleted')}
function addDeadline(){let subject=prompt('Subject (Maths / Physics / Chemistry):','Maths');if(subject===null)return;let name=prompt('Deadline / unit name:','New Unit');if(!name)return;let date=prompt('Deadline date (YYYY-MM-DD):',today());if(!date)return;s.deadlines.push({id:uid(),subject,name,date});save();toast('Deadline added')}
function editDeadline(id,kind){if(kind==='Unit'){let d=s.deadlines.find(x=>x.id===id);if(!d)return;let subject=prompt('Subject:',d.subject||'');if(subject===null)return;let name=prompt('Deadline / unit name:',d.name);if(!name)return;name=name.trim();if(!name)return;let date=prompt('Deadline date (YYYY-MM-DD):',d.date);if(date===null||!date)return;let old=d.name;d.subject=subject;d.name=name;d.date=date;if(old!==name){if(Array.isArray(s.chapterUnits[old])){if(Array.isArray(s.chapterUnits[name])){const seen=new Set(s.chapterUnits[name].map(c=>c.name.toLowerCase()));s.chapterUnits[name].push(...s.chapterUnits[old].filter(c=>!seen.has(c.name.toLowerCase())))}else{s.chapterUnits[name]=s.chapterUnits[old]}delete s.chapterUnits[old]}if(Object.prototype.hasOwnProperty.call(s.units,old)){s.units[name]=s.units[old];delete s.units[old]}}save();toast('Deadline updated')}else{let t=s.tests.find(x=>x.id===id);if(!t)return;let date=prompt('Test deadline (YYYY-MM-DD):',t.date||today());if(date===null||!date)return;t.date=date;save();toast('Test deadline updated')}}
function resolveBacklogForDeletedSource(source,sourceId){let changed=false;for(const item of s.backlog){if(item.source==='deadline'&&item.sourceId===source+':'+sourceId&&!item.done){item.done=true;item.autoResolvedByDeletion=true;item.lastDailyPenaltyDate=today();changed=true;}}return changed}
function deleteDeadline(id){if(!confirm('Delete this unit deadline? Its linked backlog item, if any, will be resolved so it cannot keep deducting XP.'))return;const d=s.deadlines.find(x=>x.id===id);if(!d)return;resolveBacklogForDeletedSource('unit',id);s.deadlines=s.deadlines.filter(x=>x.id!==id);if(!s.deadlines.some(x=>x.name===d.name)){delete s.chapterUnits[d.name];delete s.units[d.name]}save();toast('Deadline deleted; linked backlog resolved')}
function toggleUnitById(id){let d=s.deadlines.find(x=>x.id===id);if(d)toggleUnit(d.name)}

function courses(){return `<div class="card"><h3>Course Library</h3><p class="muted">Store the exact courses you are using and track completion.</p><div class="grid"><label>Course name<input id="courseName" placeholder="e.g. Calculus Complete Course"></label><label>YouTube URL<input id="courseUrl" placeholder="https://youtube.com/..."></label><label>Progress %<input id="courseProgress" type="number" min="0" max="100" value="0"></label></div><button type="button" onclick="addCourse()">Add Course</button></div>${s.courses.map(c=>`<div class="item course-card"><div class="row"><div><b>${esc(c.name)}</b><p><a class="course-link" href="${safeUrl(c.url)}" target="_blank" rel="noopener noreferrer">${esc(c.url||'Open course link')}</a> · ${c.progress||0}%</p></div><div class="course-actions"><button type="button" onclick="editCourse('${c.id}')">Edit</button><button type="button" onclick="deleteCourse('${c.id}')">Delete</button></div></div><div class="bar"><div class="fill" style="width:${Math.min(100,Math.max(0,+c.progress||0))}%"></div></div></div>`).join('')||'<p>No courses added.</p>'}`}
function safeUrl(url){let u=String(url||'').trim();if(!u)return '#';try{let x=new URL(u);return /^https?:$/.test(x.protocol)?esc(x.href):'#'}catch(e){return '#'}}
function addCourse(){let name=document.getElementById('courseName'),url=document.getElementById('courseUrl'),progress=document.getElementById('courseProgress');if(!name||!name.value.trim()){toast('Enter a course name');return}s.courses.push({id:uid(),name:name.value.trim(),url:url?.value.trim()||'',progress:Math.max(0,Math.min(100,Number(progress?.value)||0))});save();toast('Course added')}
function editCourse(id){let c=s.courses.find(x=>x.id===id);if(!c)return;let n=prompt('Course name:',c.name);if(n===null)return;let u=prompt('YouTube URL:',c.url||'');if(u===null)return;let pr=prompt('Progress %:',c.progress||0);if(pr===null)return;c.name=n.trim()||c.name;c.url=u.trim();c.progress=Math.max(0,Math.min(100,Number(pr)||0));save();toast('Course updated')}
function deleteCourse(id){let c=s.courses.find(x=>x.id===id);if(!c)return;if(confirm(`Delete "${c.name}"?`)){s.courses=s.courses.filter(x=>x.id!==id);save();toast('Course deleted')}}



function phasePlan(){
 const locked=!phaseOneCompleteFor(s);
 function renderPhase(phase){
  const units=s.deadlines.map(d=>({d:d,chapters:(s.chapterUnits?.[d.name]||[]).filter(c=>chapterPhase(d.subject,d.name,c.name)===phase)})).filter(x=>x.chapters.length);
  let count=units.reduce((a,x)=>a+x.chapters.length,0),done=units.reduce((a,x)=>a+x.chapters.filter(c=>c.done).length,0);
  let html='<div class="card"><h3>Phase '+phase+' · '+(phase===1?'Class 11 foundations':'Class 12 syllabus')+'</h3><p>'+done+'/'+count+' chapter tasks complete · '+(count?Math.round(done/count*100):0)+'%</p><div class="bar"><div class="fill" style="width:'+(count?done/count*100:0)+'%"></div></div>';
  units.forEach(function(x){
   let d=x.d,chapters=x.chapters,due=PHASE_DEADLINES[d.subject+'|'+d.name+'|'+phase]||d.date;
   html+='<div class="phase-unit"><div class="row"><b>'+esc(d.subject)+' · '+esc(d.name)+'</b><span class="muted">Target: '+esc(due)+'</span></div><div class="muted">'+chapters.filter(c=>c.done).length+'/'+chapters.length+' chapters</div>';
   chapters.forEach(function(c){
    let disabled=phase===2&&locked?'disabled':'';
    html+='<label class="phase-check '+(c.done?'done':'')+'"><input type="checkbox" '+(c.done?'checked':'')+' '+disabled+' onchange="toggleUnitChapter('+esc(JSON.stringify(d.name))+','+esc(JSON.stringify(c.id))+')"><span>'+esc(c.name)+'</span></label>';
   });
   html+='</div>';
  });
  html+='</div>';return html;
 }
 return '<div class="card"><h3>Global Phase Gate</h3><p>Finish Phase 1 across every subject and unit before beginning Phase 2. Phase 2 checkboxes stay locked until every Phase 1 chapter is checked. Existing chapter completion data is preserved.</p><p><b class="'+(locked?'warn':'good')+'">'+(locked?'PHASE 2 LOCKED':'PHASE 1 COMPLETE — PHASE 2 UNLOCKED')+'</b></p><p class="muted">This page shares chapter checkboxes with Deadline Radar and Progress Board; progress is not duplicated.</p></div>'+renderPhase(1)+renderPhase(2);
}

function progress(){ensureUnitChapters();let active=s.deadlines.filter(x=>!unitProgress(x.name).done).sort((a,b)=>unitUrgency(b).pressure-unitUrgency(a).pressure);let done=s.deadlines.filter(x=>unitProgress(x.name).done);return `<div class="card"><h3>Unit Chapter Progress</h3><p class="muted">Each unit is a chapter checklist. Urgency is calculated from both the deadline and the percentage of work still unfinished.</p></div>${active.map(x=>unitChecklist(x,'progress')).join('')}${done.length?`<div class="card"><h3>Completed Units</h3>${done.map(x=>`<div class="item done"><b>${esc(x.name)}</b> · 100% · ${x.date} <button class="right" onclick="toggleUnitById('${x.id}')">Undo</button></div>`).join('')}</div>`:''}`}

function toggleUnit(u){ensureUnitChapters();let list=s.chapterUnits[u]||[];let next=!unitProgress(u).done;if(next&&!phaseOneCompleteFor(s)&&list.some(c=>chapterPhase((s.deadlines.find(d=>d.name===u)||{}).subject,u,c.name)===2)){toast('Phase 2 is locked until Phase 1 is complete');return}s.units[u]=next;if(list.length)list.forEach(c=>c.done=next);save()}



function backlog(){let items=s.backlog,rate=Math.max(0,Number(s.cfg.dailyBacklogPenalty)||0);return `<div class="card"><h3>Missed-Deadline Backlog</h3><p class="muted">Each unresolved backlog item costs ${rate} XP per calendar day. Charges begin the day after it enters the backlog; if the tracker is closed, missed days are caught up on the next visit. Resolved items stop accruing penalties.</p><p><b>${items.filter(x=>!x.done).length}</b> active · <b>${items.filter(x=>x.done).length}</b> resolved</p></div>${items.map(x=>`<div class="item ${x.done?'done':''}"><span class="badge">MISSED DEADLINE</span> <b>${esc(x.name)}</b><p>${esc(x.desc||'')} · Original deadline: ${esc(x.due||'')}</p>${!x.done?`<p class="danger">Daily rate: ${rate} XP · Penalty days: ${x.dailyPenaltyDays||0} · Total deducted: ${x.dailyPenaltyTotal||0} XP</p>`:`<p class="muted">Resolved · Total deducted while active: ${x.dailyPenaltyTotal||0} XP</p>`}<button onclick="toggleBacklog('${x.id}')">${x.done?'Reopen':'Resolve'}</button> <button onclick="backlogToTask('${x.id}')">Make To-Do</button> <button onclick="deleteBacklog('${x.id}')">Delete</button></div>`).join('')||'<p>No missed deadlines.</p>'}`}
function toggleBacklog(id){let x=s.backlog.find(b=>b.id===id);if(!x)return;x.done=!x.done;x.lastDailyPenaltyDate=today();save()}
function backlogToTask(id){let x=s.backlog.find(b=>b.id===id);if(!x)return;s.tasks.push({id:uid(),name:x.name.replace(/^Missed deadline: /,''),desc:x.desc||'Recovered from missed deadline',mins:x.mins||30,xp:10,priority:'High',due:'',unit:'Backlog',done:false,created:Date.now()});x.done=true;x.lastDailyPenaltyDate=today();save();toast('Added to To-Do')}
function deleteBacklog(id){s.backlog=s.backlog.filter(x=>x.id!==id);save()}

function testEditor(t){return `<div class="grid"><label>Name<input id="tn-${t.id}" value="${esc(t.name)}"></label><label>Date<input id="td-${t.id}" type="date" value="${t.date}"></label><label>Subjects<input id="ts-${t.id}" value="${esc(t.subject||'')}" ></label><label>Priority<select id="tp-${t.id}">${['Low','Medium','High'].map(x=>`<option ${t.priority===x?'selected':''}>${x}</option>`).join('')}</select></label></div><button onclick="editTest('${t.id}')">Save Test Details</button><h4>Editable syllabus</h4>${t.chapters.map(c=>`<div class="item ${c.done?'done':''}"><input id="cn-${c.id}" value="${esc(c.name)}"><input id="cm-${c.id}" type="number" value="${c.mins||30}" style="max-width:120px"><button onclick="editChapter('${t.id}','${c.id}')">Save</button><button onclick="toggleChapter('${t.id}','${c.id}')">${c.done?'Undo':'Done'}</button><button onclick="deleteChapter('${t.id}','${c.id}')">Delete</button></div>`).join('')}<div class="row"><input id="newch-${t.id}" placeholder="New chapter"><input id="newcm-${t.id}" type="number" value="30" style="max-width:120px"><button onclick="addChapter('${t.id}')">Add Chapter</button></div>`}
function tests(){let vals=Object.keys(s.ready),n=readiness();return `<div class="card"><h3>Test Readiness ${n}/6</h3><div class="grid">${vals.map(k=>`<button onclick="s.ready['${k}']=!s.ready['${k}'];save()">${s.ready[k]?'✓ ':''}${k.replace(/([A-Z])/g,' $1')}</button>`).join('')}</div><div class="bar"><div class="fill" style="width:${n/6*100}%"></div></div></div><div class="card"><h3>Add Test Deadline</h3><div class="grid"><label>Name<input id="testName"></label><label>Date<input id="testDate" type="date"></label><label>Subjects<input id="testSubject"></label><label>Priority<select id="testPriority"><option>High</option><option>Medium</option><option>Low</option></select></label></div><button onclick="addTest()">Add Test</button></div>${s.tests.map(t=>`<div class="card ${late(t.date)&&t.status!=='complete'?'overdue':''}"><h3>${esc(t.name)} <span class="badge">${t.status==='complete'?'COMPLETE':t.date}</span></h3><p>${esc(t.subject||'')} · ${t.priority} priority · ${t.chapters.filter(c=>c.done).length}/${t.chapters.length} chapters ready</p><details><summary>Edit Test + Syllabus</summary>${testEditor(t)}</details><p><button onclick="quickPrep('${t.id}')">Create Prep Tasks</button> <button onclick="toggleTest('${t.id}')">${t.status==='complete'?'Reopen':'Complete Test'}</button> <button onclick="deleteTest('${t.id}')">Delete</button></p></div>`).join('')}`}
function addTest(){const name=document.getElementById('testName'),date=document.getElementById('testDate'),subject=document.getElementById('testSubject'),priority=document.getElementById('testPriority');if(!name?.value.trim()||!date?.value){toast('Enter a test name and date');return}let chapters=DEFAULT_TEST_CHAPTERS.map(n=>({id:uid(),name:n,mins:30,done:false}));s.tests.push({id:uid(),name:name.value.trim(),date:date.value,subject:subject?.value||'',priority:priority?.value||'High',status:'open',chapters});save();toast('Test added')}
function editTest(id){let t=s.tests.find(x=>x.id===id);t.name=document.getElementById('tn-'+id).value;t.date=document.getElementById('td-'+id).value;t.subject=document.getElementById('ts-'+id).value;t.priority=document.getElementById('tp-'+id).value;save()}
function addChapter(tid){let t=s.tests.find(x=>x.id===tid);let n=document.getElementById('newch-'+tid).value;if(!n)return;t.chapters.push({id:uid(),name:n,mins:+document.getElementById('newcm-'+tid).value||30,done:false});save()}
function editChapter(tid,cid){let t=s.tests.find(x=>x.id===tid),c=t.chapters.find(x=>x.id===cid);c.name=document.getElementById('cn-'+cid).value;c.mins=+document.getElementById('cm-'+cid).value||30;save()}
function toggleChapter(tid,cid){let t=s.tests.find(x=>x.id===tid),c=t.chapters.find(x=>x.id===cid);c.done=!c.done;save()}
function deleteChapter(tid,cid){let t=s.tests.find(x=>x.id===tid);t.chapters=t.chapters.filter(c=>c.id!==cid);save()}
function toggleTest(id){let t=s.tests.find(x=>x.id===id);t.status=t.status==='complete'?'open':'complete';s.activity.push({id:uid(),date:today(),at:Date.now(),type:t.status==='complete'?'test_complete':'test_reopen',name:t.name,xp:0,mins:0});save()}
function deleteTest(id){const t=s.tests.find(x=>x.id===id);if(!t)return;if(!confirm('Delete this test? Its linked backlog item, if any, will be resolved so it cannot keep deducting XP.'))return;resolveBacklogForDeletedSource('test',id);s.tests=s.tests.filter(x=>x.id!==id);save();toast('Test deleted; linked backlog resolved')}
function quickPrep(id){let t=s.tests.find(x=>x.id===id);t.chapters.filter(c=>!c.done).forEach(c=>{if(!s.tasks.some(x=>x.testId===id&&x.chapterId===c.id&&!x.done))s.tasks.push({id:uid(),name:'Prep: '+c.name,desc:'Test: '+t.name,mins:c.mins||30,xp:10,priority:t.priority,due:t.date,unit:'Test Prep',done:false,testId:id,chapterId:c.id})});save();toast('Prep tasks created')}
function timeCore(){let elapsed=s.timer.elapsed;if(s.timer.mode!=='stopped'&&s.timer.started)elapsed+=(Date.now()-s.timer.started)/60000;let total=s.sessions.reduce((a,x)=>a+x.mins,0);return `<div class="card"><h3>Time Core</h3><div class="timer">${fmtClock(elapsed)}</div><p style="text-align:center"><span class="pill">Mode: ${s.timer.mode}</span></p><div class="row" style="justify-content:center"><button onclick="startTimer('productive')">Productive</button><button onclick="startTimer('break')">Break</button><button onclick="startTimer('lost')">Lost</button><button onclick="pauseTimer()">Pause</button><button onclick="resetTimer()">Reset</button></div><p class="muted">Productive time earns 1 XP per 5 minutes when a session is saved.</p></div><div class="card"><h3>Session History</h3>${s.sessions.slice().reverse().map(x=>`<div class="item"><span class="badge">${x.mode}</span> ${fmtMin(x.mins)} · ${new Date(x.at).toLocaleString()}</div>`).join('')||'<p>No sessions yet.</p>'}<p><b>${fmtMin(total)}</b> total recorded</p></div>`}
function fmtClock(min){let sec=Math.floor(min*60),h=Math.floor(sec/3600);sec%=3600;let m=Math.floor(sec/60),s2=sec%60;return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s2).padStart(2,'0')}`}
let timerTick=null;
function persistTimerCheckpoint(){try{localStorage.setItem(KEY,JSON.stringify(s))}catch(e){console.warn('Timer checkpoint failed',e)}}
function refreshTimerDisplay(){if(location.hash==='#time'){const el=document.getElementById('p-time');if(el)el.innerHTML=page('time','Time Core',timeCore()).replace(/^<section[^>]*>|<\/section>$/g,'')}}
function ensureTimerTick(){if(timerTick)clearInterval(timerTick);if(s.timer.mode!=='stopped'){timerTick=setInterval(()=>{persistTimerCheckpoint();refreshTimerDisplay()},1000)}else timerTick=null}
function startTimer(mode){if(s.timer.mode!=='stopped')saveTimer();s.timer.mode=mode;s.timer.started=Date.now();s.timer.elapsed=0;persistTimerCheckpoint();ensureTimerTick();render()}
function saveTimer(){if(s.timer.mode==='stopped')return;const mins=Math.max(0,Number(s.timer.elapsed)||0)+(s.timer.started?Math.max(0,Date.now()-s.timer.started)/60000:0);if(mins>=.05){s.sessions.push({mode:s.timer.mode,mins,at:Date.now()});if(s.timer.mode==='productive'){const gained=Math.floor(mins/5);s.xp+=gained;s.activity.push({id:uid(),date:today(),at:Date.now(),type:'productive_time',name:'Productive timer',xp:gained,mins})}}s.timer={mode:'stopped',started:0,elapsed:0};if(timerTick)clearInterval(timerTick);timerTick=null;persistTimerCheckpoint()}
function pauseTimer(){saveTimer();render()}
function resetTimer(){s.timer={mode:'stopped',started:0,elapsed:0};if(timerTick)clearInterval(timerTick);timerTick=null;save()}
document.addEventListener('visibilitychange',()=>{if(s.timer.mode!=='stopped')persistTimerCheckpoint()});
window.addEventListener('pagehide',()=>{if(s.timer.mode!=='stopped')persistTimerCheckpoint()});
window.addEventListener('pageshow',()=>{if(s.timer.mode!=='stopped'){ensureTimerTick();refreshTimerDisplay()}});
function dateKey(d){return d instanceof Date?`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`:String(d).slice(0,10)}
function monthKey(d){let x=d instanceof Date?d:new Date(d);return `${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,'0')}`}
function monthLabel(key){let [y,m]=key.split('-');return new Date(+y,+m-1,1).toLocaleDateString(undefined,{month:'short',year:'numeric'})}
function dayActivity(day){return s.activity.filter(a=>a.date===day)}
function dayStats(day){let acts=dayActivity(day),sessions=s.sessions.filter(x=>dateKey(new Date(x.at))===day);let productive=sessions.filter(x=>x.mode==='productive').reduce((a,x)=>a+x.mins,0);let tasks=acts.filter(a=>a.type==='task_complete').length;let xp=acts.reduce((a,x)=>a+(+x.xp||0),0);return {xp,tasks,productive,minutes:productive}}
function monthStats(key){let acts=s.activity.filter(a=>monthKey(a.date||a.at)===key),sessions=s.sessions.filter(x=>monthKey(new Date(x.at))===key);return {xp:acts.reduce((a,x)=>a+(+x.xp||0),0),tasks:acts.filter(a=>a.type==='task_complete').length,productive:sessions.filter(x=>x.mode==='productive').reduce((a,x)=>a+x.mins,0),tests:acts.filter(a=>a.type==='test_complete').length,missed:s.backlog.filter(x=>monthKey(x.due||x.created||Date.now())===key).length}}
function targetCard(){return `<div class="card"><h3>XP Targets</h3><div class="grid"><label>Daily target XP<input id="dailyTarget" type="number" min="0" value="${s.cfg.dailyTargetXP}"></label><label>Monthly target XP<input id="monthlyTarget" type="number" min="0" value="${s.cfg.monthlyTargetXP}"></label></div><button onclick="saveTargets()">Save XP Targets</button></div>`}
function saveTargets(){const daily=document.getElementById('dailyTarget'),monthly=document.getElementById('monthlyTarget');s.cfg.dailyTargetXP=Math.max(0,+daily?.value||0);s.cfg.monthlyTargetXP=Math.max(0,+monthly?.value||0);save();toast('XP targets updated')}
function stats(){let ds=dayStats(today()),mk=monthKey(today()),ms=monthStats(mk),dailyPct=s.cfg.dailyTargetXP?Math.min(100,ds.xp/s.cfg.dailyTargetXP*100):0,monthlyPct=s.cfg.monthlyTargetXP?Math.min(100,ms.xp/s.cfg.monthlyTargetXP*100):0;return `${targetCard()}<div class="grid"><div class="card"><div class="big">${s.xp}</div><p>Total XP</p></div><div class="card"><div class="big">${ds.xp}</div><p>Today XP</p></div><div class="card"><div class="big">${fmtMin(ds.productive)}</div><p>Today productive time</p></div><div class="card"><div class="big">${ds.tasks}</div><p>Today tasks</p></div></div><div class="card"><h3>Today vs target</h3><div class="bar"><div class="fill" style="width:${dailyPct}%"></div></div><p>${ds.xp} / ${s.cfg.dailyTargetXP} XP · ${Math.round(dailyPct)}%</p></div><div class="card"><h3>This month vs target</h3><div class="bar"><div class="fill" style="width:${monthlyPct}%"></div></div><p>${ms.xp} / ${s.cfg.monthlyTargetXP} XP · ${Math.round(monthlyPct)}%</p></div>`}
function daily(){let ds=dayStats(today()),pct=s.cfg.dailyTargetXP?Math.min(100,ds.xp/s.cfg.dailyTargetXP*100):0,acts=dayActivity(today()).slice().reverse();return `<div class="card"><h3>Daily Report · ${today()}</h3><div class="grid"><div><div class="big">${fmtMin(ds.productive)}</div><p>productive hours</p></div><div><div class="big">${ds.tasks}</div><p>tasks completed</p></div><div><div class="big">${ds.xp}</div><p>XP earned</p></div></div><div class="bar"><div class="fill" style="width:${pct}%"></div></div><p><b>${Math.round(pct)}%</b> of daily XP target · ${ds.xp}/${s.cfg.dailyTargetXP} XP</p></div><div class="card"><h3>Today's activity</h3>${acts.map(a=>`<div class="item"><span class="badge">${esc(a.type)}</span> ${esc(a.name||'Activity')} · ${a.xp>=0?'+':''}${a.xp||0} XP${a.mins?` · ${fmtMin(a.mins)}`:''}</div>`).join('')||'<p class="muted">No tracked activity yet. Use Time Core and complete tasks to build the report.</p>'}</div>`}
function graph(title,rows,valueKey,target){let max=Math.max(1,...rows.map(r=>r[valueKey]),target||0);return `<div class="card"><h3>${title}</h3><div class="graph">${rows.map(r=>`<div class="gcol"><div class="gvalue">${valueKey==='productive'?fmtMin(r[valueKey]):r[valueKey]}</div><div class="gbar"><div class="gfill" style="height:${Math.max(3,r[valueKey]/max*100)}%"></div></div><div class="glabel">${esc(r.label)}</div></div>`).join('')}</div></div>`}
function monthly(){let now=new Date(),keys=[];for(let i=5;i>=0;i--){let d=new Date(now.getFullYear(),now.getMonth()-i,1);keys.push(monthKey(d))}let rows=keys.map(k=>({key:k,label:monthLabel(k),...monthStats(k)}));return `<div class="card"><h3>Monthly Stats</h3><p class="muted">Track the things that actually matter: productive hours, completed tasks and XP earned. Targets are shown alongside your progress.</p><div class="grid"><div><div class="big">${rows[rows.length-1].xp}</div><p>Current month XP / ${s.cfg.monthlyTargetXP} target</p></div><div><div class="big">${fmtMin(rows[rows.length-1].productive)}</div><p>Current month productive time</p></div><div><div class="big">${rows[rows.length-1].tasks}</div><p>Current month tasks</p></div></div></div>${graph('XP earned by month',rows,'xp',s.cfg.monthlyTargetXP)}${graph('Productive time by month',rows,'productive',0)}${graph('Tasks completed by month',rows,'tasks',0)}<div class="tablewrap"><table class="table"><tr><th>Month</th><th>XP</th><th>Target</th><th>Productive</th><th>Tasks</th><th>Tests</th><th>Missed</th></tr>${rows.map(r=>`<tr><td>${esc(r.label)}</td><td>${r.xp}</td><td>${s.cfg.monthlyTargetXP}</td><td>${fmtMin(r.productive)}</td><td>${r.tasks}</td><td>${r.tests}</td><td>${r.missed}</td></tr>`).join('')}</table></div>`}
function review(){return `<div class="card"><textarea id="reviewText" placeholder="Biggest win · biggest leak · carry forward">${esc(s.review)}</textarea><button onclick="saveReview()">Save Review</button> <button onclick="closeDay()">Close Day</button><p>${s.dayClosed?'Day closed.':'Day open.'}</p></div>`}
function saveReview(){s.review=document.getElementById('reviewText')?.value||'';save();toast('Review saved')}function closeDay(){s.review=document.getElementById('reviewText')?.value||'';s.dayClosed=true;save();toast('Day closed')}
function settings(){return `<div class="card"><h3>Settings</h3><div class="grid"><label>Default daily capacity (hours)<input id="setHours" type="number" step="0.5" value="${s.cfg.hours}"></label><label>XP deducted per active backlog item per day<input id="setDailyPenalty" type="number" min="0" step="1" value="${s.cfg.dailyBacklogPenalty??20}"></label></div><p class="muted">This is charged separately for each unresolved backlog item. Existing historical one-time penalties are not refunded or repeated.</p><button onclick="saveSettings()">Save</button></div><div class="card"><h3>Data</h3><button onclick="exportData()">Export JSON</button><button onclick="resetData()">Reset All</button><p class="muted">Keep exported JSON private. GitHub should contain code, not your tracker data.</p></div>`}
function saveSettings(){const hoursInput=document.getElementById('setHours'),penaltyInput=document.getElementById('setDailyPenalty');s.cfg.hours=Math.max(.5,+hoursInput?.value||6);s.cfg.dailyBacklogPenalty=Math.max(0,Number(penaltyInput?.value)||0);save();toast('Settings saved')}
function exportData(){let a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(s,null,2)],{type:'application/json'}));a.download='jee-ascension-v6.6-backup.json';a.click()}
function resetData(){if(confirm('Reset all JEE Ascension tracker data?')){localStorage.removeItem(KEY);location.reload()}}
function saveHours(){const input=document.getElementById('hours');s.cfg.hours=Math.max(.5,+input?.value||1);save();toast('Reality Check recalculated')}
function render(){penaltyCheck();nav();document.getElementById('app').innerHTML=page('command','Command Center',command())+page('todo','Editable To-Do',todo())+page('phases','Phases & Units',phasePlan())+page('deadlines','Deadline Radar',deadlines())+page('backlog','Missed-Deadline Backlog',backlog())+page('tests','Test Hub',tests())+page('time','Time Core',timeCore())+page('progress','Progress Board',progress())+page('courses','Course Library',courses())+page('stats','Ascension Stats',stats())+page('daily','Daily Report',daily())+page('monthly','Monthly Stats',monthly())+page('review','Daily Review',review())+page('settings','Settings',settings());show(location.hash.slice(1)||'command')}
render();if(s.timer.mode!=='stopped')ensureTimerTick();

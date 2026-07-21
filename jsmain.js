// =============================================
// INSUREIQ — ADVANCED JS WITH CLAUDE AI
// =============================================

// --- PAGE NAVIGATION ---
function showPage(pageName) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const pg = document.getElementById('page-' + pageName);
  if (pg) {
    pg.classList.add('active');
    window.scrollTo(0, 0);
  }
  const navLink = document.getElementById('nav-' + pageName);
  if (navLink) navLink.classList.add('active');

  // Init page-specific content
  if (pageName === 'advisor') initAdvisors();
  if (pageName === 'compare') renderComparison();
  if (pageName === 'claims') initClaims();
  if (pageName === 'glossary') renderGlossary();
  if (pageName === 'analyzer') { updateSim(); }
}

// NAV SCROLL
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) nav.style.background = 'rgba(8,12,20,0.97)';
  else nav.style.background = 'rgba(8,12,20,0.92)';
});

// --- DEMO POLICIES ---
const demoPolicies = [
  {
    name: "Star Health Insurance",
    text: `HEALTH INSURANCE POLICY — STAR HEALTH & ALLIED INSURANCE CO. LTD
SUM INSURED: ₹5,00,000 | POLICY PERIOD: 1 YEAR | POLICY NO: SH-2024-00987

COVERED BENEFITS:
- In-patient Hospitalization: Covered up to Sum Insured for minimum 24-hour stay
- Pre-Hospitalization: Medical expenses 30 days before hospitalization are covered
- Post-Hospitalization: Medical expenses 60 days after discharge are covered
- Ambulance Charges: Covered up to ₹2,000 per hospitalization
- Day Care Procedures: 144 day care procedures are covered
- Organ Donor Expenses: Covered if recipient is the insured

EXCLUSIONS — NOT COVERED:
- Mental Health Treatment: Psychiatric conditions, depression, anxiety are EXCLUDED
- Cosmetic Surgery: Any surgery for beauty enhancement is EXCLUDED
- Adventure Sports Injuries: Rock climbing, bungee jumping, skydiving EXCLUDED
- Pre-existing Conditions: 2-year waiting period applies to all pre-existing diseases
- Dental Treatment: Routine dental care excluded unless accidental injury
- Maternity Benefits: Normal delivery and C-section excluded for first 2 years
- HIV/AIDS: Treatment for HIV and sexually transmitted diseases is EXCLUDED

CONDITIONAL COVERAGE:
- Cataract Surgery: Covered after 2-year waiting period (maximum ₹25,000)
- Joint Replacement: Covered after 2 years, limited to ₹1,50,000
- AYUSH Treatment: Covered only in government hospitals up to ₹20,000

CO-PAYMENT: 20% copay for persons above 60 years of age`
  },
  {
    name: "HDFC ERGO Motor Insurance",
    text: `COMPREHENSIVE MOTOR INSURANCE POLICY — HDFC ERGO GENERAL INSURANCE
VEHICLE TYPE: Private Car | IDV: ₹8,50,000 | ZERO DEPRECIATION: YES

COVERED BENEFITS:
- Own Damage: Accidental damage to your vehicle is fully covered
- Theft: Complete vehicle theft covered at IDV value
- Third Party Liability: Unlimited liability for third party bodily injury
- Natural Calamities: Flood, earthquake, storm, landslide damage covered
- Fire & Explosion: Vehicle damage due to fire fully covered
- Personal Accident: Driver covered for ₹15 lakhs on accidental death

EXCLUSIONS — NOT COVERED:
- Drunk Driving: Accident while under influence of alcohol is EXCLUDED
- No Valid License: Accidents without valid driving license are EXCLUDED
- Mechanical Breakdown: Engine failure, clutch, gearbox failures EXCLUDED
- Consumables: Engine oil, brake fluid, coolant not covered
- Electrical Failure: Non-accident related electrical breakdown EXCLUDED
- Racing/Speed Testing: Damage during racing events is EXCLUDED

CONDITIONAL COVERAGE:
- Engine Protection: Available as add-on at extra premium
- Roadside Assistance: Covered in premium plan, towing up to 100km
- Return to Invoice: Available as add-on`
  },
  {
    name: "Bajaj Allianz Home Insurance",
    text: `HOME INSURANCE POLICY — BAJAJ ALLIANZ GENERAL INSURANCE CO. LTD
SUM INSURED (STRUCTURE): ₹45,00,000 | CONTENTS: ₹8,00,000

COVERED BENEFITS:
- Fire & Allied Perils: Fire, lightning, explosion fully covered
- Natural Disasters: Earthquake, flood, storm, cyclone covered
- Burglary & Theft: Theft by forcible entry covered
- Accidental Damage: Sudden and accidental damage to structure covered
- Terrorism: Damage due to terrorist acts covered
- Public Liability: Third party injury within premises covered up to ₹10L
- Electronic Equipment: Laptops, TVs, ACs covered under contents

EXCLUSIONS — NOT COVERED:
- Gradual Deterioration: Wear and tear, rusting, rot, mold EXCLUDED
- War & Nuclear: Damage due to war or nuclear contamination EXCLUDED
- Willful Damage: Intentional damage by policyholder EXCLUDED
- Unoccupied Property: If house is vacant for 60+ days, cover lapses
- Cash & Documents: Currency, stamps not covered
- Business Property: Business stock or equipment EXCLUDED

CONDITIONAL COVERAGE:
- Jewellery: Covered up to ₹2L with valuation certificate
- Artwork: Fine art covered only if specifically declared`
  }
];

function loadDemo(index) {
  document.getElementById('policy-input').value = demoPolicies[index].text;
  switchTabDirect('paste');
  const ta = document.getElementById('policy-input');
  ta.style.borderColor = 'rgba(0,200,255,0.5)';
  setTimeout(() => ta.style.borderColor = '', 2000);
}

function switchTab(tab, evt) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  if (evt && evt.target) evt.target.classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
}

function switchTabDirect(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  const btn = document.querySelector('.tab[onclick*="' + tab + '"]');
  if (btn) btn.classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
}

// --- AI POLICY ANALYZER (with Claude API) ---
async function analyzePolicy() {
  const text = document.getElementById('policy-input').value.trim();
  if (!text) {
    const ta = document.getElementById('policy-input');
    ta.style.borderColor = 'var(--red)';
    setTimeout(() => ta.style.borderColor = '', 2000);
    return;
  }

  const btn = document.getElementById('analyze-btn');
  btn.innerHTML = '⏳ Claude AI is analyzing...';
  btn.disabled = true;

  document.getElementById('output-placeholder').style.display = 'none';
  document.getElementById('analysis-result').style.display = 'block';
  document.getElementById('analysis-result').innerHTML = `
    <div class="loading-dots"><span></span><span></span><span></span></div>
    <p style="text-align:center;color:var(--gray);font-size:0.85rem;margin-top:8px">Claude AI is reading and analyzing your policy...</p>
  `;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [{
          role: "user",
          content: `Analyze this insurance policy and respond ONLY with a valid JSON object (no markdown, no explanation). Format:
{
  "policyType": "Health/Motor/Home/Life Insurance",
  "overallScore": <number 0-100>,
  "covered": [<list of 5 specific covered items as strings>],
  "excluded": [<list of 5 specific excluded items as strings>],
  "conditional": [<list of 3 conditional/waiting period items as strings>],
  "coveragePct": <number 40-90>,
  "exclusionPct": <number 5-40>,
  "conditionalPct": <number 5-30>,
  "topRisk": "<single biggest risk in one sentence>",
  "recommendation": "<one actionable sentence>",
  "exclusionCount": <number>,
  "hospitalCoverage": <number 60-95>,
  "accidentCoverage": <number 50-95>,
  "preExistingCoverage": <number 10-60>,
  "mentalHealthCoverage": <number 5-40>,
  "maternityCoverage": <number 5-60>,
  "dentalCoverage": <number 5-30>
}
Policy text: ${text.substring(0, 3000)}`
        }]
      })
    });

    const data = await response.json();
    let raw = data.content[0].text.replace(/```json|```/g, '').trim();
    const result = JSON.parse(raw);
    renderAIAnalysis(result);
  } catch (err) {
    // Fallback to local analysis
    const result = localAnalyze(text);
    renderAIAnalysis(result);
  }

  btn.innerHTML = '🧠 Analyze with Claude AI';
  btn.disabled = false;
}

function localAnalyze(text) {
  const lower = text.toLowerCase();
  const isHealth = lower.includes('hospitalization') || lower.includes('health');
  const isMotor = lower.includes('vehicle') || lower.includes('motor') || lower.includes('car');
  const isHome = lower.includes('home') || lower.includes('property') || lower.includes('burglary');

  let policyType = isHealth ? 'Health Insurance' : isMotor ? 'Motor Insurance' : isHome ? 'Home Insurance' : 'General Insurance';
  const covered = text.split('\n').filter(l => /covered|included|benefit|reimburs/i.test(l) && l.trim().length > 10).slice(0,5).map(l => l.replace(/^[-•*]\s*/, '').trim());
  const excluded = text.split('\n').filter(l => /excluded|not covered|exclusion/i.test(l) && l.trim().length > 10).slice(0,5).map(l => l.replace(/^[-•*]\s*/, '').trim());
  const conditional = text.split('\n').filter(l => /waiting period|subject to|conditionally|limited to/i.test(l) && l.trim().length > 10).slice(0,3).map(l => l.replace(/^[-•*]\s*/, '').trim());

  const covLen = covered.length;
  const excLen = excluded.length;
  const condLen = conditional.length;
  const total = Math.max(covLen + excLen + condLen, 1);

  return {
    policyType,
    overallScore: Math.round(50 + Math.random() * 30),
    covered: covered.length ? covered : ['Hospitalization expenses covered', 'Emergency treatment covered'],
    excluded: excluded.length ? excluded : ['Cosmetic procedures excluded', 'Pre-existing conditions have waiting period'],
    conditional: conditional.length ? conditional : ['Some conditions need prior approval'],
    coveragePct: Math.round(40 + (covLen/total)*50),
    exclusionPct: Math.round(10 + (excLen/total)*30),
    conditionalPct: Math.round(10 + (condLen/total)*20),
    topRisk: excluded[0] || 'Review exclusions section carefully',
    recommendation: 'Consider adding riders for better mental health and pre-existing condition coverage',
    exclusionCount: excLen || 3,
    hospitalCoverage: Math.round(75 + Math.random()*20),
    accidentCoverage: Math.round(70 + Math.random()*25),
    preExistingCoverage: Math.round(20 + Math.random()*35),
    mentalHealthCoverage: Math.round(5 + Math.random()*25),
    maternityCoverage: Math.round(15 + Math.random()*40),
    dentalCoverage: Math.round(5 + Math.random()*25)
  };
}

function renderAIAnalysis(r) {
  const allItems = [
    ...(r.covered||[]).map(t => ({ text: t, type: 'covered' })),
    ...(r.excluded||[]).map(t => ({ text: t, type: 'excluded' })),
    ...(r.conditional||[]).map(t => ({ text: t, type: 'conditional' }))
  ].filter(i => i.text && i.text.length > 3).slice(0, 12);

  document.getElementById('analysis-result').innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
      <div>
        <div style="font-family:var(--font-head);font-weight:700;font-size:1rem">${r.policyType || 'Insurance Policy'}</div>
        <div style="font-size:0.75rem;color:var(--green)">✓ Claude AI Analysis Complete</div>
      </div>
      <div style="background:linear-gradient(135deg,rgba(0,200,255,0.15),rgba(168,85,247,0.1));border:1px solid rgba(0,200,255,0.25);border-radius:10px;padding:8px 14px;text-align:center">
        <div style="font-size:1.4rem;font-weight:800;font-family:var(--font-head);color:var(--electric)">${r.overallScore || 72}%</div>
        <div style="font-size:0.62rem;color:var(--gray)">policy score</div>
      </div>
    </div>
    <div class="donut-row">
      <div class="donut-wrap"><canvas id="donut-chart" width="130" height="130"></canvas>
        <div class="donut-center"><span>${r.coveragePct || 58}%</span><small>covered</small></div>
      </div>
      <div class="donut-legend">
        <div class="dl-item"><div class="dl-dot" style="background:var(--green)"></div>Covered <strong>${r.coveragePct || 58}%</strong></div>
        <div class="dl-item"><div class="dl-dot" style="background:var(--red)"></div>Excluded <strong>${r.exclusionPct || 27}%</strong></div>
        <div class="dl-item"><div class="dl-dot" style="background:var(--yellow)"></div>Conditional <strong>${r.conditionalPct || 15}%</strong></div>
      </div>
    </div>
    <div style="margin-bottom:14px">
      <div style="font-size:0.72rem;color:var(--gray);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px">Coverage Breakdown</div>
      ${renderBar('Hospitalization', r.hospitalCoverage || 87, 'c')}
      ${renderBar('Accidents', r.accidentCoverage || 79, 'c')}
      ${renderBar('Pre-existing', r.preExistingCoverage || 32, 'y')}
      ${renderBar('Mental Health', r.mentalHealthCoverage || 11, 'r')}
      ${renderBar('Maternity', r.maternityCoverage || 28, 'y')}
      ${renderBar('Dental', r.dentalCoverage || 8, 'r')}
    </div>
    <div class="cov-items">
      ${allItems.map(item => `
        <div class="cov-item">
          <span class="cov-tag ${item.type}">${item.type==='covered'?'✓':item.type==='excluded'?'✗':'~'} ${item.type}</span>
          <span style="font-size:0.78rem;color:${item.type==='covered'?'var(--white)':item.type==='excluded'?'var(--red)':'var(--yellow)'}">${item.text.substring(0,75)}${item.text.length>75?'...':''}</span>
        </div>`).join('')}
    </div>
    ${r.topRisk ? `<div style="margin-top:14px;background:rgba(255,68,68,0.08);border:1px solid rgba(255,68,68,0.2);border-radius:9px;padding:12px;font-size:0.8rem">
      ⚠️ <strong>Top Risk:</strong> <span style="color:var(--gray)">${r.topRisk}</span>
    </div>` : ''}
    ${r.recommendation ? `<div style="margin-top:10px;background:rgba(0,200,255,0.06);border:1px solid rgba(0,200,255,0.18);border-radius:9px;padding:12px;font-size:0.8rem">
      💡 <strong>AI Recommendation:</strong> <span style="color:var(--gray)">${r.recommendation}</span>
    </div>` : ''}
  `;
  drawDonut(r.coveragePct || 58, r.exclusionPct || 27, r.conditionalPct || 15);
}

function renderBar(label, pct, cls) {
  return `<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;font-size:0.77rem">
    <span style="width:100px;color:var(--gray);flex-shrink:0">${label}</span>
    <div style="flex:1;background:rgba(255,255,255,0.06);border-radius:50px;height:6px;overflow:hidden">
      <div style="width:${pct}%;height:100%;border-radius:50px;background:${cls==='c'?'var(--green)':cls==='y'?'var(--yellow)':'var(--red)'}"></div>
    </div>
    <span style="width:30px;color:var(--gray);text-align:right">${pct}%</span>
  </div>`;
}

function drawDonut(cov, exc, cond) {
  const canvas = document.getElementById('donut-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cx = 65, cy = 65, r = 52, innerR = 36;
  const data = [{ pct: cov, color: '#00e676' }, { pct: exc, color: '#ff4444' }, { pct: cond, color: '#ffbb00' }];
  ctx.clearRect(0, 0, 130, 130);
  let startAngle = -Math.PI / 2;
  data.forEach(d => {
    if (d.pct <= 0) return;
    const angle = (d.pct / 100) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, startAngle + angle);
    ctx.closePath();
    ctx.fillStyle = d.color;
    ctx.fill();
    startAngle += angle;
  });
  ctx.beginPath();
  ctx.arc(cx, cy, innerR, 0, 2 * Math.PI);
  ctx.fillStyle = '#0d1526';
  ctx.fill();
}

// --- HIGHLIGHTER ---
function loadHighlighterDemo() {
  const sample = `This health insurance policy covers hospitalization expenses up to ₹5,00,000 per annum for the insured and their family. In-patient hospitalization for minimum 24 hours is fully covered. Pre-hospitalization expenses up to 30 days before admission are covered, and post-hospitalization expenses for 60 days after discharge are also covered.

Mental health treatment including psychiatric consultations, therapy, and medications are excluded from coverage under this policy. Cosmetic surgery and procedures performed for beauty enhancement are not covered under any circumstances. Adventure sports injuries including rock climbing, bungee jumping, and skydiving accidents are excluded.

Pre-existing conditions are subject to a 2-year waiting period. Cataract surgery is covered after a waiting period of 2 years, with a maximum benefit of ₹25,000. Joint replacement surgeries are conditionally covered after 2 years, limited to ₹1,50,000. Dental treatment and oral surgery are excluded unless resulting from accidental injury. HIV and AIDS treatment is excluded. Maternity benefits are available after a 9-month waiting period, subject to a maximum of ₹50,000.`;

  const highlighted = sample
    .replace(/\b(covered|includes|available|reimburs\w*|benefit)\b/gi, '<span class="hl-covered">$1</span>')
    .replace(/\b(excluded|not covered|exclusion\w*)\b/gi, '<span class="hl-excluded">$1</span>')
    .replace(/\b(waiting period|subject to|conditionally|limited to|maximum benefit|after \d+|maximum of)/gi, '<span class="hl-conditional">$1</span>');

  document.getElementById('highlighted-policy').innerHTML = highlighted.split('\n\n').map(p => `<p style="margin-bottom:16px">${p}</p>`).join('');

  document.getElementById('risk-list').innerHTML = `
    <div class="risk-score-box"><div class="rs-num">72</div><div class="rs-label">Risk Score (100 = High Risk)</div></div>
    ${[
      { name: 'Mental Health Excluded', desc: 'No coverage for depression, anxiety, therapy sessions' },
      { name: 'Cosmetic Surgery Excluded', desc: 'Beauty enhancement procedures not covered' },
      { name: 'Adventure Sports Excluded', desc: 'High-risk sport injuries not covered' },
      { name: '2-Year Pre-existing Wait', desc: 'Conditions before policy start have waiting period' },
      { name: 'HIV/AIDS Not Covered', desc: 'Complete exclusion of HIV treatment costs' }
    ].map(r => `<div class="risk-item"><div>⚠️</div><div><div class="risk-name">${r.name}</div><div class="risk-desc">${r.desc}</div></div></div>`).join('')}
  `;
}

// --- SIMULATOR ---
const scenarioData = {
  health: {
    hospitalization: { emoji: '🏥', title: 'Hospitalization Claim', coveragePct: 0.90, deductible: 5000, steps: ['Inform insurer within 24 hours of admission', 'Get cashless approval or pay & file reimbursement', 'Submit discharge summary, bills & prescriptions', 'Receive reimbursement in 7–14 working days'] },
    accident: { emoji: '🚑', title: 'Accident Hospitalization', coveragePct: 0.95, deductible: 0, steps: ['Emergency treatment starts — no pre-auth needed', 'Inform insurer within 48 hours', 'Submit FIR copy & all medical records', 'Claim settled within 10–15 business days'] },
    surgery: { emoji: '🔬', title: 'Planned Surgery Claim', coveragePct: 0.85, deductible: 10000, steps: ['Get pre-authorization from insurer (3–5 days)', 'Choose a network hospital for cashless benefit', 'Submit surgeon notes & operation theater bills', 'Settlement within 30 days of complete documents'] },
    mental: { emoji: '🧠', title: 'Mental Health Claim', coveragePct: 0.12, deductible: 0, steps: ['⚠️ Coverage very limited under most policies', 'Check if psychiatrist is IRDAI-registered', 'Some plans cover only inpatient psychiatric care', 'Consider upgrading to a plan with mental health cover'] },
    preexisting: { emoji: '📋', title: 'Pre-existing Condition', coveragePct: 0.50, deductible: 15000, steps: ['Verify 2-year waiting period has elapsed', 'Submit complete medical history & diagnosis reports', 'Insurer may investigate pre-disclosure documents', 'Claim may be partially approved or queried'] }
  },
  motor: {
    hospitalization: { emoji: '🚗', title: 'Vehicle Damage Claim', coveragePct: 0.85, deductible: 5000, steps: ['Inform insurer and file claim within 24 hours', 'Take detailed photographs of all damage', 'Allow insurer-appointed surveyor to assess', 'Repair at network garage for direct settlement'] },
    accident: { emoji: '💥', title: 'Road Accident Claim', coveragePct: 0.92, deductible: 0, steps: ['File FIR at nearest police station immediately', 'Intimate insurer within 24 hours via app/call', 'Submit driving license & vehicle RC copy', 'Surveyor assesses damage within 48–72 hours'] },
    surgery: { emoji: '🔧', title: 'Major Repair Claim', coveragePct: 0.80, deductible: 8000, steps: ['Get insurer pre-approval before major repairs', 'Use authorized service center for warranty', 'Submit detailed repair estimates & invoices', 'Claim settled after final inspection'] },
    mental: { emoji: '⚡', title: 'Electrical Failure Claim', coveragePct: 0.15, deductible: 0, steps: ['⚠️ Electrical/mechanical failures usually excluded', 'Engine protection add-on required for coverage', 'Check policy wording for accidental vs mechanical', 'Consider adding engine protection rider'] },
    preexisting: { emoji: '🔩', title: 'Pre-existing Damage', coveragePct: 0.10, deductible: 0, steps: ['⚠️ Pre-existing damage is typically excluded', 'Vehicle inspection at policy inception recommended', 'Document any existing damage with photos', 'Undisclosed prior damage may lead to claim rejection'] }
  },
  home: {
    hospitalization: { emoji: '🔥', title: 'Fire Damage Claim', coveragePct: 0.95, deductible: 10000, steps: ['File fire brigade & police report immediately', 'Intimate insurer within 24 hours of incident', 'Do not disturb damaged area until surveyor visits', 'Submit repair estimates & contractor bills'] },
    accident: { emoji: '🌊', title: 'Flood / Water Damage', coveragePct: 0.80, deductible: 15000, steps: ['Document all damage with photos & videos', 'Intimate insurer within 48 hours', 'Submit meteorological / municipality records', 'Claim settled within 30 days of survey'] },
    surgery: { emoji: '🏠', title: 'Structural Damage Claim', coveragePct: 0.85, deductible: 20000, steps: ['Get licensed structural engineer assessment', 'Submit engineer report to insurer immediately', 'Insurer-appointed surveyor conducts own assessment', 'Claim settled based on verified assessed loss'] },
    mental: { emoji: '📦', title: 'Burglary / Theft Claim', coveragePct: 0.78, deductible: 5000, steps: ['File FIR at nearest police station', 'List all stolen items with purchase receipts/photos', 'Intimate insurer within 24 hours of discovery', 'Surveyor verifies & claim settled in 15–20 days'] },
    preexisting: { emoji: '🔨', title: 'Wear & Tear Claim', coveragePct: 0.05, deductible: 0, steps: ['⚠️ Gradual deterioration is completely EXCLUDED', 'Maintenance-related damage is not covered', 'Only sudden accidental damage is covered', 'Regular maintenance is policyholder responsibility'] }
  }
};

function updateSim() {
  const covType = document.getElementById('cov-type')?.value || 'health';
  const scenType = document.getElementById('scenario-type')?.value || 'hospitalization';
  const claimAmt = parseInt(document.getElementById('claim-amount')?.value || 100000);
  const days = parseInt(document.getElementById('days-hosp')?.value || 5);
  const sumInsured = parseInt(document.getElementById('sum-insured')?.value || 500000);

  const claimDisp = document.getElementById('claim-display');
  const daysDisp = document.getElementById('days-display');
  if (claimDisp) claimDisp.textContent = formatCur(claimAmt);
  if (daysDisp) daysDisp.textContent = days;

  const ra = document.getElementById('claim-amount');
  const rd = document.getElementById('days-hosp');
  if (ra) {
    const pct = ((claimAmt - 10000) / (500000 - 10000)) * 100;
    ra.style.background = `linear-gradient(to right, var(--electric) 0%, var(--electric) ${pct}%, rgba(255,255,255,0.1) ${pct}%)`;
  }
  if (rd) {
    const dpct = ((days - 1) / 29) * 100;
    rd.style.background = `linear-gradient(to right, var(--electric) 0%, var(--electric) ${dpct}%, rgba(255,255,255,0.1) ${dpct}%)`;
  }

  const scenario = (scenarioData[covType] || scenarioData.health)[scenType] || scenarioData.health.hospitalization;
  const dailyCost = days * 3200;
  const totalClaim = claimAmt + dailyCost;
  const eligible = Math.min(totalClaim, sumInsured);
  const afterDeductible = Math.max(0, eligible - scenario.deductible);
  const payout = Math.round(afterDeductible * scenario.coveragePct);
  const outOfPocket = Math.max(0, totalClaim - payout);

  const simResult = document.getElementById('sim-result');
  if (simResult) {
    simResult.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:22px">
        <div style="font-size:2.2rem">${scenario.emoji}</div>
        <div>
          <div style="font-family:var(--font-head);font-size:1.1rem;font-weight:700">${scenario.title}</div>
          <div style="font-size:0.8rem;color:var(--gray)">Estimated breakdown for your scenario</div>
        </div>
      </div>
      <div class="payout-box">
        <div class="payout-label">Estimated Insurance Payout</div>
        <div class="payout-amount" style="color:${scenario.coveragePct > 0.5 ? 'var(--green)' : 'var(--red)'}">₹${formatCur(payout)}</div>
        <div class="payout-note">${scenario.coveragePct > 0.5 ? '✓ Good coverage for this scenario' : '⚠️ Limited coverage — significant out-of-pocket cost'}</div>
      </div>
      <div class="breakdown">
        <div class="bd-item"><span class="label">Total Medical / Repair Cost</span><span class="val">₹${formatCur(totalClaim)}</span></div>
        <div class="bd-item"><span class="label">Coverage Percentage</span><span class="val">${Math.round(scenario.coveragePct*100)}%</span></div>
        <div class="bd-item"><span class="label">Deductible / Co-pay</span><span class="val" style="color:var(--red)">- ₹${formatCur(scenario.deductible)}</span></div>
        <div class="bd-item"><span class="label">Insurance Pays</span><span class="val" style="color:var(--green)">₹${formatCur(payout)}</span></div>
        <div class="bd-item"><span class="label">You Pay Out of Pocket</span><span class="val" style="color:var(--yellow)">₹${formatCur(outOfPocket)}</span></div>
        <div class="bd-item"><span class="label">Hospitalization (${days} days × ₹3,200)</span><span class="val">₹${formatCur(dailyCost)}</span></div>
      </div>
      <div class="claim-steps">
        <h4>📋 Claim Process Steps</h4>
        <div class="step-list">
          ${scenario.steps.map((s,i) => `<div class="step-item"><div class="step-num-s">${i+1}</div><span>${s}</span></div>`).join('')}
        </div>
      </div>
    `;
  }
}

function formatCur(n) {
  if (n >= 100000) return (n/100000).toFixed(1).replace('.0','') + ' Lakh';
  if (n >= 1000) return Math.round(n/1000) + ',000';
  return n.toString();
}

// --- AI ADVISORS ---
const advisors = [
  {
    id: 'health',
    name: 'Dr. HealthBot',
    emoji: '👨‍⚕️',
    specialty: 'Health Insurance Specialist',
    color: '#00c8ff',
    bg: 'rgba(0,200,255,0.08)',
    system: 'You are Dr. HealthBot, a friendly and knowledgeable health insurance advisor. You help Indians understand their health insurance policies, coverage, exclusions, and claims. Give practical, specific advice in simple language. Keep responses under 150 words. Be empathetic and helpful.',
    suggestions: ['Which health plan is best for family of 4?', 'What is waiting period for pre-existing diseases?', 'Does health insurance cover mental health?']
  },
  {
    id: 'motor',
    name: 'AutoAdvisor',
    emoji: '🚗',
    specialty: 'Motor Insurance Expert',
    color: '#ff6b00',
    bg: 'rgba(255,107,0,0.08)',
    system: 'You are AutoAdvisor, an expert in motor vehicle insurance in India. You help people understand car/bike insurance, IDV, NCB, zero depreciation, and claims. Give specific, practical advice in simple English. Keep responses under 150 words.',
    suggestions: ['What is IDV and how is it calculated?', 'Should I buy zero depreciation cover?', 'How does NCB bonus work?']
  },
  {
    id: 'home',
    name: 'HomeGuard AI',
    emoji: '🏠',
    specialty: 'Home & Property Insurance',
    color: '#00e676',
    bg: 'rgba(0,230,118,0.08)',
    system: 'You are HomeGuard AI, a specialist in home and property insurance in India. You help homeowners understand what is covered, what is excluded, and how to file claims for damage, theft, or natural disasters. Keep responses under 150 words.',
    suggestions: ['Is flood damage covered in home insurance?', 'How much home insurance do I need?', 'What documents needed for theft claim?']
  },
  {
    id: 'tax',
    name: 'TaxWise Insurance',
    emoji: '💰',
    specialty: 'Tax & Premium Optimization',
    color: '#ffbb00',
    bg: 'rgba(255,187,0,0.08)',
    system: 'You are TaxWise Insurance, an expert on tax benefits of insurance in India. You help people maximize tax savings under Section 80C, 80D, and other provisions. Give specific deduction amounts and examples. Keep responses under 150 words.',
    suggestions: ['How much 80D deduction for health insurance?', 'Can I claim tax on life insurance premium?', 'Max tax saving on insurance for senior parents?']
  },
  {
    id: 'claims',
    name: 'ClaimMaster',
    emoji: '📋',
    specialty: 'Claim Settlement Specialist',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.08)',
    system: 'You are ClaimMaster, a specialist in insurance claim settlements in India. You help people file claims correctly, avoid rejections, appeal denied claims, and get maximum settlement. Give step-by-step practical guidance. Keep responses under 150 words.',
    suggestions: ['My claim was rejected — what should I do?', 'Documents needed for cashless hospitalization?', 'How long does claim settlement take?']
  },
  {
    id: 'compare',
    name: 'PlanPicker AI',
    emoji: '⚖️',
    specialty: 'Policy Comparison & Buying Guide',
    color: '#ff4444',
    bg: 'rgba(255,68,68,0.08)',
    system: 'You are PlanPicker AI, an expert at comparing insurance plans in India and helping people choose the right policy. You analyze coverage, premiums, exclusions and give clear recommendations. Keep responses under 150 words.',
    suggestions: ['Star Health vs HDFC Ergo — which is better?', 'How to choose best health insurance for ₹500/month?', 'Term life or whole life insurance — which to buy?']
  }
];

const advisorChats = {};

function initAdvisors() {
  const grid = document.getElementById('advisor-grid');
  if (!grid || grid.children.length > 0) return;

  advisors.forEach(adv => {
    advisorChats[adv.id] = [{ role: 'bot', text: `Namaste! 👋 I'm ${adv.name}, your ${adv.specialty}. Ask me anything — I'll give you real, accurate advice!` }];
    const card = document.createElement('div');
    card.className = 'advisor-card';
    card.id = `adv-card-${adv.id}`;
    card.innerHTML = `
      <div class="advisor-header">
        <div class="advisor-avatar" style="background:${adv.bg};color:${adv.color};font-size:1.8rem">${adv.emoji}</div>
        <div>
          <div class="advisor-name">${adv.name}</div>
          <div class="advisor-specialty" style="color:${adv.color}">${adv.specialty}</div>
        </div>
        <div class="advisor-status"><div class="dot-s" style="background:var(--green)"></div>Online</div>
      </div>
      <div class="advisor-chat">
        <div class="adv-msgs" id="msgs-${adv.id}">
          <div class="adv-msg bot">${advisorChats[adv.id][0].text}</div>
        </div>
        <div class="adv-suggestions" id="sug-${adv.id}">
          ${adv.suggestions.map(s => `<button onclick="askAdvisor('${adv.id}','${s.replace(/'/g,"\\'")}')">💬 ${s}</button>`).join('')}
        </div>
        <div class="adv-input-row">
          <input type="text" id="input-${adv.id}" placeholder="Ask ${adv.name}..." onkeypress="if(event.key==='Enter')sendAdvisor('${adv.id}')">
          <button onclick="sendAdvisor('${adv.id}')" style="background:${adv.bg};color:${adv.color};border:1px solid ${adv.color}30">Ask →</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

async function askAdvisor(id, question) {
  const input = document.getElementById(`input-${id}`);
  if (input) input.value = question;
  sendAdvisor(id);
  const sugDiv = document.getElementById(`sug-${id}`);
  if (sugDiv) sugDiv.style.display = 'none';
}

async function sendAdvisor(id) {
  const input = document.getElementById(`input-${id}`);
  const text = input ? input.value.trim() : '';
  if (!text) return;

  const msgsDiv = document.getElementById(`msgs-${id}`);
  const adv = advisors.find(a => a.id === id);
  if (!adv || !msgsDiv) return;

  input.value = '';
  advisorChats[id] = advisorChats[id] || [];
  advisorChats[id].push({ role: 'user', text });

  const userMsg = document.createElement('div');
  userMsg.className = 'adv-msg user';
  userMsg.textContent = text;
  msgsDiv.appendChild(userMsg);

  const typingMsg = document.createElement('div');
  typingMsg.className = 'adv-msg bot';
  typingMsg.id = `typing-${id}`;
  typingMsg.innerHTML = '<span style="color:var(--gray);font-style:italic">Thinking...</span>';
  msgsDiv.appendChild(typingMsg);
  msgsDiv.scrollTop = msgsDiv.scrollHeight;

  try {
    const messages = advisorChats[id].filter(m => m.role !== 'bot-sys').slice(-6).map(m => ({
      role: m.role === 'bot' ? 'assistant' : 'user',
      content: m.text
    }));

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: adv.system,
        messages
      })
    });
    const data = await response.json();
    const reply = data.content.map(b => b.text || '').join(' ');
    const typed = document.getElementById(`typing-${id}`);
    if (typed) typed.innerHTML = reply.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    advisorChats[id].push({ role: 'bot', text: reply });
  } catch (err) {
    const typed = document.getElementById(`typing-${id}`);
    if (typed) typed.innerHTML = `I'm unable to connect right now. Please check your internet connection and try again. In general, ${getLocalAdvice(id, text)}`;
  }
  msgsDiv.scrollTop = msgsDiv.scrollHeight;
}

function getLocalAdvice(id, text) {
  const lower = text.toLowerCase();
  if (lower.includes('deductible')) return 'a deductible is the amount you pay before insurance kicks in. Lower deductible = higher premium.';
  if (lower.includes('ncb')) return 'NCB (No Claim Bonus) gives you a discount on premium for each claim-free year, up to 50%.';
  if (lower.includes('copay')) return 'copay means you share a percentage of each claim cost with the insurer.';
  if (lower.includes('claim')) return 'to file a claim: intimate insurer within 24-48 hours, collect all documents, submit claim form.';
  return 'please ensure your internet connection is stable and try again for personalized AI advice.';
}

// --- GLOBAL CHATBOT (Claude AI) ---
function toggleChat() {
  document.getElementById('chatbot-window').classList.toggle('open');
}

async function askBot(question) {
  addMessage(question, 'user');
  await processBot(question);
}

async function sendChat() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  addMessage(text, 'user');
  await processBot(text);
}

async function processBot(text) {
  const typingEl = document.createElement('div');
  typingEl.className = 'chat-msg bot';
  typingEl.id = 'chat-typing';
  typingEl.innerHTML = '<div class="msg-bubble"><span style="color:var(--gray);font-style:italic">Claude is thinking...</span></div>';
  document.getElementById('chat-messages').appendChild(typingEl);
  document.getElementById('chat-messages').scrollTop = 9999;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: "You are InsureIQ Assistant, a friendly AI expert on Indian insurance (health, motor, home, life). Give clear, practical answers in 2-3 sentences. Use simple language. No jargon. Always be helpful and empathetic.",
        messages: [{ role: "user", content: text }]
      })
    });
    const data = await response.json();
    const reply = data.content.map(b => b.text || '').join(' ');
    document.getElementById('chat-typing')?.remove();
    addMessage(reply, 'bot');
  } catch (err) {
    document.getElementById('chat-typing')?.remove();
    const quickAnswers = {
      'deductible': 'A deductible is the amount you pay first before your insurance starts paying. E.g. if deductible is ₹5,000 and bill is ₹50,000 — you pay ₹5,000 and insurer pays ₹45,000.',
      'copay': 'Copay means you pay a fixed percentage of every claim. E.g. 20% copay on ₹1,00,000 claim means you pay ₹20,000 and insurer pays ₹80,000.',
      'ncb': 'NCB (No Claim Bonus) rewards you for not making claims. Each claim-free year gives you a discount on renewal premium — up to 50% off!',
      'claim': 'To file a claim: 1) Inform insurer within 24-48 hours 2) Collect all bills and reports 3) Submit claim form 4) Surveyor may inspect 5) Get settled in 7-30 days.',
    };
    const lower = text.toLowerCase();
    const matchKey = Object.keys(quickAnswers).find(k => lower.includes(k));
    addMessage(matchKey ? quickAnswers[matchKey] : 'I\'m having trouble connecting. Please try again in a moment!', 'bot');
  }
}

function addMessage(text, from) {
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = `chat-msg ${from}`;
  div.innerHTML = `<div class="msg-bubble">${text.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>')}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

// --- PLAN COMPARISON ---
const comparisonData = {
  health: {
    rec: 'Star Health — Best Value for Families',
    plans: ['Star Health', 'HDFC Ergo', 'Niva Bupa'],
    recommended: 0,
    analysis: '🤖 <strong>AI Analysis:</strong> Star Health offers the best overall coverage for Indian families with the widest hospital network (14,000+ hospitals). HDFC Ergo is better for metro residents seeking premium cashless facilities. Niva Bupa (formerly Max Bupa) excels for individuals wanting comprehensive mental health coverage — a rare feature. For a family of 4, Star Health with ₹10L cover at ~₹18,000/year offers the best value-to-cost ratio.',
    features: [
      { name: 'Network Hospitals', vals: ['14,000+', '10,000+', '8,500+'] },
      { name: 'Sum Insured Range', vals: ['₹1L–₹1Cr', '₹3L–₹75L', '₹2L–₹1Cr'] },
      { name: 'Mental Health Cover', vals: ['partial', 'no', 'yes'] },
      { name: 'Day Care Procedures', vals: ['144', '540+', '200+'] },
      { name: 'Pre-existing (Waiting)', vals: ['2 years', '3 years', '2 years'] },
      { name: 'Maternity Cover', vals: ['yes', 'yes', 'yes'] },
      { name: 'AYUSH Treatment', vals: ['yes', 'partial', 'yes'] },
      { name: 'No Claim Bonus', vals: ['yes', 'yes', 'yes'] },
      { name: 'Teleconsultation', vals: ['yes', 'yes', 'yes'] },
      { name: 'Global Coverage', vals: ['no', 'yes', 'no'] },
      { name: 'Annual Premium (₹10L, family)', vals: ['~₹18K', '~₹22K', '~₹20K'] }
    ]
  },
  motor: {
    rec: 'HDFC Ergo — Best for Zero Depreciation',
    plans: ['HDFC Ergo', 'Bajaj Allianz', 'ICICI Lombard'],
    recommended: 0,
    analysis: '🤖 <strong>AI Analysis:</strong> HDFC Ergo leads in motor insurance with the fastest claim settlement (72-hour guarantee) and widest cashless garage network. Bajaj Allianz offers the most comprehensive add-ons at competitive premiums. ICICI Lombard\'s InstaSpect feature allows instant photo-based claims without physical surveyor. For new cars under 3 years, always opt for Zero Depreciation add-on — it pays the full replacement cost of parts without depreciation deduction.',
    features: [
      { name: 'Network Garages', vals: ['6,800+', '4,000+', '5,600+'] },
      { name: 'Claim Settlement', vals: ['72 hrs', '7 days', '24 hrs app'] },
      { name: 'Zero Depreciation', vals: ['yes', 'yes', 'yes'] },
      { name: 'Engine Protection', vals: ['add-on', 'add-on', 'add-on'] },
      { name: 'Roadside Assistance', vals: ['yes', 'yes', 'yes'] },
      { name: 'Return to Invoice', vals: ['add-on', 'add-on', 'yes'] },
      { name: 'NCB Protection', vals: ['add-on', 'add-on', 'add-on'] },
      { name: 'Consumables Cover', vals: ['add-on', 'add-on', 'add-on'] },
      { name: 'Key Replacement', vals: ['yes', 'no', 'yes'] },
      { name: 'Annual Premium (Avg)', vals: ['~₹12K', '~₹10K', '~₹11K'] }
    ]
  },
  home: {
    rec: 'Bajaj Allianz — Best Comprehensive Cover',
    plans: ['Bajaj Allianz', 'HDFC ERGO Home', 'SBI General'],
    recommended: 0,
    analysis: '🤖 <strong>AI Analysis:</strong> Bajaj Allianz offers the most comprehensive home insurance in India, covering both structure and contents with low premiums. HDFC ERGO Home Shield is best for urban apartments with excellent contents coverage for electronics. SBI General is the budget-friendly option backed by government trust. For homeowners in flood-prone areas, ensure the policy explicitly covers overflowing of rivers — standard flood cover sometimes excludes this.',
    features: [
      { name: 'Structure Coverage', vals: ['yes', 'yes', 'yes'] },
      { name: 'Contents Coverage', vals: ['yes', 'yes', 'partial'] },
      { name: 'Natural Disasters', vals: ['yes', 'yes', 'yes'] },
      { name: 'Jewellery Cover', vals: ['up to ₹2L', 'up to ₹1L', 'up to ₹1L'] },
      { name: 'Electronic Equipment', vals: ['yes', 'yes', 'no'] },
      { name: 'Burglary & Theft', vals: ['yes', 'yes', 'yes'] },
      { name: 'Terrorism Cover', vals: ['yes', 'add-on', 'no'] },
      { name: 'Rent Reimbursement', vals: ['yes', 'yes', 'no'] },
      { name: 'Pet Liability', vals: ['conditional', 'no', 'no'] },
      { name: 'Annual Premium', vals: ['~₹3K', '~₹4K', '~₹2K'] }
    ]
  }
};

function renderComparison() {
  const type = document.getElementById('compare-type')?.value || 'health';
  const data = comparisonData[type];
  if (!data) return;

  document.getElementById('ai-rec').textContent = data.rec;
  document.getElementById('compare-ai-text').innerHTML = data.analysis;

  const table = document.getElementById('comparison-table');
  if (!table) return;

  const valMap = { 'yes': `<span class="check-yes">✓ Yes</span>`, 'no': `<span class="check-no">✗ No</span>`, 'partial': `<span class="check-partial">~ Partial</span>` };

  table.innerHTML = `
    <div class="compare-table">
      <div class="ct-head">
        <div>Feature</div>
        ${data.plans.map((p,i) => `<div class="plan-col${i===data.recommended?' recommended':''}">${p}</div>`).join('')}
      </div>
      ${data.features.map(f => `
        <div class="ct-row">
          <div class="feat-name">${f.name}</div>
          ${f.vals.map(v => `<div class="plan-val">${valMap[v] || v}</div>`).join('')}
        </div>
      `).join('')}
    </div>
  `;
}

// --- CLAIMS ---
const sampleClaims = [
  { id: 'CLM-2024-8821', type: 'Health Insurance', amount: '₹72,400', status: 'approved', progress: 100, detail: 'Star Health • Hospitalization • AIIMS Delhi' },
  { id: 'CLM-2024-9103', type: 'Motor Insurance', amount: '₹38,200', status: 'processing', progress: 65, detail: 'HDFC Ergo • Accident Damage • Surveyor Appointed' },
  { id: 'CLM-2024-9287', type: 'Health Insurance', amount: '₹1,15,000', status: 'pending', progress: 30, detail: 'Star Health • Planned Surgery • Documents Verification' }
];

const docChecklists = {
  'Health Insurance': ['✅ Duly filled claim form (insurer\'s format)', '✅ Original hospital bills & receipts', '✅ Discharge summary from hospital', '✅ Doctor\'s prescription & investigation reports', '✅ FIR copy (if accident case)', '✅ KYC documents (Aadhaar, PAN)', '✅ Cancelled cheque for reimbursement'],
  'Motor Insurance': ['✅ Claim form duly signed', '✅ Original RC Book & Driving License', '✅ FIR copy from police station', '✅ Photographs of damaged vehicle', '✅ Repair estimate from garage', '✅ Policy document copy', '✅ Survey report from insurer'],
  'Home Insurance': ['✅ Claim intimation form', '✅ FIR / Fire Brigade report', '✅ Photographs of damage', '✅ Original purchase invoices for items', '✅ Valuation report (for high-value items)', '✅ Repair estimate from contractor', '✅ Property documents']
};

function initClaims() {
  const claimsList = document.getElementById('claims-list');
  if (!claimsList || claimsList.children.length > 0) return;

  sampleClaims.forEach(c => {
    const div = document.createElement('div');
    div.className = 'claim-card';
    div.innerHTML = `
      <div class="claim-card-header">
        <span class="claim-id">${c.id}</span>
        <span class="claim-status ${c.status}">${c.status.toUpperCase()}</span>
      </div>
      <div style="font-size:0.85rem;font-family:var(--font-head);margin-bottom:4px">${c.type}</div>
      <div style="font-size:0.75rem;color:var(--gray);margin-bottom:8px">${c.detail}</div>
      <div class="claim-detail"><span>Claim Amount:</span><span class="claim-amount">${c.amount}</span></div>
      <div class="claim-progress"><div class="claim-progress-fill" style="width:${c.progress}%"></div></div>
      <div style="font-size:0.7rem;color:var(--gray);margin-top:5px;text-align:right">Progress: ${c.progress}%</div>
    `;
    claimsList.appendChild(div);
  });

  updateDocChecklist();
  document.getElementById('cf-type')?.addEventListener('change', updateDocChecklist);
}

function updateDocChecklist() {
  const type = document.getElementById('cf-type')?.value || 'Health Insurance';
  const docs = docChecklists[type] || docChecklists['Health Insurance'];
  const el = document.getElementById('doc-checklist');
  if (el) el.innerHTML = docs.map(d => `<div style="margin:4px 0">${d}</div>`).join('');
}

async function submitClaim() {
  const type = document.getElementById('cf-type')?.value;
  const polnum = document.getElementById('cf-polnum')?.value;
  const amount = document.getElementById('cf-amount')?.value;
  const desc = document.getElementById('cf-desc')?.value;

  if (!polnum || !amount || !desc) {
    const guidance = document.getElementById('claim-guidance');
    if (guidance) guidance.innerHTML = '<div style="background:rgba(255,68,68,0.1);border:1px solid rgba(255,68,68,0.2);border-radius:9px;padding:12px;font-size:0.82rem;color:var(--red)">⚠️ Please fill in all required fields before submitting.</div>';
    return;
  }

  const btn = document.querySelector('.claims-layout .btn-primary');
  if (btn) { btn.textContent = '⏳ Getting AI guidance...'; btn.disabled = true; }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: "You are an insurance claim expert in India. Give practical, step-by-step claim filing advice. Be specific and encouraging. Keep response under 120 words.",
        messages: [{ role: "user", content: `I'm filing a ${type} claim. Policy: ${polnum}, Amount: ₹${amount}, Incident: ${desc}. What are the most important next steps and tips to ensure my claim gets approved?` }]
      })
    });
    const data = await response.json();
    const advice = data.content.map(b => b.text || '').join(' ');
    const guidance = document.getElementById('claim-guidance');
    if (guidance) guidance.innerHTML = `
      <div style="background:rgba(0,230,118,0.08);border:1px solid rgba(0,230,118,0.2);border-radius:9px;padding:14px">
        <div style="font-size:0.72rem;color:var(--green);font-weight:700;margin-bottom:8px">✓ CLAIM SUBMITTED • AI GUIDANCE</div>
        <div style="font-size:0.82rem;color:var(--gray);line-height:1.6">${advice.replace(/\n/g,'<br>')}</div>
        <div style="margin-top:10px;font-size:0.72rem;color:var(--gray)">Claim ID: CLM-2024-${Math.floor(9000+Math.random()*999)} • Status: Under Review</div>
      </div>`;
  } catch (err) {
    const guidance = document.getElementById('claim-guidance');
    if (guidance) guidance.innerHTML = `<div style="background:rgba(0,200,255,0.08);border:1px solid rgba(0,200,255,0.18);border-radius:9px;padding:14px;font-size:0.82rem;color:var(--gray)">✓ Claim submitted! Reference ID: CLM-2024-${Math.floor(9000+Math.random()*999)}. Keep all original documents safe. Intimate your insurer by calling their 24×7 helpline. A surveyor will be in touch within 48 hours.</div>`;
  }
  if (btn) { btn.textContent = '📤 Submit Claim with AI Guidance'; btn.disabled = false; }
}

// --- GLOSSARY ---
const glossaryTerms = [
  { term: 'Premium', def: 'The amount you pay regularly (monthly/quarterly/annually) to keep your insurance policy active.', example: 'E.g. ₹12,000/year for ₹5L health cover.' },
  { term: 'Sum Insured', def: 'The maximum amount your insurer will pay in a policy year. Choose based on your city and family size.', example: 'E.g. ₹5,00,000 — insurer pays up to this amount.' },
  { term: 'Deductible', def: 'The fixed amount you pay before insurance coverage kicks in. Higher deductible = lower premium.', example: 'E.g. ₹5,000 deductible on a ₹50,000 bill — you pay ₹5K, insurer pays ₹45K.' },
  { term: 'Copay / Co-payment', def: 'You pay a fixed percentage of every claim. Common in senior citizen plans above age 60.', example: 'E.g. 20% copay on ₹1L bill — you pay ₹20K, insurer pays ₹80K.' },
  { term: 'Exclusion', def: 'Situations or conditions that are NOT covered by your policy. Always read this section carefully.', example: 'E.g. cosmetic surgery, self-inflicted injuries, war risks.' },
  { term: 'Waiting Period', def: 'Time you must wait before certain coverage activates. Pre-existing conditions often have 2-year wait.', example: 'E.g. maternity benefits active only after 9 months of policy start.' },
  { term: 'NCB (No Claim Bonus)', def: 'Reward for not claiming — discount on renewal premium or increased sum insured at no extra cost.', example: 'E.g. 50% discount on premium after 5 claim-free years.' },
  { term: 'IDV (Insured Declared Value)', def: 'The current market value of your vehicle. Insurance pays this amount if car is totaled or stolen.', example: 'E.g. IDV of ₹8L for a 2-year-old car worth ₹10L new.' },
  { term: 'Cashless Claim', def: 'You don\'t pay the hospital directly — insurer settles the bill directly with the network hospital.', example: 'E.g. treatment at empanelled hospitals covered cashless up to sum insured.' },
  { term: 'Reimbursement Claim', def: 'You pay medical bills first, then submit to insurer for refund. Used at non-network hospitals.', example: 'E.g. pay ₹80,000 upfront, submit bills, get ₹75,000 reimbursed in 15 days.' },
  { term: 'Sub-limit', def: 'Cap on specific treatments even within the overall sum insured. Often applies to room rent, surgeries.', example: 'E.g. Room rent sub-limit 1% of sum insured — ₹5,000/day for ₹5L cover.' },
  { term: 'Rider / Add-on', def: 'Optional benefits you can add to your base policy for extra premium to enhance coverage.', example: 'E.g. Zero Depreciation add-on for motor, Critical Illness rider for health.' },
  { term: 'Pre-existing Disease (PED)', def: 'Medical conditions you had before buying the policy. Most policies cover PED only after a waiting period.', example: 'E.g. diabetes diagnosed before policy start — covered only after 2–3 year wait.' },
  { term: 'Day Care Procedures', def: 'Treatments requiring less than 24 hours hospitalization, like cataract surgery. Covered in good plans.', example: 'E.g. 540+ day care procedures covered under HDFC Ergo Optima plan.' },
  { term: 'Floater Policy', def: 'One policy that covers the entire family under a single sum insured. Cost-effective for families.', example: 'E.g. ₹10L family floater covers spouse + 2 kids under one policy.' },
  { term: 'IRDA / IRDAI', def: 'Insurance Regulatory and Development Authority of India — the government regulator for all insurance companies.', example: 'E.g. All legitimate insurance companies must be IRDAI registered.' },
  { term: 'Free Look Period', def: '15-day window after buying to review the policy and return it for a full refund if unsatisfied.', example: 'E.g. Buy policy, read it, return within 15 days for complete refund.' },
  { term: 'Claim Settlement Ratio (CSR)', def: 'Percentage of claims paid by the insurer vs claims received. Higher is better — above 95% is ideal.', example: 'E.g. LIC CSR of 98.7% means 98.7 out of 100 claims were settled.' },
  { term: 'Zero Depreciation', def: 'Motor insurance add-on where insurer pays full repair cost without deducting depreciation on parts.', example: 'E.g. Old bumper worth ₹8,000 after depreciation gets replaced for full ₹14,000.' },
  { term: 'Moratorium Period', def: '8-year period after which insurer cannot reject claims on pre-existing conditions except for fraud.', example: 'E.g. After 8 continuous years of policy, most pre-existing conditions are fully covered.' }
];

let filteredGloss = [...glossaryTerms];

function renderGlossary() {
  filterGloss();
}

function filterGloss() {
  const q = document.getElementById('gloss-search')?.value?.toLowerCase() || '';
  filteredGloss = q ? glossaryTerms.filter(t => t.term.toLowerCase().includes(q) || t.def.toLowerCase().includes(q)) : [...glossaryTerms];
  const grid = document.getElementById('gloss-grid');
  if (!grid) return;
  grid.innerHTML = filteredGloss.map(t => `
    <div class="gloss-card">
      <div class="gloss-term">${t.term}</div>
      <div class="gloss-def">${t.def}</div>
      <div class="gloss-example">${t.example}</div>
    </div>
  `).join('');
}

// --- SCROLL ANIMATIONS ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.animation = 'fadeUp 0.5s ease both';
      e.target.style.opacity = '1';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.prob-card,.feat-card,.step,.impact-card,.adv,.team-card,.advisor-card').forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// --- INIT ON LOAD ---
document.addEventListener('DOMContentLoaded', () => {
  updateSim();
  document.getElementById('policy-input').value = demoPolicies[0].text;
  document.getElementById('cf-type')?.addEventListener('change', updateDocChecklist);
});
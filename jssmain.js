// ========================
// INSUREIQ — MAIN JS
// ========================

// --- NAV SCROLL ---
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// --- TAB SWITCHING ---
function switchTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
}

// --- DEMO POLICIES ---
const demoPolicies = [
  {
    name: "Star Health Insurance",
    text: `HEALTH INSURANCE POLICY — STAR HEALTH & ALLIED INSURANCE CO. LTD

SUM INSURED: ₹5,00,000 | POLICY PERIOD: 1 YEAR

COVERED BENEFITS:
- In-patient Hospitalization: Covered up to Sum Insured for minimum 24-hour stay
- Pre-Hospitalization: Medical expenses 30 days before hospitalization are covered
- Post-Hospitalization: Medical expenses 60 days after discharge are covered
- Ambulance Charges: Covered up to ₹2,000 per hospitalization
- Day Care Procedures: 144 day care procedures are covered
- Domiciliary Treatment: Covered when hospitalization is not possible

EXCLUSIONS — NOT COVERED:
- Mental Health Treatment: Psychiatric conditions, depression, anxiety are EXCLUDED
- Cosmetic Surgery: Any surgery for beauty enhancement is EXCLUDED
- Adventure Sports Injuries: Rock climbing, bungee jumping, skydiving injuries EXCLUDED
- Pre-existing Conditions: 2-year waiting period applies to all pre-existing diseases
- Dental Treatment: Routine dental care and cosmetic dental procedures are EXCLUDED
- Maternity Benefits: Normal delivery and C-section excluded for first 2 years
- HIV/AIDS: Treatment for HIV and sexually transmitted diseases is EXCLUDED
- War & Nuclear Risks: Injuries due to war, terrorism, nuclear activity EXCLUDED

CONDITIONAL COVERAGE:
- Cataract Surgery: Covered after 2-year waiting period (maximum ₹25,000)
- Joint Replacement: Covered after 2 years, limited to ₹1,50,000
- AYUSH Treatment: Covered only in government hospitals up to ₹20,000
- Organ Donor: Donor expenses covered only if recipient is insured

CO-PAYMENT: 20% co-payment applicable for persons above 60 years of age`
  },
  {
    name: "HDFC ERGO Motor Insurance",
    text: `COMPREHENSIVE MOTOR INSURANCE POLICY — HDFC ERGO GENERAL INSURANCE

VEHICLE TYPE: Private Car | IDV: ₹8,50,000 | ZERO DEPRECIATION: YES

COVERED BENEFITS:
- Own Damage: Accidental damage to your vehicle is fully covered
- Theft: Complete vehicle theft covered at IDV value
- Third Party Liability: Unlimited liability for third party bodily injury
- Third Party Property Damage: Covered up to ₹7.5 lakhs
- Natural Calamities: Flood, earthquake, storm, landslide damage covered
- Fire & Explosion: Vehicle damage due to fire fully covered
- Personal Accident: Driver covered for ₹15 lakhs on accidental death/disability

EXCLUSIONS — NOT COVERED:
- Drunk Driving: Accident while under influence of alcohol/drugs is EXCLUDED
- No Valid License: Accidents without a valid driving license are EXCLUDED
- Mechanical Breakdown: Engine failure, clutch failure, gearbox failure EXCLUDED
- Depreciation: Standard policy — parts depreciation applicable (Zero Dep add-on available)
- Consumables: Engine oil, brake fluid, coolant not covered in standard plan
- Electrical Failure: Non-accident related electrical breakdown EXCLUDED
- Using Vehicle for Hire: Commercial use of private vehicle voids coverage
- Racing/Speed Testing: Damage during racing events is EXCLUDED

CONDITIONAL COVERAGE:
- Engine Protection: Available as add-on at extra premium ₹2,800/year
- Roadside Assistance: Covered in premium plan, towing up to 100km
- Return to Invoice: Available as add-on — pays full invoice value on total loss
- NCB Protection: No Claim Bonus protected with add-on after 1 claim/year`
  },
  {
    name: "Bajaj Allianz Home Insurance",
    text: `HOME INSURANCE POLICY — BAJAJ ALLIANZ GENERAL INSURANCE CO. LTD

SUM INSURED (STRUCTURE): ₹45,00,000 | CONTENTS: ₹8,00,000 | VALUABLES: ₹2,00,000

COVERED BENEFITS:
- Fire & Allied Perils: Fire, lightning, explosion, implosion covered
- Natural Disasters: Earthquake, flood, storm, cyclone, landslide covered
- Burglary & Theft: Theft by forcible entry to premises is covered
- Accidental Damage: Sudden and accidental damage to structure covered
- Terrorism: Damage due to terrorist acts covered under standard plan
- Public Liability: Third party injury within premises covered up to ₹10L
- Temporary Accommodation: Hotel expenses covered during home repair (max ₹50,000)
- Electronic Equipment: Laptops, TVs, ACs covered under contents

EXCLUSIONS — NOT COVERED:
- Gradual Deterioration: Wear and tear, rusting, rot, mold growth EXCLUDED
- War & Nuclear: Damage due to war, invasion, nuclear contamination EXCLUDED
- Willful Damage: Intentional damage by policyholder or family EXCLUDED
- Unoccupied Property: If house is vacant for more than 60 days, cover lapses
- Cash & Documents: Currency, stamps, share certificates NOT covered
- Motor Vehicles: Cars, bikes stored in garage NOT covered under home policy
- Land & Ground: Damage to land itself not covered, only structure
- Business Property: Business stock or equipment kept at home EXCLUDED

CONDITIONAL COVERAGE:
- Jewellery: Covered only up to ₹2L with proper valuation certificate
- Artwork: Fine art covered only if specifically declared and valued
- Subsidence: Land settlement damage covered after 3-year waiting period
- Pet Liability: Damage caused by pets conditionally covered up to ₹1L`
  }
];

function loadDemo(index) {
  const policy = demoPolicies[index];
  document.getElementById('policy-input').value = policy.text;
  switchTabDirect('paste');
  document.getElementById('policy-input').style.borderColor = 'rgba(0,212,255,0.5)';
  setTimeout(() => document.getElementById('policy-input').style.borderColor = '', 2000);
}

function switchTabDirect(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelector('.tab[onclick*="' + tab + '"]').classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
}

// --- AI ANALYZER ---
function analyzePolicy() {
  const text = document.getElementById('policy-input').value.trim();
  if (!text) {
    document.getElementById('policy-input').style.borderColor = 'var(--red)';
    setTimeout(() => document.getElementById('policy-input').style.borderColor = '', 2000);
    return;
  }
  
  const btn = document.getElementById('analyze-btn');
  btn.innerHTML = '<span>🔄 Analyzing...</span>';
  btn.disabled = true;
  
  document.getElementById('output-placeholder').style.display = 'none';
  document.getElementById('analysis-result').style.display = 'block';
  document.getElementById('analysis-result').innerHTML = `
    <div class="loading-dots"><span></span><span></span><span></span></div>
    <p style="text-align:center;color:var(--gray);font-size:0.88rem">AI is reading your policy...</p>
  `;

  setTimeout(() => {
    const result = analyzeText(text);
    renderAnalysis(result);
    btn.innerHTML = '<span>🧠 Analyze with AI</span>';
    btn.disabled = false;
  }, 2000);
}

function analyzeText(text) {
  const lowerText = text.toLowerCase();
  
  const coveredKeywords = ['covered', 'covered up to', 'includes', 'including', 'benefit', 'pay', 'reimburs', 'hospitalization covered', 'ambulance'];
  const excludedKeywords = ['excluded', 'exclusion', 'not covered', 'not payable', 'excluded from', 'void', 'not admissible', 'exempt'];
  const conditionalKeywords = ['waiting period', 'conditional', 'subject to', 'only if', 'maximum', 'up to', 'limited to', 'add-on'];

  let coveredCount = 0, excludedCount = 0, conditionalCount = 0;
  coveredKeywords.forEach(k => { if (lowerText.includes(k)) coveredCount++; });
  excludedKeywords.forEach(k => { if (lowerText.includes(k)) excludedCount++; });
  conditionalKeywords.forEach(k => { if (lowerText.includes(k)) conditionalCount++; });

  const total = coveredCount + excludedCount + conditionalCount || 1;
  const covPct = Math.round((coveredCount / total) * 100);
  const excPct = Math.round((excludedCount / total) * 100);
  const condPct = 100 - covPct - excPct;

  // Extract clause lines
  const lines = text.split('\n').filter(l => l.trim().length > 10);
  const covered = lines.filter(l => coveredKeywords.some(k => l.toLowerCase().includes(k))).slice(0,5);
  const excluded = lines.filter(l => excludedKeywords.some(k => l.toLowerCase().includes(k))).slice(0,5);
  const conditional = lines.filter(l => conditionalKeywords.some(k => l.toLowerCase().includes(k))).slice(0,3);

  // Auto-detect insurance type
  let policyType = 'Insurance Policy';
  if (lowerText.includes('hospitalization') || lowerText.includes('health')) policyType = 'Health Insurance';
  else if (lowerText.includes('vehicle') || lowerText.includes('motor') || lowerText.includes('car')) policyType = 'Motor Insurance';
  else if (lowerText.includes('home') || lowerText.includes('property') || lowerText.includes('burglary')) policyType = 'Home Insurance';
  
  return { covPct, excPct, condPct, covered, excluded, conditional, policyType };
}

function renderAnalysis({ covPct, excPct, condPct, covered, excluded, conditional, policyType }) {
  const allItems = [
    ...covered.map(t => ({ text: t.replace(/^[-•*]\s*/, '').trim(), type: 'covered' })),
    ...excluded.map(t => ({ text: t.replace(/^[-•*]\s*/, '').trim(), type: 'excluded' })),
    ...conditional.map(t => ({ text: t.replace(/^[-•*]\s*/, '').trim(), type: 'conditional' })),
  ].filter(i => i.text.length > 5).slice(0, 10);

  document.getElementById('analysis-result').innerHTML = `
    <div style="margin-bottom:12px;">
      <div style="font-family:var(--font-head);font-weight:700;font-size:1rem;margin-bottom:4px;">${policyType}</div>
      <div style="font-size:0.8rem;color:var(--green)">✓ Analysis Complete</div>
    </div>
    <div class="donut-section">
      <div class="donut-wrap">
        <canvas id="donut-chart" width="140" height="140"></canvas>
        <div class="donut-center">
          <span>${covPct}%</span>
          <small>covered</small>
        </div>
      </div>
      <div class="donut-legend">
        <div class="dl-item"><div class="dl-dot" style="background:var(--green)"></div> Covered <strong>${covPct}%</strong></div>
        <div class="dl-item"><div class="dl-dot" style="background:var(--red)"></div> Excluded <strong>${excPct}%</strong></div>
        <div class="dl-item"><div class="dl-dot" style="background:var(--yellow)"></div> Conditional <strong>${condPct}%</strong></div>
      </div>
    </div>
    <div class="coverage-details">
      ${allItems.map(item => `
        <div class="cov-item">
          <span class="cov-tag ${item.type}">${item.type === 'covered' ? '✓' : item.type === 'excluded' ? '✗' : '~'} ${item.type}</span>
          <span style="font-size:0.82rem;color:${item.type === 'covered' ? 'var(--white)' : item.type === 'excluded' ? 'var(--red)' : 'var(--yellow)'}">${item.text.substring(0,80)}${item.text.length > 80 ? '...' : ''}</span>
        </div>
      `).join('')}
    </div>
    ${excluded.length > 0 ? `<div style="margin-top:16px;background:rgba(255,82,82,0.1);border:1px solid rgba(255,82,82,0.2);border-radius:10px;padding:12px;font-size:0.82rem;color:var(--red);">⚠️ <strong>${excluded.length} exclusions detected</strong> — Review carefully before filing claims</div>` : ''}
  `;
  drawDonut(covPct, excPct, condPct);
}

function drawDonut(cov, exc, cond) {
  const canvas = document.getElementById('donut-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cx = 70, cy = 70, r = 55, innerR = 38;
  const data = [
    { pct: cov, color: '#00e676' },
    { pct: exc, color: '#ff5252' },
    { pct: cond, color: '#ffca28' }
  ];
  ctx.clearRect(0, 0, 140, 140);
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
  ctx.fillStyle = '#16213e';
  ctx.fill();
}

// --- HIGHLIGHTER ---
function loadHighlighterDemo() {
  const sample = `This health insurance policy covers hospitalization expenses up to ₹5,00,000 per annum for the insured and their family. In-patient hospitalization for minimum 24 hours is fully covered. Pre-hospitalization expenses up to 30 days before admission are covered, and post-hospitalization expenses for 60 days after discharge are also covered.

Mental health treatment including psychiatric consultations, therapy, and medications are excluded from coverage under this policy. Cosmetic surgery and procedures performed for beauty enhancement are not covered under any circumstances. Adventure sports injuries including rock climbing, bungee jumping, and skydiving accidents are excluded.

Pre-existing conditions are subject to a 2-year waiting period. Cataract surgery is covered after a waiting period of 2 years, with a maximum benefit of ₹25,000. Joint replacement surgeries are conditionally covered after 2 years, limited to ₹1,50,000. Dental treatment and oral surgery are excluded unless resulting from accidental injury. HIV and AIDS treatment is excluded. Maternity benefits are available after a 9-month waiting period, subject to a maximum of ₹50,000.`;

  const highlighted = sample
    .replace(/\b(covered|includes|available|pay|reimburs\w*)\b/gi, '<span class="hl-covered">$1</span>')
    .replace(/\b(excluded|not covered|exclusion\w*)\b/gi, '<span class="hl-excluded">$1</span>')
    .replace(/\b(waiting period|subject to|conditionally|limited to|maximum benefit|after \d+)\b/gi, '<span class="hl-conditional">$1</span>');

  document.getElementById('highlighted-policy').innerHTML = highlighted.split('\n\n').map(p => `<p style="margin-bottom:14px;">${p}</p>`).join('');

  document.getElementById('risk-list').innerHTML = `
    <div class="risk-score-box">
      <div class="risk-score-num">72</div>
      <div class="risk-score-label">Risk Score (Higher = More Risk)</div>
    </div>
    ${[
      { name: 'Mental Health Excluded', desc: 'No coverage for depression, anxiety, therapy' },
      { name: 'Cosmetic Surgery Excluded', desc: 'Beauty enhancement procedures not covered' },
      { name: 'Adventure Sports Excluded', desc: 'High-risk sport injuries not covered' },
      { name: '2-Year Pre-existing Wait', desc: 'Conditions before policy start have waiting period' },
      { name: 'HIV/AIDS Not Covered', desc: 'Complete exclusion of HIV treatment' }
    ].map(r => `
      <div class="risk-item">
        <div class="risk-icon">⚠️</div>
        <div>
          <div class="risk-name">${r.name}</div>
          <div class="risk-desc">${r.desc}</div>
        </div>
      </div>
    `).join('')}
  `;
}

// --- SIMULATOR ---
const scenarioData = {
  health: {
    hospitalization: {
      emoji: '🏥', title: 'Hospitalization Claim',
      coveragePct: 0.90, deductible: 5000,
      steps: ['Inform insurer within 24 hours', 'Get cashless approval or pay & claim', 'Submit discharge summary & bills', 'Receive reimbursement in 7-14 days']
    },
    accident: {
      emoji: '🚑', title: 'Accident Hospitalization',
      coveragePct: 0.95, deductible: 0,
      steps: ['Emergency treatment starts immediately', 'Inform insurer within 48 hours', 'Submit FIR & medical records', 'Claim settled in 10-15 days']
    },
    surgery: {
      emoji: '🔬', title: 'Surgery Claim',
      coveragePct: 0.85, deductible: 10000,
      steps: ['Get pre-authorization for planned surgery', 'Choose network hospital for cashless', 'Submit surgeon notes & operation theater bills', 'Settled within 30 days of documents']
    },
    mental: {
      emoji: '🧠', title: 'Mental Health Claim',
      coveragePct: 0.10, deductible: 0,
      steps: ['⚠️ Coverage very limited', 'Check if psychiatrist is IRDAI certified', 'Some plans cover only inpatient psychiatric care', 'Consider upgrading your plan for better mental health cover']
    },
    preexisting: {
      emoji: '📋', title: 'Pre-existing Condition Claim',
      coveragePct: 0.50, deductible: 15000,
      steps: ['Check if 2-year waiting period has passed', 'Submit complete medical history', 'Insurer may investigate pre-disclosure', 'Claim may be partially settled']
    }
  },
  motor: {
    hospitalization: { emoji: '🚗', title: 'Vehicle Damage Claim', coveragePct: 0.85, deductible: 5000, steps: ['Inform insurer immediately', 'Take photos of damage', 'Get vehicle surveyed by insurer', 'Repair at network garage for direct settlement'] },
    accident: { emoji: '💥', title: 'Road Accident Claim', coveragePct: 0.90, deductible: 0, steps: ['File FIR at nearest police station', 'Intimate insurer within 24 hours', 'Submit driving license & RC book', 'Surveyor assesses damage within 3 days'] },
    surgery: { emoji: '🔧', title: 'Major Repair Claim', coveragePct: 0.80, deductible: 8000, steps: ['Get insurer approval before major repairs', 'Use authorized service center', 'Submit repair estimates', 'Claim settled after inspection'] },
    mental: { emoji: '⚡', title: 'Electrical Failure Claim', coveragePct: 0.20, deductible: 0, steps: ['⚠️ Mechanical/electrical failures usually excluded', 'Engine protection add-on needed', 'Check your policy for specific exclusions', 'Consider upgrading to comprehensive plan'] },
    preexisting: { emoji: '🔩', title: 'Pre-existing Damage', coveragePct: 0.15, deductible: 0, steps: ['⚠️ Pre-existing damage typically excluded', 'Ensure vehicle inspection at policy start', 'Document any existing damage', 'Claims on prior damage may be rejected'] }
  },
  home: {
    hospitalization: { emoji: '🔥', title: 'Fire Damage Claim', coveragePct: 0.95, deductible: 10000, steps: ['File police/fire brigade report immediately', 'Intimate insurer within 24 hours', 'Don\'t disturb damaged area for survey', 'Submit repair estimates & bills'] },
    accident: { emoji: '🌊', title: 'Flood/Water Damage Claim', coveragePct: 0.80, deductible: 15000, steps: ['Document all damage with photos/videos', 'Intimate insurer within 48 hours', 'Submit loss assessment report', 'Claim settled within 30 days'] },
    surgery: { emoji: '🏠', title: 'Structural Damage Claim', coveragePct: 0.85, deductible: 20000, steps: ['Get structural engineer assessment', 'Submit engineer\'s report to insurer', 'Surveyor appointed by insurer', 'Claim settled based on assessed loss'] },
    mental: { emoji: '📦', title: 'Contents Theft Claim', coveragePct: 0.75, deductible: 5000, steps: ['File FIR at nearest police station', 'List all stolen items with purchase receipts', 'Intimate insurer within 24 hours', 'Surveyor verifies & claim settled'] },
    preexisting: { emoji: '🔨', title: 'Wear & Tear Claim', coveragePct: 0.05, deductible: 0, steps: ['⚠️ Gradual deterioration is EXCLUDED', 'Maintenance-related damage not covered', 'Only sudden accidental damage is covered', 'Regular maintenance is policyholder\'s responsibility'] }
  }
};

function updateSimulator() {
  const covType = document.getElementById('cov-type').value;
  const scenType = document.getElementById('scenario-type').value;
  const claimAmt = parseInt(document.getElementById('claim-amount').value);
  const days = parseInt(document.getElementById('days-hosp').value);
  const sumInsured = parseInt(document.getElementById('sum-insured').value);
  
  document.getElementById('claim-display').textContent = formatCurrency(claimAmt);
  document.getElementById('days-display').textContent = days;
  
  // Update range gradient
  const pct = ((claimAmt - 10000) / (500000 - 10000)) * 100;
  document.getElementById('claim-amount').style.background = `linear-gradient(to right, var(--electric) 0%, var(--electric) ${pct}%, rgba(255,255,255,0.1) ${pct}%)`;
  const daysPct = ((days - 1) / 29) * 100;
  document.getElementById('days-hosp').style.background = `linear-gradient(to right, var(--electric) 0%, var(--electric) ${daysPct}%, rgba(255,255,255,0.1) ${daysPct}%)`;

  const scenario = scenarioData[covType]?.[scenType] || scenarioData.health.hospitalization;
  const dailyCharge = 3000;
  const dailyCost = days * dailyCharge;
  const totalClaim = claimAmt + dailyCost;
  const eligible = Math.min(totalClaim, sumInsured);
  const afterDeductible = Math.max(0, eligible - scenario.deductible);
  const payout = Math.round(afterDeductible * scenario.coveragePct);
  const outOfPocket = totalClaim - payout;

  document.getElementById('sim-result').innerHTML = `
    <div class="sim-header">
      <div class="sim-emoji">${scenario.emoji}</div>
      <div>
        <div class="sim-title">${scenario.title}</div>
        <div class="sim-sub">Estimated breakdown for your scenario</div>
      </div>
    </div>
    <div class="payout-box">
      <div class="payout-label">Estimated Insurance Payout</div>
      <div class="payout-amount" style="color:${scenario.coveragePct > 0.5 ? 'var(--green)' : 'var(--red)'}">₹${formatCurrency(payout)}</div>
      <div class="payout-note">${scenario.coveragePct > 0.5 ? '✓ Good coverage for this scenario' : '⚠️ Limited coverage — you pay more out of pocket'}</div>
    </div>
    <div class="sim-breakdown">
      <div class="breakdown-item"><span class="label">Total Medical Cost</span><span class="val">₹${formatCurrency(totalClaim)}</span></div>
      <div class="breakdown-item"><span class="label">Coverage Percentage</span><span class="val">${Math.round(scenario.coveragePct * 100)}%</span></div>
      <div class="breakdown-item"><span class="label">Deductible / Copay</span><span class="val" style="color:var(--red)">- ₹${formatCurrency(scenario.deductible)}</span></div>
      <div class="breakdown-item"><span class="label">Insurance Pays</span><span class="val" style="color:var(--green)">₹${formatCurrency(payout)}</span></div>
      <div class="breakdown-item"><span class="label">You Pay Out of Pocket</span><span class="val" style="color:var(--yellow)">₹${formatCurrency(outOfPocket)}</span></div>
      <div class="breakdown-item"><span class="label">Days x ₹3,000/day</span><span class="val">₹${formatCurrency(dailyCost)}</span></div>
    </div>
    <div class="claim-steps">
      <h4>📋 Claim Process Steps</h4>
      <div class="step-list">
        ${scenario.steps.map((s, i) => `
          <div class="step-item">
            <div class="step-num-s">${i+1}</div>
            <span>${s}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function formatCurrency(n) {
  if (n >= 100000) return (n/100000).toFixed(1) + 'L';
  if (n >= 1000) return (n/1000).toFixed(0) + ',000';
  return n.toString();
}

// --- CHATBOT ---
function toggleChat() {
  const win = document.getElementById('chatbot-window');
  win.classList.toggle('open');
}

const botResponses = {
  'deductible': 'A **deductible** is the amount you pay out of pocket before your insurance kicks in. For example, if your deductible is ₹5,000 and your hospital bill is ₹50,000, you pay ₹5,000 and insurance covers the remaining ₹45,000.',
  'copay': 'A **copay (co-payment)** is when you share a percentage of every claim with the insurer. For example, with 20% copay on a ₹1,00,000 claim — you pay ₹20,000 and insurance pays ₹80,000. Common in policies for senior citizens.',
  'maternity': 'Maternity benefits cover pregnancy-related expenses. Most policies have a **9-month waiting period** before maternity benefits activate. Coverage typically includes normal delivery (₹25,000-50,000) and C-section (₹50,000-1,00,000). Check your specific policy for limits.',
  'premium': 'Insurance **premium** is the amount you pay regularly (monthly/quarterly/annually) to keep your policy active. Premiums depend on: your age, sum insured, medical history, number of family members, and add-ons you choose.',
  'claim': 'To file an insurance claim: 1) Intimate insurer immediately (within 24-48 hours) 2) Collect all bills and documents 3) Submit claim form with documents 4) Surveyor may be appointed 5) Claim settled within 7-30 days based on type.',
  'waiting period': 'A **waiting period** is how long you must wait before certain coverages activate. Common ones: 30 days (initial waiting period), 2 years (pre-existing conditions), 9 months (maternity), 2 years (specific diseases like cataracts).',
  'exclusion': 'Insurance **exclusions** are situations NOT covered by your policy. Common exclusions include: cosmetic surgery, dental treatment, self-inflicted injuries, war & nuclear risks, pre-existing conditions (during waiting period), and substance abuse treatment.',
  'ncb': 'NCB (**No Claim Bonus**) is a discount on your premium for every claim-free year. In health insurance, NCB can increase your sum insured by 5-50% at no extra cost. In motor insurance, NCB gives 20-50% discount on renewal premium.',
  'sum insured': 'Sum insured is the **maximum amount** your insurer will pay in a policy year. For example, if sum insured is ₹5L and hospital bills total ₹6L, you pay ₹1L from pocket. Choose sum insured based on city (metro needs higher coverage) and family size.'
};

function askBot(question) {
  addMessage(question, 'user');
  processBot(question);
}

function sendChat() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  input.value = '';
  processBot(text);
}

function processBot(text) {
  const lower = text.toLowerCase();
  showTyping();
  
  setTimeout(() => {
    removeTyping();
    let response = "That's a great question about insurance! I'd suggest analyzing your specific policy using our **AI Analyzer** above for personalized insights. Generally, always read the exclusions section carefully and ask your agent for plain-language clarification.";
    
    for (const [key, val] of Object.entries(botResponses)) {
      if (lower.includes(key)) {
        response = val;
        break;
      }
    }
    
    addMessage(response, 'bot');
  }, 1200 + Math.random() * 800);
}

function addMessage(text, from) {
  const messages = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = `chat-msg ${from}`;
  div.innerHTML = `<div class="msg-bubble">${text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</div>`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function showTyping() {
  const messages = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.id = 'typing-indicator';
  div.innerHTML = `<div class="msg-bubble typing"><span></span><span></span><span></span></div>`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById('typing-indicator');
  if (t) t.remove();
}

// --- SCROLL ANIMATIONS ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeUp 0.6s ease both';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.prob-card, .feat-card, .step, .impact-card, .adv').forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
  updateSimulator();
  
  // Load first demo policy by default in textarea
  setTimeout(() => {
    document.getElementById('policy-input').value = demoPolicies[0].text;
  }, 500);
});
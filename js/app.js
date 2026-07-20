// Nanhikali Care & Adoption Support India - Application Logic

let activeChildFilter = 'all';
let currentStep = 1;
const totalSteps = 4;

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  renderRegionalHubs();
  renderChildProfiles();
  renderDoctorProfiles();
  initFilterControls();
  initFormWizard();
});

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggleBtn');
  const menu = document.getElementById('navMenu');
  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        if (menu.classList.contains('active')) {
          icon.className = 'fa-solid fa-xmark';
        } else {
          icon.className = 'fa-solid fa-bars';
        }
      }
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        const icon = toggleBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }
}

/* ==========================================================================
   1. Render Regional Hubs
   ========================================================================== */
function renderRegionalHubs() {
  const container = document.getElementById('hubsContainer');
  if (!container || typeof regionalHubs === 'undefined') return;

  container.innerHTML = regionalHubs.map(hub => `
    <div class="hub-card">
      <div class="hub-img-wrap">
        <img src="${hub.image}" alt="${hub.name}">
        <span class="hub-tag-badge">${hub.city}, ${hub.state}</span>
      </div>
      <div class="hub-body">
        <h3 class="hub-title">${hub.name}</h3>
        <p class="hub-address"><i class="fa-solid fa-location-dot"></i> ${hub.address}, Pincode: ${hub.pincode}</p>
        <div class="hub-meta">
          <div class="hub-meta-item"><strong>${hub.beds}</strong> ICU Beds</div>
          <div class="hub-meta-item"><strong>${hub.doctorsCount}</strong> Specialists</div>
          <div class="hub-meta-item"><strong>${hub.activeCases}</strong> Active Cases</div>
        </div>
        <a href="tel:${hub.phone.replace(/\s+/g, '')}" class="hub-contact-btn">
          <i class="fa-solid fa-phone"></i> Emergency: ${hub.phone}
        </a>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   2. Render Child Profiles & Filter Logic
   ========================================================================== */
function renderChildProfiles() {
  const container = document.getElementById('childrenGrid');
  if (!container || typeof childProfiles === 'undefined') return;

  const searchQuery = document.getElementById('childSearchInput')?.value.toLowerCase() || '';

  const filtered = childProfiles.filter(child => {
    const matchesFilter = (activeChildFilter === 'all') ||
      (activeChildFilter === child.gender) ||
      (activeChildFilter === child.location);

    const matchesSearch = child.name.toLowerCase().includes(searchQuery) ||
      child.condition.toLowerCase().includes(searchQuery) ||
      child.hospital.toLowerCase().includes(searchQuery) ||
      child.id.toLowerCase().includes(searchQuery);

    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; background: white; border-radius: 12px; color: var(--text-muted);">
        <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; margin-bottom: 10px;"></i>
        <p>No child profiles matching your search query or filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(child => {
    const percent = Math.min(100, Math.round((child.raisedAmount / child.estimatedCost) * 100));
    return `
      <div class="child-card">
        <div class="child-img-wrap">
          <img src="${child.image}" alt="${child.name}">
          <span class="child-category-badge">${child.category}</span>
          <span class="child-status-badge">${child.status}</span>
        </div>
        <div class="child-body">
          <div class="child-header-row">
            <h3 class="child-name">${child.name}</h3>
            <span class="child-age">${child.age}</span>
          </div>
          <p class="child-hospital"><i class="fa-solid fa-hospital-user"></i> ${child.hospital}</p>
          <div class="child-condition">${child.condition}</div>

          <div class="financial-progress">
            <div class="progress-meta">
              <span class="raised-val">Raised: ₹${child.raisedAmount.toLocaleString()}</span>
              <span class="goal-val">Goal: ₹${child.estimatedCost.toLocaleString()} (${percent}%)</span>
            </div>
            <div class="progress-bar-wrap">
              <div class="progress-bar-fill" style="width: ${percent}%;"></div>
            </div>
          </div>

          <div class="card-actions-grid">
            <button class="btn-invoice" onclick="openInvoiceModal('${child.id}')">
              <i class="fa-solid fa-file-invoice"></i> Medical Invoice
            </button>
            <button class="btn-sponsor" onclick="openPaymentModal('${child.name} (${child.id})', ${child.estimatedCost - child.raisedAmount})">
              <i class="fa-solid fa-heart"></i> Sponsor Aid
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function initFilterControls() {
  const searchInput = document.getElementById('childSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', renderChildProfiles);
  }

  const filterBtns = document.querySelectorAll('#genderFilterGroup .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeChildFilter = e.target.getAttribute('data-filter');
      renderChildProfiles();
    });
  });
}

/* ==========================================================================
   3. Render Certified Doctors
   ========================================================================== */
function renderDoctorProfiles() {
  const container = document.getElementById('doctorsGrid');
  if (!container || typeof certifiedDoctors === 'undefined') return;

  container.innerHTML = certifiedDoctors.map(doc => `
    <div class="doctor-card">
      <div class="doctor-avatar-wrap">
        <img src="${doc.image}" alt="${doc.name}">
        <div class="doctor-verified-icon"><i class="fa-solid fa-check"></i></div>
      </div>
      <h3 class="doctor-name">${doc.name}</h3>
      <div class="doctor-title">${doc.title}</div>
      <div class="doctor-degree">${doc.degree}</div>
      <div class="doctor-hospital-tag"><i class="fa-solid fa-building-hospital"></i> ${doc.hospital}</div>

      <div class="doctor-meta-row">
        <div class="doc-meta-item">
          <strong>${doc.experience}</strong> Exp
        </div>
        <div class="doc-meta-item">
          <strong><i class="fa-solid fa-star" style="color:#f59e0b;"></i> ${doc.rating}</strong> (${doc.reviews})
        </div>
      </div>

      <button class="btn-book-doc" onclick="openDoctorModal('${doc.name}', '${doc.hospital}')">
        <i class="fa-solid fa-calendar-check"></i> Book Consultation
      </button>
    </div>
  `).join('');
}

/* ==========================================================================
   4. Modal Managers & Handlers
   ========================================================================== */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function openInvoiceModal(childId) {
  const child = childProfiles.find(c => c.id === childId);
  if (!child) return;

  document.getElementById('invModalTitle').textContent = `Medical Invoice: ${child.name} (${child.id})`;
  document.getElementById('invModalSubtitle').textContent = `Invoice No: ${child.invoiceNo} | Doctor: ${child.doctorInCharge}`;

  const rows = child.invoiceItems.map(item => `
    <tr>
      <td>${item.description}</td>
      <td style="text-align: right; font-weight: 700;">₹${item.cost.toLocaleString()}</td>
    </tr>
  `).join('');

  document.getElementById('invModalContent').innerHTML = `
    <p style="margin-bottom: 12px; font-size: 0.9rem;"><strong>Admission Date:</strong> ${child.admissionDate} | <strong>Diagnosis:</strong> ${child.condition}</p>
    <table class="invoice-table">
      <thead>
        <tr>
          <th>Medical Service / Procedure</th>
          <th style="text-align: right;">Amount (INR)</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
        <tr class="invoice-total-row">
          <td>Total Hospital Estimate</td>
          <td style="text-align: right;">₹${child.estimatedCost.toLocaleString()}</td>
        </tr>
      </tbody>
    </table>
    <div style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center;">
      <span style="font-size: 0.85rem; color: var(--success); font-weight: 700;"><i class="fa-solid fa-circle-check"></i> Verified Hospital Ledger</span>
      <button class="btn-sponsor" onclick="closeModal('invoiceModal'); openPaymentModal('${child.name} (${child.id})', ${child.estimatedCost - child.raisedAmount});">
        Sponsor This Invoice
      </button>
    </div>
  `;

  openModal('invoiceModal');
}

function openDoctorModal(docName, docHospital) {
  document.getElementById('docModalName').textContent = `Book Consultation with ${docName}`;
  document.getElementById('docModalHospital').textContent = docHospital;
  openModal('doctorModal');
}

function handleDoctorBooking(e) {
  e.preventDefault();
  closeModal('doctorModal');
  showToast('Consultation request submitted successfully! Confirmation SMS sent.');
}

function openPaymentModal(paymentFor, suggestedAmount) {
  document.getElementById('payGatewayMethod').value = paymentFor;
  if (suggestedAmount && suggestedAmount > 0) {
    document.getElementById('payAmount').value = Math.min(suggestedAmount, 50000);
  }
  openModal('paymentModal');
}

/* ==========================================================================
   5. Simulated Payment Gateway & Receipt Generator (Razorpay/Twilio simulation)
   ========================================================================== */
function processSimulatedPayment(e) {
  e.preventDefault();

  const name = document.getElementById('payDonorName').value || 'Donor';
  const email = document.getElementById('payDonorEmail').value || 'donor@email.com';
  const amount = parseFloat(document.getElementById('payAmount').value) || 4500;
  const method = document.getElementById('payGatewayMethod').value || 'UPI / Card';

  const btn = document.getElementById('btnSubmitPayment');
  btn.disabled = true;
  btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Verifying Razorpay Gateway...`;

  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = `<i class="fa-solid fa-lock"></i> Pay Now & Generate Receipt`;
    closeModal('paymentModal');

    // Simulate Twilio SMS/WhatsApp receipt alert (from dontknow.txt)
    showToast(`Payment of ₹${amount.toLocaleString()} Verified! WhatsApp & Email Receipt Dispatched.`);

    // Populate Official Receipt Modal (from providedhtml3.txt / backend PDF generator)
    const recId = 'NK-REC-' + Math.floor(10000 + Math.random() * 90000);
    const recDate = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

    document.getElementById('recNo').textContent = recId;
    document.getElementById('recDate').textContent = recDate;
    document.getElementById('recDonorName').textContent = name;
    document.getElementById('recDonorEmail').textContent = email;
    document.getElementById('recMethod').textContent = method;
    document.getElementById('recAmount').textContent = `₹${amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;

    openModal('receiptModal');
  }, 1200);
}

/* ==========================================================================
   6. Multi-Step Form Wizard Logic (anatherthing.txt)
   ========================================================================== */
function initFormWizard() {
  const btnPrev = document.getElementById('btnWizardPrev');
  const btnNext = document.getElementById('btnWizardNext');

  if (!btnPrev || !btnNext) return;

  btnPrev.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      updateWizardUI();
    }
  });

  btnNext.addEventListener('click', () => {
    if (currentStep < totalSteps) {
      if (validateStep(currentStep)) {
        currentStep++;
        updateWizardUI();
      }
    } else {
      if (validateStep(currentStep)) {
        submitApplicationForm();
      }
    }
  });
}

function updateWizardUI() {
  // Update step indicators
  document.querySelectorAll('.wizard-step-item').forEach(item => {
    const step = parseInt(item.getAttribute('data-step'));
    item.classList.remove('active', 'completed');
    if (step === currentStep) {
      item.classList.add('active');
    } else if (step < currentStep) {
      item.classList.add('completed');
    }
  });

  // Update step panes
  document.querySelectorAll('.form-step-pane').forEach((pane, idx) => {
    pane.classList.remove('active');
    if (idx + 1 === currentStep) {
      pane.classList.add('active');
    }
  });

  // Update navigation buttons
  const btnPrev = document.getElementById('btnWizardPrev');
  const btnNext = document.getElementById('btnWizardNext');

  if (currentStep === 1) {
    btnPrev.style.visibility = 'hidden';
  } else {
    btnPrev.style.visibility = 'visible';
  }

  if (currentStep === totalSteps) {
    btnNext.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Submit Details (जमा करें)`;
    btnNext.style.background = 'var(--success)';
  } else {
    btnNext.innerHTML = `Next Step <i class="fa-solid fa-arrow-right"></i>`;
    btnNext.style.background = 'var(--pink)';
  }
}

function validateStep(step) {
  if (step === 1) {
    const name = document.getElementById('full_name').value.trim();
    const age = document.getElementById('age').value.trim();
    const father = document.getElementById('father_name').value.trim();
    const mother = document.getElementById('mother_name').value.trim();
    if (!name || !age || !father || !mother) {
      showToast('Please fill in all mandatory personal details (Name, Age, Father, Mother).');
      return false;
    }
  } else if (step === 2) {
    const phone = document.getElementById('mobile_number').value.trim();
    const address = document.getElementById('full_address').value.trim();
    if (!phone || !address) {
      showToast('Please enter mobile number and full residential address.');
      return false;
    }
  }
  return true;
}

function submitApplicationForm() {
  const applicantName = document.getElementById('full_name').value;
  showToast(`Application for ${applicantName} submitted successfully! Handover settlement in progress.`);

  // Reset Form after 1 sec
  setTimeout(() => {
    document.getElementById('adoptionAppForm').reset();
    document.querySelectorAll('.file-preview-box').forEach(box => box.innerHTML = '');
    currentStep = 1;
    updateWizardUI();
  }, 1500);
}

function previewUploadedFile(input, targetId) {
  const previewBox = document.getElementById(targetId);
  if (!previewBox) return;

  if (input.files && input.files[0]) {
    const file = input.files[0];
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        previewBox.innerHTML = `
          <img src="${e.target.result}" alt="Preview">
          <span>${file.name} (${Math.round(file.size / 1024)} KB)</span>
        `;
      };
      reader.readAsDataURL(file);
    } else {
      previewBox.innerHTML = `
        <i class="fa-solid fa-file-pdf" style="font-size:1.5rem; color:var(--primary);"></i>
        <span>${file.name} (${Math.round(file.size / 1024)} KB)</span>
      `;
    }
  }
}

/* ==========================================================================
   7. Toast Notification Manager
   ========================================================================== */
function showToast(message) {
  const toast = document.getElementById('toastBox');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

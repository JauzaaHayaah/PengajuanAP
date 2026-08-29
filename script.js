// script.js - Logika Render Tabel, Perhitungan Target 1,2M & Status Evaluasi

document.addEventListener("DOMContentLoaded", () => {
  initUserInfo();
  renderTable();
  renderRequirements();
});

function initUserInfo() {
  document.getElementById("user-name-text").innerText = principalInfo.nama;
}

// Format Angka ke Rupiah / Juta / Miliar
function formatRupiahJuta(nominalJuta) {
  if (nominalJuta >= 1000) {
    const miliarm = (nominalJuta / 1000).toFixed(1).replace(".", ",");
    return miliarm + " M";
  }
  return nominalJuta + " Jt";
}

function formatNumber(angka) {
  return angka.toLocaleString("id-ID");
}

function renderTable() {
  const tbody = document.getElementById("candidates-table-body");
  tbody.innerHTML = "";

  const TARGET_TOTAL_GC = 1200; // Target Kombinasi GC Pribadi + Team = 1.2 Miliar (1.200 Juta)

  candidatesData.forEach((candidate, index) => {
    // Perhitungan Total GC & Surplus/Gap
    const totalGc = candidate.gcPribadi + candidate.gcTeam;
    const gapOrSurplus = totalGc - TARGET_TOTAL_GC;

    // Evaluasi Status Kelulusan Syarat
    const isGcPassed = totalGc >= TARGET_TOTAL_GC;
    const isListingPassed = candidate.checks.listing;
    const isTeamPassed = candidate.checks.totalTeam;
    const isBmPassed = candidate.checks.totalBm;

    const isAllPassed = isGcPassed && isListingPassed && isTeamPassed && isBmPassed;

    // Badge Gap / Surplus HTML
    let badgeHtml = "";
    if (gapOrSurplus < 0) {
      badgeHtml = `<div class="badge-gap-minus">${gapOrSurplus} Jt</div>`;
    } else {
      badgeHtml = `<div class="badge-gap-plus">+${gapOrSurplus} Jt</div>`;
    }

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td style="text-align: center;">${index + 1}</td>
      <td><strong>${candidate.nama}</strong></td>
      <td>${candidate.wilayah}</td>
      
      <!-- KOLOM UNI (BO, BS, FT) -->
      <td style="text-align: center;">${candidate.bo ? '<span class="text-green">✓</span>' : ''}</td>
      <td style="text-align: center;">${candidate.bs ? '<span class="text-green">✓</span>' : ''}</td>
      <td style="text-align: center;">${candidate.ft ? '<span class="text-green">✓</span>' : ''}</td>
      
      <!-- GC PRIBADI -->
      <td style="text-align: right;">
        ${formatRupiahJuta(candidate.gcPribadi)}
      </td>
      
      <!-- GC TEAM (+ HIGHLIGHT SURPLUS / GAP TULISAN KECIL DIBAWAHNYA) -->
      <td style="text-align: right;">
        <div>${formatRupiahJuta(candidate.gcTeam)}</div>
        ${badgeHtml}
      </td>
      
      <!-- LIMIT BREAKER -->
      <td style="text-align: center;">
        ${candidate.limitBreaker}
      </td>
      
      <!-- LISTING (Kotak Merah jika tidak memenuhi, tanpa tanda red cross) -->
      <td style="text-align: center;" class="${isListingPassed ? '' : 'cell-failed'}">
        ${formatNumber(candidate.listing)}
      </td>
      
      <!-- TOTAL TEAM (Kotak Merah jika tidak memenuhi, tanpa tanda red cross) -->
      <td style="text-align: center;" class="${isTeamPassed ? '' : 'cell-failed'}">
        ${candidate.totalTeam}
      </td>
      
      <!-- TOTAL BM (Kotak Merah jika tidak memenuhi, tanpa tanda red cross) -->
      <td style="text-align: center;" class="${isBmPassed ? '' : 'cell-failed'}">
        ${candidate.totalBm}
      </td>
      
      <!-- STATUS SYARAT (Checklist atau Red Cross HANYA muncul di kolom ini) -->
      <td style="text-align: center;">
        ${
          isAllPassed
            ? '<span class="text-green" title="Memenuhi Syarat">✓</span>'
            : '<span class="text-red" title="Tidak Memenuhi Syarat">❌</span>'
        }
      </td>
    `;

    tbody.appendChild(tr);
  });
}

function renderRequirements() {
  const container = document.getElementById("requirements-container");
  container.innerHTML = "";

  syaratTambahanData.forEach(cat => {
    const groupDiv = document.createElement("div");
    groupDiv.className = "req-group";

    let listHtml = "";
    cat.items.forEach(item => {
      listHtml += `<li>${item}</li>`;
    });

    groupDiv.innerHTML = `
      <div class="req-group-title">
        <span>${cat.icon}</span>
        <span>${cat.kategori}</span>
      </div>
      <div class="req-group-body">
        <ul class="req-item-list">
          ${listHtml}
        </ul>
      </div>
    `;

    container.appendChild(groupDiv);
  });
}
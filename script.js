// script.js - Logika Render Tabel & Evaluasi Kotak Merah

document.addEventListener("DOMContentLoaded", () => {
  initUserInfo();
  renderTable();
  renderRequirements();
});

// 1. Set Informasi User (Pojok Kiri Atas)
function initUserInfo() {
  document.getElementById("user-name-text").innerText = principalInfo.nama;
}

// Helper Format Angka ke Rupiah
function formatRupiah(angka) {
  if (angka >= 1000000000) {
    return (angka / 1000000000).toFixed(1).replace(".", ",") + " M";
  } else if (angka >= 1000000) {
    return (angka / 1000000).toFixed(0) + " Jt";
  }
  return angka.toLocaleString("id-ID");
}

// Helper Format Ribuan
function formatNumber(angka) {
  return angka.toLocaleString("id-ID");
}

// 2. Render Tabel Evaluasi Calon AP
function renderTable() {
  const tbody = document.getElementById("candidates-table-body");
  tbody.innerHTML = "";

  candidatesData.forEach((candidate, index) => {
    // Mengecek apakah SEMUA kriteria bernilai true
    const isAllPassed = Object.values(candidate.checks).every(val => val === true);

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td style="text-align: center;">${index + 1}</td>
      <td><strong>${candidate.nama}</strong></td>
      <td>${candidate.wilayah}</td>
      
      <!-- GC Pribadi -->
      <td style="text-align: right;" class="${candidate.checks.gcPribadi ? '' : 'cell-failed'}">
        ${formatRupiah(candidate.gcPribadi)}
      </td>
      
      <!-- GC Team -->
      <td style="text-align: right;" class="${candidate.checks.gcTeam ? '' : 'cell-failed'}">
        ${formatRupiah(candidate.gcTeam)}
      </td>
      
      <!-- Listing (Jika tidak memenuhi, kotaknya berwarna merah TANPA tanda red cross) -->
      <td style="text-align: center;" class="${candidate.checks.listing ? '' : 'cell-failed'}">
        ${formatNumber(candidate.listing)}
      </td>
      
      <!-- Total Team (Jika tidak memenuhi, kotaknya berwarna merah TANPA tanda red cross) -->
      <td style="text-align: center;" class="${candidate.checks.totalTeam ? '' : 'cell-failed'}">
        ${candidate.totalTeam}
      </td>
      
      <!-- Total BM (Jika tidak memenuhi, kotaknya berwarna merah TANPA tanda red cross) -->
      <td style="text-align: center;" class="${candidate.checks.totalBm ? '' : 'cell-failed'}">
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

// 3. Render Syarat Tambahan
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
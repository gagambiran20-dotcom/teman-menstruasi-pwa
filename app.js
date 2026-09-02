function showPage(page) {

  const content = document.getElementById("content");

  if (page === "menstruasi") {
    content.innerHTML = `
      <h2>🩸 Kenali Menstruasi</h2>
      <p>
        Menstruasi adalah proses keluarnya darah dari rahim
        yang terjadi secara berkala sebagai bagian dari siklus reproduksi.
      </p>
      <h3>📅 Siklus Menstruasi</h3>
      <p>
        Setiap perempuan dapat memiliki siklus menstruasi yang berbeda.
        Catat tanggal menstruasi untuk membantu mengenali pola siklusmu.
      </p>
    `;
  }

  else if (page === "hygiene") {
    content.innerHTML = `
      <h2>🧼 Personal Hygiene</h2>
      <p>Beberapa hal yang dapat dilakukan saat menstruasi:</p>
      <ul>
        <li>Ganti pembalut secara berkala.</li>
        <li>Cuci tangan sebelum dan sesudah mengganti pembalut.</li>
        <li>Bersihkan area genital dengan benar.</li>
        <li>Gunakan pakaian dalam yang bersih dan nyaman.</li>
        <li>Buang pembalut dengan cara yang benar.</li>
      </ul>
    `;
  }

  else if (page === "nyeri") {
    content.innerHTML = `
      <h2>😣 Nyeri Haid</h2>
      <p>
        Nyeri haid atau dismenorea merupakan keluhan yang dapat terjadi
        sebelum atau selama menstruasi.
      </p>
      <h3>🌷 Cara membantu mengurangi nyeri</h3>
      <ul>
        <li>Kompres hangat pada bagian perut.</li>
        <li>Melakukan aktivitas fisik ringan.</li>
        <li>Istirahat yang cukup.</li>
        <li>Minum air yang cukup.</li>
      </ul>
    `;
  }

  else if (page === "nutrisi") {
    content.innerHTML = `
      <h2>🍎 Nutrisi</h2>
      <p>
        Saat menstruasi, tetap konsumsi makanan bergizi seimbang.
      </p>
      <ul>
        <li>Sayuran dan buah-buahan.</li>
        <li>Protein seperti telur, ikan, dan kacang-kacangan.</li>
        <li>Makanan yang mengandung zat besi.</li>
        <li>Minum air yang cukup.</li>
      </ul>
    `;
  }

  else if (page === "mitos") {
    content.innerHTML = `
      <h2>❓ Mitos & Fakta</h2>

      <h3>❌ Mitos</h3>
      <p>
        "Saat menstruasi tidak boleh berolahraga."
      </p>

      <h3>✅ Fakta</h3>
      <p>
        Aktivitas fisik ringan dapat dilakukan selama tubuh merasa nyaman.
      </p>

      <hr>

      <h3>❌ Mitos</h3>
      <p>
        "Menstruasi selalu harus datang tepat setiap tanggal yang sama."
      </p>

      <h3>✅ Fakta</h3>
      <p>
        Panjang siklus dapat berbeda antarperempuan dan dapat berubah
        dari waktu ke waktu.
      </p>
    `;
  }

  else if (page === "kuis") {

    content.innerHTML = `
      <h2>📝 Kuis Menstruasi</h2>

      <p><strong>1. Apa yang dimaksud dengan menstruasi?</strong></p>

      <button onclick="answer(false)">
        A. Penyakit pada rahim
      </button>

      <button onclick="answer(true)">
        B. Proses keluarnya darah dari rahim secara berkala
      </button>

      <button onclick="answer(false)">
        C. Infeksi pada organ reproduksi
      </button>

      <div id="result"></div>
    `;
  }
}


function answer(correct) {

  const result = document.getElementById("result");

  if (correct) {
    result.innerHTML = `
      <h3>🎉 Jawaban benar!</h3>
      <p>Bagus, kamu sudah memahami dasar menstruasi.</p>
    `;
  } else {
    result.innerHTML = `
      <h3>💡 Belum tepat.</h3>
      <p>Yuk baca kembali materi tentang menstruasi.</p>
    `;
  }
}

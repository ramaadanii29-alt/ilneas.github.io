/* =========================================================
   GANTI SEMUA TEKS DI BAWAH INI SESUAI KEINGINANMU
   ========================================================= */

const CONFIG = {
  recipientName: "AMEL",          // nama orang yang diberi kejutan
  songTitle: "SHAPE OF MY HEART",               // judul lagu
  songArtist: "BACKSTREET BOYS",          // nama penyanyi

  letterText: `Happy birthday EBOL JELEK BAU BELUM MANDI! 

Semoga yang disemogakan tersemogakan pokoknya yaa atur sendiri lah!`,

  wishesText: `Happy birthday sekali lagi! Semoga......................
  doa sendiri aja yaa dah gede juga "UMURNYA" orangnya mah kecil WKWKWK

Intinya ya Selamat Ulang Tahun yang ke - 18 Sesilia Syirani
Tetap Jadi Orang Baik Dan Normal yaa.`,
};

/* =========================================================
   JANGAN DIUBAH KECUALI KAMU MAU UBAH PERILAKU/LOGIKANYA
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // isi konten dari CONFIG ke halaman
  document.getElementById("recipient-line").textContent =
    `A SPECIAL GIFT FOR ${CONFIG.recipientName}`;
  document.getElementById("song-title").textContent = CONFIG.songTitle;
  document.getElementById("song-artist").textContent = CONFIG.songArtist;
  document.getElementById("letter-text").textContent = CONFIG.letterText;
  document.getElementById("wishes-text").textContent = CONFIG.wishesText;

  // ----- loading screen -----
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    mainContent.classList.add("show");
  }, 2200); // 2.2 detik loading, boleh diubah

  // ----- modal buka/tutup -----
  const letterModal = document.getElementById("letter-modal");
  const wishesModal = document.getElementById("wishes-modal");

  document.getElementById("open-letter").addEventListener("click", () => {
    letterModal.classList.add("open");
  });

  document.getElementById("open-wishes").addEventListener("click", () => {
    wishesModal.classList.add("open");
  });

  document.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.closest(".modal-overlay").classList.remove("open");
    });
  });

  // klik di luar kartu juga menutup modal
  [letterModal, wishesModal].forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
  });

  // ----- tombol play musik -----
  const audio = document.getElementById("bg-audio");
  const playBtn = document.getElementById("play-btn");
  let isPlaying = false;

  playBtn.addEventListener("click", () => {
    if (!isPlaying) {
      audio.play().catch(() => {
        alert("Taruh file musik.mp3 di folder yang sama dulu ya!");
      });
      playBtn.textContent = "❚❚";
    } else {
      audio.pause();
      playBtn.textContent = "▶";
    }
    isPlaying = !isPlaying;
  });
});

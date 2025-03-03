function loadVideo() {
  // Ambil nilai dari input
  const videoLink = document.getElementById('videoLink').value;

  // Ambil elemen video player
  const videoPlayer = document.getElementById('videoPlayer');

  // Jika input adalah "example", gunakan link default
  if (videoLink.toLowerCase() === "example") {
      videoPlayer.src = "https://xenforo.com/community/data/xfmg/video/157/157924-80fc41522d86e7b72ee0a467f67e7572.mp4";
      videoPlayer.load(); // Memuat ulang video
      videoPlayer.play(); // Memutar video secara otomatis
  } else if (videoLink) {
      // Jika input bukan "example", gunakan link yang dimasukkan
      videoPlayer.src = videoLink;
      videoPlayer.load(); // Memuat ulang video
      videoPlayer.play(); // Memutar video secara otomatis
  } else {
      alert("Silakan masukkan link video terlebih dahulu!");
  }
}

// Fungsi untuk Upload via Single File
function uploadSingleFile() {
  alert("Fitur Upload via Single File belum diimplementasikan.");
}

// Fungsi untuk Upload via Direktori
function uploadDirectory() {
  alert("Fitur Upload via Direktori belum diimplementasikan.");
}
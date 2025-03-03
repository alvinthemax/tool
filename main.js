function openTab(tabId, cssFile) {
  document.querySelectorAll('.tab-content').forEach(tab => {
      tab.style.display = 'none';
  });
  document.getElementById(tabId).style.display = 'block';
  document.getElementById('tabStyle').setAttribute('href', cssFile);
}

function openSettings() {
  document.getElementById("settingsModal").style.display = "flex";
}

function closeSettings() {
  document.getElementById("settingsModal").style.display = "none";
}

function changeVideoSize(cssFile) {
  document.getElementById('tabStyle').setAttribute('href', cssFile);
}

function useTab2Option(option) {
  alert("Anda memilih Tombol " + option + " di Tab 2.");
}

function changeIframeStyle(cssFile) {
  document.getElementById('tabStyle').setAttribute('href', cssFile);
  alert("Iframe style changed to: " + cssFile);
}

function openIframeModal() {
  const iframeLink = document.getElementById('iframeLink').value; // Ambil link dari input
  if (iframeLink) {
      const modalContent = `
          <iframe class="unique-iframe" src="${iframeLink}" width="100%" height="300px" frameborder="0"></iframe>
          <button class="close-btn" onclick="closeIframeModal()">✖</button>
      `;
      document.getElementById('uniqueIframeModal').querySelector('.unique-modal-content').innerHTML = modalContent;
      document.getElementById('uniqueIframeModal').style.display = "flex"; // Menampilkan modal
  } else {
      alert("Silakan masukkan link iframe terlebih dahulu!"); // Pesan jika input kosong
  }
}

function closeIframeModal() {
  document.getElementById('uniqueIframeModal').style.display = "none"; // Menyembunyikan modal
}

function addYouTubeVideo() {
  const youtubeLink = document.getElementById('youtubeLink').value;
  const youtubeContainer = document.getElementById('youtubeContainer');

  // Ekstrak ID dari link YouTube
  let videoId;
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = youtubeLink.match(youtubeRegex);

  if (match) {
      videoId = match[1];
  } else {
      videoId = youtubeLink; // Jika input adalah ID langsung
  }

  if (videoId) {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.width = "100%";
      iframe.height = "400px";
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;

      // Tambahkan iframe ke kontainer
      youtubeContainer.appendChild(iframe);
  } else {
      alert("Silakan masukkan ID atau link YouTube yang valid!");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  openTab('tab1', 'video1.css');
});
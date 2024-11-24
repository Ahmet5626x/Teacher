// Elemanları Seç
const letterCover = document.getElementById('letterCover');
const letterContent = document.getElementById('letterContent');
const openBtn = document.getElementById('openBtn');
const nextBtn = document.getElementById('nextBtn');
const gallery = document.getElementById('gallery');
const closeBtn = document.getElementById('closeBtn');
const images = document.querySelectorAll('.image-container');
const letter = document.getElementById('letter'); // Posta kutusu

let currentImageIndex = 0;

// "Aç" Butonuna Tıklama
openBtn.addEventListener('click', function () {
    letterCover.style.transform = 'translateY(-100%)'; // Kapak yukarı açılır
    letterContent.style.transform = 'translateY(0)'; // İçerik görünür hale gelir
    document.querySelector('.paper').style.opacity = '1'; // Kağıt görünür olur
    openBtn.style.display = 'none'; // "Aç" butonu gizlenir
    nextBtn.style.display = 'inline-block'; // "İleri" butonu görünür
});

// "İleri" Butonuna Tıklama
nextBtn.addEventListener('click', function () {
    letter.style.display = 'none'; // Posta kutusunu gizle
    letterContent.style.display = 'none'; // Posta içeriğini gizle
    gallery.style.display = 'flex'; // Galeriyi göster
    showImagesSequentially(); // Resimleri sırayla göster
});

// Resimleri Sırayla Gösterme
function showImagesSequentially() {
    if (currentImageIndex < images.length) {
        images[currentImageIndex].style.display = 'block'; // Sıradaki resmi göster
        setTimeout(() => {
            currentImageIndex++;
            showImagesSequentially(); // Sonraki resmi göster
        }, 2500); // 2.5 saniye sonra sıradaki resim
    } else {
        // Tüm resimler birlikte gösterilir
        images.forEach(image => {
            image.style.display = 'block';
        });
        closeBtn.style.display = 'inline-block'; // "Kapat" butonu görünür
    }
}

// "Kapat" Butonuna Tıklama
closeBtn.addEventListener('click', function () {
    // Posta kutusunu ve içeriğini sıfırla
    gallery.style.display = 'none'; // Galeriyi gizle
    letter.style.display = 'block'; // Posta kutusunu tekrar göster
    letterCover.style.transform = 'translateY(0)'; // Kapak kapatılır
    letterContent.style.display = 'block'; // Posta içeriğini tekrar göster
    document.querySelector('.paper').style.opacity = '0'; // Kağıt gizlenir
    openBtn.style.display = 'inline-block'; // "Aç" butonu görünür
    closeBtn.style.display = 'none'; // "Kapat" butonu gizlenir
    currentImageIndex = 0; // Resim sıfırlanır
    images.forEach(image => {
        image.style.display = 'none'; // Resimleri gizle
    });
});

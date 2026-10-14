// 1. HTML'deki butonumuzu ve unvan yazımızı JavaScript içine "yakalayıp" alıyoruz
const benimButonum = document.querySelector("button");
const unvanYazisi = document.querySelector(".unvan");

// 2. Butona "tıklandığında" (click) ne olacağını söylüyoruz
benimButonum.addEventListener("click", function() {
    
    // Unvan yazısının içeriğini dinamik olarak değiştiriyoruz!
    unvanYazisi.textContent = "🚀 JavaScript ile Sayfa Canlandı!";
    
    // Konsola da gizli bir mesaj yazdıralım (Geliştirici aracı için)
    console.log("Butona başarıyla tıklandı ve yazı değiştirildi!");
});
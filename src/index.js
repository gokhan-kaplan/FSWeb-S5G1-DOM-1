const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const navItems = document.querySelectorAll("nav a");
navItems.forEach((item, index) => {
  item.textContent = siteContent.nav[`nav-item-${index + 1}`];
});

const ctaH1 = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");
ctaH1.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;

const mainContent = document.querySelectorAll(".main-content .text-content");
const contentData = siteContent["ana-içerik"];
mainContent[0].querySelector("h4").textContent = contentData["özellikler-h4"];
mainContent[0].querySelector("p").textContent =
  contentData["özellikler-içerik"];
mainContent[1].querySelector("h4").textContent = contentData["hakkımızda-h4"];
mainContent[1].querySelector("p").textContent =
  contentData["hakkımızda-içerik"];
mainContent[2].querySelector("h4").textContent = contentData["servisler-h4"];
mainContent[2].querySelector("p").textContent =
  contentData["servisler-içeriği"];
mainContent[3].querySelector("h4").textContent = contentData["ürünler-h4"];
mainContent[3].querySelector("p").textContent = contentData["ürünler-içeriği"];
mainContent[4].querySelector("h4").textContent = contentData["vizyon-h4"];
mainContent[4].querySelector("p").textContent = contentData["vizyon-içeriği"];

const contact = document.querySelector(".contact h4");
const contactItems = document.querySelectorAll(".contact p");
contact.textContent = siteContent.iletisim["iletişim-h4"];
contactItems[0].textContent = siteContent.iletisim.adres;
contactItems[1].textContent = siteContent.iletisim.telefon;
contactItems[2].textContent = siteContent.iletisim.email;
console.log(siteContent.iletisim.email);

const footerText = document.querySelector("footer p");
footerText.textContent = siteContent.footer.copyright;

/*
Resimlere erişemedim
*/

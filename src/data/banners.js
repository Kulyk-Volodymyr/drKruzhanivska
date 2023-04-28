const bgMain = require("../assets/banners/young-woman.jpg");
const bgServices = require("../assets/banners/beautiful-woman.jpg");
const bgDoctors = require("../assets/banners/doctor-writing.jpg");
const bgPrices = require("../assets/banners/cosmetologist-showing.jpg");
const bgGallery = require("../assets/banners/rejuvenating.jpg");
const bgContacts = require("../assets/banners/woman-cosmetology.jpg");
const bgContacts1 = require("../assets/banners/flowers.jpg");

export const BANNERS = {
    main: {
        title: "Dr. KRUZHANIVSKA",
        image: bgMain,
        brightness: 70,
        contrast: 90
    },
    services: {
        title: "Наші послуги",
        image: bgServices,
        brightness: 80,
        contrast: 100
    }, 
    doctors: {
        title: "Наші лікарі",
        image: bgDoctors,
        brightness: 70,
        contrast: 90
    },
    prices: {
        title: "Ціни на послуги",
        image: bgPrices,
        brightness: 60,
        contrast: 90
    }, 
    gallery: {
        title: "Фотогалерея",
        image: bgGallery,
        brightness: 60,
        contrast: 90
    },
    contacts: {
        title: "Контакти", 
        image: bgContacts1,
        brightness: 60,
        contrast: 90
    }
}


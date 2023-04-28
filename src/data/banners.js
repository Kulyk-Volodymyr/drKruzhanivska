const bgMain = require("../assets/banners/young-woman-having-facial-treatment.jpg");
const bgServices = require("../assets/banners/beautiful-woman-spa-having-cosmetic-treatment.jpg");
const bgDoctors = require("../assets/banners/doctor-writing-medical-reports-while-talking-patient.jpg");
const bgPrices = require("../assets/banners/cosmetologist-showing-her-patient-innovations-cosmetology.jpg");
const bgGallery = require("../assets/banners/rejuvenating-facial-treatment.jpg");
const bgContacts = require("../assets/banners/woman-cosmetology-studio-procedures.jpg");
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


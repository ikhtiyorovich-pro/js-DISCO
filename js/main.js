// document.body.style.backgroundColor = "red";
// // document.querySelector("body").style.backgroundColor = "red";

// var paragraph = document.createElement('p');//paragraph nomi ostida p elementini yaratish
// console.log(paragraph);

// paragraph.textContent = "qalay ishlar"; //<p>qalay ishlar?</p>

// document.body.append("qalay ishlar");

// // ==================================================================================================================

// var item = prompt("Muddatli to'lovga buyum harid qilasizmi?")

// var money = prompt("Nima harid qilmoqchisiz?")


// =================================================================================================================

var discoTest = parseInt(prompt("Yoshing nechchida?", "") .trim(), 10);
var discoAge = 18;

if(discoTest >= discoAge) {
    document.querySelector('.xabar').textContent = "Bemalol kirishingiz mumkin!"
} else {
    document.querySelector(".xabar").textContent = "Hali yoshlik qilasan diskotekaga kirishga! Mayli hozircha shuni ko'rib tur"
}

// ===================================================================================================================


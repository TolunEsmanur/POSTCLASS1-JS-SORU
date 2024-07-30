//  ? her çağrıldığında 1-6 arası random sayı veren fonksiyon
// ? Math.random rasgele sayı üretme



function zar(){
    console.log(Math.floor(Math.random()*6)+1);
}

zar()

//? 2 zar atılacak 
//? sonuçları 2-3,3-6,4-6 şeklinde gösterecek
//? her zaman sol tarafta küçük olan sergilenecek
//? sonuçlar eşit gelirse konsolda tebrikler 4-4 şeklinde attınız yazılacak


// const zarOyunu = () => {
//     const zarAt = () => Math.floor(Math.random()*6)+1
//     let zar1 = zarAt()
//     let zar2 = zarAt()

//     if(zar1 === zar2){
//         console.log(`${zar1}-${zar2} şeklinde attınız...`);
//     }else{
//         (zar1 < zar2) ? console.log(`${zar1},${zar2}`) : console.log(zar2,zar1);
//     }

//     // console.log(zar1);
//     // console.log(zar2);
// }

// zarOyunu()


// ? çiftlikteki hayvan sayılarını parametre alacak
// ? ayak sayılarının toplamını döndürecek fonksiyonu yazınız
// ? tavuk = 2, antilop = 4, koyun = 4 , ördek = 2

// const ayakSayisi = (tavuk,antilop,koyun,ördek) => {
//     let toplam = (tavuk + ördek) * 2 + (antilop + koyun) * 4
//     console.log(toplam);
// } 

// ayakSayisi(5,3,8,12)


// ? verilen kelimeyi tersine çevirme

// let isim = "mustafa"
// console.log(isim[6]);
// console.log(isim.length);



// function tersCevir(kelime){
//     let tersKelime = ""
//     for(let i = kelime.length-1 ; i >= 0 ; i--){
//         tersKelime += kelime[i]
//         // console.log(tersKelime);
//     }
//     return tersKelime;
// }

// // tersCevir("arife")


// // ? tersten ve kendi okunuşu aynı olan kelimeri bulma (palindrom)

// const palindromKelime = (kelime,tersCevir) => tersCevir(kelime) === kelime ? console.log("palindrom"): console.log("palindrom değil");

// palindromKelime("madam",tersCevir)
// palindromKelime("mustafa",tersCevir)


// ? -------------------------------------------------------------



// const yerDegistirme = (str) => {
//     let result = ""
//     for(let i = 0 ; i < str.length ; i++){
//         let num = parseInt(str[i],10)
//         num < 5 ? result += 0 : result += 1
//     }
//     return result
// }




// const yerDegistirme = (str) => {
//     let result = ""
//     for(let i = 0 ; i < str.length ; i++){
//         str[i] < 5 ? result += "0" : result += "1"
//     }
//     return result
// }

// console.log(yerDegistirme("366058"));
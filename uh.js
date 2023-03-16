//ulangan
//No 1
function Cetakfunction(nama) {

    return ` Hello Nama ` + nama

}
console.log(CetakFunction("Daria"));

//No 2
function myFunction(a, b){
    return hasil = a + b;
}
let angka1 = 20;
let angka2 = 7;
function myFunction(angka1, angka2) 
    return angka1 + angka2

let output = myFunction(angka2, angka2);
console.log(output);

//No 3
const hello = () =>{
    return a = "halo semua";
}
let our = hello ()
console.log("soal no 3");
console.log(our);


//No 4
let obj = {
    nama : "jhon",
    umur : 22,
    bahasa : "indonesia",

}
console.log("soal no 4");
console.log(obj.bahasa);




//No 5
let daftar = ["john doe","laki laki","baca buku",1992]
let objdaftar = {
    nama : daftar[0],
    gender : daftar [1],
    hobi : daftar[2],
    tahunlahir : daftar[3],

}
console.log("soal no 5")
console.log(objdaftar)


//No 6
let buah = [
    {
        nama:"nanas",
        warna:"kuning",
        adaBiji: "tidak ada",
        harga:900,
    }, {
        nama:"jeruk",
        warna:"orange",
        adaBiji:"ada",
        harga:"600",
    }, {
        nama:"semangka",
        warna:"hijau dan merah",
        adaBiji:"ada",
        harga:10000,
    }, {
        nama: "pisang",
        warna:"kuning",
        adaBiji:"tidak ada biji",
        harga:"1100",
    }
]
let filterBuah = buah.filter ((buah) => buah.adaBiji === "tidak ada biji");
console.log("soal no 6");
console.log(filterBuah);
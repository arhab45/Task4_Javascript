let nama = "John Doe"; 
let umur = 30; 
let mahasiswa = true; 
let alamat = null; 
let hobi = ["Membaca", "Bersepeda", "Berenang"]; 
let pekerjaan = "Pengembang"; 
let pengalaman = "5 tahun"; 

umur += 1; 
hobi.push("Hiking"); 

console.log("Informasi Pengguna:");
console.log("Nama:", nama);
console.log("Umur:", umur);
console.log("Mahasiswa:", mahasiswa);
console.log("Alamat:", alamat);
console.log("Hobi:", hobi);
console.log("Pekerjaan:", pekerjaan);
console.log("Pengalaman:", pengalaman);

alert("Welcome");

document.getElementById("nama").innerHTML = "Nama: " + nama;
document.getElementById("umur").innerHTML = "Umur: " + umur;
document.getElementById("mahasiswa").innerHTML = "Mahasiswa: " + mahasiswa;
document.getElementById("alamat").innerHTML = "Alamat: " + alamat;
document.getElementById("hobi").innerHTML = "Hobi: " + hobi.join(", "); 
document.getElementById("pekerjaan").innerHTML = "Pekerjaan: " + pekerjaan;
document.getElementById("pengalaman").innerHTML = "Pengalaman: " + pengalaman;
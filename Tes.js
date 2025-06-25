const transaksi = [25000, 50000, 30000, 50000, 60000, 100000, 40000, 30000, 20000, 70000, -400000, 100000, 60000, 70000, 50000, -300000, 20000, 55000, 40000, 50000, 60000, -150000, 30000, -500000, 100000];
const saldo_awal = 2000000
let saldo_berjalan = saldo_awal;
const banyaknya_transaksi = transaksi.length;


console.log("No | Jenis Transaksi | Nominal | Saldo Berjalan");
console.log("--------------------------------------------------");


console.log("Saldo Awal: " , saldo_awal);
// Menghitung saldo berjalan untuk setiap transaksi
let transaksi_berjalan = []
for (let i = 0; i < banyaknya_transaksi; i++) {
 saldo_berjalan += transaksi[i];
    transaksi_berjalan.push(saldo_berjalan);
if (transaksi[i] < 0) {
        console.log(`| ${i + 1} | Debit - Nominal : ${transaksi[i]} (Saldo Berjalan: ${saldo_berjalan})`);}
else {console.log(`| ${i+1} | Kredit - Nominal : ${transaksi[i]} | Saldo Berjalan: ${saldo_berjalan}`);
}
}

let total_kredit = 0;
let total_debit = 0;
const trx_kredit = transaksi.filter(trx => trx > 0);

const trx_debit = transaksi.filter(trx => trx < 0);
for (let i = 0; i < trx_kredit.length; i++) {
     total_kredit += trx_kredit[i];}
for (let i = 0; i < trx_debit.length; i++) {
     total_debit += trx_debit[i];}

     let saldo_akhir = saldo_awal + total_debit + total_kredit;



console.log("Saldo Akhir: ", saldo_akhir);
console.log("Banyaknya Transaksi: ", banyaknya_transaksi);
console.log("Total Kredit: ", total_kredit);
console.log("Total Debit: ", Math.abs(total_debit));

if (Math.abs(Math.abs(total_debit))>total_kredit) {
    console.log(`Transaksi Merugi : ${Math.abs(total_debit) - total_kredit}`);}
    else if (total_kredit>Math.abs(total_debit)) {
    console.log(`Transaksi Surplus : ${total_kredit + total_debit}`);}
else {console.log("Laporan Transaksi Seimbang");}


switch (true) {
    case (saldo_akhir = 0):
        console.log("Modal Lo Udah Habis!! :(");
        break;
    case (saldo_akhir <1000000):
        console.log("Modal Lo Hampir Habis nih!");
        break;
    case (saldo_akhir <2000000):
        console.log("Uang Modal Lo Berkurang nih");
        break;
    case (saldo_akhir = 2000000):
        console.log("Kaga Berubah Euy!");
    case (saldo_akhir > 2000000):
        console.log("Modal Lo Nambah Cuy! Mantap!");
        break;
    
}

console.log("--------------------------------------------------");
console.log("Terima kasih telah menggunakan layanan kami!");






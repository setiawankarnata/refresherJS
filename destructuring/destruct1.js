const namaList = ["setiawan", "karnata", "ryan", "vallerie"];
let [nama1, nama2] = namaList;
let [nama3, , , nama4] = namaList;
console.log(nama1, nama2, nama3, nama4)
console.log(nama3);


const alamatObject = {
    address : "Perumahan Kota Modern",
    city : "Tangerang",
    kodePos : 15117
};
let {address, city, kodePos} = alamatObject;
console.log(address, city, kodePos);
console.log(address);
console.log(kodePos + 2000);




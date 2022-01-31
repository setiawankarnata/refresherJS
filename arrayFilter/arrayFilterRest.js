const hasil = (...bil) =>  bil.filter(el => el > 25);
console.log(hasil(22, 17, 45, 29, 40, 70, 64));


const lst = [22, 17, 45, 29, 40, 70, 64];
const hsl = (...bl) => bl.filter(el => el > 25)
console.log(hsl(lst));


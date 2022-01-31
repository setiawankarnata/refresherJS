let ages = [22, 17, 45, 29, 40, 70, 64];
const prod = ages.filter(checkAges);

function checkAges(age) {
    return age > 25;
}
console.log(prod)
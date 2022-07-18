let num = [1,3,3,3,1,5,6,7,8,1];

let removeDuplicate = num.filter((element, index) => {
    return num.indexOf(element) === index;
});

console.log(removeDuplicate);
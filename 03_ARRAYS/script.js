var nums = [1,2,3,4,5,6,7,8,9];

function shuffle(array){
    var c = array.length, t, r;
    while (0 !== c) {
        r = Math.floor(Math.random() * c);
        c -= 1;

        t = array[c];
        array[c] = array[r];
        array[r] = t;
    }
    return array;
}

function show() {
    nums = shuffle(nums);
    nums.forEach(function (e) {
        var image = "<img src='img/aap" + e + ".jpg'>";
        document.body.innerHTML += image;
    });
}

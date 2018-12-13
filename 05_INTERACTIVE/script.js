let prev = null;
function likeMe(id){
    if(prev != null){
        let e = document.getElementsByClassName('like');
        document.getElementById(prev).removeChild(e.item(0));
        document.getElementById(id).innerHTML += "<img src='img/like.png' class='like'>";
        prev = id;
    }
    else{
        document.getElementById(id).innerHTML += "<img src='img/like.png' class='like'>";
        prev = id;
    }
}

////////////////MEMORY GAME/////////
/// its a chaos, total chaos
// it can be done easier tho :_:
let nums = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];

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

// shuffles and shows images inside body.
function show() {
    nums = shuffle(nums);
    nums.forEach(function (e) {
        let image = document.createElement("img");
        image.classList.add(e);
        image.src = 'img/cover.png';

        document.body.appendChild(image);

        if(document.getElementsByClassName(e).length > 1){
            var it = document.getElementsByClassName(e).item(0);
            it.classList.add('a');

            it.addEventListener("click", function(){
                selectIt(e, "a");
            });

            it = document.getElementsByClassName(e).item(1);
            it.classList.add('b');

            it.addEventListener("click", function(){
                selectIt(e, "b");
            });
        }
    });
}

// game logic, points etc. all in one chaos.
let canClick = true;
let points = 0;
let s1 = null, s2 = null;
function selectIt(id,tag){
    if(canClick) {
        if (s1 == null) {
            s1 = document.getElementsByClassName(id + ' ' + tag.toString()).item(0);
            if(!s1.classList.contains('done')) {
                s1.src = 'img/aap' + id + '.jpg';
            }
            else { s1 = null; }
        } else if (s1 != null && s2 == null) {

            s2 = document.getElementsByClassName(id + ' ' + tag.toString()).item(0);
            if(!s2.classList.contains('done')){

                if (s1.classList.contains(id.toString()) && s2.classList.contains(id.toString()) &&
                    !s1.classList.contains('done') && !s2.classList.contains(('done'))) {

                    s1.src = 'img/aap' + id + ".jpg";
                    s2.src = 'img/aap' + id + ".jpg";
                    s1.classList.add('done');
                    s2.classList.add('done');
                    points++;
                    document.getElementById('points').innerText = points;
                    s1 = null;
                    s2 = null;
                }
                else {
                    s1.src = 'img/aap' + s1.classList.item(0) + ".jpg";
                    s2.src = 'img/aap' + s2.classList.item(0) + ".jpg";
                    canClick = false;
                    // let the images stay for a sec.
                    setTimeout(function () {
                        waitOut(s1, s2);
                    }, 1000);
                }
            } else{
                s2 = null;
            }

        }
    }
}

// reset selected images
function waitOut(a,b) {
    canClick = true;
    a.src = 'img/cover.png';
    b.src = 'img/cover.png';
    s1 = null;
    s2 = null;
}

/// hueheheueuhe resetto
function reset() {
    points = 0;
    s1 = null;
    s2 = null;

    const elements = document.body.getElementsByTagName("img");
    while(elements.length){
        elements[0].parentNode.removeChild(elements[0]);
    }
    // reinit the images in new order
    show();
}
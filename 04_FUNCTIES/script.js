    let mijnauto = {
        merk: "Ford",
        type: "Mondeo",
        aantalWielen: 4,
        kleur: "blauw"
    };

    mijnauto.toetItLikeItsHot = function() {
        console.log("TOET TOET TOET");
        document.getElementById('toet').innerHTML = "TOET TOET TOET";
    };

    mijnauto.fastAndFurious = function(){
        console.log('192km/h ( it so fast )');
        document.getElementById('gas').innerText = '192km/h ( it so fast )';
    };

    var count = 1;
    function switchImages(){
        document.getElementById('slider').src = "img/aap"+count+".jpg";
        if(count < 9) count++;
        else count = 1;
    }

    var hcount = 1;
    function switchHeads(){
        document.getElementById('head').src = "img/head"+hcount+".png";
        if(hcount < 3) hcount++;
        else hcount = 1;
    }

    var tcount = 1;
    function switchTorso(){
        document.getElementById('torso').src = "img/torso"+tcount+".png";
        if(tcount < 3) tcount++;
        else tcount = 1;
    }
    var lcount = 1;
    function switchLegs(){
        document.getElementById('legs').src = "img/legs"+lcount+".png";
        if(lcount < 3) lcount++;
        else lcount = 1;
    }
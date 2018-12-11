function starte() {
    document.getElementById('paginatitel').innerHTML = "Dit is een pagina titel...";
    document.getElementById('subkop').innerHTML = "Dit is een subkop...";
    document.getElementById('aap1').src = 'aap1.jpg';
    document.getElementById('aap2').src = 'aap2.jpg';
}

function redoDivs(){
    document.getElementById('1').style.backgroundColor = 'aqua';
    document.getElementById('p1').style.textAlign = 'center';

    document.getElementById('2').style.backgroundColor = 'green';
    document.getElementById('2').style.marginTop = '20px';
    document.getElementById('p2').style.textAlign = 'center';
    document.getElementById('p2').style.marginTop = '40px';

    document.getElementById('3').style.backgroundColor = 'yellow';
    document.getElementById('3').style.marginTop = '50px';
    document.getElementById('p3').style.textAlign = 'right';

    document.getElementById('4').style.backgroundColor = 'red';
}
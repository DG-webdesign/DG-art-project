function enter() {
    let a, b, c;
    a = document.getElementById('n1').value;
    a = parseInt(a);

    b = document.getElementById('n2').value;
    b = parseInt(b);

    c = document.getElementById('n3').value;
    c = parseInt(c);


    result = a * ((1 + b / 100) ** c);

    document.getElementById('out').innerHTML = result;
    document.getElementById('out').innerHTML = Math.round(result) + ' $';
}



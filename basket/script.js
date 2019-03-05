let items = document.getElementsByClassName('item'),
    recycle = document.getElementById('recycle'),
    infotext = document.getElementById('infotext'),
    summ = document.getElementsByClassName('summ'),
    del_button = document.getElementsByClassName('del_button')
function addItem() {
    infotext.style.display = 'none';
    let item_clone = this.parentElement.cloneNode(true);
    recycle.appendChild(item_clone)

    let prices = recycle.getElementsByClassName('price')
    totalprice = 0;
    for (let j = 0; j < prices.length; j++) {
        totalprice = totalprice + Number(prices[j].innerHTML);
    }
    console.log('Общая стоимость', totalprice);
    summ[0].innerHTML = 'Общая стоимость ' + totalprice;
}
let item_button = document.getElementsByClassName('item_button');
for (var i = 0; i < item_button.length; i++) {
    item_button[i].onclick = addItem;
};
let buttonClear = document.getElementById('clear');
buttonClear.onclick = function() {
    recycle.innerHTML = ''
    recycle.appendChild(infotext)
    infotext.style.display = 'block';
    summ[0].innerText = '';
}

function delItem() {
    this.parentElement.remove()
}

for (var i = 0; i < del_button.length; i++) {
    del_button[i].setAttribute('onclick', 'delItem.call(this)');
}

let items = document.getElementsByClassName('item'),
    recycle = document.getElementById('basket'),
    infotext = document.getElementById('info_text'),
    summ = document.getElementsByClassName('summ'),
    del_button = document.getElementsByClassName('del_button');
    prices = recycle.getElementsByClassName('price');
    buttonClear = document.getElementsByClassName('clear')[0];
    total = 'Total price: '

function addItem() {
    infotext.style.display = 'none';
    let item_clone = this.parentElement.cloneNode(true);
    recycle.appendChild(item_clone)

    let totalprice = 0;

    buttonClear.classList.remove("hidden")
    for (let j = 0; j < prices.length; j++) {
        totalprice = totalprice + Number(prices[j].innerHTML);
    }
    summ[0].innerHTML = total + totalprice;
}
let item_button = document.getElementsByClassName('item_button');
for (let i = 0; i < item_button.length; i++) {
    item_button[i].onclick = addItem;
}

function deleteInfo() {
    recycle.appendChild(infotext);
    infotext.style.display = 'flex';
    buttonClear.classList.add("hidden")
    summ[0].innerText = '';
}

buttonClear.onclick = function() {
    recycle.innerHTML = '';
    deleteInfo();
}

function delItem() {
    this.parentElement.remove();
    let price = parseInt(summ[0].innerText.match(/\d+/)) - this.parentElement.getElementsByClassName('price')[0].innerHTML;
    summ[0].innerText = total + price;

    if (prices.length <1) {
        deleteInfo();
    }
}

for (var i = 0; i < del_button.length; i++) {
    del_button[i].setAttribute('onclick', 'delItem.call(this)');
}

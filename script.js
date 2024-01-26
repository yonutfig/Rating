var rateValue;
function rate()
{
    let rates = document.getElementsByClassName('rate');
    for(let i = 0; i < rates.length; i++)
    {
        rates[i].classList.remove('active');
    }
    event.target.classList.add('active');
    rateValue = event.target.innerHTML;
}

function submitRate()
{
    if(document.getElementById('submitMessage'))
    {
        document.getElementById('submitMessage')
        .remove();
    }
    const p = document.createElement('p');
    const text = document
    .createTextNode('You selected '+rateValue+
    ' out of 5');
    p.appendChild(text);
    p.classList.add('submited');
    p.id = 'submitMessage';
    document.getElementById('rateApp')
    .appendChild(p);
}
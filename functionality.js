const orderedList = document.createElement("ol");

function selectBtn(playersName) {
    const playersNameText = playersName.innerText;
    const list = document.createElement("li");
    list.innerText = playersNameText;

    document.getElementById("playList").appendChild(orderedList);
    orderedList.appendChild(list);

    const listLength = document.getElementsByTagName('li')
    if (listLength.length === 5) {
        alert('Oops!! You already added five Player.');
        document.getElementById('btn-1').setAttribute('disabled', '');
        document.getElementById('btn-2').setAttribute('disabled', '');
        document.getElementById('btn-3').setAttribute('disabled', '');
        document.getElementById('btn-4').setAttribute('disabled', '');
        document.getElementById('btn-5').setAttribute('disabled', '');
        document.getElementById('btn-6').setAttribute('disabled', '');
        document.getElementById('btn-7').setAttribute('disabled', '');
        document.getElementById('btn-8').setAttribute('disabled', '');
        document.getElementById('btn-9').setAttribute('disabled', '');
        document.getElementById('btn-10').setAttribute('disabled', '');
        document.getElementById('btn-11').setAttribute('disabled', '');
        document.getElementById('btn-12').setAttribute('disabled', '');
    }


}


document.getElementById('btn-1').addEventListener('click', function () {
    const players = document.getElementById('person-1')
    selectBtn(players)
    document.getElementById('btn-1').style.backgroundColor = '#A2A9AF';

    document.getElementById('btn-1').setAttribute('disabled', '');


})
document.getElementById('btn-2').addEventListener('click', function () {
    const players = document.getElementById('person-2')
    selectBtn(players)
    document.getElementById('btn-2').style.backgroundColor = '#A2A9AF';
    document.getElementById('btn-2').setAttribute('disabled', '');
})
document.getElementById('btn-3').addEventListener('click', function () {
    const players = document.getElementById('person-3')
    selectBtn(players)
    document.getElementById('btn-3').style.backgroundColor = '#A2A9AF';
    document.getElementById('btn-3').setAttribute('disabled', '');
})
document.getElementById('btn-4').addEventListener('click', function () {
    const players = document.getElementById('person-4')
    selectBtn(players)
    document.getElementById('btn-4').style.backgroundColor = '#A2A9AF';
    document.getElementById('btn-4').setAttribute('disabled', '');
})
document.getElementById('btn-5').addEventListener('click', function () {
    const players = document.getElementById('person-5')
    selectBtn(players)
    document.getElementById('btn-5').style.backgroundColor = '#A2A9AF';
    document.getElementById('btn-5').setAttribute('disabled', '');
})
document.getElementById('btn-6').addEventListener('click', function () {
    const players = document.getElementById('person-6')
    selectBtn(players)
    document.getElementById('btn-6').style.backgroundColor = '#A2A9AF';
    document.getElementById('btn-6').setAttribute('disabled', '');
})


document.getElementById('calculation').addEventListener('click', function () {
    const listLength = document.getElementsByTagName('li').length;
    const everyPlayer = document.getElementById('each-player').value;
    if (everyPlayer == "") {
        alert("ERROR!! please put a number.");
        return false;
    }
    const calculation = listLength * everyPlayer;

    const playerExpenses = document.getElementById('player-expenses')
    playerExpenses.innerText = calculation;


})

document.getElementById('calculation-total').addEventListener('click', function () {
    const listLength = document.getElementsByTagName('li').length;
    const everyPlayer = document.getElementById('each-player').value;

    const calculation = listLength * everyPlayer;

    const manager = parseFloat(document.getElementById('manager').value);
    const coach = parseFloat(document.getElementById('coach').value);


    if (manager == "" || coach == "") {
        alert("ERROR!! Please put a number.");
        return false;
    }
    else {

        const totalCalculation = calculation + manager + coach;

        const totalcalculation = document.getElementById('totalMoney')
        totalcalculation.innerText = totalCalculation;
    }

})
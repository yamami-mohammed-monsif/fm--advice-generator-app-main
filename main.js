

const myBtn = document.getElementById('generateAdviceBtn');

myBtn.addEventListener('click', () => {

    fetch('https://api.adviceslip.com/advice').then(
        (res) => res.json()
    ).then(
        (data) => {
            var advice = data.slip.advice;
            var adviceID = data.slip.id;

            document.getElementById('adviceID').textContent = adviceID;
            document.getElementById('advice').textContent = advice;
        }
    )
})
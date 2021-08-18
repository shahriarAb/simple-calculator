let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
for (const button of buttons) {
    button.addEventListener('click', function (e) {
        buttonText = e.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*';
            screen.value += buttonText;
        }
        else if (buttonText == 'Clear') {
            screen.value = '';
        }
        else if (buttonText == '<') {
            screen.value = screen.value.slice(0, -1);
        }
        else if (buttonText == '=') {
            screen.value = eval(screen.value);
        }
        else {
            screen.value += buttonText;
        }
    });
}
function remember_user()
{
        if(document.querySelector("#remember-me").checked==false)
        {
            document.querySelector("#remember-me").checked=true;
            document.querySelector("#remember-me-img").src="./icons/checkbox-checked.svg";
        }
        else
        {
            document.querySelector("#remember-me").checked=false;
            document.querySelector("#remember-me-img").src="./icons/checkbox-unchecked.svg";
        }
}
function handleRadioClick(id) {
        const radioButtons = document.getElementsByName('radioGroup');

        radioButtons.forEach(button => {
            const radioId = button.id;
            const radioIcon = button.parentElement.querySelector('.radio-icon img');

            if (radioId === id) {
                button.checked = true;
                radioIcon.src = "./quantum screen assets/icons/radio-button-on.svg";
            } else {
                button.checked = false;
                radioIcon.src = "./quantum screen assets/icons/radio-button-off.svg";
            }
        });
    }

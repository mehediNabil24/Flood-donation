function getInputValueById(id){
    const inputValue =document.getElementById(id).value ;
    const inputNo =parseFloat(inputValue);
    return inputNo;
}

function getTextValueById(id){
    const textValue =document.getElementById(id).innerText;
    const textNo =parseFloat(textValue);
    return textNo;

}


function showSectionById(id){
    document.getElementById('donation-history').classList.add('hidden');
    document.getElementById('flood-donation').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

function showColorById(id){
    document.getElementById()
}

let lastClickedButton = null;

function handleButtonClick(button){
    if(lastClickedButton){
        lastClickedButton.classList.remove('tia');
        lastClickedButton.classList.add('bg-gray-200');
    }
    button.classList.remove('bg-gray-200');
    
    button.classList.add('tia');

    lastClickedButton =button;
}

document.getElementById('show-donation').addEventListener('click',function(){
    showSectionById('flood-donation');
})

document.getElementById('show-history').addEventListener('click',function(){
    showSectionById('donation-history')
})


const popupBox = document.getElementById('popup-box');
    
const closePopupBtn =document.getElementById('close-popup');

closePopupBtn.addEventListener('click',function(){
popupBox.classList.add('hidden');
})

// window.addEventListener('click',function(event){
//     if(event.target===popupBox){
//     popupBox.classList.add('hidden');
//     }
// });

function showPopup(){
popupBox.classList.remove('hidden');
};


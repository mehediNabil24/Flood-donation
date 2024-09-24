document.getElementById('donate-noakhali-btn').addEventListener('click',function(){
    const donateMoney =getInputValueById('noakhali-donate-input');
    
    const noakhaliTotal =getTextValueById('noakhali-total');
    const totalAmount =getTextValueById('total-amount');
    console.log(donateMoney,noakhaliTotal);
    if(isNaN(donateMoney)){
        alert('Failed to donate money');
        return;
    }

    if(donateMoney<=0){
        alert('you can not donate this money');
        return;
    }

    if(donateMoney>totalAmount){
        alert('Failed to Donate');
        return;
    }


    
    const noakhaliDonation = donateMoney + noakhaliTotal;
    document.getElementById('noakhali-donate-input').value = '';
    console.log(noakhaliDonation);
    const restAmount = totalAmount - donateMoney;
    console.log(restAmount);
    document.getElementById('total-amount').innerText= restAmount;

    document.getElementById('noakhali-total').innerText =noakhaliDonation;

    // pop up box 
    

     showPopup();

   

    // history 
    const currentDateTime = new Date();
    const formattedDateTime =currentDateTime.toString();

    const div =document.createElement('div');
    div.classList.add('border');
    div.classList.add('rounded-lg');
    div.classList.add('shadow-md');
    
    div.innerHTML = `<p class="p-4 font-bold">  ${donateMoney} Taka is Donated for Flood in Noakhali,Bangladesh </p>
    <p class="p-4"> Donation Time: ${formattedDateTime}`
    
    document.getElementById('history-text').appendChild(div); 

    
    

})


// donate feni 


document.getElementById('donate-feni-btn').addEventListener('click',function(){
    const donateMoney =getInputValueById('feni-donate-input');
    const feniTotal =getTextValueById('feni-total');
    const totalAmount =getTextValueById('total-amount');
    console.log(donateMoney,feniTotal);
    if(isNaN(donateMoney)){
        alert('Failed to donate money');
        return;
    }

    if(donateMoney<=0){
        alert('you can not donate this money');
        return;
    }

    if(donateMoney>totalAmount){
        alert('Failed to Donate');
        return;
    }


    const feniDonation = donateMoney + feniTotal;
    console.log(feniDonation);
    const restAmount = totalAmount - donateMoney;
    console.log(restAmount);
    document.getElementById('total-amount').innerText= restAmount;

    document.getElementById('feni-total').innerText =feniDonation;

    // pop up box 
     showPopup();

    // transaction history 
    const currentDateTime = new Date();
    const formattedDateTime =currentDateTime.toString();
    const div =document.createElement('div');
    div.classList.add('border');
    div.classList.add('rounded-lg');
    div.classList.add('shadow-md');
    div.innerHTML = `<p class="p-4 font-bold">  ${donateMoney} Taka is Donated for Aid for flood in Feni, Bangladesh </p>
    <p class="p-4"> Donation Time: ${formattedDateTime}`
    
    document.getElementById('history-text').appendChild(div); 

    document.getElementById('feni-donate-input').value = '';
    

})

//  donate quota 



document.getElementById('donate-quota-btn').addEventListener('click',function(){
    const donateMoney =getInputValueById('quota-donate-input');
    const quotaTotal =getTextValueById('quota-total');
    const totalAmount =getTextValueById('total-amount');
    console.log(donateMoney,quotaTotal);
    if(isNaN(donateMoney)){
        alert('Failed to donate money');
        return;
    }

    if(donateMoney<=0){
        alert('you can not donate this money');
        return;
    }

    if(donateMoney>totalAmount){
        alert('Failed to Donate');
        return;
    }


    const quotaDonation = donateMoney + quotaTotal;
    console.log(quotaDonation);
    const restAmount = totalAmount - donateMoney;
    console.log(restAmount);
    document.getElementById('total-amount').innerText= restAmount;

    document.getElementById('quota-total').innerText =quotaDonation;


    // pop up box 
    showPopup();

    

    // transaction history 
    const currentDateTime = new Date();
    const formattedDateTime =currentDateTime.toString();
    
    const div =document.createElement('div');
    div.classList.add('border');
    div.classList.add('rounded-lg');
    div.classList.add('shadow-md');
    div.innerHTML = `<p class="p-4 font-bold">  ${donateMoney} Taka is Donated for Aid for Injured in the Quota movement,Bangladesh </p>
    <p class="p-4"> Donation Time: ${formattedDateTime}`
    
    document.getElementById('history-text').appendChild(div); 

    document.getElementById('quota-donate-input').value = '';
    

})



document.getElementById('show-donation').addEventListener('click',function(){
    
})


// blurred navbar 
window.addEventListener('scroll', function(){
    const navbar = document.getElementById('navbar');
    if(window.scrollY>50){
        navbar.classList.add('backdrop-blur-lg', 'bg-opacity-70');

    }
    else{
        navbar.classList.remove('backdrop-blur-lg','bg-opacity-70');

    }

});

// page changes 

document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href ='./blog.html';
})


// btn color swap

document.getElementById('show-donation').addEventListener('click',function(){
    handleButtonClick(document.getElementById('show-donation'));
});

document.getElementById('show-history').addEventListener('click',function(){
    handleButtonClick(document.getElementById('show-history'));
});





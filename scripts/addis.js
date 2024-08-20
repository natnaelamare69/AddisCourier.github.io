const menu_ = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.menu')

menu_.addEventListener('click', function(){
    menu_.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

)
let valueDisplay = document.querySelectorAll(".num");
let interval = 0.00001;

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
    ("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function (){
            startValue += 1;
            valueDisplay.textContent = startValue;
            if(startValue == endValue){
                clearInterval(counter);
            }
        }, duration);
});

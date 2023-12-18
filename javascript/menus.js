const allMenu = document.querySelectorAll('.itemContent')
const btns = document.getElementsByClassName('addBtn')
const ul = document.querySelector('.itemMenu')
const totalPrice = document.getElementById('totalPrice')
let menuList=[
    {   menuTitle:'Pizza',
       menuPrice:'12'
    },
    {   menuTitle:'Hamburger',
       menuPrice:'14'
    },
    {   menuTitle:'Beer',
       menuPrice:'12'
    }
]
console.log(menuList)
let total =0;
let item={} ;
function addMenu(index) {
    for(let i =0;i<menuList.length;i++){
      item =menuList[index]
      console.log(item)
    }
    let li = document.createElement('li')
    li.innerHTML=`
        <ul class="itemOrder">
                 <li class="itemTitle">${item.menuTitle} <span class="remove">remove</span></li>
                 <li class="itemPrice">$${item.menuPrice}</li>
        </ul>`
    ul.appendChild(li)
    const removeBtn = li.querySelector('.remove');
    removeBtn.addEventListener('click', () => {
        alert(`${item.menuTitle} has been removed from the order`);
        li.remove(); 
        total -= Number(item.menuPrice);
        totalPrice.innerHTML = '$' + total;
    });
  total+=Number(item.menuPrice)
  totalPrice.innerHTML='$'+ total
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        addMenu(i)
        alert(`${item.menuTitle} has been added to the order`);
    });
}
const formModal = document.querySelector('.modal');
const menu = document.querySelector('#menuOrder');
const orderBtn = document.getElementById('summaryBtn');
orderBtn.addEventListener('click',(event)=>{
   formModal.style.display="flex";
   event.stopPropagation();
   if (window.matchMedia('(max-width: 420px)').matches) {
     menu.style.backgroundColor='#e3e3e3'
    menu.style.width='100%'
    
} else {
    menu.style.backgroundColor='#e3e3e3'
    menu.style.width='600px'
}

})
// menu.addEventListener('click',()=>{
//      formModal.style.display='none';
// })

const darkBtn = document.querySelector('.dark-btn');
const buttonImg = document.getElementById('dark-img');

darkBtn.addEventListener('click', function() {
    document.body.classList.toggle('darkmode');

    if (document.body.classList.contains('darkmode')) {
        buttonImg.src = '../images/light.png';
    } else {
        buttonImg.src = '../imagesnight-mode (3).png';
    }
});



console.log(buttonImg.getAttribute('src'));

const inputName = document.getElementById('inputName')
const paySucess = document.getElementById('sucess')
const pay = document.querySelector('#payBtn')
const summary = document.querySelector('.summary')
pay.addEventListener('click',(e)=>{
    e.preventDefault();
    let userName = inputName.value;
    paySucess.style.display='block';
    paySucess.innerHTML=` Thanks, ${userName}! Your order is on its way!`
    summary.style.display='none'
    formModal.style.display='none';
})





let num =3;
console.log(num+=12)
// function calcAge(birthYear){
//     return 2023 - birthYear;
// }
// const age1 = calcAge(1993)
// console.log(age1)

// const calcAge2 = function (birthYear){
//     return 2023 - birthYear;
// }
// const age2 = calcAge2(1999)
// console.log(age2)
// //arrow function
// const calcAge3 = birthYear=>2023 - birthYear;
// const age3 = calcAge(1994)
// console.log(age3)

const retirementAge =(birthYear,firstname)=>{
    const age = 2023-birthYear;
    const retireAge = 65-age;
    return `${firstname} will retire in ${retireAge} years Time`;
}
console.log(retirementAge(1984,'Bernard'))




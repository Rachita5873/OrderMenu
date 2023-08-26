  
  
  window.onload= function getMenu(){
  let menu = fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
  .then((res)=>{
return res.json();
  })
  .then((data)=>{
   data.forEach(element => {
    let menu = element.name;
    let price = element.price;
    let i=element.id;
    let ids = i-1;
        let img = element.imgSrc;
    let imgTag = document.getElementsByClassName("card-img-top")[ids];
    imgTag.src=img;
    let menuName = document.getElementsByClassName("card-title")[ids];
    menuName.innerHTML=menu;
    let pricee = document.getElementsByClassName("card-text")[ids];
    pricee.innerHTML="$ " + price;
    
   });
  })

  

}


function getRandomBurgers() {
    const burgerMenu = [
      "Cheeseburger",
      "Bacon Burger",
      "Mushroom Swiss Burger",
      "BBQ Burger",
      "Veggie Burger",
      "Spicy Chicken Burger",
      "Double Burger"
    ];
    const selectedBurgers = [];
  while (selectedBurgers.length < 3) {
    const randomIndex = Math.floor(Math.random() * burgerMenu.length);
    const randomBurger = burgerMenu[randomIndex];
    if (!selectedBurgers.includes(randomBurger)) {
      selectedBurgers.push(randomBurger);
    }
  }

  return selectedBurgers;
}


  
  
  
  function TakeOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const orderedBurgers = getRandomBurgers();
        const orderObject = {
          burgers: orderedBurgers,
          status: "Order processed"
        };
        resolve(orderObject);
      }, 2500);
    });
  }
  
  function orderPrep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const orderStatus = {
          order_status: true,
          paid: false
        };
        resolve(orderStatus);
      }, 4000);
    });
  }
  
  function payOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const paymentStatus = {
          order_status: true,
          paid: true
        };
        resolve(paymentStatus);
      }, 6000);
    });
  }
  
  function thankyouFnc() {
    console.log("Thank you for eating with us today!");
    alert("Thank you for eating with us today!");
  }
  
  async function processOrder() {
    try {
      const paymentStatus = await payOrder();
      console.log("Payment Status:", paymentStatus);
  
      if (paymentStatus.paid) {
        const order = await TakeOrder();
        console.log("Order:", order);
  
        const preparationStatus = await orderPrep();
        console.log("Order Preparation Status:", preparationStatus);
  
        thankyouFnc();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  

  processOrder();
  

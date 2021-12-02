var item_holder = document.getElementById('item_holder');
// var num = document.querySelector('.num');
let count_row = document.getElementById('count_row');
let cart_row = document.getElementById('cart_row');

let inner_total = document.getElementById('inner_total');
console.log(inner_total.childNodes[1].innerHTML);
const items = [
    {
        image :"images/img14.jpg",
        price : 80,
        bust_size : "32-42",
        dress_size : "S,M,L,XL",
        dress_fab : "COTTON",
        button_value:1,
        id:"img1",
    },
    {
        image :"images/img13.jpg",
        price : 100,
        bust_size : "32-42",
        dress_size : "S,M,L,XL",
        dress_fab : "GEORGETTE",
        button_value:2,
        id:"img2",
    },
    {
        image :"images/img12.jpg",
        price : 80,
        bust_size : "32-42",
        dress_size : "S,M,L,XL",
        dress_fab : "COTTON",
        button_value: 3,
        id:"img3",
    },
    {
        image :"images/img11.jpg",
        price : 120,
        bust_size : "32-42",
        dress_size : "S,M,L,XL",
        dress_fab : "CHIFFON",
        button_value: 4,
        id:"img4",
    },
    {
        image :"images/img10.jpg",
        price : 170,
        bust_size : "32-42",
        dress_size : "S,M,L,XL",
        dress_fab : "SILK",
        button_value: 5,
        id:"img5",
    },
    {
        image :"images/img9.jpg",
        price : 150,
        bust_size : "32-42",
        dress_size : "S,M,L,XL",
        dress_fab : "CHIFFON",
        button_value: 6,
        id:"img6",
    },
    {
        image :"images/img8.jpg",
        price : 100,
        bust_size : "32-42",
        dress_size : "S,M,L,XL",
        dress_fab : "SILK",
        button_value: 7,
        id:"img7",
    },
    {
        image :"images/img7.jpg",
        price : 190,
        bust_size : "32-42",
        dress_size : "S,M,L,XL",
        dress_fab : "WOOL",
        button_value: 8,
        id:"img8",
    },
    {
        image :"images/img6.jpg",
        price : 200,
        bust_size : "32-42",
        dress_size : "S,M,L,XL",
        dress_fab : "VELVET",
        button_value: 9,
        id:"img9",
    },
    {
        image :"images/img5.jpg",
        price : 100,
        bust_size : "32-42",
        dress_size : "S,M,L,XL",
        dress_fab : "VELVET",
        button_value: 10,
        id:"img10",
    },
    {
        image :"images/img3.jpg",
        price : 80,
        bust_size : "32-42",
        dress_size : "S,M,L,XL",
        dress_fab : "COTTON",
        button_value: 11,
        id:"img11",
    },
    {
        image :"images/img2.jpg",
        price : 120,
        bust_size : "32-42",
        dress_size : "S,M,L,XL",
        dress_fab : "VELVET",
        button_value: 12,
        id:"img12",
    },
    {
        image :"images/img1.jpg",
        price : 100,
        bust_size : "32-42",
        dress_size : "S,M,L,XL",
        dress_fab : "SILK",
        button_value: 13,
        id:"img13",
    },
];
// console.log(items.length);

for(var i=0; i<items.length; i++){
    createItems(items[i].image,items[i].price,items[i]. bust_size,items[i].dress_size,items[i].dress_fab,items[i].button_value,items[i].id);
    // console.log(items[i].image);
}

function createItems(image,price, bust_size,dress_size,dress_fab, button_value,id){

var item_hol = document.createElement('div');
item_hol.setAttribute('class' , 'item');

var image_holder = document.createElement('div');
image_holder.setAttribute('class' , 'image-holder');



var img = document.createElement('img');
img.setAttribute('src' , image);
img.setAttribute('alt' , 'not-found');

var inner_image_holder = document.createElement('div');
inner_image_holder.setAttribute('class' , 'inner-image-holder');

var inner_holder = document.createElement('div');
inner_holder.setAttribute('class' , 'inner-holder');

var plus = document.createElement('i');
plus.setAttribute('class' , 'far fa-plus-square');

var circle = document.createElement('i');
circle.setAttribute('class' , 'far fa-info-circle');
circle.setAttribute("style" , "display:none");

var heart = document.createElement('i');
heart.setAttribute('class' , 'fa fa-heart');
// heart.setAttribute("style" , "color:black");
heart.setAttribute("style" ,   "display: none");

var info = document.createElement('div');
info.setAttribute('class' , 'info-holder');
info.setAttribute("style" ,   "display: none");

var bust = document.createElement('h3');
bust.setAttribute('class' , 'bust');
bust.innerHTML = "BUST : " + bust_size;


var size = document.createElement('h3');
size.setAttribute('class' , 'size');
size.innerHTML = "SIZE : " + dress_size;

var fabric = document.createElement('h3');
fabric.setAttribute('class' , 'fabric');
fabric.innerHTML = "FABRIC : " + dress_fab;


var inner_image_text = document.createElement('h3');
inner_image_text.setAttribute('class' , 'inner-image-text');
inner_image_text.setAttribute('value' , button_value);
inner_image_text.setAttribute('id' , id);
inner_image_text.innerHTML = "Buy";
inner_image_text.setAttribute("style" , "display:none");

var price_holder = document.createElement('div');
price_holder.setAttribute('class' , 'price-holder');

var text = document.createElement('h3');
text.setAttribute('class' , 'price-text');
text.innerHTML = "price:$";

var main_price = document.createElement('h3');
main_price.setAttribute('class' , 'main-price');
main_price.innerHTML = price;



item_hol.appendChild(image_holder);
image_holder.appendChild(img);
image_holder.appendChild(inner_image_holder);
inner_image_holder.appendChild(inner_holder);
inner_holder.appendChild(plus);
inner_holder.appendChild(circle);
inner_holder.appendChild(heart);
inner_holder.appendChild(inner_image_text);

image_holder.appendChild(info);
info.appendChild(bust);
info.appendChild(size);
info.appendChild(fabric);


item_hol.appendChild(price_holder);
price_holder.appendChild(text);
price_holder.appendChild(main_price);


item_holder.appendChild(item_hol);

}

// *******************************************
// scroll left & right
// **************************************************


$('#right-button').click(function() {
  event.preventDefault();
  $('#item_holder').animate({
    scrollLeft: "+=250px"
  }, "fast");
});

 $('#left-button').click(function() {
  event.preventDefault();
  $('#item_holder').animate({
    scrollLeft: "-=250px"
  }, "fast");
});




// **********************************************
// heart, text and info button 
// *************************************************

var flag = 0;
var flag1 = 0;

window.onload = function() {
    let plus_holder = document.querySelectorAll('.fa-plus-square');
    let circle_holder = document.querySelectorAll('.fa-info-circle');
    let heart_holder = document.querySelectorAll('.fa-heart');
    let text_holder = document.querySelectorAll('.inner-image-text');
    let info_holder = document.querySelectorAll('.info-holder');

    // console.log(plus_holder.length);
    // console.log(circle_holder.length);
    // console.log(heart_holder.length);
    // console.log(info_holder.length);

    for(var i=0; i<plus_holder.length; i++){
        let x = plus_holder[i];
        // console.log(x);
        let y = circle_holder[i];
        // console.log(y);
        let z = heart_holder[i];
        let text = text_holder[i];

        let info =  info_holder[i];
        // console.log(info);
        


        x.onclick = function(){
            console.log("1");

            // text button--------------------------------------->
            if(text.style.display == "none"){ 

                text.setAttribute("style" , "dispaly:block");
                text.style.display = "block";

            }
            else if(text.style.display == "block"){
               
                text.setAttribute("style" , "dispaly:none");
                text.style.display = "none";

            }
            // **************************************

            // info button----------------------------------------?
            if(y.style.display == "none"){ 

                y.setAttribute("style" , "dispaly:block");
                y.style.display = "block";

                y.onclick = function(){
                    console.log("info");
    
                    if(flag1 == 0){
                        info.style.display = "block";
                        flag1=1;
                    }
    
                    else if(flag1 == 1){
                        info.style.display = "none";
                        flag1=0;
                    }

                    // else if(info.style.display = "block" && y.style.display == "block"){
                    //     console.log("12");
                    //     info.style.display = "block";
                    // }
    
    
                }

            }
            else if(y.style.display == "block"){
               
                y.setAttribute("style" , "dispaly:none");
                y.style.display = "none";

                if(text.style.display == "none"){
                    console.log("11");
                    info.style.display = "none";
                }

            }
            // *********************************************

            // heart button-------------------------------------------------->
            if(z.style.display == "none"){ 
                
                z.setAttribute("style" , "dispaly:block");
                z.style.display = "block";

                z.onclick = function(){
                    console.log("heart-button");
                    z.setAttribute("style" , "color:red");
                 
                    if( flag == 0){
                        console.log("red");
                        z.setAttribute("style" , "color:red");
                        // z.setAttribute("style" , "display:block");
                        flag=1;
                    }
                    else if(flag == 1){
                        console.log("black");
                        z.setAttribute("style" , "color:black");
                        // z.setAttribute("style" , "display:block");
                        flag=0;
                    }


                    if(z.style.color == "black" && text.style.display == "none"){
                        console.log("11");
                        z.style.display = "none";
                    }

                    else if(z.style.color == "black" && text.style.display == "block"){
                        console.log("12");
                        z.style.display = "block";
                    }
                }
            }
            else if(z.style.display == "block"){
                z.setAttribute("style" , "dispaly:none");
                z.style.display = "none";

            }
            // ********************************************************************
         
        }
    }

}

// cart section start---------------------->>>>>>>>>>>>>>>>
// const card_id = [
//     {
//         value : 0,
//     },
//     {
//         value : 0 ,
//     },
//     {
//         value : 0 ,
//     },
//     {
//         value : 0 ,
//     },
//     {
//         value : 0 ,
//     },
//     {
//         value : 0 ,
//     },

//     {
//         value : 0 ,
//     },
//     {
//         value : 0 ,
//     },
//     {
//         value : 0 ,
//     },

//     {
//         value : 0 ,
//     },
//     {
//         value : 0,
//     },
//     {
//         value : 0 ,
//     },
//     {
//         value : 0 ,
//     },
   
// ];




let buy_button = document.querySelectorAll('.inner-image-text');
let images = document.querySelectorAll('img');
let total = document.querySelectorAll('.main-price');

let empty_text = document.querySelector('.empty');

// console.log(total.length);

var source_count = 0;
// let count = 0;
Total_bill= 0;
for(var i=0; i<buy_button.length; i++){
    // console.log("1");
    // console.log(images[i].src);
    let t = total[i].innerHTML ;
    // console.log(t);
    var a =  parseInt(total[i].innerHTML);
    // var a = parseInt(total[i].innerHTML);
    // console.log(a);
    // console.log(typeof a);
    // Total_bill = Total_bill + a;
    // console.log(Total_bill);
    // inner_total.childNodes[3].innerHTML =  Total_bill;
    // total[i].innerHTML = parseInt(total[i].innerHTML);;
    // console.log(total[i].innerHTML);
    // let c = card_id[i].value;
    let count = 0;
    let x = images[i];  
    let y = x.src;
    // console.log(c);
    let buy = buy_button[i];
    let button_value = buy.getAttribute("value");
    let button_id = buy.getAttribute("id");
    console.log(button_id);

    buy.onclick = function(){
        // console.log(images[0]);
        // console.log(button_value);
        // console.log("source=" + source_count);
        empty_text.style.display = "none";
        // console.log(x);
        // let source = y;
        // console.log(source);
        // cartElement(source);

        if ( button_value == 1 ){
            var a =  parseInt(total[button_value-1].innerHTML);
            // console.log(a);
            Total_bill = Total_bill + a;
            inner_total.childNodes[3].innerHTML =  Total_bill;
            // console.log(button_id);

            count = count + 1;
            let id = "cart-"+ button_id;
            // console.log("id:" +id);
            
            $("#cart_row #cart-img1").remove();
            cartElement(images[button_value-1].src,count,id,button_id);
            // console.log("count:" + count);
         
            
        }
       
        else if ( button_value == 2 ){
            var a =  parseInt(total[button_value-1].innerHTML);
            // console.log(a);
            Total_bill = Total_bill + a;
            inner_total.childNodes[3].innerHTML =  Total_bill;
           
            count = count + 1;
            let id = "cart-img2";
            // console.log("count:" + count);
            $('#cart_row #cart-img2').remove();
            cartElement(images[button_value-1].src,count,id,button_id);
   
        }
        else if ( button_value == 3 ){
            var a =  parseInt(total[button_value-1].innerHTML);
            console.log(a);
            Total_bill = Total_bill + a;
            inner_total.childNodes[3].innerHTML =  Total_bill;

            count = count + 1;
            let id = "cart-img3";
            $('#cart_row #cart-img3').remove();
            cartElement(images[button_value-1].src,count,id,button_id);
   
        }
        else if ( button_value == 4 ){
            var a =  parseInt(total[button_value-1].innerHTML);
            // console.log(a);
            Total_bill = Total_bill + a;
            inner_total.childNodes[3].innerHTML =  Total_bill;

            count = count + 1;
            let id = "cart-img4";
            $('#cart_row #cart-img4').remove();
            cartElement(images[button_value-1].src,count,id,button_id);
   
        }

        else if ( button_value == 5 ){
            var a =  parseInt(total[button_value-1].innerHTML);
            // console.log(a);
            Total_bill = Total_bill + a;
            inner_total.childNodes[3].innerHTML =  Total_bill;

            count = count + 1;
            let id = "cart-img5";
            $('#cart_row #cart-img5').remove();
            cartElement(images[button_value-1].src,count,id,button_id);
   
        }
        else if ( button_value == 6 ){
            var a =  parseInt(total[button_value-1].innerHTML);
            // console.log(a);
            Total_bill = Total_bill + a;
            inner_total.childNodes[3].innerHTML =  Total_bill;

            count = count + 1;
            let id = "cart-img6";
            $('#cart_row #cart-img6').remove();
            cartElement(images[button_value-1].src,count,id,button_id);
   
        }
        else if ( button_value == 7 ){
            var a =  parseInt(total[button_value-1].innerHTML);
            // console.log(a);
            Total_bill = Total_bill + a;
            inner_total.childNodes[3].innerHTML =  Total_bill;

            count = count + 1;
            let id = "cart-img7";
            $('#cart_row #cart-img7').remove();
            cartElement(images[button_value-1].src,count,id,button_id);
   
        }
        else if ( button_value == 8 ){
            var a =  parseInt(total[button_value-1].innerHTML);
            // console.log(a);
            Total_bill = Total_bill + a;
            inner_total.childNodes[3].innerHTML =  Total_bill;

            count = count + 1;
            let id = "cart-img8";
            $('#cart_row #cart-img8').remove();
            cartElement(images[button_value-1].src,count,id,button_id);
   
        }
        else if ( button_value == 9 ){
            var a =  parseInt(total[button_value-1].innerHTML);
            // console.log(a);
            Total_bill = Total_bill + a;
            inner_total.childNodes[3].innerHTML =  Total_bill;

            count = count + 1;
            let id = "cart-img9";
            $('#cart_row #cart-img9').remove();
            cartElement(images[button_value-1].src,count,id,button_id);
   
        }
        else if ( button_value == 10 ){
            var a =  parseInt(total[button_value-1].innerHTML);
            // console.log(a);
            Total_bill = Total_bill + a;
            inner_total.childNodes[3].innerHTML =  Total_bill;

            count = count + 1;
            let id = "cart-img10";
            $('#cart_row #cart-img10').remove();
            cartElement(images[button_value-1].src,count,id,button_id);
   
        }
        else if ( button_value == 11 ){
            var a =  parseInt(total[button_value-1].innerHTML);
            // console.log(a);
            Total_bill = Total_bill + a;
            inner_total.childNodes[3].innerHTML =  Total_bill;
            
            count = count + 1;
            let id = "cart-img11";
            $('#cart_row #cart-img11').remove();
            cartElement(images[button_value-1].src,count,id,button_id);
   
        }
        else if ( button_value == 12 ){
            var a =  parseInt(total[button_value-1].innerHTML);
            // console.log(a);
            Total_bill = Total_bill + a;
            inner_total.childNodes[3].innerHTML =  Total_bill;

            count = count + 1;
            let id = "cart-img12";
            $('#cart_row #cart-img12').remove();
            cartElement(images[button_value-1].src,count,id,button_id);
   
        }
        else if ( button_value == 13 ){
            var a =  parseInt(total[button_value-1].innerHTML);
            // console.log(a);
            Total_bill = Total_bill + a;
            inner_total.childNodes[3].innerHTML =  Total_bill;
            
            count = count + 1;
            let id = "cart-img13";
            $('#cart_row #cart-img13').remove();
            cartElement(images[button_value-1].src,count,id,button_id);
   
        }
   
   
        
    }
   

    
}

// function dressCount(count){
  
//     var count_dress = document.createElement('div');
//     count_dress.setAttribute('class' ,'count-dress col-lg-1 col-md-2 col-sm-2 col-4');

//     var increment = document.createElement('h3');
//     increment.setAttribute('class' ,'num');
//     increment.innerHTML = count;

//     count_dress.appendChild(increment);
//     count_row.appendChild(count_dress);
//     return(increment.innerHTML);
    



// }




// clear all divs/cards in the cart div

// create divs/cards from array c

// const card_id = [
//     {
//         value : 0,
//     },
//     {
//         value : 0 ,
//     },
//     {
//         value : 0 ,
//     },
//     {
//         value : 0 ,
//     },
//     {
//         value : 0 ,
//     },
//     {
//         value : 0 ,
//     },

//     {
//         value : 0 ,
//     },
//     {
//         value : 0 ,
//     },
//     {
//         value : 0 ,
//     },

//     {
//         value : 0 ,
//     },
//     {
//         value : 0,
//     },
//     {
//         value : 0 ,
//     },
//     {
//         value : 0 ,
//     },
   
// ];
// function sort(){

//     for(var i=0; i<card_id.length; i++){
//         cartElement("","",card_id[i].value);
//         // cart_row.setAttribute("style" ,"display:none");
//         // console.log(items[i].image);
//     }

// }


var calledTimes = 0;
function cartElement(source,count,id,button_id){
    calledTimes++;
    // console.log("called:" + calledTimes);

    var cart_box_holder = document.createElement('div');
    cart_box_holder.setAttribute('class' ,'cart-box-holder col-lg-1 col-md-2 col-sm-2 col-4');
    cart_box_holder.setAttribute('id' , id);
    cart_box_holder.setAttribute('value' , button_id);


    var cart_img_holder = document.createElement('div');
    cart_img_holder.setAttribute('class' ,'cart-img-holder');

    
    var cart_img = document.createElement('img');
    cart_img.setAttribute('class' ,'cart-images');
    cart_img.setAttribute('src' , source);

    var cart_discard = document.createElement('div');
    cart_discard.setAttribute('class' ,'discard');

    // var discard_logo = document.createElement('i');
    // discard_logo.setAttribute('class' ,'fal fa-times');
    
    var increment = document.createElement('h3');
    increment.setAttribute('class' ,'dress-count');
    increment.innerHTML = count;

    cart_box_holder.appendChild(cart_img_holder);
    
    cart_img_holder.appendChild(cart_img);
   
    cart_img_holder.appendChild(cart_discard);
    cart_discard.appendChild(increment);
    cart_row.appendChild(cart_box_holder);
    // increment.remove();
   return(button_id);


}


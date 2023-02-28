const search_from=document.querySelector(".search-from");
const cart_item=document.querySelector(".cart-items-container");
const navbar=document.querySelector(".navbar")

//!butons
const search_btn= document .querySelector("#search-btn");
const cartBtn=document.querySelector("#cart-btn");
const menu_btn=document.querySelector("#menu-btn")


search_btn.addEventListener("click",function(){
    search_from.classList.toggle("active"); //!toggle bir tıkladığında açılıp ikinci tıkladığında kapanmasını sağlıyor.
    document.addEventListener("click", function (e){
        if(
            !e.composedPath().includes(search_btn) &&  // BU KISIM buton ve from kısma bastığında açılsın ve açık kalsın diğer durumlarda kapansın diyor
            !e.composedPath().includes(search_from)
        ){
            search_from.classList.remove("active");
        }
    });

    

});

cartBtn.addEventListener("click",function(){
    cart_item.classList.toggle("active"); //!toggle bir tıkladığında açılıp ikinci tıkladığında kapanmasını sağlıyor.
    document.addEventListener("click", function (e){
        if(
            !e.composedPath().includes(cartBtn) &&  // BU KISIM buton ve from kısma bastığında açılsın ve açık kalsın diğer durumlarda kapansın diyor
            !e.composedPath().includes(cart_item)
        ){
            cart_item.classList.remove("active");
        }
    });

    

});

menu_btn.addEventListener("click",function(){
    navbar.classList.toggle("active"); //!toggle bir tıkladığında açılıp ikinci tıkladığında kapanmasını sağlıyor.
    document.addEventListener("click", function (e){
        if(
            !e.composedPath().includes(menu_btn) &&  // BU KISIM buton ve from kısma bastığında açılsın ve açık kalsın diğer durumlarda kapansın diyor
            !e.composedPath().includes(navbar)
        ){
            navbar.classList.remove("active");
        }
    });

    

});

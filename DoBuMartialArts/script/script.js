// swipper

var swiper = new Swiper(".offers-slider", {
 spaceBetween: 20,
   grabCursor: true,
    loop: true,
    centeredSlide: true,
    autoplay: {
        display: 2000,
        disableOnIntersection: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },


  }); 

//   privacy policy 

  var tab_lists = document.querySelectorAll(".tabs-list ul li");
  var tab_items = document.querySelectorAll(".tab_item");


tab_lists.forEach(function(list){
    list.addEventListener("click", function(){
        var tab_data = list.getAttribute("data-tc");
        tab_lists.forEach(function(list){
            list.classList.remove("active");
        })

        list.classList.add("active");

        tab_items.forEach(function(item){
            var tab_class = item.getAttribute("class").split(" ");

            if (tab_class.includes(tab_data)){
                item.style.display = "block";
            }else{
                item.style.display = "none";
            }
        })

    })
});
   
   

// Sign up form
    
    var showForm = document.getElementById("showForm");
    var signupForm = document.getElementById("signupForm");
    var closeForm= document.getElementById("closeForm");
    var popup = document.getElementById("reg-popup");
    
    showForm.addEventListener("click", function (){
    signupForm.classList.remove("signup-hidden"); 
    document.body.style.overflow = "hidden";
    });

    // thank you message
    function openPopup(){
        popup.classList.add("open-popup");
    }
    function closePopup(){
        popup.classList.remove("open-popup");
        signupForm.classList.add("signup-hidden");
        window.location.href = "index.html";
    }
    // close form
    closeForm.addEventListener("click", function(){
        closeForm.classList.add("signup-hidden");
        window.location.href = "index.html";
    });
    

    
   
    
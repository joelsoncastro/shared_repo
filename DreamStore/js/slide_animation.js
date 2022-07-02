$(document).ready(function () {

    var screen_time= setInterval(first_screen_nav, 5000);
    product_nav()


    function first_screen_nav() 
    {
        //first_screen_nav       
        var gt_startpage_main_container = document.querySelector("#screens_container");
        gt_startpage_main_container.style.transform = 'translateX(-100%)';
        console.log("here");
        window.clearInterval(screen_time) 
    } 

    function product_nav()
    {
        
        var item_number=1
        var screen_cont= document.getElementById("screens_container");
        var total_products_number= document.getElementById("products_main_container").childElementCount;
            console.log(total_products_number)            
        
             

        while(item_number <= total_products_number )
        {
            

            $('.product_'+ item_number).click(function () 
            {
                console.log("clicked me")
                //lembrar de desativar elementos para evitar clicks acidentais
                //var a = document.querySelector("#screens_container");
                //a.style.transform = 'translateX(-200%)';
                
                screen_cont.style.animationName="slide_left2";
                screen_cont.style.animationFillMode="forwards"; 
                screen_cont.style.animationPlayState= "running";   
                screen_cont.style.webkitAnimationTimingFunction="cubic-bezier(0.68, -0.6, 0.32, 1.6)";
                screen_cont.style.animationTimingFunction="cubic-bezier(0.68, -0.6, 0.32, 1.6)";
                setTimeout(function(){
                    screen_cont.style.animationPlayState= "paused";   
                
                }, 1000);
                  
            });

            item_number++
        }//while

        $('.left_arrow_1').click(function () 
            {
                console.log("clicked me")
                //lembrar de desativar elementos para evitar clicks acidentais
                //var a = document.querySelector("#screens_container");
                //a.style.transform = 'translateX(-200%)';
                
                screen_cont.style.animationName="slide_back_left_arrow1";
                screen_cont.style.animationFillMode="forwards"; 
                screen_cont.style.animationPlayState= "running";   
                screen_cont.style.webkitAnimationTimingFunction="cubic-bezier(0.68, -0.6, 0.32, 1.6)";
                screen_cont.style.animationTimingFunction="cubic-bezier(0.68, -0.6, 0.32, 1.6)";
                setTimeout(function(){
                    screen_cont.style.animationPlayState= "paused";   
                
                }, 1000);
                  
            });

            $('.left_arrow_2').click(function () 
            {
                console.log("clicked me")
                //lembrar de desativar elementos para evitar clicks acidentais
                //var a = document.querySelector("#screens_container");
                //a.style.transform = 'translateX(-200%)';
                
                screen_cont.style.animationName="slide_back_left_arrow2";
                screen_cont.style.animationFillMode="forwards"; 
                screen_cont.style.animationPlayState= "running";   
                screen_cont.style.webkitAnimationTimingFunction="cubic-bezier(0.68, -0.6, 0.32, 1.6)";
                screen_cont.style.animationTimingFunction="cubic-bezier(0.68, -0.6, 0.32, 1.6)";
                setTimeout(function(){
                    screen_cont.style.animationPlayState= "paused";   
                
                }, 1000);
                  
            });

            $('.left_arrow_3').click(function () 
            {
                console.log("clicked me")
                //lembrar de desativar elementos para evitar clicks acidentais
                //var a = document.querySelector("#screens_container");
                //a.style.transform = 'translateX(-200%)';
                
                screen_cont.style.animationName="slide_back_left_arrow3";
                screen_cont.style.animationFillMode="forwards"; 
                screen_cont.style.animationPlayState= "running";   
                screen_cont.style.webkitAnimationTimingFunction="cubic-bezier(0.68, -0.6, 0.32, 1.6)";
                screen_cont.style.animationTimingFunction="cubic-bezier(0.68, -0.6, 0.32, 1.6)";
                setTimeout(function(){
                    screen_cont.style.animationPlayState= "paused";   
                
                }, 1000);
                  
            });

            $('.left_arrow_4').click(function () 
            {
                console.log("clicked me")
                //lembrar de desativar elementos para evitar clicks acidentais
                //var a = document.querySelector("#screens_container");
                //a.style.transform = 'translateX(-200%)';
                
                screen_cont.style.animationName="slide_back_left_arrow4";
                screen_cont.style.animationFillMode="forwards"; 
                screen_cont.style.animationPlayState= "running";   
                screen_cont.style.webkitAnimationTimingFunction="cubic-bezier(0.68, -0.6, 0.32, 1.6)";
                screen_cont.style.animationTimingFunction="cubic-bezier(0.68, -0.6, 0.32, 1.6)";
                setTimeout(function(){
                    screen_cont.style.animationPlayState= "paused";   
                
                }, 1000);
                  
            });
            
            $('.store_cart').click(function () 
            {
                console.log("clicked me")
                //lembrar de desativar elementos para evitar clicks acidentais
                //var a = document.querySelector("#screens_container");
                //a.style.transform = 'translateX(-200%)';
                
                screen_cont.style.animationName="slide_left4";
                screen_cont.style.animationFillMode="forwards"; 
                screen_cont.style.animationPlayState= "running";   
                screen_cont.style.webkitAnimationTimingFunction="cubic-bezier(0.68, -0.6, 0.32, 1.6)";
                screen_cont.style.animationTimingFunction="cubic-bezier(0.68, -0.6, 0.32, 1.6)";
                setTimeout(function(){
                    screen_cont.style.animationPlayState= "paused";   
                
                }, 1000);
                  
            });

            $('#cart_button').click(function () 
            {
                console.log("I clicked me")
                //lembrar de desativar elementos para evitar clicks acidentais
                //var a = document.querySelector("#screens_container");
                //a.style.transform = 'translateX(-200%)';
                
                screen_cont.style.animationName="slide_left5";
                screen_cont.style.animationFillMode="forwards"; 
                screen_cont.style.animationPlayState= "running";   
                screen_cont.style.webkitAnimationTimingFunction="cubic-bezier(0.68, -0.6, 0.32, 1.6)";
                screen_cont.style.animationTimingFunction="cubic-bezier(0.68, -0.6, 0.32, 1.6)";
                setTimeout(function(){
                    screen_cont.style.animationPlayState= "paused";   
                
                }, 1000);
                  
            }); 
            
            $('#details_button').click(function () 
            {
                
                //lembrar de desativar elementos para evitar clicks acidentais
                //var a = document.querySelector("#screens_container");
                //a.style.transform = 'translateX(-200%)';
                
                screen_cont.style.animationName="slide_left6";
                screen_cont.style.animationFillMode="forwards"; 
                screen_cont.style.animationPlayState= "running";   
                screen_cont.style.webkitAnimationTimingFunction="cubic-bezier(0.68, -0.6, 0.32, 1.6)";
                screen_cont.style.animationTimingFunction="cubic-bezier(0.68, -0.6, 0.32, 1.6)";
                setTimeout(function(){
                    screen_cont.style.animationPlayState= "paused";   
                
                }, 1000);
                  
            });

            $('#sumary_button').click(function () 
            {
                
                //lembrar de desativar elementos para evitar clicks acidentais
                //var a = document.querySelector("#screens_container");
                //a.style.transform = 'translateX(-200%)';
                
                screen_cont.style.animationName="slide_left7";
                screen_cont.style.animationFillMode="forwards"; 
                screen_cont.style.animationPlayState= "running";   
                screen_cont.style.webkitAnimationTimingFunction="cubic-bezier(0.68, -0.6, 0.32, 1.6)";
                screen_cont.style.animationTimingFunction="cubic-bezier(0.68, -0.6, 0.32, 1.6)";
                setTimeout(function(){
                    screen_cont.style.animationPlayState= "paused";   
                
                }, 1000);
                  
            });
    } 
    
     
});
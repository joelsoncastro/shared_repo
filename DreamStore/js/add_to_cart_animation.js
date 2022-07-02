$(document).ready(function () { 
   
 
  

   $("#add_to_cart_button").click(function() {
     
     console.log("add to cart");
   
 
   //insert a given container with image

     var product_image_container= document.getElementById("screen_3")
     //console.log("1-GetElement: "+product_image_container.id)

     //create the element and insert it DONE
     //create html image element and insert image copy
     var main_image= document.getElementById("main_image"); 
     var image_copy = document.createElement('img'); 
         image_copy.src =  main_image.src;
         image_copy.position = main_image.position;
         image_copy.height= main_image.height;
         image_copy.width= main_image.width;
         image_copy.id = "main_image_copy";

            
     
     var product_image_container_copy= document.createElement("div");  
       console.log("ImageElement: "+main_image)

     product_image_container_copy.id="origin";
     product_image_container_copy.style.position="absolute";
     product_image_container_copy.style.top="200px";
     product_image_container_copy.style.left="200px";
     product_image_container_copy.style.width="600px";
     product_image_container_copy.style.height="600px";
     product_image_container_copy.style.background="transparent";
     product_image_container_copy.style.opacity= "1";
     product_image_container_copy.style.zIndex=1000;
     //console.log("2-CreateElement: "+product_image_container_copy.id)


     product_image_container.append(product_image_container_copy)
     product_image_container_copy.append(image_copy);
   
   
     //animate container from A to B
     //shrinkg element whilst animating
      //get cart location
      var destination= document.createElement("div");
          destination.style.position= "absolute";
          destination.id = "destination";
          destination.style.right= "60px";
          destination.style.top = "60px";
          destination.style.height="20px";
          destination.style.width="20px";
          destination.style.zIndex= 1000;
          destination.style.background="blue";

      product_image_container.append(destination);
    


      //Move the container.
     
     $("#"+product_image_container_copy.id).animate({
        left:  "798px",                                                             
        top:  "30px",
        iterations: Infinity                                                     
        },  1000, $.bez([0.68, -0.6, 0.32, 1.6]));

     //Retract The Image.                                                                  
      $(image_copy).animate({
         height:"25%",
         width:"25%",
         iterations: Infinity
    });  /**/

    $(image_copy).animate({
      opacity:0,
      iterations: Infinity
 },500);  /**/

   // A= main container
   // B= cart container
   setTimeout(function(){
   
    product_image_container_copy.remove();
      
  }, 935); 
   

    }); 

});
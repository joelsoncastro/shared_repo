 //Move the container.
 $("#ll_initial_position").animate({
    left: "35%",                                                             
    top:"9%",                                                     
},  935, $.bez([0.68, -0.6, 0.32, 1.6]));

//Expand The Image.                                                                  
$(ll_imageCopy).animate({
     height:"35%",
     width:"30%"
});  

window.onresize = resize();
$(document).ready(function(){
  
resize(); });
function resize() {
	$(window).on('resize',function(){location.reload();});
    var windowsize = $(window).width();
    /* pc or laptop windows size greater than 480 px
     (windowsize=1583px)  
    */
    if ((windowsize>480) ){ 
        console.log("Large :" +windowsize );//for test
    
        $('#Figure').on("click", function(){
            $('#div_Figure').show();
            $('#div_Referance').hide();
            $('#div_Related').hide();
            $('#div_Detail').hide();
            $('#Figure').css('font-weight', 'bold');
            $('#Referance').css('font-weight', 'normal');
            $('#Related').css('font-weight', 'normal');
            $('#Detail').css('font-weight', 'normal');
        });
        $('#Referance').on("click", function(){
            $('#div_Referance').show();
            $('#div_Figure').hide();
            $('#div_Related').hide();
            $('#div_Detail').hide();
            $('#Referance').css('font-weight', 'bold');
            $('#Figure').css('font-weight', 'normal');
            $('#Related').css('font-weight', 'normal');
            $('#Detail').css('font-weight', 'normal');
    
        });
        $('#Related').on("click", function(){
            $('#div_Related').show();
            $('#div_Figure').hide();
            $('#div_Referance').hide();
            $('#div_Detail').hide();
            $('#Related').css('font-weight', 'bold');
            $('#Figure').css('font-weight', 'normal');
            $('#Referance').css('font-weight', 'normal');
            $('#Detail').css('font-weight', 'normal');
        });
    
        $('#Detail').on("click", function(){
            $('#div_Detail').show();
            $('#div_Figure').hide();
            $('#div_Referance').hide();
            $('#div_Related').hide();
            $('#Detail').css('font-weight', 'bold');
            $('#Figure').css('font-weight', 'normal');
            $('#Referance').css('font-weight', 'normal');
            $('#Related').css('font-weight', 'normal');
        });
    }
    /* Smart phone windows size 320-480 px
    Galaxy S5 (windowsize=360)  ,
    iPhone 5/SE (windowsize=320) ,
    iPhone 6/7/8 (windowsize=375) ,
    iPhone 6/7/8 plus (windowsize=414) ,
    iPhone x (windowsize=375) ,
    */

    else if(windowsize<480){
        console.log("small :" +windowsize);
            $('#Back').on("click", function(){
                $('#LOGO').show();
                $('#Back').hide();
                $('#container_left').show();
                $('#div_Figure').hide();
                $('#div_Detail').hide();
                $('#div_Referance').hide();
                $('#div_Related').hide();
                $('#Figure').show();
                $('#Related').show();
                $('#Referance').show();
                $('#Detail').show();
     
            });
    
    
            $('#imgFigure').on("click", function(){
                $('#Back').show();
                $('#container_left').hide();
                $('#LOGO').hide();
                $('#div_Figure').show();
                $('#Figure').hide();
                $('#Referance').hide();
                $('#div_Referance').hide();
                $('#div_Related').hide();
                $('#Related').hide();
                $('#div_Detail').hide();
                $('#Detail').hide();
     
            });
            $('#imgReferance').on("click", function(){
                $('#Back').show();
                $('#container_left').hide();
                $('#LOGO').hide();
                $('#div_Figure').hide();
                $('#Figure').hide();
                $('#Referance').hide();
                $('#div_Referance').show();
                $('#div_Related').hide();
                $('#Related').hide();
                $('#div_Detail').hide();
                $('#Detail').hide();
              
    
            
            });
            $('#imgRelated').on("click", function(){
                $('#Back').show();
                $('#container_left').hide();
                $('#LOGO').hide();
                $('#div_Figure').hide();
                $('#Figure').hide();
                $('#Referance').hide();
                $('#div_Referance').hide();
                $('#div_Related').show();
                $('#Related').hide();
                $('#div_Detail').hide();
                $('#Detail').hide();
               
         
    
           
            });
            $('#imgDetail').on("click", function(){
                $('#Back').show();
                $('#container_left').hide();
                $('#LOGO').hide();
                $('#div_Figure').hide();
                $('#Figure').hide();
                $('#Referance').hide();
                $('#div_Referance').hide();
                $('#div_Related').hide();
                $('#Related').hide();
                $('#div_Detail').show();
                $('#Detail').hide();
    
    
          
       
            });
    
       
    
    
    }
    
}

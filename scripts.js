$(document).ready(function(){
    
    $("nav img").hover(
        function(){
            $(this).attr("src", function(index, attr){
                return attr.replace(".png", "_color.png");
            });
        }, 
        function(){
            $(this).attr("src", function(index, attr){
                return attr.replace("_color.png", ".png");
            });
        }
    );
})

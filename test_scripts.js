$(document).ready(function(){
    
    $("nav img").hover(
        
        function(){
            $(this).attr("src", function(index, attr){
                return attr.replace("-scaled.png", "_color.png");
            });
        }, 
        
        function(){
            $(this).attr("src", function(index, attr){
                return attr.replace("_color.png", "png");
            });
        }
    );
}
    
//    $('.test').hover(
//        
//        var t = this
//        var x = this.attr("src");
//        var y = x.replace("-scaled.png", "_color.png");
//        
//        function(){
//        $(t).prop("src", "instagram_color.png");
//        }, 
//        
//        function(){
//        $(this).prop("src", x);
//    });
    
    

//    $('nav img').hover(
//    
//        this.attr('src').replace('-scaled.png', '_color.png'))
//    })
//  
    
    
//    $('.test').hover(
//        
//        function() {
//            $(this).attr('src', function(){ 
//                return this.attr('src').replace('-scaled.png', '_color.png')})
//        },
//        function() {
//            $(this).attr('src', function(){ 
//                return this.attr('src').replace('_color.png', '-scaled.png')})
//        }
//    )
//})
//
//    
    
    
//$('nav img').hover(
//    function () {
//         $(this).attr("src","isHover.jpg");
//    },
//    function () {
//        $(this).attr("src","notHover.jpg");
//    }
//);
//
//$(document).ready(function(){
//
//  $('.nav li').hover(function(){
//        $('.target').attr('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLd77JVS_4xE04KaLd3E-j2pTyiO_fTcEwHgQL9tj8GMsXZQW2');
//   },function(){
//	$('.target').attr('src','http://www.mrwallpaper.com/wallpapers/cute-bunny-1600x900.jpg');
//   })
//})
//
    
// $('img').prop('src', this.prop('src').replace('.png', '.jpg'))
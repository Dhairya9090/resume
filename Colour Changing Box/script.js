var rect =document.querySelector("#rectangle");

rect.addEventListener("mousemove", function(details){
    var rectang=rect.getBoundingClientRect();
    var insiderrectval = details.clientX - rectang.left;
    if(insiderrectval<rectang.width/2){
       var redcolor = gsap.utils.mapRange(0,rectang.width/2,255,0,insiderrectval);
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease: Power4,
        })
    }
    else{
        var bluecolor = gsap.utils.mapRange(rectang.width/2,rectang.width ,0,255,insiderrectval);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease: Power4,})
        }
    });

rect.addEventListener("mouseleave",function(){
    gsap.to(rect, {
        backgroundColor: "white"
    })
})
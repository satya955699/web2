console.log("helo")
var play=document.querySelector(".play")
var video=document.querySelector(".videocont")
var heading=document.querySelectorAll("h1")
var vediocontent=document.querySelector(".videocont")
var curser=document.querySelector(".curser")


video.addEventListener("mouseenter",(dets)=>{
   gsap.to(play,{
    opacity:1,
    scale:1
    
   })
})
video.addEventListener("mouseleave",()=>{
    gsap.to(play,{
        opacity:0,
        scale:0
    })
    
})
video.addEventListener("mousemove",(dets)=>{
    console.log(dets.left)
    gsap.to(play,{
    left:dets.x-50,
    top:dets.y-30
    })
})
function vedioanimator(){
    gsap.from(heading,{
        y:100,
        opacity:0,
        duration:0.4,
        delay:0.3,
        stagger:0.3
    })
    gsap.from(vediocontent,{
       opacity:0,
       delay:0.6,
       duration:0.4,
    })
}
document.addEventListener("mousemove",(dets)=>{
 gsap.to(curser,{
    left:dets.x-70,
    top:dets.y-80 
 })
})
document.querySelector("#child1").addEventListener("mouseenter",()=>{
    gsap.to(curser,{
       scale:1,
       opacity:1,
       backgroundColor:"#e6e6e6"
    })
})
document.querySelector("#child1").addEventListener("mouseleave",()=>{
    gsap.to(curser,{
        scale:0,
        opacity:0
    })
})
document.querySelector("#child2").addEventListener("mouseenter",()=>{
    gsap.to(curser,{
       scale:1,
       opacity:1,
       backgroundColor:"#e6e6e6"
    })
})
document.querySelector("#child2").addEventListener("mouseleave",()=>{
    gsap.to(curser,{
        scale:0,
        opacity:0
    })
})
document.querySelector("#child3").addEventListener("mouseenter",()=>{
    gsap.to(curser,{
       scale:1,
       opacity:1,
       backgroundColor:"#e6e6e6"
    })
})
document.querySelector("#child3").addEventListener("mouseleave",()=>{
    gsap.to(curser,{
        scale:0,
        opacity:0
    })
})
document.querySelector("#child4").addEventListener("mouseenter",()=>{
    gsap.to(curser,{
       scale:1,
       opacity:1,
       backgroundColor:"#e6e6e6"
    })
})
document.querySelector("#child4").addEventListener("mouseleave",()=>{
    gsap.to(curser,{
        scale:0,
        opacity:0
    })
})
vedioanimator()
gsap.to(" svg",{
    transform:"translatey(-300%)",
    scrollTrigger: {
        trigger: ".one",
        scroller: "body",
        markers:true,
        start: "top 0px",
        end:"top -5%",
        scrub: true,
      },
})
gsap.to(".rightchild",{
    opacity:0,
    y:-100,
    scrollTrigger:{
        trigger: ".one",
        scroller: "body",
        markers:true,
        start: "top 0px",
        end:"top -5%",
        scrub: true,
    }
})
var arry=Array.from(document.querySelectorAll(".dot"))
function multifuntion(){
    arry.forEach((element)=>{
        element.style.backgroundColor="white"
    })
}
arry.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        multifuntion()
        e.target.style.backgroundColor="black"

    })
})
var fivetext=document.querySelectorAll(".fivetext")
function up(){
gsap.from(fivetext,{
    y:-50,
    opacity:0
})
}
var textline=document.querySelector(".fivetext")
document.querySelector("#one").addEventListener("click",()=>{
    up()
    textline.innerHTML=`BLOWN AWAY BY THE QUALITY
    OF THE FOOD AND
    PRESENTATION.`
})
document.querySelector("#two").addEventListener("click",()=>{
    up()
    textline.innerHTML=`I CAN’T THANK YOU ENOUGH
    FOR THE AMAZING FOOD
    YOUR TEAM PROVIDED US
    TODAY. OUR STAFF COULDN’T
    SPEAK HIGHLY ENOUGH OF
    THE FISH AND THE SALADS;
    LOOKING FORWARD TO
    WORKING TOGETHER MORE.`
})
document.querySelector("#three").addEventListener("click",()=>{
    up()
    textline.innerHTML=`LOVE THE QUALITY OF THE
    FOOD AND LEVEL OF
    CUSTOMER SERVICE EQUALS
    THE 'MEANINGFULNESS' OF
    EVERY PURCHASE.
    `
})
document.querySelector("#four").addEventListener("click",()=>{
    up()
    textline.innerHTML=`
    THANK YOU FOR THE
    ABSOLUTELY BRILLIANT
    CATERING AT OUR TEAM
    OFFSITE YESTERDAY. THE FOOD
    WAS ABSOLUTELY
    MAGNIFICENT – HIGH QUALITY,
    FRESH AND DELICIOUS. I HAD
    SO MANY POSITIVE
    COMMENTS FROM MY TEAM...I
    WILL DEFINITELY BE A REPEAT
    CUSTOMER.`
})
document.querySelector("#five").addEventListener("click",()=>{
    up()
    textline.innerHTML=`GREAT CAUSE, GREAT PEOPLE
    AND ABSOLUTELY GREAT FOR
    THE ENVIRONMENT.`
})
var images=Array.from(document.querySelectorAll(".images"))
var bar =Array.from(document.querySelectorAll(".bar"))  
document.querySelector("#five").addEventListener("mouseenter",()=>{
    gsap.to("#fiveimg",{
        opacity:1,
        delay:.3                 
        
    })

})
document.querySelector("#six").addEventListener("mouseenter",()=>{
    gsap.to("#siximg",{
        opacity:1,
        delay:.3                 
        
    })
})
document.querySelector("#four").addEventListener("mouseenter",()=>{
    gsap.to("#fourimg",{
        opacity:1,
        delay:.3                 
        
    })
})

bar.forEach((e)=>{
    e.addEventListener("mouseleave",()=>{
        gsap.to(images,{
            opacity:0,
        })
    })
})


setInterval(() => {
    
var hr=document.getElementById("hours");
var min=document.getElementById("mins");
var sec=document.getElementById("secs");

var timename=document.getElementById("AM1");
var time=new Date();
var a=time.getHours();
var b=time.getMinutes();
var c=time.getSeconds();





if(a>=12)
{
    a=a-12;
    timename.innerHTML="PM"
}
else if(a<12)
{
    timename.innerHTML="AM"
}
hr.innerHTML=a;
min.innerHTML=b;
sec.innerHTML=c;

}, 1000);
var tm=document.getElementById("set-time");

tm.onclick=function(){ settime()};

function makediv()
{
    var map = new Map()
map.set(0,"Default");
    // var mp={"0":"Default"}
    for(let i=1;i<=24;i++)
    {
        var st=(i);
        if(i<=11)
        {
            if(i==11)
            {
                var tp=String(i)+"AM-"+String(i+1)+"PM";
            }
            else
            {
        var tp=String(i)+"AM-"+String(i+1)+"AM";
            }
        }
        else
        {
            if(i==12)
            {
                var tp=String(i)+"PM-"+String(1)+"PM";  
            }
            else if(i==23)
            {
                var tp=String(11)+"PM-"+String(12)+"AM"
            }
            else if(i==24)
            {
                var tp="12AM-1AM";
            }
            else
            {
                var tp=String((i-12))+"PM-"+String((i-11))+"PM";
            }
           
        }

        map.set(st,tp);
    }
    if(document.getElementById("dynamic-block")==null)
    {
      var container=document.createElement('div');
      container.id="dynamic-block";
      document.getElementById("eg").appendChild(container);
    }
      var innerval=document.getElementById("WakeUpTimeSelector");
      var innerval1=document.getElementById("LunchTimeSelector");
      var innerval2=document.getElementById("NapTimeSelector");
      var impv=map.get(innerval.selectedIndex);   
      var impv1=map.get(innerval1.selectedIndex);
      var impv2=map.get(innerval2.selectedIndex);
    //   var p1=document.createElement('p');
    //   p1.id="p1";
      document.getElementById("dynamic-block").innerHTML="Wake Up Time   "+impv ;
      document.getElementById("dynamic-block").innerHTML+="<br>Lunch Time  "+impv1;
      document.getElementById("dynamic-block").innerHTML+="<br>Nap Time   "+impv2;

    // console.log(map.get(1));
      
    //   var value=innerval.option[innerval.selectedIndex];
    //   console.log(value);
    //   document.getElementById("dynamic-block").innerHTML="Wake up Time"+value;
}
function settime()
{
 
    var i=document.getElementById("WakeUpTimeSelector").value;
    // 
    var j=document.getElementById("LunchTimeSelector").value;
    // console.log(j);
    var k=document.getElementById("NapTimeSelector").value;
    var hrr=new Date().getHours();
    console.log(hrr);
    var temp=document.getElementsByClassName("img-container")[0];
    if(i==24)
    i=0;
    if(j==24)
    j=0;
    if(k==0)
    k=0;
    // console.log(hrr);
    if(   (i==j || j==k || i==j) && (i!=0 && j!=0 && k!=0))
    {
        console.log("can't have same time");
    }
    // j=hrr;
  
    else if(i==hrr)
    {
       
        temp.style.backgroundImage = "url('./assests/Component\ 30\ –\ 1.svg')";
        document.getElementsByClassName("breakfast")[0].innerHTML="GRAB SOME HEALTHY BREAKFAST!!!";
    }
    else if(j==hrr)
    {
        temp.style.backgroundImage = "url('./assests/Component\ 31\ –\ 1.svg')";
        document.getElementsByClassName("breakfast")[0].innerHTML="LET'S HAVE SOME LUNCH !!";

    }
    else if(k==hrr)
    {
        temp.style.backgroundImage = "url('./assests/Component\ 32\ –\ 1.svg')";
        document.getElementsByClassName("breakfast")[0].innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";

    }
    document.getElementById("set-time").innerHTML="PARTY TIME !!!";


    
makediv();
   
}
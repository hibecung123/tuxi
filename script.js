var computerchoicedisplay=document.getElementById("computer-choice");
var userchoicedisplay=document.getElementById("user-choice");
var resultdisplay=document.getElementById("result");
var possiblechoice=document.querySelectorAll('button');
let userchoice
let computerchoice
let result
possiblechoice.forEach(possiblechoice => possiblechoice.addEventListener('click',(e)=>{
userchoice=e.target.id
userchoicedisplay.innerHTML=userchoice
generatecomputerchoice()
generateresult()
alerting()
}))
function generatecomputerchoice()
{
    var randomNumber=Math.floor(Math.random()*3)+1;
    console.log(randomNumber)
    if(randomNumber === 1)
    {
        computerchoice='Búa'
    }
    else if(randomNumber===2)
    {
        computerchoice='Bao'
    }
    else computerchoice='Kéo'
    computerchoicedisplay.innerHTML=computerchoice
}
function generateresult()
{
    if(userchoice==='Búa')
    {
        if(computerchoice==='Bao')
        {
            result='Em thua rồi gà';
        }
        else if(computerchoice==='Búa')
        {
            result='Hòa ha';
        }
        else result='Thắng rồi nai xừ';
    }
    if(userchoice==='Bao')
    {
        if(computerchoice==='Kéo')
        {
            result='Em thua rồi gà';
        }
        else if(computerchoice==='Bao')
        {
            result='Hòa ha';
        }
        else result='Thắng rồi nai xừ';
    }
    if(userchoice==='Kéo')
    {
        if(computerchoice==='Búa')
        {
            result='Em thua rồi gà';
        }
        else if(computerchoice==='Kéo')
        {
            result='Hòa ha';
        }
        else result='Thắng rồi nai xừ';
    }
    resultdisplay.innerHTML=result
}
function alerting()
{
    alert('Yêu anh ok cái ik rùi ra kết quả hihi')
}
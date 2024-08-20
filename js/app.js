const nutBinhChon = document.getElementsByClassName('text-binhchon');
const text_uv = document.getElementsByClassName('tbc');
const Name_UV = document.getElementById('name_UV');
var textt = "hello tesst";
const nenDen = document.getElementById('nen_den');
const active_form = document.getElementById('form_dk');
const max_num = document.getElementById('max_int');
let int = 0;
// console.log(convertText);
// click for voter
for (let k = 0; k < nutBinhChon.length; k++) {
    console.log(nutBinhChon[k]);
    nutBinhChon[k].addEventListener('click',()=>{
        int++;
        // lay text
        for (let i = 0; i < text_uv.length; i++) {
            var textUV = text_uv[k].innerText;
        }
        
        console.log(textUV);
        Name_UV.value = textUV;

        // hien thi form
        active_form.classList.add('active');
        nenDen.classList.add('active');
        nenDen.addEventListener('click',()=>{
            active_form.classList.remove('active');
        nenDen.classList.remove('active');
        })
        console.log(int);
        if(int>7){
            max_num.classList.add('active');
        }
    });
    
}


//lien ket
const dong = document.getElementById('dong');
const textSv = document.getElementById('tsv');
const wait = document.getElementById('wait');
const popUp = document.getElementById('popUp');
const nut = document.getElementById('submit-form');

dong.addEventListener('click',()=>{
    popUp.classList.remove('active');
    textSv.innerText = '';
})
nut.addEventListener('click',()=>{
    wait.classList.add('active');
})

$(document).ready(function()
{
var submit = $("button[type='submit']");
submit.click(function()
{
var data = $('form#test-form').serialize();
$.ajax({
type : 'GET',
url : 'https://script.google.com/macros/s/AKfycbyfwCkqk8k7AtP5SGqsl55LPUJJdYS91vTyVvtFG8S88xrY7GDx-Sbp4Ynnuj4iKUD-iQ/exec',
dataType:'json',
crossDomain : true,
data : data,
success : function(data)
{
if(data == 'false')
{
    wait.classList.remove('active');
    textSv.innerText = 'Bạn chưa bình bầu thành công :(';
    popUp.classList.add('active');
}else{
    textSv.innerText = 'Chúc mừng bạn đã bình bầu Thành Công hãy tiếp tục bình bầu BCH khác!';
    popUp.classList.add('active');
    wait.classList.remove('active');
}
}
});
return false;
});
});
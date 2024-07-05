
        const nut = document.getElementById('submit-form');
        const wait = document.getElementById('wait');
        const popUp = document.getElementById('popUp');
        const textSv = document.getElementById('tsv');
        const dong = document.getElementById('dong');
        const popupDk = document.getElementById('popupDk');
        const  time = document.getElementById('time');
        const d = new Date();
        const m = d.getMonth() + 1;
        const e = d.getHours() + ":" + d.getMinutes() + "||" + d.getDay() + "/" + m + "/" + d.getFullYear();
        time.value = d;
        // console.log(time.value);





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
        url : 'https://script.google.com/macros/s/AKfycbzScpOAOl_4Htqy85xsW8YFrcXIzVw_Qs1ORbUo3WDyNqfWYvUsxnKWq1MqlmIKCBWn/exec',
        dataType:'json',
        crossDomain : true,
        data : data,
        success : function(data)
        {
        if(data == 'false')
        {
            wait.classList.remove('active');
            textSv.innerText = 'Bạn chưa đăng ký thành công :(';
            popUp.classList.add('active');
        }else{
            textSv.innerText = 'Chúc mừng bạn Đăng Ký Thành Công !';
            popUp.classList.add('active');
            wait.classList.remove('active');
        }
        }
        });
        return false;
        });
        });


//phan card
//chi tiet phan text
textCT = document.getElementsByClassName('text-ct');
console.log(textCT);
imgCT = document.getElementsByClassName('caroIMG');
for (let i = 0; i < textCT.length; i++) {
  textCT[i].addEventListener('click',()=>{
    
    for (let j = 0; j < textCT.length; j++) {
        textCT[j].classList.remove('active');
    }
    for (let k = 0; k < imgCT.length; k++) {
        imgCT[k].classList.remove('active');
    }
    textCT[i].classList.add('active');

    //phan chinh sua hieu ung anh
    var check = textCT[i].attributes[0].textContent;
    document.getElementById(check).classList.add('active');

  })
}
//ket thuc phan text


//chay logo
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
// end chay logo





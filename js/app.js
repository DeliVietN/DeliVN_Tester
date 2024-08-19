const nutBinhChon = document.getElementsByClassName('text-binhchon');
const text_uv = document.getElementsByClassName('tbc');
const Name_UV = document.getElementById('name_UV');
var textt = "hello tesst";
const nenDen = document.getElementById('nen_den');
const active_form = document.getElementById('form_dk');
// console.log(convertText);
// click for voter
for (let k = 0; k < nutBinhChon.length; k++) {
    console.log(nutBinhChon[k]);
    nutBinhChon[k].addEventListener('click',()=>{
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
    });
    
}
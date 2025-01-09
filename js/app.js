window.addEventListener("DOMContentLoaded", (event) => {

  

const TempImage = window.Image;
const width = window.innerWidth;
console.log(width);

const Image = function() {
      const img = new TempImage()
      img.crossOrigin = 'anonymous'
      return img
}



//loi chuc tet
const loiChucTet = document.getElementsByClassName('loi-chuc');
const cauChucTet = document.getElementsByClassName('cau-chuc');
//set hieu ung an chu
var i = 0;
function loiChuc (){
    if(i>9){i=0;}
    for (let j = 0; j < loiChucTet.length; j++) {
        loiChucTet[j].classList.remove('active');
        cauChucTet[j].classList.remove('active');
    }
    loiChucTet[i].classList.add('active');
    cauChucTet[i].classList.add('active');
    i++;
}

setInterval(loiChuc,3000);

//chay loi chuc
const textDiChuyen = document.getElementsByTagName('h4');
const soluong = textDiChuyen.length;
const doDai = textDiChuyen[0].offsetWidth;
const MainDc = document.getElementById('marq');
MainDc.style.width=`${soluong * doDai}px`

//SET

MainDc.animate(
    [
        { transform: "translateX(0px)" },
        { transform: `translateX(-${soluong * doDai}px)` }
    ],
    {
        // timing options
        duration: 60000,
        iterations: Infinity,
    },
);

// tinh kich thuoc anh;
const slidesBar = document.querySelector('.slides-bar-loi-chuc');
const subSlides = document.querySelectorAll('.sub-slide');

const clickLeft = document.getElementById('clickLeft');
const clickRight = document.getElementById('clickRight');
const WsubSlides = subSlides[0].offsetWidth;
let vitriSlides = Math.trunc(slidesBar.offsetWidth / WsubSlides);
// const wmainSlide = slidesBar.offsetWidth;
console.log(vitriSlides);
console.log(WsubSlides);
// hieu ung click Left Right
let IndexSlide = 0;
//ADD funcition cho kich thuoc

if(width < 500){
    function MoveSlider(){
        slidesBar.style.transform = `translateX(-${IndexSlide * WsubSlides}px)`;
    }
}
else{
    function MoveSlider(){
        slidesBar.style.transform = `translateX(-${IndexSlide * WsubSlides}px)`;
    }
}


// click

clickLeft.addEventListener("click",() =>{
    IndexSlide = (IndexSlide>0)? IndexSlide-1:0;
    MoveSlider();
});

clickRight.addEventListener("click",() =>{
    IndexSlide = (IndexSlide < subSlides.length - vitriSlides) ? IndexSlide + 1 : subSlides.length-vitriSlides;
    MoveSlider();
    
});




// click vo popup cua slide


const evLeft = document.querySelectorAll('.text1');
const evRight = document.querySelectorAll('.ev-right div');


function removeClass(){
    for (let i = 0; i < evRight.length; i++) {
        evRight[i].classList.remove('active');
        evLeft[i].classList.remove('active');
    }
}
// process 
evLeft.forEach((e)=>{
    e.addEventListener('click',()=>{
        valAt = e.getAttribute('data');
        removeClass();
        e.classList.add('active');
        document.getElementById(valAt).classList.add('active');
    })
});
// phao hoa

const canvas = document.getElementById("fireworksCanvas");
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
        class Particle {
            constructor(x, y, color) {
                this.x = x;
                this.y = y;
                this.color = color;
                this.size = Math.random() * 5 + 1;
                this.speedX = Math.random() * 4 - 2;
                this.speedY = Math.random() * 4 - 2;
                this.life = Math.random() * 30 + 50;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.size *= 0.96;
                this.life--;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }
        const particles = [];
        function createFireworks(x, y) {
            const colors = ["#ff5733", "#33ff57", "#5733ff", "#f4ff33", "#ff33e3"];
            for (let i = 0; i < 50; i++) {
                const color = colors[Math.floor(Math.random() * colors.length)];
                particles.push(new Particle(x, y, color));
            }
        }
        function animate() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle, index) => {
                if (particle.life <= 0 || particle.size <= 0.1) {
                    particles.splice(index, 1);
                } else {
                    particle.update();
                    particle.draw();
                }
            });
            requestAnimationFrame(animate);
        }
        canvas.addEventListener("mousemove", (e) => {
            createFireworks(e.clientX, e.clientY);
        });
        animate();



        /// scroll navigate ... 
        $(function() {
            $('.nav a').bind('click',function(event){
                var $anchor = $(this);
        
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500,'easeInOutExpo');
                /*
                if you don't want to use the easing effects:
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1000);
                */
                event.preventDefault();
            });
        });

        // phan nav ad hieu ung nut


            const navLink = document.querySelectorAll('ul.nav li a');
                function removeClassNav(){
                    for (let i = 0; i < navLink.length; i++) {
                        navLink[i].classList.remove('active');
                    }
                }

            navLink.forEach((e)=>{
                e.addEventListener('click',()=>{
                    removeClassNav();
                    // e.classList.add('active');
                })
            })   

   //  end phan nav ad hieu ung nut

    // them hieu ung cuon chuot 

    // const mainWeb = document.querySelector('.main-sukienTet');

    // mainWeb.addEventListener('scroll',()=>{
    //     console.log('hello');
    //     removeClassNav();
    // })


    const slideImg = document.querySelectorAll('.sub-slide img');
    const popup = document.getElementById('popup'); // Phần tử popup
    const popupImage = document.getElementById('popupImage'); // Hình ảnh trong popup
    const popupOverlay = document.getElementById('popupOverlay'); // Overlay
    const input1 = document.getElementById('popup_name'); // Input name
    const input2 = document.getElementById('popup_loichuc'); // Input loichuc
    const createImageButton = document.getElementById('createImageButton'); // Nút tạo hình ảnh
    const downloadButton = document.getElementById('downloadButton');
    
    slideImg.forEach((e)=>{
        e.addEventListener('click', ()=>{
            const imageUrl = e.src; // Lấy URL của hình ảnh
            console.log(imageUrl);
            popupImage.src = imageUrl; // Đặt URL vào popup
            popup.style.display = 'flex '; // Hiển thị popup
            popupOverlay.style.display = 'block'; // Hiển thị overlay

        });
        

    })
        
    

    // Đóng popup khi click vào overlay
        popupOverlay.addEventListener('click', () => {
        popup.style.display = 'none';
        popupOverlay.style.display = 'none';
        downloadButton.style.display='none';
      });

    createImageButton.addEventListener('click', () => {
        const text1 = input1.value;
        const text2 = input2.value;
  
        // Tạo canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = popupImage.src;
  
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
  
          // Vẽ ảnh lên canvas
          ctx.drawImage(img, 0, 0);
  
          // Thiết lập font và màu
            ctx.font = 'bold 60px "Lexend", sans-serif';
            ctx.textAlign = 'center'; // Căn giữa theo trục X
            ctx.fillStyle = '#db1919'; // Màu chữ
          
            const maxWidth = canvas.width * 0.8; // Chiều rộng tối đa của văn bản (80% chiều rộng ảnh)
            const lineHeight = 80; // Khoảng cách giữa các dòng

             // Thêm text 1
            wrapText(ctx, text1.toUpperCase(), canvas.width / 2, (canvas.height / 10) * 7, maxWidth, lineHeight);
            
             // Thêm text 2
            ctx.font = 'bold 40px "Lexend", sans-serif';
            ctx.fillStyle = 'black'; // Màu chữ khác cho text2
            wrapText(ctx, text2.toUpperCase(), canvas.width / 2, (canvas.height / 10) * 9.2, maxWidth, lineHeight);


          // Hiển thị nút tải về
          downloadButton.style.display = 'inline-block';
          downloadButton.href = canvas.toDataURL('image/png');
          downloadButton.download = 'Deli-image.png';
        //   downloadButton.click();
            
        };
      });

      // Hàm tự động chuyển dòng
        function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
             // Loại bỏ dấu phẩy và thay bằng dấu cách
            // text = text.replace(/,/g, ' ');


            const words = text.split(' ');
            let line = '';
            let lines = [];
        
            for (let i = 0; i < words.length; i++) {
            const testLine = line + words[i] + ' ';
            const testWidth = ctx.measureText(testLine).width;
            if (testWidth > maxWidth && i > 0) {
                lines.push(line);
                line = words[i] + ' ';
            } else {
                line = testLine;
            }
            }
            lines.push(line);
        
            for (let j = 0; j < lines.length; j++) {
            ctx.fillText(lines[j], x, y + j * lineHeight);
            }
        }



        // phan nay chinh demo text
        let textDemo1 = document.getElementById('text1');
        let textDemo2 = document.getElementById('text2');
        textDemo1.innerHTML = input1.getAttribute('placeholder');
        textDemo2.innerHTML = input2.getAttribute('placeholder');



        input1.addEventListener('keyup',()=>{
            textDemo1.innerHTML = input1.value;
            // console.log(textDemo1.innerText);
        })
        input2.addEventListener('keyup',()=>{
            textDemo2.innerHTML = input2.value;
            // console.log(textDemo1.innerText);
        })


        // ham responsive 
            const logoLP = document.getElementById('logoLp');
            const navBarMenu = document.getElementById('nav');


        

         // Hàm kiểm tra kích thước màn hình

            function checkScreenSize() {

                if (width <= 800) {
                    //logo
                    logoLP.addEventListener('click',()=>{
                        navBarMenu.classList.toggle('active');
                    })

                    //loichuc
                    canvas.style.display= 'none';

                    // slide 
                    // let vitriSlides = Math.ceil(slidesBar.offsetWidth / WsubSlides);
                    



                    // clickRight.addEventListener("click",() =>{
                    //     IndexSlide = (IndexSlide < subSlides.length - vitriSlides) ? IndexSlide + 1 : subSlides.length-vitriSlides;
                    //     MoveSlider();
                        
                    // });


                } 
                else{
                    canvas.style.display= 'block';
                }
            }
        
            // Gọi hàm khi tải trang và khi thay đổi kích thước
            checkScreenSize();
            window.addEventListener('resize', checkScreenSize);



            // lay du lieu form
            function sendForm() {
                // đem tất cả dữ liệu trong form id là 'google-form' gom thành biến data
                let data = $('#google-form').serialize();
            
                $.ajax({ //Sử dụng Ajax gửi dữ liệu đi
                    url: 'https://script.google.com/macros/s/AKfycbw61IYR_xCwbID3ju2SSSsaoxMjrLmtGAfzVeK-Dy-WhkrjDVIYZfyR2LpD1rNibv9Iww/exec',
                    method: 'GET',
                    dataType: 'json',
                    data: data,
                    success: function(responseData, textStatus, jqXHR) {
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log(errorThrown);
                    }
                });
            
                window.jQuery(this).trigger('reset');
                alert('Đăng Ký Thành Công!');
            
                return true;
            };

      



   // loaded all content   
 });




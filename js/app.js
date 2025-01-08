
const TempImage = window.Image

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
        duration: 40000,
        iterations: Infinity,
    },
);

// tinh kich thuoc anh;
const slidesBar = document.querySelector('.slides-bar-loi-chuc');
const subSlides = document.querySelectorAll('.sub-slide');

const clickLeft = document.getElementById('clickLeft');
const clickRight = document.getElementById('clickRight');
const WsubSlides = subSlides[0].offsetWidth;
const vitriSlides = Math.trunc(slidesBar.offsetWidth / WsubSlides);
console.log(vitriSlides);
console.log(WsubSlides);
// hieu ung click Left Right
let IndexSlide = 0;
//ADD funcition cho kich thuoc
function MoveSlider(){
    slidesBar.style.transform = `translateX(-${IndexSlide * WsubSlides}px)`;
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
            $('ul.nav a').bind('click',function(event){
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
            popup.style.display = 'block'; // Hiển thị popup
            popupOverlay.style.display = 'block'; // Hiển thị overlay

        });
        

    })
        
    

    // Đóng popup khi click vào overlay
        popupOverlay.addEventListener('click', () => {
        popup.style.display = 'none';
        popupOverlay.style.display = 'none';
      });

    //   // Xử lý khi nhấn nút "Tạo hình ảnh"
    // createImageButton.addEventListener('click', () => {
    //     const text1 = input1.value; // Lấy giá trị từ input 1
    //     const text2 = input2.value; // Lấy giá trị từ input 2
  
    //     // Tạo hình ảnh mới
    //     const newImage = document.createElement('div');
    //     newImage.style.position = 'relative';
    //     newImage.style.display = 'inline-block';
    //     newImage.style.margin = '10px';
  
    //     // Hình ảnh chính
    //     const imgElement = document.createElement('img');
    //     imgElement.src = popupImage.src;
    //     imgElement.style.width = '300px';
    //     imgElement.style.height = 'auto';
    //     imgElement.style.border = '1px solid #ccc';
    //     imgElement.style.borderRadius = '4px';
  
    //     // Văn bản 1
    //     const textOverlay1 = document.createElement('div');
    //     textOverlay1.innerText = text1;
    //     textOverlay1.style.position = 'absolute';
    //     textOverlay1.style.top = '10px';
    //     textOverlay1.style.left = '10px';
    //     textOverlay1.style.color = 'white';
    //     textOverlay1.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    //     textOverlay1.style.padding = '5px';
    //     textOverlay1.style.borderRadius = '4px';
  
    //     // Văn bản 2
    //     const textOverlay2 = document.createElement('div');
    //     textOverlay2.innerText = text2;
    //     textOverlay2.style.position = 'absolute';
    //     textOverlay2.style.bottom = '10px';
    //     textOverlay2.style.right = '10px';
    //     textOverlay2.style.color = 'white';
    //     textOverlay2.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    //     textOverlay2.style.padding = '5px';
    //     textOverlay2.style.borderRadius = '4px';
  
    //     // Ghép các phần tử
    //     newImage.appendChild(imgElement);
    //     newImage.appendChild(textOverlay1);
    //     newImage.appendChild(textOverlay2);
  
    //     // Thêm hình ảnh vào body
    //     document.body.appendChild(newImage);
  
    //     // Đóng popup
    //     popup.style.display = 'none';
    //     popupOverlay.style.display = 'none';
    //   });
    // Xử lý tạo hình ảnh
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
  
          // Vẽ text 1
          ctx.font = '20px Arial';
          ctx.fillStyle = 'white';
          ctx.fillText(text1, 20, 40);
  
          // Vẽ text 2
          ctx.font = '20px Arial';
          ctx.fillStyle = 'white';
          ctx.fillText(text2, canvas.width - 120, canvas.height - 20);
  
          // Hiển thị nút tải về
          downloadButton.style.display = 'inline-block';
          downloadButton.href = canvas.toDataURL('image/png');
          downloadButton.download = 'my-image.png';
          downloadButton.click();
        };
      });



      





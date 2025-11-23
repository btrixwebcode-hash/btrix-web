// -----------------------
// انیمیشن کارت‌های صفحه اصلی
// -----------------------
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});
cards.forEach(card => observer.observe(card));


// -----------------------
// منوی موبایل
// -----------------------
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
}


// -----------------------
// تغییر تم
// -----------------------
const themeBtn = document.getElementById('themeBtn');
if(themeBtn){
    themeBtn.addEventListener('click', ()=>{
        document.body.classList.toggle('light');
    });
}


// -----------------------
// اسلایدر صفحه اصلی
// -----------------------
let slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(i) {
    slides.forEach(s => s.classList.remove('active'));
    slides[i].classList.add('active');
}

if (slides.length > 0) {
    document.getElementById("nextBtn")?.addEventListener("click", () => {
        current = (current + 1) % slides.length;
        showSlide(current);
    });

    document.getElementById("prevBtn")?.addEventListener("click", () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });

    setInterval(()=> {
        current = (current + 1) % slides.length;
        showSlide(current);
    }, 3000);
}


// -----------------------
// انیمیشن اسکرول برای ABOUT PAGE
// -----------------------
const animates = document.querySelectorAll('.scroll-animate');

function scrollAnim() {
    animates.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight - 120) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', scrollAnim);
scrollAnim();

// ------------------------------
// 🔥 سیستم مودال محصولات
// ------------------------------

function openModal(id) {

    // لیست محصولات → بعداً پرشون می‌کنیم
    const products = {
        1: {
            title: "محصول 1",
            desc: "توضیحات کامل محصول 1",
            link: "https://t.me/BTrix67"
        },
        2: {
            title: "محصول 2",
            desc: "توضیحات کامل محصول 2",
            link: "https://t.me/BTrix67"
        },
        3: {
            title: "محصول 3",
            desc: "توضیحات کامل محصول 3",
            link: "https://t.me/BTrix67"
        },
        4: {
            title: "محصول 4",
            desc: "توضیحات کامل محصول 4",
            link: "https://t.me/BTrix67"
        },
        5: {
            title: "محصول 5",
            desc: "توضیحات کامل محصول 5",
            link: "https://t.me/BTrix67"
        },
        6: {
            title: "محصول 6",
            desc: "توضیحات کامل محصول 6",
            link: "https://t.me/BTrix67"
        },
        7: {
            title: "محصول 7",
            desc: "توضیحات کامل محصول 7",
            link: "https://t.me/BTrix67"
        },
        8: {
            title: "محصول 8",
            desc: "توضیحات کامل محصول 8",
            link: "https://t.me/BTrix67"
        }
    };

    document.getElementById("modalTitle").innerText = products[id].title;
    document.getElementById("modalDescription").innerText = products[id].desc;
    document.getElementById("modalButton").href = products[id].link;

    document.getElementById("productModal").style.display = "block";
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

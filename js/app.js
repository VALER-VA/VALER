
const categories = [
  {id:"thobes",name:"أقمشة الثياب",en:"Thobe Fabrics",desc:"أقمشة مختارة للثوب الرجالي"},
  {id:"formal",name:"أقمشة رسمية",en:"Formal Fabrics",desc:"خامات أنيقة للمناسبات والعمل"},
  {id:"summer",name:"أقمشة صيفية",en:"Summer Fabrics",desc:"خامات خفيفة ومريحة"},
  {id:"winter",name:"أقمشة شتوية",en:"Winter Fabrics",desc:"خامات دافئة وفاخرة"},
  {id:"plain",name:"أقمشة سادة",en:"Plain Fabrics",desc:"ألوان هادئة للاستخدام اليومي"},
  {id:"patterned",name:"أقمشة منقوشة",en:"Patterned Fabrics",desc:"تصاميم ونقوش مميزة"},
  {id:"premium",name:"أقمشة فاخرة",en:"Premium Fabrics",desc:"اختيارات راقية للخياطة الخاصة"},
  {id:"new",name:"وصل حديثاً",en:"New Arrivals",desc:"أحدث الخامات والتشكيلات"}
];

const demoProducts = [
  {id:1,name:"قماش فالِر الفاخر",en:"Valer Premium Fabric",cat:"premium",price:189},
  {id:2,name:"قماش الثوب الكلاسيكي",en:"Classic Thobe Fabric",cat:"thobes",price:149},
  {id:3,name:"قماش صيفي خفيف",en:"Light Summer Fabric",cat:"summer",price:129},
  {id:4,name:"قماش رسمي فاخر",en:"Formal Luxury Fabric",cat:"formal",price:169},
  {id:5,name:"قماش سادة ملكي",en:"Royal Plain Fabric",cat:"plain",price:159},
  {id:6,name:"قماش شتوي أنيق",en:"Elegant Winter Fabric",cat:"winter",price:179},
  {id:7,name:"قماش منقوش مميز",en:"Signature Pattern Fabric",cat:"patterned",price:199},
  {id:8,name:"تشكيلة فالِر الجديدة",en:"Valer New Collection",cat:"new",price:189}
];

const money = n => `${n.toFixed(2)} ر.س`;
const logo = "assets/logo.jpg";

function header(){
 return `<div class="topbar">أقمشة رجالية مختارة بعناية — فخامة تليق بتفاصيلك</div>
 <header class="header"><div class="container header-inner">
  <button class="icon-btn mobile-toggle" onclick="toggleMenu()">☰</button>
  <a class="brand" href="index.html"><img src="${logo}" alt="فالِر"><div class="brand-text"><strong>فالِر</strong><span>VÄLER</span></div></a>
  <nav class="nav" id="mainNav">
   <a href="index.html">الرئيسية</a><a href="categories.html">التصنيفات</a><a href="category.html?cat=premium">الأقمشة الفاخرة</a><a href="category.html?cat=new">وصل حديثاً</a><a href="about.html">عن فالِر</a><a href="contact.html">تواصل معنا</a>
  </nav>
  <div class="actions"><button class="icon-btn search-action" onclick="location.href='categories.html'">⌕</button><button class="icon-btn badge" onclick="location.href='cart.html'">🛒<b id="cartCount">0</b></button></div>
 </div></header>`;
}
function footer(){
 return `<footer class="footer"><div class="container"><div class="footer-grid">
  <div><div class="brand"><img src="${logo}" alt="فالِر"><div class="brand-text"><strong>فالِر</strong><span>VÄLER</span></div></div><p>متجر متخصص في بيع الأقمشة الرجالية المختارة بعناية، بتجربة تجمع بين الفخامة والبساطة.</p></div>
  <div><h4>المتجر</h4><p><a href="categories.html">كل التصنيفات</a></p><p><a href="category.html?cat=new">وصل حديثاً</a></p><p><a href="category.html?cat=premium">الأقمشة الفاخرة</a></p></div>
  <div><h4>خدمة العملاء</h4><p><a href="contact.html">تواصل معنا</a></p><p><a href="#">الشحن والتوصيل</a></p><p><a href="#">الاستبدال والاسترجاع</a></p></div>
  <div><h4>تابعنا</h4><p><a href="#">Instagram</a></p><p><a href="#">TikTok</a></p><p><a href="#">X</a></p></div>
 </div><div class="footer-bottom"><span>© 2026 فالِر VÄLER — جميع الحقوق محفوظة</span><span>مصمم للأقمشة الرجالية</span></div></div></footer>`;
}
function layout(content,title="فالِر | أقمشة رجالية"){
 document.title=title;
 document.body.innerHTML=header()+content+footer()+`<div class="toast" id="toast"></div>`;
 updateCartCount();
}
function categoryCards(){
 return categories.map(c=>`<a class="category-card" href="category.html?cat=${c.id}"><span>${c.en}</span><h3>${c.name}</h3><p>${c.desc}</p></a>`).join("");
}
function productCard(p){
 return `<article class="product"><a href="product.html?id=${p.id}"><div class="product-media" aria-label="${p.name}"></div></a><div class="product-info"><h3>${p.name}</h3><p>${categories.find(c=>c.id===p.cat)?.name||""}</p><div class="product-card-actions"><span class="price">${money(p.price)}</span><button class="small-btn" onclick="event.preventDefault();addToCart(${p.id})">أضف للسلة</button></div></div></article>`;
}
function addToCart(id){
 let cart=JSON.parse(localStorage.getItem("valerCart")||"[]");
 cart.push(id); localStorage.setItem("valerCart",JSON.stringify(cart)); updateCartCount(); toast("تمت إضافة القماش إلى السلة");
}
function updateCartCount(){const e=document.getElementById("cartCount");if(e)e.textContent=JSON.parse(localStorage.getItem("valerCart")||"[]").length}
function toast(msg){const e=document.getElementById("toast");if(!e)return;e.textContent=msg;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),2200)}
function toggleMenu(){document.getElementById("mainNav")?.classList.toggle("mobile-open")}
function renderHome(){
 layout(`<main>
  <section class="hero"><div class="hero-content"><div class="kicker">VÄLER — MEN'S FABRICS</div><h1>فخامة تُنسج<br><em>في كل تفصيلة</em></h1><p>تشكيلة مختارة من الأقمشة الرجالية للثياب والمناسبات، بخامات راقية وتصاميم تليق بذوقك.</p><a class="btn btn-dark" href="categories.html">اكتشف التشكيلة</a></div></section>
  <section class="section"><div class="container"><div class="section-head"><div><h2>تسوق حسب التصنيف</h2><p>اختر الخامة التي تناسب أسلوبك</p></div><a href="categories.html" class="btn btn-light">عرض الكل</a></div><div class="categories">${categoryCards()}</div></div></section>
  <section class="section"><div class="container"><div class="section-head"><div><h2>مختارات فالِر</h2><p>قطع مختارة لتبدأ بها</p></div></div><div class="products">${demoProducts.slice(0,4).map(productCard).join("")}</div></div></section>
  <section class="section"><div class="container"><div class="features"><div class="feature"><strong>خامات مختارة</strong><span>تشكيلة مصممة لمحبي الجودة والتفاصيل.</span></div><div class="feature"><strong>تجربة شراء بسيطة</strong><span>تصنيفات واضحة وتصفح سريع للمنتجات.</span></div><div class="feature"><strong>لذوقك الرجالي</strong><span>متخصصون في الأقمشة الرجالية فقط.</span></div></div></div></section>
  <section class="section"><div class="container"><div class="newsletter"><div class="kicker">VÄLER JOURNAL</div><h2>كن أول من يعرف الجديد</h2><p>اشترك ليصلك جديد التشكيلات والعروض.</p><form onsubmit="event.preventDefault();toast('تم الاشتراك بنجاح');this.reset()"><input type="email" placeholder="بريدك الإلكتروني" required><button class="btn btn-gold">اشتراك</button></form></div></div></section>
 </main>`,"فالِر | أقمشة رجالية");
}
function renderCategories(){
 layout(`<main><section class="page-hero"><div class="container"><div class="breadcrumb">الرئيسية / التصنيفات</div><h1>تصنيفات الأقمشة</h1><p>اختر القسم المناسب ثم أضف منتجاتك لاحقاً داخل كل تصنيف.</p></div></section><section class="section"><div class="container"><div class="categories">${categoryCards()}</div></div></section></main>`,"التصنيفات | فالِر");
}
function renderCategory(){
 const id=new URLSearchParams(location.search).get("cat")||"premium"; const c=categories.find(x=>x.id===id)||categories[0];
 const products=demoProducts.filter(p=>p.cat===c.id);
 layout(`<main><section class="page-hero"><div class="container"><div class="breadcrumb">الرئيسية / التصنيفات / ${c.name}</div><h1>${c.name}</h1><p>${c.desc}</p></div></section><section class="section"><div class="container"><div class="toolbar"><span>${products.length} منتجات تجريبية</span><select><option>ترتيب المنتجات</option><option>الأحدث</option><option>الأعلى سعراً</option><option>الأقل سعراً</option></select></div><div class="products">${products.length?products.map(productCard).join(""):`<div class="empty" style="grid-column:1/-1">هذا التصنيف جاهز لاستقبال منتجاتك. أضف المنتجات من لوحة سلة وستظهر هنا.</div>`}</div></div></section></main>`,"فالِر | "+c.name);
}
function renderProduct(){
 const id=Number(new URLSearchParams(location.search).get("id"))||1; const p=demoProducts.find(x=>x.id===id)||demoProducts[0]; const c=categories.find(x=>x.id===p.cat);
 layout(`<main><section class="section"><div class="container"><div class="breadcrumb">الرئيسية / ${c.name} / ${p.name}</div><div class="product-detail"><div class="visual"></div><div class="detail"><span class="kicker">${c.en}</span><h1>${p.name}</h1><p style="color:var(--muted)">وصف تجريبي للمنتج. استبدل هذا النص بوصف المنتج الفعلي داخل منصة سلة.</p><div class="price">${money(p.price)}</div><div class="qty"><button onclick="changeQty(-1)">−</button><input id="qty" value="1" readonly><button onclick="changeQty(1)">+</button></div><button class="btn btn-dark" onclick="addToCart(${p.id})">أضف إلى السلة</button></div></div></div></section></main>`,"فالِر | "+p.name);
}
function changeQty(d){const q=document.getElementById("qty");q.value=Math.max(1,Number(q.value)+d)}
function renderCart(){
 const cart=JSON.parse(localStorage.getItem("valerCart")||"[]"); const items=cart.map(id=>demoProducts.find(p=>p.id===id)).filter(Boolean);
 const total=items.reduce((s,p)=>s+p.price,0);
 layout(`<main><section class="page-hero"><div class="container"><h1>سلة المشتريات</h1><p>راجع اختياراتك قبل إتمام الطلب.</p></div></section><section class="section"><div class="container">${items.length?`<div class="cart-list">${items.map(p=>`<div class="cart-row"><div class="cart-thumb"></div><div><strong>${p.name}</strong><p style="color:var(--muted);font-size:12px">${money(p.price)}</p></div><span>1</span><button class="small-btn" onclick="removeOne(${p.id})">حذف</button></div>`).join("")}</div><div class="total-box"><div class="total-line"><span>المجموع</span><span>${money(total)}</span></div><div class="total-line"><span>الشحن</span><span>يُحسب عند الدفع</span></div><div class="total-line grand"><span>الإجمالي</span><span>${money(total)}</span></div><a class="btn btn-dark" style="margin-top:18px" href="checkout.html">إتمام الطلب</a></div>`:`<div class="empty"><h2>السلة فارغة</h2><p>ابدأ باكتشاف تشكيلة الأقمشة.</p><a class="btn btn-dark" href="categories.html">تصفح التصنيفات</a></div>`}</div></section></main>`,"السلة | فالِر");
}
function removeOne(id){let c=JSON.parse(localStorage.getItem("valerCart")||"[]");const i=c.indexOf(id);if(i>-1)c.splice(i,1);localStorage.setItem("valerCart",JSON.stringify(c));renderCart()}
function renderCheckout(){
 layout(`<main><section class="page-hero"><div class="container"><h1>إتمام الطلب</h1><p>صفحة جاهزة للربط مع تدفق الدفع في سلة.</p></div></section><section class="section"><div class="container"><div class="form-grid"><div class="field"><label>الاسم الكامل</label><input placeholder="الاسم"></div><div class="field"><label>رقم الجوال</label><input placeholder="05xxxxxxxx"></div><div class="field full"><label>العنوان</label><input placeholder="المدينة، الحي، الشارع"></div><div class="field"><label>المدينة</label><select><option>الرياض</option><option>جدة</option><option>الدمام</option><option>أخرى</option></select></div><div class="field"><label>طريقة الدفع</label><select><option>بطاقة / مدى</option><option>Apple Pay</option><option>الدفع المتاح عبر سلة</option></select></div></div><button class="btn btn-dark" style="margin-top:25px" onclick="toast('في قالب سلة سيتم ربط هذا الزر بعملية الدفع الرسمية')">متابعة للدفع</button></div></section></main>`,"إتمام الطلب | فالِر");
}
function renderAbout(){
 layout(`<main><section class="page-hero"><div class="container"><h1>عن فالِر</h1><p>علامة متخصصة في الأقمشة الرجالية، بهوية تجمع بين الطابع العربي الأصيل واللمسة العصرية.</p></div></section><section class="section"><div class="container"><div style="max-width:780px"><div class="kicker">OUR STORY</div><h2 style="font-size:34px;font-weight:500">نؤمن أن القماش هو بداية الأناقة.</h2><p style="color:var(--muted)">تم تصميم متجر فالِر ليكون وجهة متخصصة للباحثين عن الأقمشة الرجالية. هذه الصفحة قابلة لتخصيص قصة العلامة ورسالتها ومعلوماتها الفعلية لاحقاً.</p></div></div></section></main>`,"عن فالِر");
}
function renderContact(){
 layout(`<main><section class="page-hero"><div class="container"><h1>تواصل معنا</h1><p>يسعدنا استقبال استفساراتك وطلباتك.</p></div></section><section class="section"><div class="container"><div class="form-grid"><div class="field"><label>الاسم</label><input></div><div class="field"><label>البريد الإلكتروني</label><input type="email"></div><div class="field full"><label>الرسالة</label><textarea></textarea></div></div><button class="btn btn-dark" style="margin-top:20px" onclick="toast('تم إرسال الرسالة تجريبياً')">إرسال الرسالة</button></div></section></main>`,"تواصل معنا | فالِر");
}
document.addEventListener("DOMContentLoaded",()=>{
 const page=document.body.dataset.page;
 ({home:renderHome,categories:renderCategories,category:renderCategory,product:renderProduct,cart:renderCart,checkout:renderCheckout,about:renderAbout,contact:renderContact}[page]||renderHome)();
});

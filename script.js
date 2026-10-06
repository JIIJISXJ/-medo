// ==========================================
// البرازيلي & medo Store
// ==========================================


// رقم واتساب استقبال الطلبات
const WHATSAPP_NUMBER = "201203580875";


// رقم Orange Cash
const PAYMENT_NUMBER = "+20 12 03580875";


// المكسب على كل باقة
const PROFIT = 30;


// ==========================================
// الباقات
// السعر النهائي = السعر الأساسي + 30 جنيه
// ==========================================

const products = [

  {
    name: "100 جوهرة 💎",
    basePrice: 50
  },

  {
    name: "310 جوهرة 💎",
    basePrice: 150
  },

  {
    name: "520 جوهرة 💎",
    basePrice: 250
  },

  {
    name: "1060 جوهرة 💎",
    basePrice: 500
  },

  {
    name: "2180 جوهرة 💎",
    basePrice: 1000
  },

  {
    name: "5600 جوهرة 💎",
    basePrice: 4300
  },

  {
    name: "العضوية الأسبوعية ⭐",
    basePrice: 120
  }

];


// ==========================================
// صورة اللعبة
// ==========================================

const GAME_IMAGE =
"https://images.unsplash.com/photo-1542751371-adc384a05e?auto=format&fit=crop&w=900&q=80";


// ==========================================
// تحويل السعر إلى شكل جميل
// ==========================================

function money(number) {

  return number.toLocaleString("ar-EG")
    + " جنيه";

}


// ==========================================
// إنشاء المنتجات
// ==========================================

function renderProducts() {

  const container =
    document.getElementById("products");


  if (!container) {

    return;

  }


  container.innerHTML = "";


  products.forEach(
    function(product, index) {

      const finalPrice =
        product.basePrice + PROFIT;


      const card =
        document.createElement("div");


      card.className =
        "product";


      card.innerHTML = `

        <img
          class="game-image"
          src="${GAME_IMAGE}"
          alt="Free Fire"
        >


        <h3>
          ${product.name}
        </h3>


        <div class="price">

          ${money(finalPrice)}

        </div>


        <div class="base-price">

          السعر الأساسي:
          ${money(product.basePrice)}

          + ${PROFIT} جنيه

        </div>


        <input
          id="player-${index}"
          class="player-id"
          type="text"
          inputmode="numeric"
          maxlength="20"
          placeholder="اكتب Player ID"
        >


        <a
          href="#"
          class="whatsapp-button"
          onclick="sendOrder(${index}); return false;"
        >

          📲 اطلب الآن على واتساب

        </a>

      `;


      container.appendChild(card);

    }
  );

}


// ==========================================
// إرسال الطلب إلى واتساب
// ==========================================

function sendOrder(index) {


  const input =
    document.getElementById(
      "player-" + index
    );


  if (!input) {

    return;

  }


  const playerID =
    input.value.trim();


  // التأكد من Player ID

  if (
    !/^[0-9]{4,20}$/.test(playerID)
  ) {

    alert(
      "من فضلك اكتب Player ID صحيحاً بالأرقام فقط."
    );

    input.focus();

    return;

  }


  const product =
    products[index];


  const finalPrice =
    product.basePrice + PROFIT;


  // رسالة الطلب

  const message =

`طلب جديد من البرازيلي & medo Store

🎮 اللعبة: Free Fire

📦 الباقة: ${product.name}

🆔 Player ID: ${playerID}

💰 السعر: ${finalPrice} جنيه

🟠 طريقة الدفع: Orange Cash

📱 رقم الدفع: ${PAYMENT_NUMBER}

سأرسل إيصال الدفع هنا.`;


  const whatsappURL =

    "https://wa.me/" +

    WHATSAPP_NUMBER +

    "?text=" +

    encodeURIComponent(message);


  window.open(
    whatsappURL,
    "_blank"
  );

}


// ==========================================
// إظهار رقم الدفع
// ==========================================

function showPayment() {


  const box =
    document.getElementById(
      "paymentBox"
    );


  if (!box) {

    return;

  }


  box.style.display =
    "block";

}


// ==========================================
// نسخ رقم Orange Cash
// ==========================================

async function copyNumber() {


  try {


    await navigator.clipboard.writeText(
      PAYMENT_NUMBER
    );


    alert(
      "تم نسخ رقم Orange Cash ✅"
    );


  }

  catch (error) {


    alert(
      "رقم الدفع: " +
      PAYMENT_NUMBER
    );

  }

}


// ==========================================
// تشغيل الموقع
// ==========================================

document.addEventListener(
  "DOMContentLoaded",
  function() {

    renderProducts();

  }
);

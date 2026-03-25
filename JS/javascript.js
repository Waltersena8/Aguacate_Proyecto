// ========================
// DICCIONARIO DE IDIOMAS (completo para 6 idiomas)
// ========================
const translations = {
  es: {
    menu1: "Inicio",
    menu2: "Quiénes somos",
    menu3: "Producto",
    menu4: "Exportación",
    menu5: "Mercado",
    menu6: "Contacto",
    menu7: "Rastreo",
    cotizar: "Cotizar",
    titulo: "Exportamos Aguacate Hass Premium",
    origen: "🇨🇴 Orgullosamente colombiano",
    descripcion:
      "Desde Colombia hacia Europa y Asia. Calidad certificada, producción sostenible y logística internacional.",
    badge1: "🌍 Exportación global",
    badge2: "🇩🇪 Colombia",
    badge3: "📦 Alta producción",
    btn1: "Solicitar cotización",
    btn2: "Ver producto",
    q1: "Quiénes somos",
    qdesc:
      "Somos una empresa colombiana dedicada a la producción y exportación de aguacate Hass premium.",
    q2: "🌱 Misión",
    q2d: "Brindar productos de alta calidad internacional.",
    q3: "🚀 Visión",
    q3d: "Ser líderes en exportación hacia Europa y Asia.",
    q4: "💚 Valores",
    q4d: "Compromiso, calidad y sostenibilidad.",
    p1: "Nuestro Aguacate Hass",
    pdesc:
      "Cultivado en tierras colombianas con estándares internacionales de calidad.",
    p2: "Calidad Premium",
    p2d: "Seleccionado bajo estrictos estándares de exportación.",
    p3: "Exportación Internacional",
    p3d: "Envíos constantes a Europa y Asia, especialmente Alemania.",
    p4: "Producción Sostenible",
    p4d: "Procesos responsables con el medio ambiente.",
    catalogo: "Catálogo Exportación",
    prod1: "Caja Hass (4kg)",
    prod2: "Media tonelada",
    add: "Añadir",
    cart_title: "🛒 Mi Carrito",
    cart_total: "Total:",
    checkout: "Finalizar compra",
    close: "Cerrar",
    remove: "Eliminar",
    tracking_title: "📦 Rastreo de Pedido",
    tracking_desc: "Ingresa tu número de pedido para ver el estado actual.",
    tracking_placeholder: "Ej: AGRO-123456",
    tracking_btn: "Rastrear",
    empty_cart: "🛒 El carrito está vacío",
    order_created: "✅ ¡Pedido creado! Tu número de seguimiento es: ",
    order_status_pending: "🟡 Pendiente",
    order_status_processing: "🟠 En proceso",
    order_status_shipped: "🟢 Enviado",
    order_status_delivered: "✅ Entregado",
    order_not_found: "❌ Número de pedido no encontrado.",
    back_to_top: "↑",
  },
  en: {
    menu1: "Home",
    menu2: "About Us",
    menu3: "Product",
    menu4: "Export",
    menu5: "Market",
    menu6: "Contact",
    menu7: "Tracking",
    cotizar: "Get a Quote",
    titulo: "We Export Premium Hass Avocado",
    origen: "🇨🇴 Proudly Colombian",
    descripcion:
      "From Colombia to Europe and Asia. Certified quality, sustainable production, and international logistics.",
    badge1: "🌍 Global export",
    badge2: "🇩🇪 Colombia",
    badge3: "📦 High production",
    btn1: "Request a Quote",
    btn2: "View Product",
    q1: "About Us",
    qdesc:
      "We are a Colombian company dedicated to producing and exporting premium Hass avocado.",
    q2: "🌱 Mission",
    q2d: "Provide products of international high quality.",
    q3: "🚀 Vision",
    q3d: "Become leaders in exports to Europe and Asia.",
    q4: "💚 Values",
    q4d: "Commitment, quality, and sustainability.",
    p1: "Our Hass Avocado",
    pdesc: "Grown in Colombian lands with international quality standards.",
    p2: "Premium Quality",
    p2d: "Selected under strict export standards.",
    p3: "International Export",
    p3d: "Constant shipments to Europe and Asia, especially Germany.",
    p4: "Sustainable Production",
    p4d: "Environmentally responsible processes.",
    catalogo: "Export Catalog",
    prod1: "Hass Box (4kg)",
    prod2: "Half ton",
    add: "Add",
    cart_title: "🛒 My Cart",
    cart_total: "Total:",
    checkout: "Checkout",
    close: "Close",
    remove: "Remove",
    tracking_title: "📦 Order Tracking",
    tracking_desc: "Enter your order number to see current status.",
    tracking_placeholder: "Ex: AGRO-123456",
    tracking_btn: "Track",
    empty_cart: "🛒 Cart is empty",
    order_created: "✅ Order created! Your tracking number is: ",
    order_status_pending: "🟡 Pending",
    order_status_processing: "🟠 Processing",
    order_status_shipped: "🟢 Shipped",
    order_status_delivered: "✅ Delivered",
    order_not_found: "❌ Order number not found.",
    back_to_top: "↑",
  },
  de: {
    menu1: "Startseite",
    menu2: "Über uns",
    menu3: "Produkt",
    menu4: "Export",
    menu5: "Markt",
    menu6: "Kontakt",
    menu7: "Sendungsverfolgung",
    cotizar: "Angebot anfordern",
    titulo: "Wir exportieren Premium-Hass-Avocados",
    origen: "🇨🇴 Stolz kolumbianisch",
    descripcion:
      "Aus Kolumbien nach Europa und Asien. Zertifizierte Qualität, nachhaltige Produktion und internationale Logistik.",
    badge1: "🌍 Globaler Export",
    badge2: "🇩🇪 Kolumbien",
    badge3: "📦 Hohe Produktion",
    btn1: "Angebot anfordern",
    btn2: "Produkt ansehen",
    q1: "Über uns",
    qdesc:
      "Wir sind ein kolumbianisches Unternehmen, das sich auf die Produktion und den Export von Premium-Hass-Avocados spezialisiert hat.",
    q2: "🌱 Mission",
    q2d: "Bereitstellung von Produkten mit internationaler Spitzenqualität.",
    q3: "🚀 Vision",
    q3d: "Führend im Export nach Europa und Asien werden.",
    q4: "💚 Werte",
    q4d: "Engagement, Qualität und Nachhaltigkeit.",
    p1: "Unsere Hass-Avocado",
    pdesc:
      "Angebaut in kolumbianischen Böden mit internationalen Qualitätsstandards.",
    p2: "Premium-Qualität",
    p2d: "Ausgewählt nach strengen Exportstandards.",
    p3: "Internationaler Export",
    p3d: "Regelmäßige Lieferungen nach Europa und Asien, insbesondere nach Deutschland.",
    p4: "Nachhaltige Produktion",
    p4d: "Umweltverträgliche Prozesse.",
    catalogo: "Exportkatalog",
    prod1: "Hass-Kiste (4kg)",
    prod2: "Halbe Tonne",
    add: "Hinzufügen",
    cart_title: "🛒 Mein Warenkorb",
    cart_total: "Gesamt:",
    checkout: "Zur Kasse",
    close: "Schließen",
    remove: "Entfernen",
    tracking_title: "📦 Sendungsverfolgung",
    tracking_desc:
      "Geben Sie Ihre Bestellnummer ein, um den aktuellen Status zu sehen.",
    tracking_placeholder: "Z.B.: AGRO-123456",
    tracking_btn: "Verfolgen",
    empty_cart: "🛒 Warenkorb ist leer",
    order_created: "✅ Bestellung erstellt! Ihre Tracking-Nummer lautet: ",
    order_status_pending: "🟡 Ausstehend",
    order_status_processing: "🟠 In Bearbeitung",
    order_status_shipped: "🟢 Versendet",
    order_status_delivered: "✅ Zugestellt",
    order_not_found: "❌ Bestellnummer nicht gefunden.",
    back_to_top: "↑",
  },
  fr: {
    menu1: "Accueil",
    menu2: "À propos",
    menu3: "Produit",
    menu4: "Exportation",
    menu5: "Marché",
    menu6: "Contact",
    menu7: "Suivi",
    cotizar: "Demander un devis",
    titulo: "Nous exportons de l'avocat Hass Premium",
    origen: "🇨🇴 Fièrement colombien",
    descripcion:
      "De la Colombie vers l'Europe et l'Asie. Qualité certifiée, production durable et logistique internationale.",
    badge1: "🌍 Exportation mondiale",
    badge2: "🇩🇪 Colombie",
    badge3: "📦 Haute production",
    btn1: "Demander un devis",
    btn2: "Voir le produit",
    q1: "À propos",
    qdesc:
      "Nous sommes une entreprise colombienne dédiée à la production et à l'exportation d'avocat Hass premium.",
    q2: "🌱 Mission",
    q2d: "Offrir des produits de haute qualité internationale.",
    q3: "🚀 Vision",
    q3d: "Devenir leader dans l'exportation vers l'Europe et l'Asie.",
    q4: "💚 Valeurs",
    q4d: "Engagement, qualité et durabilité.",
    p1: "Notre avocat Hass",
    pdesc:
      "Cultivé en terre colombienne selon des normes internationales de qualité.",
    p2: "Qualité Premium",
    p2d: "Sélectionné selon des standards d'exportation stricts.",
    p3: "Exportation internationale",
    p3d: "Envois constants vers l'Europe et l'Asie, en particulier l'Allemagne.",
    p4: "Production durable",
    p4d: "Processus respectueux de l'environnement.",
    catalogo: "Catalogue d'exportation",
    prod1: "Caisse Hass (4kg)",
    prod2: "Demi-tonne",
    add: "Ajouter",
    cart_title: "🛒 Mon Panier",
    cart_total: "Total:",
    checkout: "Valider",
    close: "Fermer",
    remove: "Supprimer",
    tracking_title: "📦 Suivi de commande",
    tracking_desc: "Entrez votre numéro de commande pour voir l'état actuel.",
    tracking_placeholder: "Ex: AGRO-123456",
    tracking_btn: "Suivre",
    empty_cart: "🛒 Le panier est vide",
    order_created: "✅ Commande créée ! Votre numéro de suivi est : ",
    order_status_pending: "🟡 En attente",
    order_status_processing: "🟠 En traitement",
    order_status_shipped: "🟢 Expédié",
    order_status_delivered: "✅ Livré",
    order_not_found: "❌ Numéro de commande introuvable.",
    back_to_top: "↑",
  },
  zh: {
    menu1: "首页",
    menu2: "关于我们",
    menu3: "产品",
    menu4: "出口",
    menu5: "市场",
    menu6: "联系方式",
    menu7: "追踪",
    cotizar: "获取报价",
    titulo: "我们出口优质哈斯牛油果",
    origen: "🇨🇴 自豪的哥伦比亚",
    descripcion: "从哥伦比亚到欧洲和亚洲。认证品质，可持续生产和国际物流。",
    badge1: "🌍 全球出口",
    badge2: "🇩🇪 哥伦比亚",
    badge3: "📦 高产量",
    btn1: "申请报价",
    btn2: "查看产品",
    q1: "关于我们",
    qdesc: "我们是一家致力于生产和出口优质哈斯牛油果的哥伦比亚公司。",
    q2: "🌱 使命",
    q2d: "提供国际高品质产品。",
    q3: "🚀 愿景",
    q3d: "成为出口到欧洲和亚洲的领导者。",
    q4: "💚 价值观",
    q4d: "承诺、品质和可持续性。",
    p1: "我们的哈斯牛油果",
    pdesc: "在哥伦比亚土地上按照国际质量标准种植。",
    p2: "优质",
    p2d: "严格按照出口标准挑选。",
    p3: "国际出口",
    p3d: "持续发往欧洲和亚洲，尤其是德国。",
    p4: "可持续生产",
    p4d: "环保的生产过程。",
    catalogo: "出口目录",
    prod1: "哈斯盒装（4公斤）",
    prod2: "半吨",
    add: "添加",
    cart_title: "🛒 我的购物车",
    cart_total: "总计:",
    checkout: "结账",
    close: "关闭",
    remove: "删除",
    tracking_title: "📦 订单追踪",
    tracking_desc: "输入您的订单号查看当前状态。",
    tracking_placeholder: "例如：AGRO-123456",
    tracking_btn: "追踪",
    empty_cart: "🛒 购物车是空的",
    order_created: "✅ 订单已创建！您的追踪号码是：",
    order_status_pending: "🟡 待处理",
    order_status_processing: "🟠 处理中",
    order_status_shipped: "🟢 已发货",
    order_status_delivered: "✅ 已送达",
    order_not_found: "❌ 未找到订单号。",
    back_to_top: "↑",
  },
  ja: {
    menu1: "ホーム",
    menu2: "会社概要",
    menu3: "製品",
    menu4: "輸出",
    menu5: "市場",
    menu6: "お問い合わせ",
    menu7: "追跡",
    cotizar: "見積もり依頼",
    titulo: "プレミアムハスアボカドを輸出",
    origen: "🇨🇴 誇り高きコロンビア産",
    descripcion:
      "コロンビアからヨーロッパとアジアへ。認証済み品質、持続可能な生産、国際的な物流。",
    badge1: "🌍 グローバル輸出",
    badge2: "🇩🇪 コロンビア",
    badge3: "📦 高生産量",
    btn1: "見積もり依頼",
    btn2: "製品を見る",
    q1: "会社概要",
    qdesc:
      "私たちはプレミアムハスアボカドの生産と輸出に特化したコロンビアの企業です。",
    q2: "🌱 使命",
    q2d: "国際的な高品質製品を提供します。",
    q3: "🚀 ビジョン",
    q3d: "ヨーロッパとアジアへの輸出のリーダーを目指します。",
    q4: "💚 価値観",
    q4d: "責任、品質、持続可能性。",
    p1: "ハスアボカド",
    pdesc: "国際品質基準に従いコロンビアの土地で栽培されています。",
    p2: "プレミアム品質",
    p2d: "厳格な輸出基準に基づいて選別。",
    p3: "国際輸出",
    p3d: "ヨーロッパとアジア（特にドイツ）へ安定供給。",
    p4: "持続可能な生産",
    p4d: "環境に配慮したプロセス。",
    catalogo: "輸出カタログ",
    prod1: "ハスボックス（4kg）",
    prod2: "半トン",
    add: "追加",
    cart_title: "🛒 カート",
    cart_total: "合計:",
    checkout: "購入手続き",
    close: "閉じる",
    remove: "削除",
    tracking_title: "📦 注文追跡",
    tracking_desc: "注文番号を入力して現在の状況を確認してください。",
    tracking_placeholder: "例: AGRO-123456",
    tracking_btn: "追跡",
    empty_cart: "🛒 カートは空です",
    order_created: "✅ 注文が作成されました！追跡番号は次のとおりです: ",
    order_status_pending: "🟡 保留中",
    order_status_processing: "🟠 処理中",
    order_status_shipped: "🟢 発送済み",
    order_status_delivered: "✅ 配達済み",
    order_not_found: "❌ 注文番号が見つかりません。",
    back_to_top: "↑",
  },
};

// ========================
// FUNCIONES DE IDIOMA
// ========================
window.changeLangReal = function () {
  const select = document.getElementById("language");
  const lang = select.value;
  localStorage.setItem("preferredLanguage", lang);

  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    } else if (translations.es[key]) {
      el.innerText = translations.es[key];
    }
  });

  updateCartDisplay();
  if (window.lastTrackedOrderId) {
    displayTrackingResult(window.lastTrackedOrderId);
  }
};

// ========================
// CARRITO DE COMPRAS
// ========================
let cart = [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  const stored = localStorage.getItem("cart");
  cart = stored ? JSON.parse(stored) : [];
  updateCartDisplay();
}

function addToCart(name, price, weight) {
  cart.push({ name, price, weight });
  saveCart();
  updateCartDisplay();
  alert(`✅ ${name} añadido al carrito`);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartDisplay();
}

function getTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

function updateCartDisplay() {
  const countSpan = document.getElementById("cart-count");
  if (countSpan) countSpan.innerText = cart.length;

  const cartList = document.getElementById("cart-list");
  const totalSpan = document.getElementById("cart-total");
  if (cartList && totalSpan) {
    const lang = document.getElementById("language").value;
    const removeText =
      (translations[lang] && translations[lang]["remove"]) || "Eliminar";
    const emptyText =
      (translations[lang] && translations[lang]["empty_cart"]) ||
      "🛒 El carrito está vacío";

    if (cart.length === 0) {
      cartList.innerHTML = `<p>${emptyText}</p>`;
    } else {
      cartList.innerHTML = "";
      cart.forEach((item, idx) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
          <span><strong>${item.name}</strong> - ${item.weight}kg - $${item.price} USD</span>
          <button class="remove-btn" data-index="${idx}">${removeText}</button>
        `;
        cartList.appendChild(div);
      });
      document.querySelectorAll(".remove-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const idx = parseInt(btn.getAttribute("data-index"));
          removeFromCart(idx);
        });
      });
    }
    totalSpan.innerText = `$${getTotal()} USD`;
  }
}

// ========================
// PEDIDOS Y RASTREO
// ========================
let orders = {};
let lastTrackedOrderId = null;

function saveOrders() {
  localStorage.setItem("orders", JSON.stringify(orders));
}

function loadOrders() {
  const stored = localStorage.getItem("orders");
  orders = stored ? JSON.parse(stored) : {};
}

function generateOrderId() {
  return "AGRO-" + Math.floor(Math.random() * 1000000);
}

function createOrder() {
  if (cart.length === 0) return null;
  const orderId = generateOrderId();
  const total = getTotal();
  const date = new Date().toISOString();
  orders[orderId] = {
    items: [...cart],
    total: total,
    date: date,
    status: "pending",
  };
  saveOrders();
  cart = [];
  saveCart();
  updateCartDisplay();
  return orderId;
}

function getOrderStatusText(statusKey) {
  const lang = document.getElementById("language").value;
  const map = {
    pending: "order_status_pending",
    processing: "order_status_processing",
    shipped: "order_status_shipped",
    delivered: "order_status_delivered",
  };
  const translationKey = map[statusKey];
  return (
    (translations[lang] && translations[lang][translationKey]) || statusKey
  );
}

function displayTrackingResult(orderId) {
  const resultDiv = document.getElementById("tracking-result");
  if (!resultDiv) return;
  const order = orders[orderId];
  if (!order) {
    const lang = document.getElementById("language").value;
    const notFoundText =
      (translations[lang] && translations[lang]["order_not_found"]) ||
      "❌ Número de pedido no encontrado.";
    resultDiv.innerHTML = `<p>${notFoundText}</p>`;
    window.lastTrackedOrderId = null;
    return;
  }

  window.lastTrackedOrderId = orderId;

  const lang = document.getElementById("language").value;
  const statusText = getOrderStatusText(order.status);
  const dateFormatted = new Date(order.date).toLocaleString();
  let itemsHtml = "<ul>";
  order.items.forEach((item) => {
    itemsHtml += `<li>${item.name} (${item.weight}kg) - $${item.price} USD</li>`;
  });
  itemsHtml += "</ul>";

  const orderLabel =
    lang === "es"
      ? "Pedido:"
      : lang === "en"
        ? "Order:"
        : lang === "de"
          ? "Bestellung:"
          : lang === "fr"
            ? "Commande:"
            : lang === "zh"
              ? "订单："
              : "注文：";
  const dateLabel =
    lang === "es"
      ? "📅 Fecha:"
      : lang === "en"
        ? "📅 Date:"
        : lang === "de"
          ? "📅 Datum:"
          : lang === "fr"
            ? "📅 Date:"
            : lang === "zh"
              ? "📅 日期："
              : "📅 日付：";
  const totalLabel =
    lang === "es"
      ? "💰 Total:"
      : lang === "en"
        ? "💰 Total:"
        : lang === "de"
          ? "💰 Gesamt:"
          : lang === "fr"
            ? "💰 Total:"
            : lang === "zh"
              ? "💰 总计："
              : "💰 合計：";
  const statusLabel =
    lang === "es"
      ? "📦 Estado:"
      : lang === "en"
        ? "📦 Status:"
        : lang === "de"
          ? "📦 Status:"
          : lang === "fr"
            ? "📦 Statut:"
            : lang === "zh"
              ? "📦 状态："
              : "📦 ステータス：";
  const productsLabel =
    lang === "es"
      ? "🛍️ Productos:"
      : lang === "en"
        ? "🛍️ Products:"
        : lang === "de"
          ? "🛍️ Produkte:"
          : lang === "fr"
            ? "🛍️ Produits:"
            : lang === "zh"
              ? "🛍️ 产品："
              : "🛍️ 製品：";

  resultDiv.innerHTML = `
    <div class="tracking-card">
      <h3>📄 ${orderLabel} ${orderId}</h3>
      <p><strong>${dateLabel}</strong> ${dateFormatted}</p>
      <p><strong>${totalLabel}</strong> $${order.total} USD</p>
      <p><strong>${statusLabel}</strong> ${statusText}</p>
      <p><strong>${productsLabel}</strong></p>
      ${itemsHtml}
    </div>
  `;
}

// ========================
// NUEVAS FUNCIONES: SCROLL SUAVE, MENÚ ACTIVO, BOTÓN VOLVER ARRIBA
// ========================
function setupSmoothScroll() {
  document.querySelectorAll(".menu a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const offset = 80; // altura del navbar fijo
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        // Actualizar URL sin scroll brusco
        history.pushState(null, null, targetId);
      }
    });
  });
}

function highlightActiveMenu() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".menu a");
  const scrollPosition = window.scrollY + 100; // pequeño offset para activar antes

  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href").substring(1);
    if (href === currentSection) {
      link.classList.add("active");
    }
  });
}

function setupBackToTop() {
  const backBtn = document.getElementById("back-to-top");
  if (!backBtn) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backBtn.classList.add("show");
    } else {
      backBtn.classList.remove("show");
    }
  });
  backBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ========================
// MANEJO DEL MODAL Y CHECKOUT (EXISTENTE)
// ========================
document.addEventListener("DOMContentLoaded", function () {
  // Cargar preferencias iniciales
  const savedLang = localStorage.getItem("preferredLanguage");
  const select = document.getElementById("language");
  if (savedLang && select.querySelector(`option[value="${savedLang}"]`)) {
    select.value = savedLang;
  } else {
    select.value = "es";
  }
  window.changeLangReal();
  loadCart();
  updateCartDisplay();
  loadOrders();

  // Nuevas funcionalidades
  setupSmoothScroll();
  setupBackToTop();
  window.addEventListener("scroll", highlightActiveMenu);
  highlightActiveMenu(); // Ejecutar una vez al inicio

  // Modal y checkout (código existente)
  const modal = document.getElementById("cart-modal");
  const cartIcon = document.getElementById("cart-icon");
  const closeModalBtn = document.getElementById("close-modal");
  const checkoutBtn = document.getElementById("checkout-btn");

  if (cartIcon) {
    cartIcon.addEventListener("click", (e) => {
      e.preventDefault();
      if (modal) modal.style.display = "flex";
      updateCartDisplay();
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      if (modal) modal.style.display = "none";
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        const lang = document.getElementById("language").value;
        const emptyMsg =
          (translations[lang] && translations[lang]["empty_cart"]) ||
          "Tu carrito está vacío";
        alert(emptyMsg);
        return;
      }
      const orderId = createOrder();
      if (orderId) {
        const lang = document.getElementById("language").value;
        const msg =
          (translations[lang] && translations[lang]["order_created"]) ||
          "✅ ¡Pedido creado! Tu número de seguimiento es: ";
        alert(msg + orderId);
        if (modal) modal.style.display = "none";
        displayTrackingResult(orderId);
        const trackingSection = document.getElementById("tracking");
        if (trackingSection)
          trackingSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  }

  const trackBtn = document.getElementById("tracking-btn");
  const trackInput = document.getElementById("tracking-id");
  if (trackBtn && trackInput) {
    trackBtn.addEventListener("click", () => {
      const orderId = trackInput.value.trim();
      if (orderId === "") {
        const lang = document.getElementById("language").value;
        const emptyIdMsg =
          (translations[lang] && translations[lang]["tracking_placeholder"]) ||
          "Por favor ingresa un número de pedido";
        alert(emptyIdMsg);
        return;
      }
      displayTrackingResult(orderId);
    });
  }
});

// ========================
// FUNCIÓN GLOBAL 'add'
// ========================
window.add = function (name, price, weight) {
  addToCart(name, price, weight);
};
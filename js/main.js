(function () {
  // ---- Logo resmi tiap platform media sosial (badge berwarna, siap pakai) ----
  const SOCIAL_ICONS = {
    instagram: `<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Instagram">
      <defs><linearGradient id="igGrad" x1="0" y1="44" x2="44" y2="0">
        <stop offset="0%" stop-color="#F9CE34"/><stop offset="35%" stop-color="#EE2A7B"/>
        <stop offset="70%" stop-color="#6228D7"/><stop offset="100%" stop-color="#3B5BDB"/>
      </linearGradient></defs>
      <rect width="44" height="44" rx="12" fill="url(#igGrad)"/>
      <rect x="12" y="12" width="20" height="20" rx="6" fill="none" stroke="#fff" stroke-width="2.2"/>
      <circle cx="22" cy="22" r="5.5" fill="none" stroke="#fff" stroke-width="2.2"/>
      <circle cx="29.3" cy="14.7" r="1.6" fill="#fff"/>
    </svg>`,
    tiktok: `<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="TikTok">
      <rect width="44" height="44" rx="12" fill="#010101"/>
      <path transform="translate(-1,1)" d="M27 8h4c.3 4 2.6 6.7 6 7v4.1c-2.3-.1-4.4-.8-6-2v9.6c0 5-4 8.9-8.9 8.6-4.5-.3-7.9-4.2-7.6-8.7.3-4.5 4.2-7.9 8.7-7.6.4 0 .8.1 1.2.2v4.3c-.4-.1-.8-.2-1.2-.2-2.4-.1-4.4 1.7-4.5 4.1-.1 2.4 1.7 4.4 4.1 4.5 2.4.1 4.4-1.7 4.5-4.1V8z" fill="#25F4EE"/>
      <path transform="translate(1,-1)" d="M27 8h4c.3 4 2.6 6.7 6 7v4.1c-2.3-.1-4.4-.8-6-2v9.6c0 5-4 8.9-8.9 8.6-4.5-.3-7.9-4.2-7.6-8.7.3-4.5 4.2-7.9 8.7-7.6.4 0 .8.1 1.2.2v4.3c-.4-.1-.8-.2-1.2-.2-2.4-.1-4.4 1.7-4.5 4.1-.1 2.4 1.7 4.4 4.1 4.5 2.4.1 4.4-1.7 4.5-4.1V8z" fill="#FE2C55"/>
      <path d="M27 8h4c.3 4 2.6 6.7 6 7v4.1c-2.3-.1-4.4-.8-6-2v9.6c0 5-4 8.9-8.9 8.6-4.5-.3-7.9-4.2-7.6-8.7.3-4.5 4.2-7.9 8.7-7.6.4 0 .8.1 1.2.2v4.3c-.4-.1-.8-.2-1.2-.2-2.4-.1-4.4 1.7-4.5 4.1-.1 2.4 1.7 4.4 4.1 4.5 2.4.1 4.4-1.7 4.5-4.1V8z" fill="#fff"/>
    </svg>`,
    facebook: `<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Facebook">
      <circle cx="22" cy="22" r="22" fill="#1877F2"/>
      <path d="M25.5 22.5h-3v11h-4.5v-11h-2v-3.8h2v-2.3c0-3 1.5-4.9 5-4.9h3v3.9h-1.9c-1 0-1.6.4-1.6 1.5v1.8h3.5l-.5 3.8z" fill="#fff"/>
    </svg>`,
    shopee: `<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Shopee">
      <rect width="44" height="44" rx="12" fill="#EE4D2D"/>
      <path d="M18 17v-2.5a4 4 0 0 1 8 0V17" fill="none" stroke="#fff" stroke-width="2"/>
      <path d="M14 17h16l-1.3 15.4c-.1 1.4-1.3 2.6-2.7 2.6H18c-1.4 0-2.6-1.2-2.7-2.6L14 17z" fill="none" stroke="#fff" stroke-width="2"/>
    </svg>`,
    whatsapp: `<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="WhatsApp">
      <circle cx="22" cy="22" r="22" fill="#25D366"/>
      <path d="M22 12.5c-5.2 0-9.5 4.3-9.5 9.5 0 1.7.4 3.3 1.3 4.7L12 31.5l4.9-1.3c1.3.7 2.9 1.1 4.5 1.1h.1c5.2 0 9.5-4.3 9.5-9.5.1-5.1-4.2-9.3-9-9.3zm5.6 13.5c-.2.6-1.3 1.2-1.8 1.3-.5.1-1 .1-3.3-.7-2.8-1.1-4.6-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9 0-1.4.7-2 1-2.3.3-.3.5-.4.7-.4h.5c.2 0 .4 0 .5.4.2.4.7 1.7.8 1.9.1.1.1.3 0 .4-.1.2-.1.3-.3.4l-.4.4c-.1.2-.3.3-.1.5.2.3.8 1.4 1.8 2.2 1.2 1.1 2.3 1.4 2.6 1.6.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1l1.6.8c.3.1.5.2.5.3.1.2.1.8-.1 1.4z" fill="#fff"/>
    </svg>`,
  };
  const WHATSAPP_GLYPH = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="WhatsApp">
    <path fill="#fff" d="M12 3C7.3 3 3.5 6.8 3.5 11.5c0 1.6.4 3.1 1.2 4.4L3 21l5.3-1.4c1.2.7 2.7 1 4.1 1h.1c4.7 0 8.5-3.8 8.5-8.5S16.7 3 12 3zm5.1 12c-.2.6-1.2 1.1-1.7 1.2-.5.1-1 .1-3.1-.6-2.6-1-4.3-3.6-4.4-3.8-.1-.2-1-1.4-1-2.6 0-1.3.6-1.9.9-2.1.3-.3.5-.3.6-.3h.5c.2 0 .4 0 .5.4.2.5.7 1.6.7 1.7.1.1.1.3 0 .4-.1.2-.1.2-.3.4l-.4.4c-.1.2-.3.3-.1.5.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.5 1.5.3.1.5.1.6-.1.2-.2.6-.7.8-1 .2-.3.4-.2.6-.1l1.5.7c.2.1.4.2.5.3.1.2.1.7-.1 1.4z"/>
  </svg>`;

  function injectSocialIcons(root) {
    (root || document).querySelectorAll("[data-social-icon]").forEach((el) => {
      const key = el.getAttribute("data-social-icon");
      if (SOCIAL_ICONS[key]) el.innerHTML = SOCIAL_ICONS[key];
    });
    (root || document).querySelectorAll("[data-wa-glyph]").forEach((el) => (el.innerHTML = WHATSAPP_GLYPH));
  }

  const waLink = (msg) => `https://wa.me/${(window.CLB_DATA.SOCIALS || {}).WHATSAPP_NUMBER || ""}?text=${encodeURIComponent(msg)}`;

  // ---- Terapkan semua link sosial/marketplace berdasarkan atribut data-link ----
  function applyLinks() {
    const D = window.CLB_DATA;
    if (!D) return;
    document.querySelectorAll("[data-link]").forEach((el) => {
      const key = el.getAttribute("data-link");
      if (key === "whatsapp") el.href = waLink(D.WA_DEFAULT_MESSAGE);
      else if (key === "whatsapp-reseller") el.href = waLink(D.WA_RESELLER_MESSAGE);
      else if (D.SOCIALS[key]) el.href = D.SOCIALS[key];
    });
    document.querySelectorAll("[data-wa-number]").forEach((el) => {
      el.textContent = "+" + D.SOCIALS.WHATSAPP_NUMBER;
    });
    document.querySelectorAll("[data-business]").forEach((el) => {
      const key = el.getAttribute("data-business");
      if (D.BUSINESS && D.BUSINESS[key]) el.textContent = D.BUSINESS[key];
    });
    document.querySelectorAll("[data-map]").forEach((el) => {
      const alamat = D.BUSINESS && D.BUSINESS.alamat;
      if (alamat && alamat !== "[DATA BELUM DIISI]") {
        const q = encodeURIComponent(alamat);
        el.innerHTML = `<iframe src="https://maps.google.com/maps?q=${q}&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Lokasi Cap Laut Biru"></iframe>`;
      }
    });
  }

  // ---- Navbar mobile toggle (tidak tergantung data, aman dijalankan lebih awal) ----
  function initNav() {
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".nav-menu");
    if (!toggle || !menu) return;
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.textContent = isOpen ? "✕" : "☰";
    });
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.textContent = "☰";
      })
    );
  }

  // ---- FAQ accordion ----
  function initFaqAccordion(container) {
    container.querySelectorAll(".faq-item").forEach((item) => {
      const q = item.querySelector(".faq-q");
      const a = item.querySelector(".faq-a");
      q.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        container.querySelectorAll(".faq-item.open").forEach((other) => {
          if (other !== item) {
            other.classList.remove("open");
            other.querySelector(".faq-a").style.maxHeight = null;
          }
        });
        item.classList.toggle("open", !isOpen);
        a.style.maxHeight = !isOpen ? a.scrollHeight + "px" : null;
      });
    });
  }

  function renderFaqList(container) {
    const D = window.CLB_DATA;
    if (!container || !D) return;
    container.innerHTML = D.FAQ.map(
      (item) => `
      <div class="faq-item">
        <button class="faq-q" type="button">
          <span>${item.q}</span>
          <span class="plus">+</span>
        </button>
        <div class="faq-a"><p>${item.a}</p></div>
      </div>`
    ).join("");
    initFaqAccordion(container);
  }

  // ---- Render kartu produk (dipakai di homepage & halaman /produk) ----
  function renderProductCards(container, { limit } = {}) {
    const D = window.CLB_DATA;
    if (!container || !D) return;
    const items = limit ? D.PRODUCTS.slice(0, limit) : D.PRODUCTS;
    container.innerHTML = items
      .map(
        (p) => `
      <article class="product-card reveal">
        <div class="product-media">
          <span class="product-label">${p.label}</span>
          <svg class="stamp-mini" viewBox="0 0 60 60" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 34c8-14 24-14 32 0" stroke-linecap="round"/>
            <path d="M42 34l10-6v12z" fill="currentColor" stroke="none"/>
            <path d="M4 44c10-6 16-6 26 0s16 6 26 0" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="product-body">
          <h3>${p.nama}</h3>
          <p>${p.ringkasan}</p>
          <div class="product-meta">
            <span class="price-tag">${p.harga}<small>${p.berat}</small></span>
          </div>
          <div class="product-actions">
            <a class="btn btn-secondary btn-sm btn-block" href="produk-detail.html?id=${p.slug}">Lihat Detail</a>
          </div>
        </div>
      </article>`
      )
      .join("");
  }

  // ---- Render testimoni ----
  function renderTestimonials(container) {
    const D = window.CLB_DATA;
    if (!container || !D) return;
    container.innerHTML = D.TESTIMONIALS.map(
      (t) => `
      <div class="testi-card reveal">
        <div class="testi-stars">★★★★★</div>
        <p>"${t.teks}"</p>
        <div class="testi-name">${t.nama}<span>${t.lokasi}</span></div>
      </div>`
    ).join("");
  }

  // ---- Scroll reveal ----
  function initReveal(root) {
    const els = (root || document).querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
  }

  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href").slice(1);
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // Bagian yang TIDAK butuh data (aman jalan begitu DOM siap) ----
  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    initSmoothAnchors();
    injectSocialIcons();
  });

  // Bagian yang BUTUH data dari Supabase — dijalankan setelah event "clb:ready"
  function initDataDependent() {
    applyLinks();

    const productGrid = document.querySelector("[data-product-grid]");
    if (productGrid) renderProductCards(productGrid, { limit: productGrid.dataset.limit ? +productGrid.dataset.limit : undefined });

    const testiGrid = document.querySelector("[data-testimonials]");
    if (testiGrid) renderTestimonials(testiGrid);

    const faqList = document.querySelector("[data-faq-list]");
    if (faqList) renderFaqList(faqList);

    applyLinks(); // ulangi setelah render dinamis agar CTA di dalam card ikut terisi
    injectSocialIcons(); // jaga-jaga jika ada ikon sosial yang baru dirender
    initReveal();
  }

  document.addEventListener("clb:ready", initDataDependent);
  // Jika data ternyata sudah tersedia lebih dulu (mis. cache), jalankan langsung juga
  if (window.CLB_DATA) initDataDependent();

  window.CLB = { waLink, renderProductCards, renderTestimonials, renderFaqList, injectSocialIcons, applyLinks, initReveal };
})();

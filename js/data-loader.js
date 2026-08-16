/**
 * ==========================================================
 *  PEMUAT DATA DARI SUPABASE — CAP LAUT BIRU
 * ==========================================================
 * File ini mengambil semua konten (produk, FAQ, testimoni, dll)
 * dari database Supabase, lalu menyusunnya ke window.CLB_DATA
 * dengan bentuk yang SAMA seperti data.js versi lama — supaya
 * main.js dan seluruh halaman tidak perlu diubah lagi.
 *
 * Setelah data siap, event "clb:ready" dipancarkan ke document.
 */
(async function () {
  const FALLBACK = {
    SOCIALS: { INSTAGRAM_URL: "#", FACEBOOK_URL: "#", TIKTOK_URL: "#", SHOPEE_URL: "#", WHATSAPP_NUMBER: "", GOOGLE_MAPS_URL: "#" },
    WA_DEFAULT_MESSAGE: "Halo Cap Laut Biru, saya ingin memesan produk.",
    WA_RESELLER_MESSAGE: "Halo Cap Laut Biru, saya tertarik untuk menjadi reseller/mitra.",
    BUSINESS: { alamat: "[DATA BELUM DIISI]", jamOperasional: "[DATA BELUM DIISI]", kotaLayananUtama: "Pasuruan, Jawa Timur" },
    PRODUCTS: [], WHY_US: [], HOW_TO_ORDER: [], RESELLER_POINTS: [], TESTIMONIALS: [], FAQ: []
  };

  function showLoadError() {
    const banner = document.createElement("div");
    banner.style.cssText = "background:#B8842B;color:#fff;text-align:center;padding:10px 16px;font-size:13px;font-family:sans-serif;";
    banner.textContent = "Gagal memuat data terbaru dari server. Menampilkan versi cadangan — silakan muat ulang halaman.";
    document.body.prepend(banner);
  }

  try {
    const sb = window.supabaseClient;
    if (!sb) throw new Error("Supabase client belum siap.");

    const [productsRes, faqRes, testimonialsRes, whyUsRes, howToOrderRes, resellerRes, configRes] = await Promise.all([
      sb.from("products").select("*").order("urutan"),
      sb.from("faq").select("*").order("urutan"),
      sb.from("testimonials").select("*").order("urutan"),
      sb.from("why_us").select("*").order("urutan"),
      sb.from("how_to_order").select("*").order("urutan"),
      sb.from("reseller_points").select("*").order("urutan"),
      sb.from("site_config").select("*"),
    ]);

    [productsRes, faqRes, testimonialsRes, whyUsRes, howToOrderRes, resellerRes, configRes].forEach((r) => {
      if (r.error) throw r.error;
    });

    const cfg = {};
    (configRes.data || []).forEach((row) => (cfg[row.key] = row.value));

    window.CLB_DATA = {
      SOCIALS: {
        INSTAGRAM_URL: cfg.INSTAGRAM_URL || "#",
        FACEBOOK_URL: cfg.FACEBOOK_URL || "#",
        TIKTOK_URL: cfg.TIKTOK_URL || "#",
        SHOPEE_URL: cfg.SHOPEE_URL || "#",
        WHATSAPP_NUMBER: cfg.WHATSAPP_NUMBER || "",
        GOOGLE_MAPS_URL: cfg.GOOGLE_MAPS_URL || "#",
      },
      WA_DEFAULT_MESSAGE: cfg.WA_DEFAULT_MESSAGE || FALLBACK.WA_DEFAULT_MESSAGE,
      WA_RESELLER_MESSAGE: cfg.WA_RESELLER_MESSAGE || FALLBACK.WA_RESELLER_MESSAGE,
      BUSINESS: {
        alamat: cfg.ALAMAT || "[DATA BELUM DIISI]",
        jamOperasional: cfg.JAM_OPERASIONAL || "[DATA BELUM DIISI]",
        kotaLayananUtama: "Pasuruan, Jawa Timur",
      },
      PRODUCTS: (productsRes.data || []).map((p) => ({
        id: p.slug,
        slug: p.slug,
        nama: p.nama,
        kategori: p.kategori,
        label: p.label,
        ringkasan: p.ringkasan,
        deskripsiLengkap: p.deskripsi_lengkap,
        berat: p.berat,
        harga: p.harga,
        stok: p.stok,
        caraPenyajian: p.cara_penyajian,
        penyimpanan: p.penyimpanan,
        gambar: p.gambar_url ? [p.gambar_url] : [],
      })),
      WHY_US: (whyUsRes.data || []).map((w) => ({ icon: w.icon, judul: w.judul, teks: w.teks })),
      HOW_TO_ORDER: (howToOrderRes.data || []).map((s) => ({ judul: s.judul, teks: s.teks })),
      RESELLER_POINTS: (resellerRes.data || []).map((r) => `${r.judul} — ${r.teks}`),
      TESTIMONIALS: (testimonialsRes.data || []).map((t) => ({ nama: t.nama, lokasi: t.lokasi, teks: t.teks })),
      FAQ: (faqRes.data || []).map((f) => ({ q: f.pertanyaan, a: f.jawaban })),
    };
  } catch (err) {
    console.error("Gagal memuat data dari Supabase:", err);
    window.CLB_DATA = FALLBACK;
    document.addEventListener("DOMContentLoaded", showLoadError);
  }

  document.dispatchEvent(new CustomEvent("clb:ready"));
})();

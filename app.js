const STORAGE_KEY = "thesisFlowData.v1";

const DEFAULT_DATA = {
  identitas: {
    judul: "JUDUL NASKAH PUBLIKASI ILMIAH MAHASISWA",
    nama: "NAMA LENGKAP MAHASISWA",
    nim: "L200070150",
    programStudi: "PROGRAM STUDI TEKNIK INFORMATIKA",
    fakultas: "FAKULTAS KOMUNIKASI DAN INFORMATIKA",
    universitas: "UNIVERSITAS MUHAMMADIYAH SURAKARTA",
    tahun: "2023",
    pembimbing: "Dr. Dosen Pembimbing, M.Sc.",
    nidn: "123",
    penguji1: "Dosen Penguji, S. Pd. M.Hum.",
    penguji2: "Dr. Dosen Penguji, M. Ed.",
    hariUjian: "Senin",
    tanggalUjian: "20 Oktober 2023",
    dekan: "Prof. Dr. Nama Dekan",
    nidnDekan: "0601017001",
    kaprodi: "Prof. Dr. Nama Kaprodi",
    nidnKaprodi: "0602028001"
  },
  persantunan: "Penulis menyampaikan terima kasih yang sebesar-besarnya kepada Fakultas Komunikasi dan Informatika serta Program Studi Teknik Informatika Universitas Muhammadiyah Surakarta, dosen pembimbing, penguji, dan semua pihak yang telah membantu terlaksananya penelitian dan publikasi ilmiah ini.",
  abstrak: {
    indonesia: "Gaya selingkung (style sheet) adalah tata tulis yang dibakukan oleh editor sebuah jurnal ilmiah tulisan agar tulisan-tulisan yang dimuat memiliki kesamaan gaya (style). Selanjutnya, template adalah sumber baku penulisan ilmiah yang biasanya sudah disediakan dalam bentuk file untuk memudahkan penulis memenuhi persyaratan gaya selingkung yang telah ditetapkan. File ini dibuat untuk memudahkan mahasiswa S1 UMS menulis naskah publikasi ilmiah sebagai salah satu syarat kelulusan. Abstrak ditulis dengan paragraf tunggal dan memuat uraian singkat mengenai masalah dan tujuan penelitian, metode yang digunakan, dan hasil. Panjang abstrak yang baik adalah 150 sampai dengan 300 kata menggunakan font Times New Roman ukuran 10.",
    kataKunci: "artikel, gaya selingkung, penulisan ilmiah, template",
    english: "Style sheet is a manual detailing the house style of a particular publisher or publication. Template is a computer document that has the basic format of written text and that can be used many different times. An abstract is a brief summary of a research article, thesis, review, conference proceeding or any-depth analysis of a particular subject or discipline, and is often used to help the reader quickly ascertain the paper purposes. Abstract length varies by discipline and publisher requirements.",
    keywords: "article, scientific publication, style sheet, template"
  },
  bab1: {
    latarBelakang: `Pemanfaatan kecerdasan buatan dalam sistem perdagangan elektronik terus berkembang dari fungsi yang sebelumnya terbatas pada penyediaan informasi menjadi sistem yang mampu berinteraksi secara aktif dengan pengguna. Dalam proses pembelian, pelanggan tidak selalu hanya membutuhkan daftar produk, tetapi juga membutuhkan bantuan untuk menjelaskan kebutuhan, mempertimbangkan berbagai pilihan, menyesuaikan produk dengan kriteria tertentu, serta menentukan produk yang paling sesuai.

Salah satu pendekatan yang dapat digunakan untuk kebutuhan tersebut adalah Agentic Conversational Sales Assistant. Sistem ini dirancang sebagai asisten penjualan berbasis percakapan yang dapat memahami kebutuhan pelanggan, menggali informasi yang belum lengkap, mencari produk dalam basis data, mempertimbangkan batasan dan preferensi pelanggan, serta menghasilkan rekomendasi produk yang relevan.

Kemampuan sebuah Agentic Conversational Sales Assistant sangat dipengaruhi oleh Large Language Model yang digunakan sebagai reasoning engine. Model tersebut tidak hanya menghasilkan respons dalam bentuk bahasa alami, tetapi juga menentukan bagaimana agen memahami kebutuhan pelanggan, menafsirkan batasan, memilih informasi yang relevan, memutuskan kapan sebuah tool perlu digunakan, serta menyusun rekomendasi berdasarkan data produk yang tersedia.

Penelitian ini membandingkan beberapa Large Language Models pada arsitektur agen yang sama dengan prompt, basis data produk, tools, aturan agen, harga, dan antarmuka yang dikendalikan secara seragam. Evaluasi dilakukan pada dua lapisan, yaitu kinerja teknis agen dan perilaku pengguna sepanjang purchase funnel. Dengan demikian, penelitian tidak hanya menilai kemampuan model dalam menghasilkan jawaban, tetapi juga mengamati keterkaitan kualitas operasional agen dengan tindakan pengguna selama proses pembelian.`,
    rumusanMasalah: [
      "Bagaimana perbedaan kinerja beberapa Large Language Models ketika digunakan sebagai reasoning engine pada arsitektur Agentic Conversational Sales Assistant yang sama?",
      "Apakah penggunaan Large Language Model yang berbeda sebagai reasoning engine menghasilkan perbedaan perilaku pengguna pada tahapan purchase funnel?",
      "Bagaimana keterkaitan antara kinerja teknis Agentic Conversational Sales Assistant dengan progresi perilaku pengguna sepanjang purchase funnel?"
    ],
    batasanMasalah: [
      "Penelitian berfokus pada perbandingan beberapa Large Language Models yang digunakan sebagai reasoning engine dalam satu arsitektur Agentic Conversational Sales Assistant.",
      "Seluruh model menggunakan prompt, basis data produk, tools, aturan agen, harga produk, dan antarmuka yang sama.",
      "Evaluasi kinerja agen dibatasi pada Task Success Rate, Constraint Satisfaction, Hallucination Rate, Tool Call Success Rate, Conversation Efficiency, dan Reliability.",
      "Evaluasi perilaku pengguna dibatasi pada Recommendation Click, Product Selection, Add-to-Cart Rate, Checkout Initiation Rate, dan Purchase Conversion.",
      "Pengujian perilaku pengguna dilakukan menggunakan randomized user experiment dan sticky assignment berbasis User ID."
    ],
    tujuanPenelitian: [
      "Membandingkan kinerja beberapa Large Language Models sebagai reasoning engine pada Agentic Conversational Sales Assistant.",
      "Menganalisis perbedaan perilaku pengguna pada tahapan purchase funnel untuk setiap kondisi model.",
      "Menganalisis keterkaitan antara kinerja teknis agen dan progresi pengguna sepanjang purchase funnel."
    ],
    manfaatPenelitian: `Secara akademis, penelitian ini diharapkan memberikan kontribusi terhadap kajian evaluasi Large Language Models dalam sistem berbasis agen, khususnya ketika model digunakan sebagai reasoning engine pada Agentic Conversational Sales Assistant.

Secara praktis, hasil penelitian diharapkan dapat menjadi bahan pertimbangan bagi pengembang sistem e-commerce dalam memilih Large Language Model berdasarkan kinerja teknis agen dan indikator perilaku pengguna yang terukur.`
  },
  bab2: {
    studiLiteratur: `Kelompok penelitian pertama membahas evaluasi agen berbasis Large Language Model melalui keberhasilan penyelesaian tugas, penggunaan tools, kepatuhan terhadap aturan, dan konsistensi hasil. Kelompok penelitian kedua membahas conversational recommender system dan interaksi pengguna. Kelompok penelitian ketiga membahas kemampuan reasoning dalam domain belanja serta perilaku konsumen pada sistem percakapan.`,
    researchGap: `Penelitian terdahulu cenderung mengevaluasi kemampuan model, performa agen, dan perilaku pengguna secara terpisah. Penelitian ini menempatkan beberapa Large Language Models pada arsitektur Agentic Conversational Sales Assistant yang sama, kemudian mengevaluasi kinerja teknis agen serta progresi pengguna pada purchase funnel dalam satu kerangka eksperimen.`,
    penelitianTerdahulu: [
      { peneliti: "Yao dkk. (contoh)", fokus: "Evaluasi agent benchmark", metode: "Benchmark tugas dan tool use", evaluasiAgen: "Task success, rule compliance", evaluasiPengguna: "Tidak", celah: "Belum menguji purchase funnel pengguna nyata" },
      { peneliti: "Jannach (contoh)", fokus: "Conversational recommender systems", metode: "User-oriented evaluation", evaluasiAgen: "Terbatas", evaluasiPengguna: "Ya", celah: "Tidak membandingkan reasoning engine secara terkontrol" }
    ],
    teori: [
      { judul: "Large Language Models", isi: "Jelaskan definisi LLM, kemampuan reasoning, konteks, dan keterbatasan model yang relevan dengan penelitian." },
      { judul: "Agentic Artificial Intelligence dan Reasoning Engine", isi: "Jelaskan konsep agent, planning, reasoning, tool use, serta posisi LLM sebagai reasoning engine." },
      { judul: "Agentic Conversational Sales Assistant", isi: "Jelaskan karakteristik sistem percakapan yang secara aktif membantu pengguna selama proses pencarian dan pemilihan produk." },
      { judul: "Evaluasi Kinerja Agen", isi: "Jelaskan dasar teoritis setiap metrik yang digunakan untuk mengukur performa agen." },
      { judul: "Purchase Funnel pada E-Commerce", isi: "Jelaskan progression pengguna dari recommendation click hingga purchase conversion." }
    ]
  },
  bab3: {
    desainPenelitian: "Penelitian menggunakan desain eksperimental komparatif yang terdiri atas Controlled Agent Benchmark dan Randomized User Experiment. Controlled Agent Benchmark digunakan untuk mengukur performa teknis model pada skenario yang sama, sedangkan Randomized User Experiment digunakan untuk mengamati perilaku pengguna pada kondisi model yang berbeda.",
    objekPenelitian: "Objek penelitian adalah Agentic Conversational Sales Assistant pada platform e-commerce eksperimental dengan satu kategori produk yang sama untuk seluruh model. Basis data produk digunakan sebagai sumber informasi faktual dan sebagai dasar penyusunan ground truth.",
    arsitektur: "Arsitektur sistem terdiri atas antarmuka percakapan, reasoning engine berbasis Large Language Model, basis data produk, tool pencarian produk, tool detail produk, event logger, serta modul pencatatan purchase funnel. Seluruh komponen selain reasoning engine dipertahankan sama.",
    models: [
      { label: "Model A", nama: "Model belum ditetapkan", versi: "-", temperature: "0.2", catatan: "Ganti dengan model final setelah dipilih." },
      { label: "Model B", nama: "Model belum ditetapkan", versi: "-", temperature: "0.2", catatan: "Konfigurasi dibuat semirip mungkin." },
      { label: "Model C", nama: "Model belum ditetapkan", versi: "-", temperature: "0.2", catatan: "Gunakan versi model yang dicatat secara eksplisit." }
    ],
    metrics: [
      { nama: "Task Success Rate", definisi: "Proporsi skenario yang berhasil diselesaikan sesuai ground truth.", rumus: "Jumlah skenario berhasil / total skenario", arah: "Lebih tinggi lebih baik" },
      { nama: "Constraint Satisfaction", definisi: "Tingkat pemenuhan hard constraints dan preferences pengguna.", rumus: "Constraint terpenuhi / total constraint", arah: "Lebih tinggi lebih baik" },
      { nama: "Hallucination Rate", definisi: "Proporsi klaim faktual yang tidak didukung oleh basis data produk.", rumus: "Klaim tidak didukung / total klaim faktual", arah: "Lebih rendah lebih baik" },
      { nama: "Tool Call Success Rate", definisi: "Proporsi pemanggilan tool yang valid dan berhasil.", rumus: "Tool call berhasil / total tool call", arah: "Lebih tinggi lebih baik" },
      { nama: "Conversation Efficiency", definisi: "Efisiensi untuk mencapai keberhasilan berdasarkan turns dan tokens.", rumus: "Turns-to-Success dan Tokens-to-Success", arah: "Lebih rendah lebih efisien" },
      { nama: "Reliability", definisi: "Konsistensi keberhasilan model pada pengulangan skenario.", rumus: "Keberhasilan pengulangan / total pengulangan", arah: "Lebih tinggi lebih baik" }
    ],
    groundTruth: "Ground truth disusun dari atribut faktual pada basis data produk dan kebutuhan yang didefinisikan pada setiap skenario. Setiap skenario memuat hard constraints, preferences, dan daftar produk yang dianggap memenuhi kriteria.",
    benchmark: "Setiap model dijalankan pada kumpulan skenario yang sama. Seluruh interaksi, tool call, token, jumlah turn, dan hasil akhir dicatat. Skenario diulang beberapa kali untuk mengukur konsistensi. Hasil kemudian dibandingkan dengan ground truth.",
    userExperiment: "Pengguna dialokasikan secara acak ke salah satu kondisi model. Sticky assignment berbasis User ID digunakan agar pengguna tetap berinteraksi dengan model yang sama selama periode eksperimen. Pengguna tidak diberi informasi mengenai model yang melayani mereka.",
    pengumpulanData: "Data penelitian dikumpulkan dari log percakapan, log tool call, hasil benchmark, event recommendation click, product selection, add-to-cart, checkout initiation, dan purchase conversion.",
    analisisData: "Analisis dilakukan menggunakan statistik deskriptif dan inferensial yang disesuaikan dengan tipe data dan distribusi hasil. Analisis lintas lapisan digunakan untuk mengevaluasi keterkaitan antara metrik kinerja agen dan progression pengguna pada purchase funnel.",
    etika: "Identitas pengguna tidak disimpan secara langsung. User ID digunakan dalam bentuk pseudonim. Data eksperimen dibatasi untuk kebutuhan penelitian dan akses terhadap data mentah dibatasi pada peneliti."
  },
  referensi: [
    "Yao, dkk. (2025). [Ganti dengan sitasi lengkap dari sumber asli].",
    "Jannach. (2023). [Ganti dengan sitasi lengkap dari sumber asli].",
    "Araujo. (2018). [Ganti dengan sitasi lengkap dari sumber asli].",
    "Luo, dkk. (2019). [Ganti dengan sitasi lengkap dari sumber asli]."
  ]
};

let state = loadData();
let saveTimer;
let chapterObserver;

function clone(obj) { return JSON.parse(JSON.stringify(obj)); }

function paragraphBlock(text) { return { type: "paragraph", text: text || "" }; }
function listBlock(items) { return { type: "list", items: items || [], ordered: true }; }
function tableBlock(headers, rows) {
  return { type: "table", tableText: [headers, ...rows].map(row => row.join(" | ")).join("\n") };
}
function createSourceId() {
  return window.crypto?.randomUUID?.() || `source-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
function legacySection(title, blocks) { return { title, blocks }; }

function migrateLegacyChapters(data) {
  const bab1 = data.bab1 || {};
  const bab2 = data.bab2 || {};
  const bab3 = data.bab3 || {};
  const researchRows = (bab2.penelitianTerdahulu || []).map(item => [
    item.peneliti, item.fokus, item.metode, item.evaluasiAgen, item.evaluasiPengguna, item.celah
  ]);
  const modelRows = (bab3.models || []).map(item => [item.label, item.nama, item.versi, item.temperature, item.catatan]);
  const metricRows = (bab3.metrics || []).map(item => [item.nama, item.definisi, item.rumus, item.arah]);
  return [
    {
      title: "Pendahuluan",
      sections: [
        legacySection("Latar Belakang Masalah", [paragraphBlock(bab1.latarBelakang)]),
        legacySection("Rumusan Masalah", [listBlock(bab1.rumusanMasalah)]),
        legacySection("Batasan Masalah", [listBlock(bab1.batasanMasalah)]),
        legacySection("Tujuan Penelitian", [listBlock(bab1.tujuanPenelitian)]),
        legacySection("Manfaat Penelitian", [paragraphBlock(bab1.manfaatPenelitian)])
      ]
    },
    {
      title: "Tinjauan Pustaka",
      sections: [
        legacySection("Studi Literatur dan Penelitian Terkait", [paragraphBlock(bab2.studiLiteratur)]),
        legacySection("Penelitian Terdahulu dan Celah Riset", [
          ...(researchRows.length ? [tableBlock(["Peneliti", "Fokus", "Metode", "Evaluasi Agen", "Evaluasi Pengguna", "Celah"], researchRows)] : []),
          paragraphBlock(bab2.researchGap)
        ]),
        ...(bab2.teori || []).map(theory => legacySection(theory.judul || "Landasan Teori", [paragraphBlock(theory.isi)]))
      ]
    },
    {
      title: "Metodologi Penelitian",
      sections: [
        legacySection("Desain Penelitian", [paragraphBlock(bab3.desainPenelitian)]),
        legacySection("Objek dan Lingkungan Penelitian", [paragraphBlock(bab3.objekPenelitian)]),
        legacySection("Arsitektur Agentic Conversational Sales Assistant", [paragraphBlock(bab3.arsitektur)]),
        ...(modelRows.length ? [legacySection("Large Language Models yang Dibandingkan", [tableBlock(["Kondisi", "Model", "Versi", "Temperature", "Catatan"], modelRows)])] : []),
        ...(metricRows.length ? [legacySection("Variabel dan Metrik Penelitian", [tableBlock(["Metrik", "Definisi Operasional", "Rumus", "Arah Kinerja"], metricRows)])] : []),
        legacySection("Penyusunan Ground Truth dan Skenario Uji", [paragraphBlock(bab3.groundTruth)]),
        legacySection("Prosedur Controlled Agent Benchmark", [paragraphBlock(bab3.benchmark)]),
        legacySection("Prosedur Randomized User Experiment", [paragraphBlock(bab3.userExperiment)]),
        legacySection("Teknik Pengumpulan Data", [paragraphBlock(bab3.pengumpulanData)]),
        legacySection("Teknik Analisis Data", [paragraphBlock(bab3.analisisData)]),
        legacySection("Etika, Privasi, dan Pengelolaan Data", [paragraphBlock(bab3.etika)])
      ]
    }
  ];
}

function normalizeData(data) {
  const abstractData = data.abstrak && typeof data.abstrak === "object" && !Array.isArray(data.abstrak)
    ? data.abstrak
    : {};
  const normalized = {
    ...data,
    identitas: { ...DEFAULT_DATA.identitas, ...(data.identitas || {}) },
    persantunan: data.persantunan !== undefined ? data.persantunan : DEFAULT_DATA.persantunan,
    abstrak: { ...DEFAULT_DATA.abstrak, ...abstractData },
    referensi: Array.isArray(data.referensi) ? data.referensi : [],
    sources: Array.isArray(data.sources) ? data.sources : [],
    citationStyle: data.citationStyle === "ieee" ? "ieee" : "apa"
  };
  normalized.sources = normalized.sources.map(source => ({
    id: source.id || createSourceId(),
    title: source.title || "",
    authors: source.authors || "",
    year: String(source.year || ""),
    journal: source.journal || "",
    volume: source.volume || "",
    issue: source.issue || "",
    pages: source.pages || "",
    doi: source.doi || ""
  }));
  if (!Array.isArray(normalized.chapters)) {
    normalized.chapters = migrateLegacyChapters(data);
    delete normalized.bab1;
    delete normalized.bab2;
    delete normalized.bab3;
  }
  normalized.chapters = normalized.chapters.map(chapter => ({
    title: chapter.title || "",
    sections: (Array.isArray(chapter.sections) ? chapter.sections : []).map(section => normalizeSection(section))
  }));
  return normalized;
}

function normalizeSection(section) {
  return {
    title: section.title || "",
    blocks: Array.isArray(section.blocks) ? section.blocks : [],
    subsections: (Array.isArray(section.subsections) ? section.subsections : []).map(subsection => ({
      title: subsection.title || "",
      blocks: Array.isArray(subsection.blocks) ? subsection.blocks : []
    }))
  };
}

function getEditableSection(chapter, sectionIndex, subsectionIndex) {
  const section = chapter?.sections?.[sectionIndex];
  return subsectionIndex === undefined ? section : section?.subsections?.[subsectionIndex];
}

function loadData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const initial = normalizeData(clone(DEFAULT_DATA));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
  }
  try {
    const saved = normalizeData(JSON.parse(raw));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    return saved;
  } catch { return normalizeData(clone(DEFAULT_DATA)); }
}

function getPath(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}
function setPath(obj, path, value) {
  const keys = path.split(".");
  const last = keys.pop();
  const target = keys.reduce((acc, key) => acc[key], obj);
  target[last] = value;
}

function saveData() {
  const el = document.getElementById("saveState");
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    el.innerHTML = '<span class="dot"></span>Tersimpan lokal';
  } catch {
    el.innerHTML = '<span class="dot"></span>Penyimpanan penuh';
    toast("Penyimpanan browser penuh. Kurangi ukuran gambar atau export backup.");
  }
  updateProgress();
}
function queueSave() {
  const el = document.getElementById("saveState");
  el.innerHTML = '<span class="dot"></span>Menyimpan…';
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveData, 350);
}

function bindSimpleFields() {
  document.querySelectorAll("[data-key]").forEach(el => {
    const value = getPath(state, el.dataset.key);
    el.value = value ?? "";
    el.addEventListener("input", () => {
      setPath(state, el.dataset.key, el.value);
      updateCounter(el);
      queueSave();
    });
    updateCounter(el);
  });
}

function updateCounter(el) {
  const counter = document.querySelector(`[data-for="${el.id}"]`);
  if (!counter) return;
  const words = (el.value.trim().match(/\S+/g) || []).length;
  counter.textContent = `${words} kata`;
}

function renderDynamicList(path) {
  const host = document.querySelector(`[data-list="${path}"]`);
  if (!host) return;
  const items = getPath(state, path) || [];
  host.innerHTML = "";
  items.forEach((value, index) => {
    const row = document.createElement("div");
    row.className = "dynamic-row";
    row.innerHTML = `
      <div class="dynamic-index">${index + 1}</div>
      <textarea rows="${path === 'referensi' ? 2 : 3}" data-dyn-input>${escapeHtml(value)}</textarea>
      <button class="icon-btn" type="button" title="Hapus">×</button>`;
    row.querySelector("[data-dyn-input]").addEventListener("input", e => {
      items[index] = e.target.value; queueSave();
    });
    row.querySelector(".icon-btn").addEventListener("click", () => {
      items.splice(index, 1); renderDynamicList(path); queueSave();
    });
    host.appendChild(row);
  });
}

function renderSources() {
  const host = document.getElementById("sourceList");
  if (!host) return;
  host.innerHTML = state.sources.map((source, index) => `
    <article class="source-card" data-source-index="${index}">
      <div class="source-card-heading">
        <strong>${escapeHtml(source.title || `Jurnal ${index + 1}`)}</strong>
        <button class="icon-btn" type="button" data-delete-source="${index}" title="Hapus sumber">×</button>
      </div>
      <p class="source-citation-preview">${escapeHtml(formatSourceReference(source, referenceSourceEntries().findIndex(item => item.id === source.id) + 1))}</p>
      <details class="source-metadata" open>
        <summary>Lihat atau edit metadata</summary>
        <div class="source-fields">
        <label class="full">Judul<input data-source-field="title" value="${escapeAttr(source.title)}" placeholder="Judul artikel"></label>
        <label class="full">Penulis<input data-source-field="authors" value="${escapeAttr(source.authors)}" placeholder="Contoh: Sari, A.; Budi, B."></label>
        <label>Tahun<input data-source-field="year" inputmode="numeric" value="${escapeAttr(source.year)}" placeholder="2025"></label>
        <label>Jurnal<input data-source-field="journal" value="${escapeAttr(source.journal)}" placeholder="Nama jurnal"></label>
        <label>Volume<input data-source-field="volume" value="${escapeAttr(source.volume)}"></label>
        <label>Nomor<input data-source-field="issue" value="${escapeAttr(source.issue)}"></label>
        <label>Halaman<input data-source-field="pages" value="${escapeAttr(source.pages)}"></label>
        <label class="full">DOI<input data-source-field="doi" value="${escapeAttr(source.doi)}" placeholder="10.xxxx/xxxxx"></label>
        </div>
      </details>
    </article>`).join("");

  host.querySelectorAll("[data-source-field]").forEach(input => {
    input.addEventListener("input", () => {
      const source = state.sources[Number(input.closest("[data-source-index]").dataset.sourceIndex)];
      source[input.dataset.sourceField] = input.value;
      const card = input.closest("[data-source-index]");
      if (input.dataset.sourceField === "title") {
        card.querySelector(".source-card-heading strong").textContent = source.title || `Jurnal ${Number(card.dataset.sourceIndex) + 1}`;
        document.querySelectorAll("[data-cite-source]").forEach(select => {
          const option = select.querySelector(`option[value="${CSS.escape(source.id)}"]`);
          if (option) option.textContent = source.title || "Sumber tanpa judul";
        });
      }
      card.querySelector(".source-citation-preview").textContent = formatSourceReference(
        source,
        referenceSourceEntries().findIndex(item => item.id === source.id) + 1
      );
      queueSave();
    });
  });
  host.querySelectorAll("[data-delete-source]").forEach(button => {
    button.addEventListener("click", () => {
      state.sources.splice(Number(button.dataset.deleteSource), 1);
      renderSources();
      renderChapters();
      queueSave();
    });
  });
}

document.querySelectorAll("[data-add-list]").forEach(btn => {
  btn.addEventListener("click", () => {
    const path = btn.dataset.addList;
    const arr = getPath(state, path);
    arr.push("");
    renderDynamicList(path);
    queueSave();
  });
});

function fieldHTML(label, value, key, full = false, textarea = false) {
  return `<div class="${full ? 'full' : ''}">
    <label>${label}</label>
    ${textarea
      ? `<textarea rows="3" data-object-key="${key}">${escapeHtml(value || "")}</textarea>`
      : `<input type="text" data-object-key="${key}" value="${escapeAttr(value || "")}">`}
  </div>`;
}

function renderResearch() {
  const host = document.getElementById("researchList");
  host.innerHTML = "";
  state.bab2.penelitianTerdahulu.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "object-card";
    card.innerHTML = `
      <div class="object-card-head"><strong>Penelitian ${index + 1}</strong><button class="icon-btn" type="button">×</button></div>
      <div class="object-grid">
        ${fieldHTML("Peneliti / Tahun", item.peneliti, "peneliti")}
        ${fieldHTML("Fokus", item.fokus, "fokus")}
        ${fieldHTML("Model / Metode", item.metode, "metode")}
        ${fieldHTML("Evaluasi Agen", item.evaluasiAgen, "evaluasiAgen")}
        ${fieldHTML("Evaluasi Pengguna", item.evaluasiPengguna, "evaluasiPengguna")}
        ${fieldHTML("Celah", item.celah, "celah", true, true)}
      </div>`;
    bindObjectCard(card, item, () => { state.bab2.penelitianTerdahulu.splice(index, 1); renderResearch(); queueSave(); });
    host.appendChild(card);
  });
}

function renderTheory() {
  const host = document.getElementById("theoryList"); host.innerHTML = "";
  state.bab2.teori.forEach((item, index) => {
    const card = document.createElement("div"); card.className = "object-card";
    card.innerHTML = `
      <div class="object-card-head"><strong>Teori ${index + 1}</strong><button class="icon-btn" type="button">×</button></div>
      <div class="object-grid">
        ${fieldHTML("Judul subbab", item.judul, "judul", true)}
        ${fieldHTML("Isi / catatan", item.isi, "isi", true, true)}
      </div>`;
    bindObjectCard(card, item, () => { state.bab2.teori.splice(index, 1); renderTheory(); queueSave(); });
    host.appendChild(card);
  });
}

function renderModels() {
  const host = document.getElementById("modelList"); host.innerHTML = "";
  state.bab3.models.forEach((item, index) => {
    const card = document.createElement("div"); card.className = "object-card";
    card.innerHTML = `
      <div class="object-card-head"><strong>${escapeHtml(item.label || `Model ${index + 1}`)}</strong><button class="icon-btn" type="button">×</button></div>
      <div class="object-grid">
        ${fieldHTML("Label", item.label, "label")}
        ${fieldHTML("Nama model", item.nama, "nama")}
        ${fieldHTML("Versi", item.versi, "versi")}
        ${fieldHTML("Temperature", item.temperature, "temperature")}
        ${fieldHTML("Catatan", item.catatan, "catatan", true, true)}
      </div>`;
    bindObjectCard(card, item, () => { state.bab3.models.splice(index, 1); renderModels(); queueSave(); });
    host.appendChild(card);
  });
}

function renderMetrics() {
  const host = document.getElementById("metricList"); host.innerHTML = "";
  state.bab3.metrics.forEach((item, index) => {
    const card = document.createElement("div"); card.className = "object-card";
    card.innerHTML = `
      <div class="object-card-head"><strong>Metrik ${index + 1}</strong><button class="icon-btn" type="button">×</button></div>
      <div class="object-grid">
        ${fieldHTML("Nama metrik", item.nama, "nama")}
        ${fieldHTML("Arah kinerja", item.arah, "arah")}
        ${fieldHTML("Definisi operasional", item.definisi, "definisi", true, true)}
        ${fieldHTML("Rumus / cara hitung", item.rumus, "rumus", true, true)}
      </div>`;
    bindObjectCard(card, item, () => { state.bab3.metrics.splice(index, 1); renderMetrics(); queueSave(); });
    host.appendChild(card);
  });
}

function bindObjectCard(card, item, onDelete) {
  card.querySelectorAll("[data-object-key]").forEach(el => {
    el.addEventListener("input", () => { item[el.dataset.objectKey] = el.value; queueSave(); });
  });
  card.querySelector(".icon-btn").addEventListener("click", onDelete);
}

let mermaidInitialized = false;
function ensureMermaid() {
  if (typeof mermaid !== "undefined" && !mermaidInitialized) {
    try {
      mermaid.initialize({
        startOnLoad: false,
        theme: "neutral",
        flowchart: {
          curve: "basis",
          htmlLabels: true
        },
        securityLevel: "loose"
      });
      mermaidInitialized = true;
    } catch (e) {
      console.warn("Mermaid init error:", e);
    }
  }
}

function serializeFlowchartMarkdown(steps) {
  if (!Array.isArray(steps) || steps.length === 0) {
    return `graph TD
    A([Mulai]) --> B[/Input Data / Nilai/]
    B --> C{Sisa Bagi = 0?}
    C -- Ya --> D[/Genap/]
    C -- Tidak --> E[/Ganjil/]
    D --> F([Selesai])
    E --> F`;
  }
  let out = "graph TD\n";
  const idMap = steps.map((_, i) => String.fromCharCode(65 + (i % 26)) + (i >= 26 ? Math.floor(i / 26) : ""));

  steps.forEach((s, i) => {
    const id = idMap[i];
    const text = (s.text || `Langkah ${i + 1}`).replace(/["[\]{}()]/g, "");
    let shapeStr = `[${text}]`;
    if (s.shape === "terminator") shapeStr = `([${text}])`;
    else if (s.shape === "decision") shapeStr = `{${text}}`;
    else if (s.shape === "io") shapeStr = `[/${text}/]`;

    out += `    ${id}${shapeStr}\n`;
  });

  steps.forEach((s, i) => {
    const id = idMap[i];
    if (i < steps.length - 1) {
      const nextId = idMap[i + 1];
      if (s.shape === "decision") {
        const sideSteps = s.sideSteps || (s.sideNodeText ? [{ shape: s.sideNodeShape || "process", text: s.sideNodeText }] : []);
        const branchAssign = s.branchAssign || "sideYes_straightNo";
        const straightLbl = branchAssign === "sideYes_straightNo" ? "No" : "Yes";
        const sideLbl = branchAssign === "sideYes_straightNo" ? "Yes" : "No";

        out += `    ${id} -- ${straightLbl} --> ${nextId}\n`;

        if (sideSteps.length > 0) {
          let prevSideId = id;
          sideSteps.forEach((st, si) => {
            const sideId = `S${i + 1}_${si + 1}`;
            const stText = (st.text || `Side ${si + 1}`).replace(/["[\]{}()]/g, "");
            let stShape = `[${stText}]`;
            if (st.shape === "terminator") stShape = `([${stText}])`;
            else if (st.shape === "decision") stShape = `{${stText}}`;
            else if (st.shape === "io") stShape = `[/${stText}/]`;

            out += `    ${sideId}${stShape}\n`;
            if (si === 0) {
              out += `    ${id} -- ${sideLbl} --> ${sideId}\n`;
            } else {
              out += `    ${prevSideId} --> ${sideId}\n`;
            }
            prevSideId = sideId;
          });

          const rj = s.sideRejoinTarget !== undefined && s.sideRejoinTarget !== null && s.sideRejoinTarget !== "" ? Number(s.sideRejoinTarget) : (i + 2);
          if (rj < steps.length) {
            out += `    ${prevSideId} --> ${idMap[rj]}\n`;
          }
        } else if (s.branchNoTarget !== undefined && s.branchNoTarget !== null && s.branchNoTarget !== "") {
          const tIdx = Number(s.branchNoTarget);
          if (tIdx < steps.length) {
            out += `    ${id} -- ${sideLbl} --> ${idMap[tIdx]}\n`;
          }
        }
      } else {
        out += `    ${id} --> ${nextId}\n`;
      }
    }
  });
  return out.trim();
}

function isGraphvizDot(text) {
  if (!text) return false;
  const t = text.trim();
  return /^\s*(strict\s+)?(di)?graph\b/i.test(t) || (/\{[\s\S]*\}[\s\S]*$/m.test(t) && t.includes("->"));
}

function parseFlowchartMarkdown(text) {
  if (!text || !text.trim()) return [];
  const raw = text.trim();

  // If text is Graphviz DOT syntax, extract labels and shapes for fallback steps if needed
  if (isGraphvizDot(raw)) {
    const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const nodeMap = new Map();
    const order = [];

    const ensureNode = (id, text = "", shape = "process") => {
      id = id.trim();
      if (!id || /^(graph|node|edge|rank|strict|digraph)$/i.test(id)) return null;
      if (!nodeMap.has(id)) {
        nodeMap.set(id, { id, text: text || id, shape, targets: [] });
        order.push(id);
      } else {
        const n = nodeMap.get(id);
        if (text && (!n.text || n.text === id)) n.text = text;
        if (shape && shape !== "process") n.shape = shape;
      }
      return nodeMap.get(id);
    };

    lines.forEach(line => {
      if (/^\s*(strict\s+)?(di)?graph\b/i.test(line) || /^\s*(graph|node|edge)\s*\[/i.test(line) || /^\s*[{}]/.test(line)) return;

      // Extract node declarations: A [label="...", shape=diamond, ...]
      const nodeDecl = line.match(/^([a-zA-Z0-9_-]+)\s*\[(.*?)\]/);
      if (nodeDecl) {
        const id = nodeDecl[1];
        const attrs = nodeDecl[2];
        const mLabel = attrs.match(/label\s*=\s*"([^"]*)"/i);
        const mShape = attrs.match(/shape\s*=\s*([a-zA-Z0-9_-]+)/i);
        let text = mLabel ? mLabel[1].replace(/\\n/g, " ") : id;
        let shape = "process";
        if (mShape) {
          const s = mShape[1].toLowerCase();
          if (s === "diamond") shape = "decision";
          else if (s === "oval" || s === "ellipse" || s === "circle") shape = "terminator";
          else if (s === "parallelogram") shape = "io";
        }
        ensureNode(id, text, shape);
      }

      // Extract node chain: A -> B -> C -> D
      if (line.includes("->")) {
        const cleanLine = line.replace(/\[.*?\]/g, ""); // strip attributes
        const parts = cleanLine.split("->").map(p => p.trim().replace(/;$/, "")).filter(Boolean);
        for (let i = 0; i < parts.length; i++) {
          const nodeId = parts[i];
          if (/^[a-zA-Z0-9_-]+$/.test(nodeId)) {
            ensureNode(nodeId, nodeId, "process");
          }
        }
      }
    });

    if (order.length > 0) {
      return order.map((id, idx) => {
        const n = nodeMap.get(id);
        return {
          id: `s_${idx + 1}`,
          shape: n?.shape || "process",
          text: n?.text || id
        };
      });
    }
  }

  // If text is Mermaid syntax, parse nodes and connections into steps
  if (/^\s*(graph|flowchart)\s+(TD|TB|LR|RL)/i.test(raw) || raw.includes("-->")) {
    const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const nodeMap = new Map(); // id -> { id, text, shape, targets: [] }
    const order = [];

    const ensureNode = (id, text = "", shape = "process") => {
      id = id.trim();
      if (!nodeMap.has(id)) {
        nodeMap.set(id, { id, text: text || id, shape, targets: [] });
        order.push(id);
      } else {
        const n = nodeMap.get(id);
        if (text && (!n.text || n.text === id)) n.text = text;
        if (shape && shape !== "process") n.shape = shape;
      }
      return nodeMap.get(id);
    };

    const extractNode = token => {
      token = token.trim();
      // Test shapes:
      // A([text]) -> terminator
      let m = token.match(/^([a-zA-Z0-9_-]+)\s*\(\[(.*?)\]\)/);
      if (m) return ensureNode(m[1], m[2], "terminator");
      // A{text} -> decision
      m = token.match(/^([a-zA-Z0-9_-]+)\s*\{(.*?)\}/);
      if (m) return ensureNode(m[1], m[2], "decision");
      // A[/text/] or A[\text\] -> io
      m = token.match(/^([a-zA-Z0-9_-]+)\s*\[\/(.*?)\/\]/) || token.match(/^([a-zA-Z0-9_-]+)\s*\[\\(.*?)\\\]/);
      if (m) return ensureNode(m[1], m[2], "io");
      // A((text)) -> circle / terminator
      m = token.match(/^([a-zA-Z0-9_-]+)\s*\(\((.*?)\)\)/);
      if (m) return ensureNode(m[1], m[2], "terminator");
      // A[text] -> process
      m = token.match(/^([a-zA-Z0-9_-]+)\s*\[(.*?)\]/);
      if (m) return ensureNode(m[1], m[2], "process");
      // Just ID: A
      m = token.match(/^([a-zA-Z0-9_-]+)$/);
      if (m) return ensureNode(m[1], m[1], "process");
      return null;
    };

    lines.forEach(line => {
      if (/^\s*(graph|flowchart)\s+/i.test(line)) return;

      // Check arrows like A --> B or A -- Yes --> B or A -->|Yes| B
      if (line.includes("-->") || line.includes("---")) {
        const parts = line.split(/-->|---|->/);
        for (let i = 0; i < parts.length - 1; i++) {
          let leftPart = parts[i].trim();
          let rightPart = parts[i + 1].trim();

          let label = "";
          // Check label in leftPart: A -- label
          const mLabel = leftPart.match(/^(.*?)\s*--\s*(.*?)$/);
          if (mLabel) {
            leftPart = mLabel[1].trim();
            label = mLabel[2].trim();
          }
          // Check label in rightPart: |label| B
          const mPipe = rightPart.match(/^\|(.*?)\|\s*(.*)$/);
          if (mPipe) {
            label = mPipe[1].trim();
            rightPart = mPipe[2].trim();
          }

          const srcNode = extractNode(leftPart);
          const tgtNode = extractNode(rightPart);
          if (srcNode && tgtNode) {
            srcNode.targets.push({ targetId: tgtNode.id, label });
          }
        }
      } else {
        extractNode(line);
      }
    });

    return order.map((id, idx) => {
      const n = nodeMap.get(id);
      return {
        id: `s_${idx + 1}`,
        shape: n.shape || "process",
        text: n.text || id
      };
    });
  }

  // Fallback: sequential lines format "1. Mulai (oval)"
  const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const steps = [];

  for (let i = 0; i < lines.length; i++) {
    let clean = lines[i];
    if (clean.startsWith("- ")) clean = clean.slice(2).trim();
    else if (/^\d+[\.\)]\s*/.test(clean)) clean = clean.replace(/^\d+[\.\)]\s*/, "").trim();

    let shape = "process";
    let mainPart = clean;
    let branchInfo = "";

    if (clean.includes("->")) {
      const parts = clean.split("->");
      mainPart = parts[0].trim();
      branchInfo = parts.slice(1).join("->").trim();
    }

    const lowerMain = mainPart.toLowerCase();
    if (lowerMain.includes("(terminator)") || lowerMain.includes("(oval)") || lowerMain.includes("(mulai)") || lowerMain.includes("(selesai)")) {
      shape = "terminator";
    } else if (lowerMain.includes("(decision)") || lowerMain.includes("(diamond)") || lowerMain.includes("(keputusan)") || lowerMain.includes("?")) {
      shape = "decision";
    } else if (lowerMain.includes("(io)") || lowerMain.includes("(input)") || lowerMain.includes("(output)")) {
      shape = "io";
    }

    let cleanedText = mainPart;
    for (const tag of ["(terminator)", "(oval)", "(mulai)", "(selesai)", "(decision)", "(diamond)", "(keputusan)", "(io)", "(input)", "(output)", "(process)", "(rect)"]) {
      const idx = cleanedText.toLowerCase().indexOf(tag);
      if (idx !== -1) cleanedText = cleanedText.slice(0, idx) + cleanedText.slice(idx + tag.length);
    }
    cleanedText = cleanedText.trim();
    if (!cleanedText) cleanedText = `Langkah ${i + 1}`;

    const step = {
      id: `s_${i + 1}`,
      shape: shape,
      text: cleanedText
    };

    if (shape === "decision" && branchInfo) {
      step.branchType = "node";
      step.branchAssign = "sideYes_straightNo";
      const sideSteps = [];

      const subParts = branchInfo.split("|").map(p => p.trim());
      for (const sp of subParts) {
        const spLower = sp.toLowerCase();
        if (spLower.startsWith("rejoin:") || spLower.startsWith("rejoin")) {
          const rjVal = parseInt(sp.replace(/[^0-9]/g, ""), 10);
          if (!isNaN(rjVal) && rjVal > 0) step.sideRejoinTarget = rjVal - 1;
        } else if (spLower.startsWith("loop:") || spLower.startsWith("kembali:") || spLower.startsWith("loop") || spLower.startsWith("kembali")) {
          step.branchType = "jump";
          const lpVal = parseInt(sp.replace(/[^0-9]/g, ""), 10);
          if (!isNaN(lpVal) && lpVal > 0) step.branchNoTarget = lpVal - 1;
        } else if (spLower.includes("sideno") || spLower.includes("tidaksamping")) {
          step.branchAssign = "sideNo_straightYes";
        } else {
          let sideContent = sp.includes(":") ? sp.split(":")[1].trim() : sp;
          let sShape = "process";
          const sLower = sideContent.toLowerCase();
          if (sLower.includes("(io)")) sShape = "io";
          else if (sLower.includes("(terminator)")) sShape = "terminator";
          else if (sLower.includes("(decision)")) sShape = "decision";

          for (const tag of ["(io)", "(process)", "(rect)", "(terminator)", "(decision)"]) {
            const idx = sideContent.toLowerCase().indexOf(tag);
            if (idx !== -1) sideContent = sideContent.slice(0, idx) + sideContent.slice(idx + tag.length);
          }
          sideContent = sideContent.trim();
          if (sideContent) sideSteps.push({ shape: sShape, text: sideContent });
        }
      }

      if (sideSteps.length > 0) {
        step.sideSteps = sideSteps;
        step.sideNodeText = sideSteps[0].text;
        step.sideNodeShape = sideSteps[0].shape;
      }
    }
    steps.push(step);
  }
  return steps;
}

function renderContentBlock(block, chapterIndex, sectionIndex, blockIndex, subsectionIndex) {
  const subsectionData = subsectionIndex === undefined ? "" : ` data-subsection-index="${subsectionIndex}"`;
  const blockData = `data-chapter-index="${chapterIndex}" data-section-index="${sectionIndex}"${subsectionData} data-block-index="${blockIndex}"`;
  const labels = { paragraph: "Paragraf", list: "Daftar", image: "Gambar", table: "Tabel", chart: "Grafik", flowchart: "Diagram Alir (Flowchart)" };
  let content = "";
  if (block.type === "paragraph") {
    const sourceOptions = state.sources.map(source =>
      `<option value="${escapeAttr(source.id)}">${escapeHtml(source.title || "Sumber tanpa judul")}</option>`
    ).join("");
    content = `<textarea rows="6" data-editor-field="paragraph" ${blockData} placeholder="Tulis paragraf di sini">${escapeHtml(block.text || "")}</textarea>
      <div class="cite-tools"><select data-cite-source aria-label="Pilih sumber sitasi"><option value="">Pilih sumber untuk disisipkan</option>${sourceOptions}</select><button class="mini-btn" type="button" data-action="insert-citation" ${blockData} ${state.sources.length ? "" : "disabled"}>Sisipkan sitasi</button></div>`;
  } else if (block.type === "list") {
    content = `<div class="object-grid"><label class="full">Jenis daftar<select data-editor-field="listStyle" ${blockData}><option value="numbered" ${block.ordered !== false ? "selected" : ""}>Bernomor</option><option value="bullet" ${block.ordered === false ? "selected" : ""}>Poin</option></select></label><label class="full">Isi daftar<textarea rows="5" data-editor-field="listItems" ${blockData} placeholder="Satu item per baris">${escapeHtml((block.items || []).join("\n"))}</textarea></label></div>`;
  } else if (block.type === "image") {
    const preview = block.dataUrl ? `<img src="${escapeAttr(block.dataUrl)}" alt="Pratinjau gambar">` : "";
    content = `<label class="image-picker">Pilih gambar<input type="file" accept="image/*" data-image-input ${blockData}></label>
      <div class="image-preview">${preview}</div>
      <div class="chart-fields" style="margin-top:8px;">
        <label>Keterangan gambar<input data-editor-field="caption" ${blockData} value="${escapeAttr(block.caption || "")}" placeholder="Contoh: Gambar 1. Arsitektur Sistem"></label>
        <label>Lebar di Word (cm)<input type="number" step="0.5" min="4" max="14" data-editor-field="widthCm" ${blockData} value="${escapeAttr(block.widthCm || "11.5")}" placeholder="Default: 11.5"></label>
      </div>`;
  } else if (block.type === "table") {
    const inputMode = block.tableInputMode || "grid";
    content = `<div class="data-input-tools"><label>Cara input<select data-editor-field="tableInputMode" ${blockData}><option value="grid" ${inputMode === "grid" ? "selected" : ""}>Kolom dan baris</option><option value="text" ${inputMode === "text" ? "selected" : ""}>Teks dengan |</option></select></label></div>
      <div data-grid-editor ${inputMode === "grid" ? "" : "hidden"}>${structuredGridHTML(block, blockData)}</div>
      <label data-text-editor ${inputMode === "text" ? "" : "hidden"}>Isi tabel<textarea rows="6" data-editor-field="tableText" ${blockData} placeholder="Kolom 1 | Kolom 2&#10;Isi 1 | Isi 2">${escapeHtml(block.tableText || "")}</textarea><small class="editor-hint">Baris pertama menjadi header. Pisahkan kolom dengan tanda |.</small></label>`;
  } else if (block.type === "chart") {
    const inputMode = block.chartInputMode || "grid";
    content = `<div class="chart-fields">
      <label>Judul grafik<input data-editor-field="chartTitle" ${blockData} value="${escapeAttr(block.chartTitle || "")}" placeholder="Contoh: Perbandingan hasil"></label>
      <label>Jenis grafik<select data-editor-field="chartType" ${blockData}>
        <option value="bar" ${block.chartType === "bar" ? "selected" : ""}>Batang</option>
        <option value="bar-comparison" ${block.chartType === "bar-comparison" ? "selected" : ""}>Batang perbandingan</option>
        <option value="line" ${block.chartType === "line" ? "selected" : ""}>Garis</option>
        <option value="line-comparison" ${block.chartType === "line-comparison" ? "selected" : ""}>Garis perbandingan</option>
        <option value="pie" ${block.chartType === "pie" ? "selected" : ""}>Lingkaran</option>
      </select></label>
      <div class="data-input-tools full"><label>Cara input<select data-editor-field="chartInputMode" ${blockData}><option value="grid" ${inputMode === "grid" ? "selected" : ""}>Kolom dan baris</option><option value="text" ${inputMode === "text" ? "selected" : ""}>Teks dengan |</option></select></label></div>
      <div class="full" data-grid-editor ${inputMode === "grid" ? "" : "hidden"}>${structuredGridHTML(block, blockData)}</div>
      <label class="full" data-text-editor ${inputMode === "text" ? "" : "hidden"}>Data grafik<textarea rows="5" data-editor-field="chartData" ${blockData} placeholder="${block.chartType?.endsWith("comparison") ? "Kategori | Seri 1 | Seri 2&#10;Kategori A | 10 | 15&#10;Kategori B | 20 | 18" : "Kategori A | 10&#10;Kategori B | 15"}">${escapeHtml(block.chartData || "")}</textarea><small class="editor-hint" data-chart-hint>${block.chartType?.endsWith("comparison") ? "Baris pertama berisi Kategori dan nama seri. Baris berikutnya berisi kategori | nilai seri 1 | nilai seri 2 (atau lebih)." : "Satu kategori per baris, pisahkan nama kategori dan angka dengan |."}</small></label>
      <label class="full">Keterangan gambar<input data-editor-field="caption" ${blockData} value="${escapeAttr(block.caption || "")}" placeholder="Opsional"></label>
      <div class="chart-editor-preview full" data-chart-preview>${chartPreviewSVG(block)}</div>
    </div>`;
  } else if (block.type === "flowchart") {
    if (!block.flowchartText) {
      block.flowchartText = serializeFlowchartMarkdown(block.flowchartSteps || []);
    }
    // Pastikan flowchartSteps sinkron dengan flowchartText
    block.flowchartSteps = parseFlowchartMarkdown(block.flowchartText);

    content = `<div class="flowchart-markdown-container">
      <div class="chart-fields">
        <label>Judul Diagram Alir<input data-editor-field="flowchartTitle" ${blockData} value="${escapeAttr(block.flowchartTitle || "Diagram Alir Penelitian")}" placeholder="Contoh: Diagram Alir Penelitian"></label>
        <label>Label Gambar (Caption)<input data-editor-field="caption" ${blockData} value="${escapeAttr(block.caption || "Gambar 1. Diagram Alir Penelitian")}" placeholder="Contoh: Gambar 1. Diagram Alir Penelitian"></label>
      </div>

      <!-- TEXT / GRAPHVIZ DOT EDITOR FOR FLOWCHART -->
      <div style="margin-top:12px;background:#f8fafc;border:1.5px solid #cbd5e1;border-radius:10px;padding:12px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;flex-wrap:wrap;gap:8px;">
          <div>
            <strong style="color:var(--primary);font-size:13px;display:flex;align-items:center;gap:6px;">
              <span>⚡ Editor Diagram Alir Graphviz (DOT Language)</span>
            </strong>
            <small style="color:var(--muted);font-size:11.5px;">Gunakan sintaks Graphviz DOT (<code>digraph { ... }</code>, <code>splines=ortho</code>, <code>A -&gt; B</code>, dsb). Mendukung warna, bentuk siku-siku, diamond, &amp; rank.</small>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <button class="mini-btn" type="button" data-action="flowchart-insert-template" data-template="dot-step" ${blockData}>+ Tambah Edge (A -&gt; B)</button>
            <button class="mini-btn" type="button" data-action="flowchart-insert-template" data-template="dot-decision" ${blockData}>+ Decision Diamond</button>
            <button class="mini-btn" type="button" data-action="flowchart-insert-template" data-template="dot-example" ${blockData}>📋 Contoh RecruitmentProcess</button>
          </div>
        </div>

        <textarea rows="14" data-editor-field="flowchartText" ${blockData} style="width:100%;font-family:Consolas, 'Courier New', monospace;font-size:12.5px;line-height:1.5;padding:10px 12px;border:1.5px solid #94a3b8;border-radius:6px;background:#ffffff;box-sizing:border-box;" placeholder="digraph G {&#10;    graph [splines=ortho];&#10;    A -&gt; B;&#10;}">${escapeHtml(block.flowchartText || "")}</textarea>

        <div style="margin-top:6px;padding:8px 12px;background:#eef2ff;border-radius:6px;font-size:11.5px;color:#3730a3;line-height:1.5;">
          <strong>💡 Tips Format Graphviz (DOT Language):</strong><br>
          • <strong>A [shape=box, style=filled, fillcolor="#cce5ff"]</strong> = Kotak proses dengan warna kustom<br>
          • <strong>E [shape=diamond, fillcolor="#ffebcc"]</strong> = Belah ketupat keputusan (decision)<br>
          • <strong>A -&gt; B -&gt; C</strong> = Sambungan berantai | <strong>E -&gt; F [label=" No "]</strong> = Cabang dengan label No/Yes<br>
          • <strong>graph [splines=ortho]</strong> = Garis koneksi rapi siku-siku | <strong>{ rank=same; A G }</strong> = Menjajarkan posisi horizontal
        </div>
      </div>

      <!-- LIVE CANVAS PREVIEW -->
      <div class="flowchart-canvas-section" style="margin-top:14px;background:#ffffff;padding:16px;border-radius:12px;border:1.5px solid var(--line);box-shadow:0 1px 3px rgba(0,0,0,0.05);">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
          <strong style="font-size:13px;color:var(--text);display:flex;align-items:center;gap:6px;">
            <span>👁️ Pratinjau Kanvas Diagram Alir</span>
          </strong>
          <span style="font-size:11px;background:#dcfce7;color:#166534;padding:2px 8px;border-radius:10px;font-weight:600;">Live Preview Otomatis</span>
        </div>
        <div data-flowchart-preview>${flowchartPreviewSVG(block)}</div>
      </div>
    </div>`;
  }
  return `<article class="content-block"><div class="block-heading"><strong>${labels[block.type] || "Konten"}</strong><button class="icon-btn" type="button" title="Hapus blok" data-action="delete-block" ${blockData}>×</button></div>${content}</article>`;
}

function renderChapters() {
  const host = document.getElementById("chaptersEditor");
  host.innerHTML = state.chapters.map((chapter, chapterIndex) => `
    <article class="chapter-card" id="chapter-${chapterIndex + 1}" data-chapter-index="${chapterIndex}">
      <div class="chapter-heading"><span class="section-number">BAB ${chapterIndex + 1}</span><button class="icon-btn" type="button" title="Hapus bab" data-action="delete-chapter" data-chapter-index="${chapterIndex}">×</button></div>
      <label>Judul Bab<input class="chapter-title" data-editor-field="chapterTitle" data-chapter-index="${chapterIndex}" value="${escapeAttr(chapter.title)}" placeholder="Contoh: Pendahuluan"></label>
      ${(chapter.sections || []).map((section, sectionIndex) => `
        <section class="subchapter-card" id="chapter-${chapterIndex + 1}-section-${sectionIndex + 1}" data-chapter-index="${chapterIndex}" data-section-index="${sectionIndex}">
          <div class="subchapter-heading"><span>${chapterIndex + 1}.${sectionIndex + 1}</span><button class="icon-btn" type="button" title="Hapus subbab" data-action="delete-section" data-chapter-index="${chapterIndex}" data-section-index="${sectionIndex}">×</button></div>
          <label>Judul Subbab<input data-editor-field="sectionTitle" data-chapter-index="${chapterIndex}" data-section-index="${sectionIndex}" value="${escapeAttr(section.title)}" placeholder="Contoh: Latar Belakang"></label>
          <div class="content-blocks">${(section.blocks || []).map((block, blockIndex) => renderContentBlock(block, chapterIndex, sectionIndex, blockIndex)).join("")}</div>
          <div class="block-adder"><select aria-label="Jenis konten"><option value="paragraph">Paragraf</option><option value="list">Daftar</option><option value="image">Gambar</option><option value="table">Tabel</option><option value="chart">Grafik</option><option value="flowchart">Diagram Alir (Flowchart)</option></select><button class="mini-btn" type="button" data-action="add-block" data-chapter-index="${chapterIndex}" data-section-index="${sectionIndex}">+ Tambah Konten</button></div>
          ${(section.subsections || []).map((subsection, subsectionIndex) => `
            <section class="subchapter-card nested-subchapter-card" id="chapter-${chapterIndex + 1}-section-${sectionIndex + 1}-subsection-${subsectionIndex + 1}" data-chapter-index="${chapterIndex}" data-section-index="${sectionIndex}" data-subsection-index="${subsectionIndex}">
              <div class="subchapter-heading"><span>${chapterIndex + 1}.${sectionIndex + 1}.${subsectionIndex + 1}</span><button class="icon-btn" type="button" title="Hapus sub-subbab" data-action="delete-subsection" data-chapter-index="${chapterIndex}" data-section-index="${sectionIndex}" data-subsection-index="${subsectionIndex}">×</button></div>
              <label>Judul Sub-subbab<input data-editor-field="subsectionTitle" data-chapter-index="${chapterIndex}" data-section-index="${sectionIndex}" data-subsection-index="${subsectionIndex}" value="${escapeAttr(subsection.title)}" placeholder="Contoh: Pengertian Konsep"></label>
              <div class="content-blocks">${(subsection.blocks || []).map((block, blockIndex) => renderContentBlock(block, chapterIndex, sectionIndex, blockIndex, subsectionIndex)).join("")}</div>
              <div class="block-adder"><select aria-label="Jenis konten"><option value="paragraph">Paragraf</option><option value="list">Daftar</option><option value="image">Gambar</option><option value="table">Tabel</option><option value="chart">Grafik</option><option value="flowchart">Diagram Alir (Flowchart)</option></select><button class="mini-btn" type="button" data-action="add-block" data-chapter-index="${chapterIndex}" data-section-index="${sectionIndex}" data-subsection-index="${subsectionIndex}">+ Tambah Konten</button></div>
            </section>`).join("")}
          <button class="mini-btn add-subchapter" type="button" data-action="add-subsection" data-chapter-index="${chapterIndex}" data-section-index="${sectionIndex}">+ Tambah Sub-subbab</button>
        </section>`).join("")}
      <button class="mini-btn add-subchapter" type="button" data-action="add-section" data-chapter-index="${chapterIndex}">+ Tambah Subbab</button>
    </article>`).join("");
  host.querySelectorAll('[data-editor-field="paragraph"]').forEach(resizeParagraphTextarea);
  host.querySelectorAll(".structured-grid").forEach(resizeStructuredGrid);
  renderChapterNav();
  updateProgress();
}

function renderChapterNav() {
  const host = document.getElementById("chapterNav");
  if (chapterObserver) chapterObserver.disconnect();
  const counts = state.chapters.reduce((total, chapter) => {
    for (const section of chapter.sections || []) {
      total.sections += 1;
      total.subsections += (section.subsections || []).length;
    }
    return total;
  }, { sections: 0, subsections: 0 });
  document.getElementById("chapterCount").textContent = `${state.chapters.length} bab, ${counts.sections} subbab, ${counts.subsections} sub-subbab`;
  const query = document.getElementById("chapterSearch").value.trim().toLocaleLowerCase();
  const groups = state.chapters.map((chapter, chapterIndex) => {
    const chapterTitle = chapter.title || `Bab ${chapterIndex + 1}`;
    const matchesChapter = chapterTitle.toLocaleLowerCase().includes(query);
    const matchingSections = (chapter.sections || []).map((section, sectionIndex) => ({
      section, sectionIndex,
      subsections: (section.subsections || []).map((subsection, subsectionIndex) => ({ subsection, subsectionIndex }))
    })).filter(({ section, subsections }) => !query || matchesChapter ||
      (section.title || "").toLocaleLowerCase().includes(query) ||
      subsections.some(({ subsection }) => (subsection.title || "").toLocaleLowerCase().includes(query)));
    if (query && !matchesChapter && matchingSections.length === 0) return "";
    const chapterId = `chapter-${chapterIndex + 1}`;
    const sectionLinks = matchingSections.map(({ section, sectionIndex, subsections }) => `
      <button class="chapter-nav-link chapter-subnav-link" type="button" data-scroll-target="${chapterId}-section-${sectionIndex + 1}" title="${escapeAttr(section.title || `Subbab ${sectionIndex + 1}`)}">
        <span class="chapter-nav-number">${chapterIndex + 1}.${sectionIndex + 1}</span>
        <span>${escapeHtml(section.title || `Subbab ${sectionIndex + 1}`)}</span>
      </button>
      ${subsections.map(({ subsection, subsectionIndex }) => `
        <button class="chapter-nav-link chapter-subnav-link chapter-subsubnav-link" type="button" data-scroll-target="${chapterId}-section-${sectionIndex + 1}-subsection-${subsectionIndex + 1}" title="${escapeAttr(subsection.title || `Sub-subbab ${subsectionIndex + 1}`)}">
          <span class="chapter-nav-number">${chapterIndex + 1}.${sectionIndex + 1}.${subsectionIndex + 1}</span>
          <span>${escapeHtml(subsection.title || `Sub-subbab ${subsectionIndex + 1}`)}</span>
        </button>`).join("")}`).join("");
    return `<div class="chapter-nav-group">
      <button class="chapter-nav-link chapter-nav-title" type="button" data-scroll-target="${chapterId}" title="${escapeAttr(chapterTitle)}">
        <span class="chapter-nav-number">BAB ${chapterIndex + 1}</span>
        <span>${escapeHtml(chapterTitle)}</span>
      </button>
      <div class="chapter-subnav">${sectionLinks}</div>
    </div>`;
  }).join("");
  host.innerHTML = groups || (query ? '<p class="chapter-nav-empty">Tidak ditemukan</p>' : "");

  chapterObserver = new IntersectionObserver(entries => {
    const current = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
    if (!current) return;
    host.querySelectorAll("[data-scroll-target]").forEach(link => {
      link.classList.toggle("active", link.dataset.scrollTarget === current.target.id);
    });
  }, { rootMargin: "-18% 0px -72% 0px", threshold: 0 });
  state.chapters.forEach((chapter, chapterIndex) => {
    const sections = chapter.sections || [];
    if (sections.length) {
      sections.forEach((section, sectionIndex) => {
        chapterObserver.observe(document.getElementById(`chapter-${chapterIndex + 1}-section-${sectionIndex + 1}`));
        (section.subsections || []).forEach((_, subsectionIndex) => chapterObserver.observe(
          document.getElementById(`chapter-${chapterIndex + 1}-section-${sectionIndex + 1}-subsection-${subsectionIndex + 1}`)
        ));
      });
    } else {
      chapterObserver.observe(document.getElementById(`chapter-${chapterIndex + 1}`));
    }
  });
}

document.getElementById("chapterSearch").addEventListener("input", renderChapterNav);
document.getElementById("chapterNav").addEventListener("click", event => {
  const link = event.target.closest("[data-scroll-target]");
  if (!link) return;
  const target = document.getElementById(link.dataset.scrollTarget);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - 94;
  window.scrollTo({ top: Math.max(0, top), behavior: "instant" });
});

function newContentBlock(type) {
  if (type === "list") return { type, items: [], ordered: true };
  if (type === "image") return { type, dataUrl: "", caption: "" };
  if (type === "table") return { type, tableText: "Kolom 1 | Kolom 2\nIsi 1 | Isi 2" };
  if (type === "chart") return { type, chartType: "bar", chartTitle: "", chartData: "Kategori A | 10\nKategori B | 15", caption: "" };
  if (type === "flowchart") {
    const defaultText = `digraph RecruitmentProcess {
    // Pengaturan bentuk garis menjadi siku-siku (ortogonal)
    graph [splines=ortho, nodesep=0.6, ranksep=0.6, fontname="Arial"];
    node [shape=box, style=filled, fillcolor="#cce5ff", fontname="Arial", fontsize=11, width=1.5];
    edge [fontname="Arial", fontsize=10];

    // Kolom 1
    A [label="Identify\\nstaffing need", shape=box, style="rounded,filled", fillcolor="#ffcccc"];
    B [label="Define and\\nwrite up job\\ndescription"];
    C [label="Send personnel\\nrequest from\\nto HR"];
    D [label="Determine\\nclassification"];
    E [label="Regular\\nhire?", shape=diamond, fillcolor="#ffebcc"];
    F [label="Temp hiring\\nprocess", shape=box, style="rounded,filled"];

    A -> B -> C -> D -> E;
    E -> F [label=" No "];

    // Kolom 2
    G [label="Post Job\\nInternally"];
    H [label="Suitable\\ncandidate?", shape=diamond, fillcolor="#ffebcc"];
    I [label="Examine\\nexisting\\nresumes on file"];
    J [label="Suitable\\ncandidate?", shape=diamond, fillcolor="#ffebcc"];
    K [label="Develop\\nrecruitment\\nstrategy"];
    L [label="Place ads"];
    N [label="Gather\\nresumes"];
    O [label="Resume\\nqualified?", shape=diamond, fillcolor="#ffebcc"];

    E -> G [label=" Yes "];
    G -> H;
    H -> I [label=" No "];
    I -> J;
    J -> K [label=" No "];
    K -> L -> N -> O;

    // Kolom 3
    M [label="Arrange\\nmeeting with\\ncandidate"];
    Q [label="Conduct\\npreliminary\\ninterview"];
    R [label="Develop\\ninterview\\nquestions"];
    S [label="Conduct\\ninterview"];
    T [label="References\\nOK?", shape=diamond, fillcolor="#ffebcc"];

    H -> M [label=" Yes "];
    J -> M [label=" Yes "];
    O -> M [label=" Yes "];
    M -> Q -> R -> S -> T;

    // Kolom 4
    U [label="Select\\ncandidate"];
    V [label="Determine\\npay range"];
    W [label="Make\\nemployment\\noffer"];
    X [label="Candidate\\naccepts?", shape=diamond, fillcolor="#ffebcc"];
    Y [label="Hire\\ncandidate", shape=box, style="rounded,filled", fillcolor="#ffcccc"];

    T -> U [label=" Yes "];
    U -> V -> W -> X;
    X -> Y [label=" Yes "];

    // Node Rejection di bawah
    P [label="Rejection", shape=box, style="rounded,filled", fillcolor="#ffcccc"];
    O -> P [label=" No "];
    T -> P [label=" No "];
    X -> P [label=" No "];
    P -> N; // Kembali ke Gather resumes

    // Menjajarkan baris awal agar rapi
    { rank=same; A G }
    { rank=same; E F }
}`;
    return {
      type,
      flowchartTitle: "Diagram Alir Recruitment Process",
      caption: "Gambar 1. Diagram Alir Recruitment Process",
      flowchartText: defaultText,
      flowchartSteps: []
    };
  }
  return { type: "paragraph", text: "" };
}

function delimitedRows(text) {
  return String(text || "").split(/\r?\n/).filter(line => line.trim())
    .map(line => line.split("|").map(cell => cell.trim()));
}

function normalizedGridRows(rows, minimumRows = 2, minimumColumns = 2) {
  const columnCount = Math.max(minimumColumns, ...rows.map(row => row.length));
  const normalized = rows.map(row => Array.from({ length: columnCount }, (_, index) => row[index] || ""));
  while (normalized.length < minimumRows) normalized.push(Array(columnCount).fill(""));
  return normalized;
}

function structuredRowsForBlock(block) {
  if (block.type === "table") {
    const text = block.tableText === undefined ? "Kolom 1 | Kolom 2\nIsi 1 | Isi 2" : block.tableText;
    return normalizedGridRows(delimitedRows(text));
  }
  if (isComparisonChart(block.chartType)) {
    const text = block.chartData === undefined ? "Kategori | Seri 1 | Seri 2\nKategori A | 10 | 10" : block.chartData;
    return normalizedGridRows(delimitedRows(text));
  }
  const text = block.chartData === undefined ? "Kategori A | 10\nKategori B | 15" : block.chartData;
  return normalizedGridRows([
    ["Kategori", "Nilai"],
    ...delimitedRows(text)
  ]);
}

function structuredGridHTML(block, blockData) {
  const comparison = isComparisonChart(block.chartType);
  const rows = structuredRowsForBlock(block);
  const minimumColumns = block.type === "table" ? 2 : comparison ? 3 : 2;
  const tableRows = rows.map((row, rowIndex) => `<tr>${row.map((cell, columnIndex) => {
    const tag = rowIndex === 0 ? "th" : "td";
    const isFixedChartHeader = block.type === "chart" && !comparison && rowIndex === 0;
    const cellContent = isFixedChartHeader
      ? escapeHtml(cell)
      : `<textarea rows="1" data-grid-cell data-grid-row="${rowIndex}" data-grid-column="${columnIndex}" ${blockData} aria-label="Baris ${rowIndex + 1}, kolom ${columnIndex + 1}">${escapeHtml(cell)}</textarea>`;
    const deleteButton = rowIndex === 0 && canDeleteColumn(block, rows[0].length)
      && (!comparison || columnIndex > 0)
      ? `<button class="grid-delete-column" type="button" data-action="grid-delete-column" data-column-index="${columnIndex}" ${blockData} title="Hapus kolom ${columnIndex + 1}" aria-label="Hapus kolom ${columnIndex + 1}">×</button>`
      : "";
    return `<${tag}>${rowIndex === 0 && !isFixedChartHeader ? `<div class="grid-header-cell">${cellContent}${deleteButton}</div>` : cellContent}</${tag}>`;
  }).join("")}</tr>`).join("");
  const canAddColumn = block.type === "table" || comparison;
  return `<div class="structured-grid-wrap"><table class="structured-grid"><tbody>${tableRows}</tbody></table>
    <div class="grid-actions"><button class="mini-btn" type="button" data-action="grid-add-row" ${blockData}>+ Tambah baris</button>${canAddColumn ? `<button class="mini-btn" type="button" data-action="grid-add-column" ${blockData} ${comparison && rows[0].length >= 7 ? "disabled" : ""}>+ Tambah kolom</button>` : ""}</div>
    <small class="editor-hint">${block.type === "table" ? "Baris pertama adalah header tabel." : comparison ? "Baris pertama berisi kategori dan nama seri; maksimal 6 seri." : "Isi kategori dan nilai, satu kategori per baris."} Data disimpan dalam format teks yang kompatibel.</small>
  </div>`;
}

function resizeGridCell(cell) {
  cell.style.height = "auto";
  cell.style.height = `${cell.scrollHeight}px`;
}

function resizeParagraphTextarea(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = `${Math.max(textarea.scrollHeight + 2, 190)}px`;
}

function resizeStructuredGrid(grid) {
  grid?.querySelectorAll("[data-grid-cell]").forEach(resizeGridCell);
}

function canDeleteColumn(block, columnCount) {
  const minimumColumns = block.type === "table" ? 2 : isComparisonChart(block.chartType) ? 3 : 2;
  return columnCount > minimumColumns;
}

function serializeGridElement(grid) {
  return [...grid.rows].map(row => [...row.querySelectorAll("[data-grid-cell]")].map(cell => cell.value).join(" | ")).join("\n");
}

function isComparisonChart(type) {
  return type === "bar-comparison" || type === "line-comparison";
}

function singleDataToComparison(data) {
  const rows = String(data || "").split(/\r?\n/).filter(line => line.trim());
  if (!rows.length) return "Kategori | Seri 1 | Seri 2\nKategori A | 10 | 10\nKategori B | 15 | 15";
  const duplicated = rows.map(line => {
    const [category, ...values] = line.split("|").map(value => value.trim());
    const value = values.join(" | ");
    return `${category} | ${value} | ${value}`;
  });
  return ["Kategori | Seri 1 | Seri 2", ...duplicated].join("\n");
}

function comparisonDataToSingle(data) {
  const lines = String(data || "").split(/\r?\n/).filter(line => line.trim());
  if (lines.length < 2) return "";
  return lines.slice(1).map(line => {
    const [category, firstValue] = line.split("|").map(value => value.trim());
    return `${category} | ${firstValue || ""}`;
  }).join("\n");
}

function bindChapterEditor() {
  const host = document.getElementById("chaptersEditor");
  host.addEventListener("input", event => {
    const field = event.target.dataset.editorField;
    if (!field && !event.target.matches("[data-grid-cell]")) return;
    const chapter = state.chapters[Number(event.target.dataset.chapterIndex)];
    const section = getEditableSection(chapter, Number(event.target.dataset.sectionIndex), event.target.dataset.subsectionIndex);
    const block = section?.blocks[Number(event.target.dataset.blockIndex)];
    if (field === "paragraph") resizeParagraphTextarea(event.target);
    if (field === "chapterTitle") chapter.title = event.target.value;
    if (field === "sectionTitle") section.title = event.target.value;
    if (field === "subsectionTitle") section.title = event.target.value;
    if (field === "paragraph") block.text = event.target.value;
    if (field === "listItems") block.items = event.target.value.split("\n");
    if (field === "tableText") block.tableText = event.target.value;
    if (field === "chartTitle") block.chartTitle = event.target.value;
    if (field === "chartData") {
      block.chartData = event.target.value;
      if (isComparisonChart(block.chartType)) block.chartComparisonData = event.target.value;
      else block.chartSingleData = event.target.value;
    }
    if (event.target.matches("[data-grid-cell]")) {
      resizeGridCell(event.target);
      const value = serializeGridElement(event.target.closest(".structured-grid"));
      if (block.type === "table") block.tableText = value;
      else {
        block.chartData = isComparisonChart(block.chartType) ? value : value.split(/\r?\n/).slice(1).join("\n");
        if (isComparisonChart(block.chartType)) block.chartComparisonData = block.chartData;
        else block.chartSingleData = block.chartData;
      }
    }
    if (field === "flowchartTitle") block.flowchartTitle = event.target.value;
    if (field === "caption") block.caption = event.target.value;
    if (field === "widthCm") block.widthCm = event.target.value;
    if (field === "flowchartText") {
      block.flowchartText = event.target.value;
      block.flowchartSteps = parseFlowchartMarkdown(block.flowchartText);
      const preview = event.target.closest(".content-block").querySelector("[data-flowchart-preview]");
      if (preview) preview.innerHTML = flowchartPreviewSVG(block);
    }
    if (field === "chapterTitle" || field === "sectionTitle" || field === "subsectionTitle") renderChapterNav();
    if (block?.type === "chart") {
      const preview = event.target.closest(".content-block").querySelector("[data-chart-preview]");
      preview.innerHTML = chartPreviewSVG(block);
    }
    if (block?.type === "flowchart" && (field === "flowchartTitle" || field === "caption")) {
      const preview = event.target.closest(".content-block").querySelector("[data-flowchart-preview]");
      if (preview) preview.innerHTML = flowchartPreviewSVG(block);
    }
    queueSave();
  });
  host.addEventListener("change", async event => {
    const target = event.target;
    if (target.dataset.editorField === "listStyle") {
      const section = getEditableSection(state.chapters[Number(target.dataset.chapterIndex)], Number(target.dataset.sectionIndex), target.dataset.subsectionIndex);
      const block = section.blocks[Number(target.dataset.blockIndex)];
      block.ordered = target.value === "numbered";
      queueSave();
      return;
    }
    if (target.dataset.editorField === "tableInputMode" || target.dataset.editorField === "chartInputMode") {
      const section = getEditableSection(state.chapters[Number(target.dataset.chapterIndex)], Number(target.dataset.sectionIndex), target.dataset.subsectionIndex);
      const block = section.blocks[Number(target.dataset.blockIndex)];
      const isTable = target.dataset.editorField === "tableInputMode";
      block[isTable ? "tableInputMode" : "chartInputMode"] = target.value;
      const contentBlock = target.closest(".content-block");
      if (target.value === "grid") {
        const gridEditor = contentBlock.querySelector("[data-grid-editor]");
        gridEditor.innerHTML = structuredGridHTML(block, `data-chapter-index="${target.dataset.chapterIndex}" data-section-index="${target.dataset.sectionIndex}"${target.dataset.subsectionIndex === undefined ? "" : ` data-subsection-index="${target.dataset.subsectionIndex}"`} data-block-index="${target.dataset.blockIndex}"`);
        resizeStructuredGrid(gridEditor.querySelector(".structured-grid"));
      }
      contentBlock.querySelector("[data-grid-editor]").hidden = target.value !== "grid";
      contentBlock.querySelector("[data-text-editor]").hidden = target.value !== "text";
      queueSave();
      return;
    }
    if (target.dataset.editorField === "chartType") {
      const section = getEditableSection(state.chapters[Number(target.dataset.chapterIndex)], Number(target.dataset.sectionIndex), target.dataset.subsectionIndex);
      const block = section.blocks[Number(target.dataset.blockIndex)];
      const wasComparison = isComparisonChart(block.chartType);
      const isComparison = isComparisonChart(target.value);
      if (!wasComparison && isComparison) {
        block.chartSingleData ??= block.chartData || "";
        block.chartData = block.chartComparisonData || singleDataToComparison(block.chartSingleData);
        block.chartComparisonData = block.chartData;
      } else if (wasComparison && !isComparison) {
        block.chartComparisonData = block.chartData || "";
        block.chartSingleData = comparisonDataToSingle(block.chartData);
        block.chartData = block.chartSingleData;
      }
      block.chartType = target.value;
      const contentBlock = target.closest(".content-block");
      contentBlock.querySelector('[data-editor-field="chartData"]').value = block.chartData;
      const comparison = target.value.endsWith("comparison");
      contentBlock.querySelector('[data-editor-field="chartData"]').placeholder = comparison
        ? "Kategori | Seri 1 | Seri 2\nKategori A | 10 | 15\nKategori B | 20 | 18"
        : "Kategori A | 10\nKategori B | 15";
      contentBlock.querySelector("[data-chart-hint]").textContent = comparison
        ? "Baris pertama: Kategori | nama seri 1 | nama seri 2. Baris selanjutnya berisi nilai angka untuk setiap seri (maksimal 6 seri)."
        : "Satu kategori per baris, pisahkan nama kategori dan angka dengan |.";
      contentBlock.querySelector("[data-chart-preview]").innerHTML = chartPreviewSVG(block);
      const gridEditor = contentBlock.querySelector("[data-grid-editor]");
      gridEditor.innerHTML = structuredGridHTML(block, `data-chapter-index="${target.dataset.chapterIndex}" data-section-index="${target.dataset.sectionIndex}"${target.dataset.subsectionIndex === undefined ? "" : ` data-subsection-index="${target.dataset.subsectionIndex}"`} data-block-index="${target.dataset.blockIndex}"`);
      resizeStructuredGrid(gridEditor.querySelector(".structured-grid"));
      queueSave();
      return;
    }
    if (!target.matches("[data-image-input]") || !target.files[0]) return;
    const file = target.files[0];
    if (file.size > 12 * 1024 * 1024) { toast("Ukuran gambar maksimal 12 MB."); return; }
    try {
      const image = await createImageBitmap(file);
      const scale = Math.min(1, 1200 / Math.max(image.width, image.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(image.width * scale);
      canvas.height = Math.round(image.height * scale);
      const context = canvas.getContext("2d");
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      image.close();
      const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/jpeg", 0.72));
      if (!blob || blob.size > 700 * 1024) { toast("Gambar terlalu besar setelah dikompresi. Pilih gambar yang lebih kecil."); return; }
      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      const section = getEditableSection(state.chapters[Number(target.dataset.chapterIndex)], Number(target.dataset.sectionIndex), target.dataset.subsectionIndex);
      const block = section.blocks[Number(target.dataset.blockIndex)];
      block.dataUrl = dataUrl;
      block.caption = block.caption || file.name.replace(/\.[^.]+$/, "");
      renderChapters();
      queueSave();
    } catch {
      toast("Gambar tidak dapat dibaca.");
    }
  });
  host.addEventListener("click", event => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const sectionElement = button.closest(".subchapter-card");
    const chapterIndex = Number(button.dataset.chapterIndex ?? sectionElement?.dataset.chapterIndex);
    const sectionIndex = Number(button.dataset.sectionIndex ?? sectionElement?.dataset.sectionIndex);
    const subsectionIndex = button.dataset.subsectionIndex;
    const chapter = state.chapters[chapterIndex];
    if (button.dataset.action === "insert-citation") {
      const citationSelect = button.closest(".content-block").querySelector("[data-cite-source]");
      const textarea = button.closest(".content-block").querySelector('[data-editor-field="paragraph"]');
      if (!citationSelect.value) {
        toast("Pilih sumber sitasi terlebih dahulu.");
        return;
      }
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const prefix = start > 0 && !/\s/.test(textarea.value[start - 1]) ? " " : "";
      const suffix = end < textarea.value.length && !/\s/.test(textarea.value[end]) ? " " : "";
      textarea.setRangeText(`${prefix}[[cite:${citationSelect.value}]]${suffix}`, start, end, "end");
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
      citationSelect.value = "";
      textarea.focus();
      return;
    }
    if (button.dataset.action === "add-section") chapter.sections.push({ title: "", blocks: [], subsections: [] });
    if (button.dataset.action === "delete-chapter") state.chapters.splice(chapterIndex, 1);
    if (button.dataset.action === "delete-section") chapter.sections.splice(sectionIndex, 1);
    if (button.dataset.action === "add-subsection") chapter.sections[sectionIndex].subsections.push({ title: "", blocks: [] });
    if (button.dataset.action === "delete-subsection") chapter.sections[sectionIndex].subsections.splice(Number(subsectionIndex), 1);
    if (button.dataset.action === "add-block") {
      const type = sectionElement.querySelector(".block-adder select").value;
      getEditableSection(chapter, sectionIndex, subsectionIndex)?.blocks.push(newContentBlock(type));
    }
    if (button.dataset.action === "delete-block") {
      const blockIndex = Number(button.dataset.blockIndex);
      getEditableSection(chapter, sectionIndex, subsectionIndex)?.blocks.splice(blockIndex, 1);
    }
    if (button.dataset.action === "flowchart-insert-template") {
      const template = button.dataset.template;
      const contentBlock = button.closest(".content-block");
      const textarea = contentBlock.querySelector('[data-editor-field="flowchartText"]');
      if (!textarea) return;

      const blockIndex = Number(button.dataset.blockIndex);
      const block = getEditableSection(chapter, sectionIndex, subsectionIndex)?.blocks[blockIndex];
      if (!block) return;

      const currentVal = textarea.value.trim();
      const lineCount = currentVal ? currentVal.split(/\r?\n/).length : 0;
      let templateStr = "";
      if (template === "dot-step" || template === "mermaid-step") {
        templateStr = "    Step1 -> Step2 [label=\" Lanjut \"];";
      } else if (template === "dot-decision" || template === "mermaid-decision") {
        templateStr = "    Dec1 [label=\"Kondisi\\nSesuai?\", shape=diamond, fillcolor=\"#ffebcc\"];\n    Dec1 -> StepNext [label=\" Yes \"];\n    Dec1 -> StepAlt [label=\" No \"];";
      } else if (template === "dot-example" || template === "mermaid-example") {
        templateStr = `digraph RecruitmentProcess {
    // Pengaturan bentuk garis menjadi siku-siku (ortogonal)
    graph [splines=ortho, nodesep=0.6, ranksep=0.6, fontname="Arial"];
    node [shape=box, style=filled, fillcolor="#cce5ff", fontname="Arial", fontsize=11, width=1.5];
    edge [fontname="Arial", fontsize=10];

    // Kolom 1
    A [label="Identify\\nstaffing need", shape=box, style="rounded,filled", fillcolor="#ffcccc"];
    B [label="Define and\\nwrite up job\\ndescription"];
    C [label="Send personnel\\nrequest from\\nto HR"];
    D [label="Determine\\nclassification"];
    E [label="Regular\\nhire?", shape=diamond, fillcolor="#ffebcc"];
    F [label="Temp hiring\\nprocess", shape=box, style="rounded,filled"];

    A -> B -> C -> D -> E;
    E -> F [label=" No "];

    // Kolom 2
    G [label="Post Job\\nInternally"];
    H [label="Suitable\\ncandidate?", shape=diamond, fillcolor="#ffebcc"];
    I [label="Examine\\nexisting\\nresumes on file"];
    J [label="Suitable\\ncandidate?", shape=diamond, fillcolor="#ffebcc"];
    K [label="Develop\\nrecruitment\\nstrategy"];
    L [label="Place ads"];
    N [label="Gather\\nresumes"];
    O [label="Resume\\nqualified?", shape=diamond, fillcolor="#ffebcc"];

    E -> G [label=" Yes "];
    G -> H;
    H -> I [label=" No "];
    I -> J;
    J -> K [label=" No "];
    K -> L -> N -> O;

    // Kolom 3
    M [label="Arrange\\nmeeting with\\ncandidate"];
    Q [label="Conduct\\npreliminary\\ninterview"];
    R [label="Develop\\ninterview\\nquestions"];
    S [label="Conduct\\ninterview"];
    T [label="References\\nOK?", shape=diamond, fillcolor="#ffebcc"];

    H -> M [label=" Yes "];
    J -> M [label=" Yes "];
    O -> M [label=" Yes "];
    M -> Q -> R -> S -> T;

    // Kolom 4
    U [label="Select\\ncandidate"];
    V [label="Determine\\npay range"];
    W [label="Make\\nemployment\\noffer"];
    X [label="Candidate\\naccepts?", shape=diamond, fillcolor="#ffebcc"];
    Y [label="Hire\\ncandidate", shape=box, style="rounded,filled", fillcolor="#ffcccc"];

    T -> U [label=" Yes "];
    U -> V -> W -> X;
    X -> Y [label=" Yes "];

    // Node Rejection di bawah
    P [label="Rejection", shape=box, style="rounded,filled", fillcolor="#ffcccc"];
    O -> P [label=" No "];
    T -> P [label=" No "];
    X -> P [label=" No "];
    P -> N; // Kembali ke Gather resumes

    // Menjajarkan baris awal agar rapi
    { rank=same; A G }
    { rank=same; E F }
}`;
      } else {
        templateStr = "    NewNode [label=\"Node Baru\"];";
      }

      let newText = currentVal ? `${currentVal}\n${templateStr}` : templateStr;
      if (template === "dot-example" || template === "mermaid-example") {
        newText = templateStr;
      }
      textarea.value = newText;
      block.flowchartText = newText;
      block.flowchartSteps = parseFlowchartMarkdown(newText);

      const preview = contentBlock.querySelector("[data-flowchart-preview]");
      if (preview) preview.innerHTML = flowchartPreviewSVG(block);
      queueSave();
      textarea.focus();
      return;
    }
    if (button.dataset.action === "grid-add-row" || button.dataset.action === "grid-add-column" || button.dataset.action === "grid-delete-column") {
      const blockIndex = Number(button.dataset.blockIndex);
      const block = getEditableSection(chapter, sectionIndex, subsectionIndex)?.blocks[blockIndex];
      if (!block) return;
      const rows = structuredRowsForBlock(block);
      if (button.dataset.action === "grid-add-row") {
        rows.push(Array(rows[0].length).fill(""));
      } else if (rows[0].length < (block.type === "chart" ? 7 : Infinity)) {
        if (button.dataset.action === "grid-add-column") {
          rows.forEach((row, rowIndex) => row.push(rowIndex === 0 && block.type === "chart" ? `Seri ${row.length}` : ""));
        }
      }
      if (button.dataset.action === "grid-delete-column") {
        const columnIndex = Number(button.dataset.columnIndex);
        if (canDeleteColumn(block, rows[0].length) && (!isComparisonChart(block.chartType) || columnIndex > 0)) {
          rows.forEach(row => row.splice(columnIndex, 1));
        }
      }
      const serialized = rows.map(row => row.join(" | ")).join("\n");
      if (block.type === "table") block.tableText = serialized;
      else {
        block.chartData = isComparisonChart(block.chartType) ? serialized : rows.slice(1).map(row => row.join(" | ")).join("\n");
        if (isComparisonChart(block.chartType)) block.chartComparisonData = block.chartData;
        else block.chartSingleData = block.chartData;
      }
    }
    renderChapters();
    queueSave();
  });
  document.getElementById("addChapter").addEventListener("click", () => {
    state.chapters.push({ title: "", sections: [] });
    renderChapters();
    queueSave();
  });
}

function updateProgress() {
  const fields = [];
  document.querySelectorAll("[data-key]").forEach(el => fields.push(el.value.trim()));
  document.querySelectorAll("[data-dyn-input],[data-object-key],[data-editor-field],[data-grid-cell]").forEach(el => {
    if (!el.closest("[hidden]") && el.matches("input:not([type=file]),textarea")) fields.push(el.value.trim());
  });
  const filled = fields.filter(Boolean).length;
  const pct = fields.length ? Math.round(filled / fields.length * 100) : 0;
  document.getElementById("progressText").textContent = `${pct}%`;
  document.getElementById("heroPercent").textContent = `${pct}%`;
  document.getElementById("progressBar").style.width = `${pct}%`;
}

function exportJSON() {
  saveData();
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "skripsi_data.json"; a.click(); URL.revokeObjectURL(url);
  toast("Backup JSON dibuat.");
}

document.getElementById("exportBtn").onclick = exportJSON;
document.getElementById("importInput").addEventListener("change", async e => {
  const file = e.target.files[0]; if (!file) return;
  try {
    const parsed = JSON.parse(await file.text());
    state = normalizeData(parsed); saveData(); renderAll(); toast("Data berhasil di-import.");
  } catch { toast("File JSON tidak valid."); }
  e.target.value = "";
});

const modal = document.getElementById("modalBackdrop");
document.getElementById("resetBtn").onclick = () => modal.classList.add("show");
document.getElementById("cancelReset").onclick = () => modal.classList.remove("show");
document.getElementById("confirmReset").onclick = () => {
  state = normalizeData(clone(DEFAULT_DATA)); saveData(); renderAll(); modal.classList.remove("show"); toast("Data kembali ke contoh awal.");
};

const clearDataBackdrop = document.getElementById("clearDataBackdrop");
document.getElementById("clearDataBtn").onclick = () => clearDataBackdrop.classList.add("show");
document.getElementById("cancelClearData").onclick = () => clearDataBackdrop.classList.remove("show");
document.getElementById("confirmClearData").onclick = () => {
  state = normalizeData({
    identitas: {},
    chapters: [],
    referensi: [],
    sources: [],
    citationStyle: "apa"
  });
  saveData();
  renderAll();
  clearDataBackdrop.classList.remove("show");
  toast("Semua data berhasil dikosongkan.");
};

document.getElementById("citationStyle").value = state.citationStyle;
document.getElementById("citationStyle").addEventListener("change", event => {
  state.citationStyle = event.target.value;
  renderSources();
  queueSave();
});

document.getElementById("referenceUpload").addEventListener("change", async event => {
  const file = event.target.files[0];
  if (!file) return;
  const status = document.getElementById("citationStatus");
  status.textContent = "Membaca metadata PDF...";
  try {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("/api/references/import", { method: "POST", body: formData });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "PDF gagal diproses.");
    state.sources.push(result.source);
    renderSources();
    renderChapters();
    queueSave();
    status.textContent = result.message;
  } catch (error) {
    status.textContent = error.message || "PDF gagal diproses.";
  } finally {
    event.target.value = "";
  }
});

function escapeHtml(v) { return String(v ?? "").replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])); }
function escapeAttr(v) { return escapeHtml(v).replace(/`/g, "&#96;"); }

function toast(msg) {
  const el = document.getElementById("toast"); el.textContent = msg; el.classList.add("show");
  clearTimeout(window.__toast); window.__toast = setTimeout(() => el.classList.remove("show"), 2400);
}

async function pingServer() {
  const box = document.getElementById("statusBox");
  try {
    const res = await fetch("/api/health");
    if (!res.ok) throw new Error();
    const json = await res.json();
    box.className = "status-box ok";
    box.innerHTML = `<span class="status-icon">●</span><div><strong>Python generator siap</strong><p>${json.message}</p></div>`;
  } catch {
    box.className = "status-box error";
    box.innerHTML = `<span class="status-icon">●</span><div><strong>Python generator tidak terhubung</strong><p>Jalankan <code>python app.py</code> lalu buka <code>http://127.0.0.1:5000</code>.</p></div>`;
  }
}

function chartRows(block) {
  const lines = String(block.chartData || "").split(/\r?\n/).map(line => line.trim()).filter(Boolean);
  const comparison = block.chartType === "bar-comparison" || block.chartType === "line-comparison";
  if (comparison) {
    if (lines.length < 2) return { error: "Masukkan header dan minimal satu baris data. Format: Kategori | Seri 1 | Seri 2." };
    const headers = lines[0].split("|").map(value => value.trim());
    if (headers.length < 3 || !headers[0] || headers.slice(1).some(label => !label)) {
      return { error: "Baris pertama harus berisi Kategori | nama seri 1 | nama seri 2 (atau lebih)." };
    }
    if (headers.length > 7) return { error: "Grafik perbandingan maksimal memiliki 6 seri." };
    const rows = [];
    for (const line of lines.slice(1)) {
      const cells = line.split("|").map(value => value.trim());
      if (cells.length !== headers.length || !cells[0]) {
        return { error: "Setiap baris data harus memiliki kategori dan nilai untuk semua seri." };
      }
      const values = cells.slice(1).map(value => Number(value.replace(",", ".")));
      if (values.some(value => !Number.isFinite(value) || value < 0)) {
        return { error: "Semua nilai perbandingan harus berupa angka nol atau lebih." };
      }
      rows.push({ label: cells[0], values });
    }
    if (rows.length > 30) return { error: "Grafik maksimal memuat 30 kategori." };
    return { headers: headers.slice(1), rows };
  }

  const rows = [];
  for (const line of lines) {
    const cells = line.split("|").map(value => value.trim());
    const value = Number((cells[1] || "").replace(",", "."));
    if (cells.length !== 2 || !cells[0] || !Number.isFinite(value) || value < 0) {
      return { error: "Data harus berformat Kategori | Nilai, satu baris per kategori." };
    }
    rows.push({ label: cells[0], values: [value] });
  }
  if (rows.length > 30) return { error: "Grafik maksimal memuat 30 kategori." };
  return { headers: ["Nilai"], rows };
}

function chartPreviewSVG(block) {
  const parsed = chartRows(block);
  if (parsed.error) return `<p class="chart-preview-empty">${escapeHtml(parsed.error)}</p>`;
  const { headers, rows } = parsed;
  if (!rows.length) return '<p class="chart-preview-empty">Isi data kategori dan nilai untuk melihat grafik.</p>';
  if (block.chartType === "pie" && rows.some(row => row.values[0] <= 0)) {
    return '<p class="chart-preview-empty">Nilai pada grafik lingkaran harus lebih besar dari nol.</p>';
  }

  const colors = ["#635bff", "#ec4899", "#18a976", "#f59e0b", "#38bdf8", "#a855f7", "#f43f5e", "#14b8a6"];
  const title = block.chartTitle ? `<text x="320" y="24" text-anchor="middle" class="chart-svg-title">${escapeHtml(block.chartTitle)}</text>` : "";
  let drawing = "";
  if (block.chartType === "pie") {
    const total = rows.reduce((sum, row) => sum + row.values[0], 0);
    let angle = -Math.PI / 2;
    drawing = rows.map((row, index) => {
      const value = row.values[0];
      const next = angle + value / total * Math.PI * 2;
      const x1 = 150 + 95 * Math.cos(angle);
      const y1 = 145 + 95 * Math.sin(angle);
      const x2 = 150 + 95 * Math.cos(next);
      const y2 = 145 + 95 * Math.sin(next);
      const largeArc = next - angle > Math.PI ? 1 : 0;
      const path = `<path d="M 150 145 L ${x1.toFixed(2)} ${y1.toFixed(2)} A 95 95 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z" fill="${colors[index % colors.length]}"/>`;
      const legend = `<rect x="300" y="${56 + index * 28}" width="12" height="12" rx="3" fill="${colors[index % colors.length]}"/><text x="320" y="${67 + index * 28}" class="chart-svg-label">${escapeHtml(row.label)} (${value})</text>`;
      angle = next;
      return path + legend;
    }).join("");
  } else {
    const comparison = headers.length > 1;
    const isLine = block.chartType === "line" || block.chartType === "line-comparison";
    const maxValue = Math.max(...rows.flatMap(row => row.values), 1);
    const plot = { left: 55, right: 620, top: 48, bottom: comparison ? 190 : 205 };
    const grid = [0, 1, 2, 3, 4].map(index => {
      const y = plot.bottom - (plot.bottom - plot.top) * index / 4;
      return `<line x1="${plot.left}" y1="${y}" x2="${plot.right}" y2="${y}" class="chart-svg-grid"/>`;
    }).join("");
    const categoryWidth = (plot.right - plot.left) / rows.length;
    let marks = "";
    if (isLine) {
      marks = headers.map((_, seriesIndex) => {
        const points = rows.map((row, rowIndex) => ({
          x: plot.left + (rowIndex + .5) * categoryWidth,
          y: plot.bottom - row.values[seriesIndex] / maxValue * (plot.bottom - plot.top)
        }));
        return `<polyline points="${points.map(point => `${point.x},${point.y}`).join(" ")}" fill="none" stroke="${colors[seriesIndex % colors.length]}" stroke-width="3"/>${points.map(point => `<circle cx="${point.x}" cy="${point.y}" r="4" fill="${colors[seriesIndex % colors.length]}"/>`).join("")}`;
      }).join("");
    } else {
      const groupWidth = Math.min(72, categoryWidth * .72);
      const barWidth = groupWidth / headers.length;
      marks = rows.map((row, rowIndex) => row.values.map((value, seriesIndex) => {
        const x = plot.left + rowIndex * categoryWidth + (categoryWidth - groupWidth) / 2 + seriesIndex * barWidth;
        const height = value / maxValue * (plot.bottom - plot.top);
        return `<rect x="${x}" y="${plot.bottom - height}" width="${Math.max(1, barWidth - 2)}" height="${height}" rx="3" fill="${colors[seriesIndex % colors.length]}"/>`;
      }).join("")).join("");
    }
    const labels = rows.map((row, index) => {
      const x = plot.left + (index + .5) * categoryWidth;
      return `<text x="${x}" y="${plot.bottom + 17}" text-anchor="middle" class="chart-svg-label">${escapeHtml(row.label.slice(0, 18))}</text>`;
    }).join("");
    const legend = comparison
      ? headers.map((label, index) => {
        const x = 70 + index % 3 * 190;
        const y = 232 + Math.floor(index / 3) * 20;
        return `<rect x="${x}" y="${y - 10}" width="12" height="12" rx="3" fill="${colors[index % colors.length]}"/><text x="${x + 18}" y="${y}" class="chart-svg-label">${escapeHtml(label.slice(0, 24))}</text>`;
      }).join("")
      : "";
    drawing = `${grid}<line x1="${plot.left}" y1="${plot.bottom}" x2="${plot.right}" y2="${plot.bottom}" class="chart-svg-axis"/>${marks}${labels}${legend}`;
  }
  return `<svg class="chart-svg" viewBox="0 0 640 280" role="img" aria-label="${escapeAttr(block.chartTitle || "Pratinjau grafik")}">${title}${drawing}</svg>`;
}

function isMermaidSyntax(text) {
  if (!text) return false;
  const t = text.trim();
  return /^\s*(graph|flowchart)\s+/i.test(t) || t.includes("-->");
}

let vizInstance = null;
function getViz() {
  if (!vizInstance && typeof Viz !== "undefined") {
    try {
      vizInstance = new Viz();
    } catch (e) {
      console.warn("Viz initialization error:", e);
    }
  }
  return vizInstance;
}

function rasterizeSvgToDataUrl(svgEl, block) {
  try {
    const svgData = new XMLSerializer().serializeToString(svgEl);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const URL = window.URL || window.webkitURL || window;
    const blobURL = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const scale = 2; // high-dpi
      const bbox = svgEl.getBoundingClientRect();
      const width = Math.max(svgEl.viewBox?.baseVal?.width || 0, bbox.width || 600);
      const height = Math.max(svgEl.viewBox?.baseVal?.height || 0, bbox.height || 400);
      canvas.width = Math.max(100, width * scale);
      canvas.height = Math.max(100, height * scale);
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(blobURL);
      block.dataUrl = canvas.toDataURL("image/png");
    };
    img.src = blobURL;
  } catch (err) {
    console.warn("Rasterize error:", err);
  }
}

function flowchartPreviewSVG(block) {
  const text = (block.flowchartText || "").trim();

  // If input is Graphviz DOT syntax
  if (isGraphvizDot(text)) {
    const uniqueId = `viz_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    setTimeout(async () => {
      const container = document.getElementById(uniqueId);
      if (!container) return;
      try {
        const viz = getViz();
        if (!viz) {
          container.innerHTML = `<div style="padding:10px 14px;background:#fef2f2;border:1px solid #fecaca;color:#991b1b;border-radius:6px;font-size:12px;"><strong>⚠️ Library Graphviz (Viz.js) belum termuat.</strong></div>`;
          return;
        }
        const svgEl = await viz.renderSVGElement(text);
        svgEl.style.maxWidth = "100%";
        svgEl.style.height = "auto";
        svgEl.style.display = "block";
        svgEl.style.margin = "0 auto";
        svgEl.style.background = "#ffffff";
        container.innerHTML = "";
        container.appendChild(svgEl);

        // Rasterize to PNG for Word DOCX
        rasterizeSvgToDataUrl(svgEl, block);
      } catch (err) {
        container.innerHTML = `<div style="padding:10px 14px;background:#fef2f2;border:1px solid #fecaca;color:#991b1b;border-radius:6px;font-size:12px;text-align:left;"><strong>⚠️ Kesalahan Sintaks Graphviz (DOT):</strong><br><pre style="white-space:pre-wrap;margin-top:4px;font-family:monospace;">${escapeHtml(err.message || String(err))}</pre></div>`;
      }
    }, 40);

    return `<div id="${uniqueId}" class="graphviz-diagram-wrap" style="overflow-x:auto;width:100%;padding:10px 0;text-align:center;"><p style="color:var(--muted);font-size:12px;">Memuat diagram Graphviz (DOT)…</p></div>`;
  }

  // If input is Mermaid syntax
  if (isMermaidSyntax(text)) {
    ensureMermaid();
    const uniqueId = `mermaid_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    
    // We render an async mermaid container
    setTimeout(async () => {
      const container = document.getElementById(uniqueId);
      if (!container) return;
      try {
        if (typeof mermaid !== "undefined") {
          const { svg } = await mermaid.render(`svg_${uniqueId}`, text);
          container.innerHTML = svg;
          const svgEl = container.querySelector("svg");
          if (svgEl) {
            svgEl.style.maxWidth = "100%";
            svgEl.style.height = "auto";
            svgEl.style.display = "block";
            svgEl.style.margin = "0 auto";

            rasterizeSvgToDataUrl(svgEl, block);
          }
        }
      } catch (err) {
        container.innerHTML = `<div style="padding:10px 14px;background:#fef2f2;border:1px solid #fecaca;color:#991b1b;border-radius:6px;font-size:12px;"><strong>⚠️ Kesalahan Format Mermaid:</strong><br>${escapeHtml(err.message || String(err))}</div>`;
      }
    }, 50);

    return `<div id="${uniqueId}" class="mermaid-diagram-wrap" style="overflow-x:auto;width:100%;padding:10px 0;text-align:center;"><p style="color:var(--muted);font-size:12px;">Memuat diagram Mermaid…</p></div>`;
  }

  const steps = block.flowchartSteps || [];
  if (!steps.length) return '<p class="chart-preview-empty">Belum ada langkah flowchart. Tambahkan teks alur di atas.</p>';

  const boxW = 230;
  const boxH = 42;
  const gapY = 26;
  const startX = 40;
  const startY = 20;
  const totalHeight = startY * 2 + steps.length * boxH + (steps.length - 1) * gapY;
  const cx = startX + boxW / 2;

  let shapesHTML = "";
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    const y = startY + i * (boxH + gapY);
    const shape = step.shape || "process";
    const text = escapeHtml(step.text || `Langkah ${i + 1}`);

    let shapeSVG = "";
    if (shape === "terminator") {
      shapeSVG = `<rect x="${startX}" y="${y}" width="${boxW}" height="${boxH}" rx="25" ry="25" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>`;
    } else if (shape === "decision") {
      const pTop = `${cx},${y}`;
      const pRight = `${startX + boxW},${y + boxH / 2}`;
      const pBottom = `${cx},${y + boxH}`;
      const pLeft = `${startX},${y + boxH / 2}`;
      shapeSVG = `<polygon points="${pTop} ${pRight} ${pBottom} ${pLeft}" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>`;
    } else if (shape === "io") {
      const off = 25;
      const pts = `${startX + off},${y} ${startX + boxW},${y} ${startX + boxW - off},${y + boxH} ${startX},${y + boxH}`;
      shapeSVG = `<polygon points="${pts}" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>`;
    } else {
      shapeSVG = `<rect x="${startX}" y="${y}" width="${boxW}" height="${boxH}" rx="4" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>`;
    }

    const textSVG = `<text x="${cx}" y="${y + boxH / 2 + 4}" text-anchor="middle" font-family="'Times New Roman', serif" font-size="11.5" font-weight="600" fill="#0f172a">${text}</text>`;
    shapesHTML += shapeSVG + textSVG;

    if (i < steps.length - 1) {
      const nextY = y + boxH + gapY;
      const arrowLine = `<line x1="${cx}" y1="${y + boxH}" x2="${cx}" y2="${nextY}" stroke="#1e293b" stroke-width="2"/>`;
      const arrowHead = `<polygon points="${cx - 5},${nextY - 7} ${cx + 5},${nextY - 7} ${cx},${nextY}" fill="#1e293b"/>`;
      
      let labelDown = "";
      if (shape === "decision") {
        const branchAssign = step.branchAssign || "sideYes_straightNo";
        const straightText = branchAssign === "sideYes_straightNo" ? "No ↓" : "Yes ↓";
        const straightColor = branchAssign === "sideYes_straightNo" ? "#dc2626" : "#15803d";
        labelDown = `<text x="${cx + 8}" y="${y + boxH + gapY / 2 + 4}" font-family="'Times New Roman', serif" font-size="11" font-weight="bold" fill="${straightColor}">${straightText}</text>`;
      }
      shapesHTML += arrowLine + arrowHead + labelDown;
    }

    if (shape === "decision") {
      const branchType = step.branchType || (step.sideSteps?.length || step.sideNodeText ? "node" : "jump");
      const branchAssign = step.branchAssign || "sideYes_straightNo";
      const sideTextLabel = branchAssign === "sideYes_straightNo" ? "Yes →" : "No →";
      const sideLabelColor = branchAssign === "sideYes_straightNo" ? "#15803d" : "#dc2626";

      const sideSteps = (step.sideSteps && step.sideSteps.length > 0) 
        ? step.sideSteps 
        : (step.sideNodeText ? [{ shape: step.sideNodeShape || "process", text: step.sideNodeText }] : []);

      if (branchType === "node" && sideSteps.length > 0) {
        const sideBoxW = 165;
        const sideBoxH = 46;
        const sideGapY = 36;
        const sideX = startX + boxW + 45;
        const sideCx = sideX + sideBoxW / 2;

        let lastSideCy = y + boxH / 2;

        for (let sIdx = 0; sIdx < sideSteps.length; sIdx++) {
          const sStep = sideSteps[sIdx];
          const sShape = sStep.shape || "process";
          const sText = escapeHtml(sStep.text || `Side ${sIdx + 1}`);
          const sY = y + (boxH - sideBoxH) / 2 + sIdx * (sideBoxH + sideGapY);
          const sCy = sY + sideBoxH / 2;
          lastSideCy = sCy;

          if (sIdx === 0) {
            const arrowToSide = `<line x1="${startX + boxW}" y1="${y + boxH / 2}" x2="${sideX}" y2="${sCy}" stroke="#1e293b" stroke-width="2"/>`;
            const headToSide = `<polygon points="${sideX - 7},${sCy - 5} ${sideX - 7},${sCy + 5} ${sideX},${sCy}" fill="#1e293b"/>`;
            const labelSide = `<text x="${startX + boxW + 8}" y="${y + boxH / 2 - 6}" font-family="'Times New Roman', serif" font-size="11" font-weight="bold" fill="${sideLabelColor}">${sideTextLabel}</text>`;
            shapesHTML += arrowToSide + headToSide + labelSide;
          } else {
            const prevY = y + (boxH - sideBoxH) / 2 + (sIdx - 1) * (sideBoxH + sideGapY) + sideBoxH;
            const arrowDown = `<line x1="${sideCx}" y1="${prevY}" x2="${sideCx}" y2="${sY}" stroke="#1e293b" stroke-width="2"/>`;
            const headDown = `<polygon points="${sideCx - 5},${sY - 7} ${sideCx + 5},${sY - 7} ${sideCx},${sY}" fill="#1e293b"/>`;
            shapesHTML += arrowDown + headDown;
          }

          let sideSVG = "";
          if (sShape === "decision") {
            const pTop = `${sideCx},${sY}`;
            const pRight = `${sideX + sideBoxW},${sCy}`;
            const pBottom = `${sideCx},${sY + sideBoxH}`;
            const pLeft = `${sideX},${sCy}`;
            sideSVG = `<polygon points="${pTop} ${pRight} ${pBottom} ${pLeft}" fill="#fef08a" stroke="#1e293b" stroke-width="2"/>`;
          } else if (sShape === "io") {
            const off = 16;
            const pts = `${sideX + off},${sY} ${sideX + sideBoxW},${sY} ${sideX + sideBoxW - off},${sY + sideBoxH} ${sideX},${sY + sideBoxH}`;
            sideSVG = `<polygon points="${pts}" fill="#fef08a" stroke="#1e293b" stroke-width="2"/>`;
          } else if (sShape === "terminator") {
            sideSVG = `<rect x="${sideX}" y="${sY}" width="${sideBoxW}" height="${sideBoxH}" rx="23" ry="23" fill="#fbcfe8" stroke="#1e293b" stroke-width="2"/>`;
          } else {
            sideSVG = `<rect x="${sideX}" y="${sY}" width="${sideBoxW}" height="${sideBoxH}" rx="4" fill="#fef08a" stroke="#1e293b" stroke-width="2"/>`;
          }
          const sideTextSVG = `<text x="${sideCx}" y="${sCy + 4}" text-anchor="middle" font-family="'Times New Roman', serif" font-size="11.5" font-weight="600" fill="#0f172a">${sText}</text>`;
          shapesHTML += sideSVG + sideTextSVG;
        }

        const rejoinIdx = step.sideRejoinTarget !== undefined && step.sideRejoinTarget !== null && step.sideRejoinTarget !== "" 
          ? Number(step.sideRejoinTarget) 
          : (i + 2 < steps.length ? i + 2 : null);

        if (rejoinIdx !== null && rejoinIdx >= 0 && rejoinIdx < steps.length) {
          const rejoinY = startY + rejoinIdx * (boxH + gapY) + boxH / 2;
          let rejoinPathSVG = "";
          let rejoinArrowHead = "";
          if (Math.abs(lastSideCy - rejoinY) < 10) {
            rejoinPathSVG = `<line x1="${sideX}" y1="${rejoinY}" x2="${startX + boxW}" y2="${rejoinY}" stroke="#1e293b" stroke-width="2"/>`;
            rejoinArrowHead = `<polygon points="${startX + boxW + 7},${rejoinY - 5} ${startX + boxW + 7},${rejoinY + 5} ${startX + boxW},${rejoinY}" fill="#1e293b"/>`;
          } else {
            const midX = (sideX + (startX + boxW)) / 2;
            const rejoinPathD = `M ${sideX} ${lastSideCy} L ${midX} ${lastSideCy} L ${midX} ${rejoinY} L ${startX + boxW} ${rejoinY}`;
            rejoinPathSVG = `<path d="${rejoinPathD}" fill="none" stroke="#1e293b" stroke-width="2"/>`;
            rejoinArrowHead = `<polygon points="${startX + boxW + 7},${rejoinY - 5} ${startX + boxW + 7},${rejoinY + 5} ${startX + boxW},${rejoinY}" fill="#1e293b"/>`;
          }
          shapesHTML += rejoinPathSVG + rejoinArrowHead;
        }
      } else if (step.branchNoTarget !== undefined && step.branchNoTarget !== null && step.branchNoTarget !== "") {
        const targetIdx = Number(step.branchNoTarget);
        if (targetIdx >= 0 && targetIdx < steps.length) {
          const targetY = startY + targetIdx * (boxH + gapY) + boxH / 2;
          const currentMidY = y + boxH / 2;
          const branchRightX = startX + boxW + 45;

          const pathD = `M ${startX + boxW} ${currentMidY} L ${branchRightX} ${currentMidY} L ${branchRightX} ${targetY} L ${startX + boxW} ${targetY}`;
          const branchPath = `<path d="${pathD}" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>`;
          const arrowHeadNo = `<polygon points="${startX + boxW + 7},${targetY - 5} ${startX + boxW + 7},${targetY + 5} ${startX + boxW},${targetY}" fill="#dc2626"/>`;
          const labelNo = `<text x="${startX + boxW + 8}" y="${currentMidY - 6}" font-family="'Times New Roman', serif" font-size="11" font-weight="bold" fill="#dc2626">${sideTextLabel}</text>`;
          shapesHTML += branchPath + arrowHeadNo + labelNo;
        }
      }
    }
  }

  let maxSideItems = 0;
  for (let s of steps) {
    if (s.shape === "decision" && s.branchType === "node" && s.sideSteps?.length) {
      maxSideItems = Math.max(maxSideItems, s.sideSteps.length);
    }
  }
  const svgWidth = maxSideItems > 0 ? 490 : 320;
  const computedHeight = Math.max(totalHeight, startY * 2 + maxSideItems * 72 + 80);

  return `<div style="overflow-x:auto;width:100%;padding:6px 0;"><svg class="flowchart-svg" viewBox="0 0 ${svgWidth} ${computedHeight}" style="max-width:${svgWidth}px;width:100%;height:auto;display:block;margin:0 auto;" role="img" aria-label="Diagram Alir">${shapesHTML}</svg></div>`;
}

function renderMathToHTML(str) {
  if (!str) return "";
  // Cari pola $...$ atau $$...$$
  return String(str).replace(/(\$\$.*?\$\$|\$.*?\$)/g, (match, expr) => {
    let raw = expr.startsWith("$$") ? expr.slice(2, -2) : expr.slice(1, -1);
    raw = raw.trim();

    let s = escapeHtml(raw);

    // Render perkalian & minus & persen & panah
    s = s.replace(/\\times/g, " &times; ");
    s = s.replace(/\\minus/g, " &minus; ");
    s = s.replace(/\\(?:to|rightarrow)\b/g, " &rarr; ");
    s = s.replace(/\\%/g, "%");

    // Render \text{...}
    s = s.replace(/\\text\{([^{}]+)\}/g, '<span class="m-text">$1</span>');

    // Render sum with bounds \sum_{lower}^{upper} atau \sum_{lower}
    s = s.replace(/\\sum_\{([^{}]+)\}\^\{([^{}]+)\}/g, '<span class="m-sum"><span class="m-sup-bound">$2</span><span class="m-op-symbol">&sum;</span><span class="m-sub-bound">$1</span></span>');
    s = s.replace(/\\sum_\{([^{}]+)\}\^([a-zA-Z0-9])/g, '<span class="m-sum"><span class="m-sup-bound">$2</span><span class="m-op-symbol">&sum;</span><span class="m-sub-bound">$1</span></span>');
    s = s.replace(/\\sum_\{([^{}]+)\}/g, '<span class="m-sum"><span class="m-op-symbol">&sum;</span><span class="m-sub-bound">$1</span></span>');
    s = s.replace(/\\sum\b/g, '<span class="m-op-symbol">&sum;</span>');

    // Render fractions \frac{a}{b} (bisa bersarang 1 tingkat)
    for (let i = 0; i < 3; i++) {
      s = s.replace(/\\frac\{((?:[^{}]|\{[^{}]*\})*)\}\{((?:[^{}]|\{[^{}]*\})*)\}/g, '<span class="m-frac"><span class="m-num">$1</span><span class="m-den">$2</span></span>');
    }

    // Render superscript ^{sup} dan ^x
    s = s.replace(/\^\{([^{}]+)\}/g, '<sup>$1</sup>');
    s = s.replace(/\^([a-zA-Z0-9])/g, '<sup>$1</sup>');

    // Render subscript _{sub} dan _x
    s = s.replace(/_\{([^{}]+)\}/g, '<sub>$1</sub>');
    s = s.replace(/_([a-zA-Z0-9])/g, '<sub>$1</sub>');

    // Hapus sisa kurung kurawal pembungkus sederhana jika ada
    s = s.replace(/\{([^{}]+)\}/g, '$1');

    return `<span class="math-expr">${s}</span>`;
  });
}

function previewBlockHTML(block) {
  if (block.type === "paragraph") {
    return (block.text || "").split(/\n\n+/).filter(text => text.trim()).map(text => {
      const resolved = resolveCitationTokens(text);
      // Escape HTML selain formula math
      const parts = resolved.split(/(\$\$.*?\$\$|\$.*?\$)/g);
      const htmlOutput = parts.map(part => {
        if ((part.startsWith("$$") && part.endsWith("$$")) || (part.startsWith("$") && part.endsWith("$"))) {
          return renderMathToHTML(part);
        }
        return escapeHtml(part).replace(/\n/g, "<br>");
      }).join("");
      return `<p>${htmlOutput}</p>`;
    }).join("");
  }
  if (block.type === "list") {
    const tag = block.ordered === false ? "ul" : "ol";
    const items = (block.items || []).filter(item => String(item).trim()).map(item => `<li>${renderMathToHTML(item)}</li>`).join("");
    return items ? `<${tag}>${items}</${tag}>` : "";
  }
  if (block.type === "image") {
    if (!String(block.dataUrl || "").startsWith("data:image/")) return "";
    const customWidthPx = block.widthCm ? Math.round(parseFloat(block.widthCm) * 37.8) : null;
    const styleAttr = customWidthPx ? `style="max-width:${customWidthPx}px;width:100%;height:auto;"` : `style="max-width:440px;width:100%;height:auto;"`;
    return `<figure><img src="${escapeAttr(block.dataUrl)}" alt="${escapeAttr(block.caption || "Gambar")}" ${styleAttr}>${block.caption ? `<figcaption>${escapeHtml(block.caption)}</figcaption>` : ""}</figure>`;
  }
  if (block.type === "table") {
    const rows = (block.tableText || "").split(/\r?\n/).filter(row => row.trim()).map(row => row.split("|").map(cell => cell.trim()));
    if (!rows.length) return "";
    const header = rows[0].map(cell => `<th>${escapeHtml(cell)}</th>`).join("");
    const body = rows.slice(1).map(row => `<tr>${row.map(cell => {
      // Izinkan pemisah baris di dalam sel jika ada \n atau <br>
      const subLines = cell.split(/(?:<br\s*\/?>|\n)/gi);
      const renderedSubLines = subLines.map(subLine => {
        const parts = subLine.split(/(\$\$.*?\$\$|\$.*?\$)/g);
        return parts.map(part => {
          if ((part.startsWith("$$") && part.endsWith("$$")) || (part.startsWith("$") && part.endsWith("$"))) {
            return renderMathToHTML(part);
          }
          return escapeHtml(part);
        }).join("");
      });
      return `<td>${renderedSubLines.join("<br>")}</td>`;
    }).join("")}</tr>`).join("");
    const caption = block.caption || block.title || "";
    return `<div class="preview-table-wrap">${caption ? `<p class="preview-table-caption"><strong>${escapeHtml(caption)}</strong></p>` : ""}<table class="apa-open-table"><thead><tr>${header}</tr></thead><tbody>${body}</tbody></table></div>`;
  }
  if (block.type === "chart") {
    const caption = block.caption || block.chartTitle || "";
    return `<figure class="preview-chart">${chartPreviewSVG(block)}${caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : ""}</figure>`;
  }
  if (block.type === "flowchart") {
    const caption = block.caption || block.flowchartTitle || "Gambar Diagram Alir Penelitian";
    return `<figure class="preview-flowchart" style="margin:16px 0;text-align:center;">${flowchartPreviewSVG(block)}${caption ? `<figcaption style="margin-top:8px;font-size:10pt;font-style:italic;">${escapeHtml(caption)}</figcaption>` : ""}</figure>`;
  }
  return "";
}

function citedSourceEntries() {
  const sourceById = new Map(state.sources.map(source => [source.id, source]));
  const entries = [];
  const seen = new Set();
  const collectSectionCitations = section => {
    for (const block of section.blocks || []) {
      if (block.type !== "paragraph") continue;
      for (const match of (block.text || "").matchAll(/\[\[cite:([a-zA-Z0-9_-]+)\]\]/g)) {
        const source = sourceById.get(match[1]);
        if (source && !seen.has(source.id)) {
          seen.add(source.id);
          entries.push(source);
        }
      }
    }
    for (const subsection of section.subsections || []) collectSectionCitations(subsection);
  };
  for (const chapter of state.chapters) {
    for (const section of chapter.sections || []) collectSectionCitations(section);
  }
  return entries;
}

function referenceSourceEntries() {
  const cited = citedSourceEntries();
  const seen = new Set(cited.map(source => source.id));
  return [...cited, ...state.sources.filter(source => !seen.has(source.id))];
}

function citationNumbers() {
  return new Map(referenceSourceEntries().map((source, index) => [source.id, index + 1]));
}

function formatInTextCitation(source, numbers) {
  if (state.citationStyle === "ieee") return `[${numbers.get(source.id)}]`;
  const authors = String(source.authors || "").split(/\s*;\s*|\s+\band\b\s+/i).filter(Boolean);
  const surname = author => author.includes(",") ? author.split(",", 1)[0].trim() : author.trim().split(/\s+/).pop();
  let names = authors.length ? surname(authors[0]) : "Penulis";
  if (authors.length === 2) names += ` & ${surname(authors[1])}`;
  if (authors.length > 2) names += " et al.";
  return `(${names}, ${source.year || "n.d."})`;
}

function resolveCitationTokens(text) {
  const sourceById = new Map(state.sources.map(source => [source.id, source]));
  const numbers = citationNumbers();
  return text.replace(/\[\[cite:([a-zA-Z0-9_-]+)\]\]/g, (token, id) => {
    const source = sourceById.get(id);
    return source ? formatInTextCitation(source, numbers) : token;
  });
}

function formatApaAuthor(author) {
  let surname;
  let given;
  if (author.includes(",")) {
    [surname, given] = author.split(",", 2).map(part => part.trim());
  } else {
    const parts = author.trim().split(/\s+/);
    if (parts.length < 2) return author;
    surname = parts.pop();
    given = parts.join(" ");
  }
  const initials = (given.match(/[\wÀ-ÿ]+/g) || []).map(name => `${name[0].toUpperCase()}.`).join(" ");
  return initials ? `${surname}, ${initials}` : surname;
}

function formatSourceReference(source, number) {
  const title = source.title || "Judul belum diisi";
  const authors = String(source.authors || "").split(/\s*;\s*|\s+\band\b\s+/i).filter(Boolean);
  const apaAuthors = authors.map(formatApaAuthor);
  const authorText = !authors.length
    ? "Penulis tidak diketahui"
    : state.citationStyle === "ieee"
      ? authors.join(", ")
      : apaAuthors.length === 1
        ? apaAuthors[0]
        : apaAuthors.length === 2
          ? `${apaAuthors[0]}, & ${apaAuthors[1]}`
          : `${apaAuthors.slice(0, -1).join(", ")}, & ${apaAuthors[apaAuthors.length - 1]}`;
  const year = source.year || "n.d.";
  const journal = source.journal || "";
  const details = [
    journal,
    source.volume ? `vol. ${source.volume}` : "",
    source.issue ? `no. ${source.issue}` : "",
    source.pages ? `pp. ${source.pages}` : "",
    year,
    source.doi ? `doi: ${source.doi}` : ""
  ].filter(Boolean);
  if (state.citationStyle === "ieee") return `[${number}] ${authorText}, "${title}," ${details.join(", ")}.`;
  let reference = `${authorText} (${year}). ${title}.`;
  if (journal) {
    reference += ` ${journal}${source.volume ? `, ${source.volume}${source.issue ? `(${source.issue})` : ""}` : ""}${source.pages ? `, ${source.pages}` : ""}.`;
  }
  if (source.doi) {
    const doi = source.doi.startsWith("https://doi.org/") ? source.doi : `https://doi.org/${source.doi}`;
    reference += ` ${doi}`;
  }
  return reference;
}

function renderDocumentPreview() {
  const identity = state.identitas || {};
  const title = identity.judul || "Proposal Skripsi";
  document.getElementById("previewTitle").textContent = title;
  const tocHTML = state.chapters.map((chapter, chapterIndex) => `
    <li class="preview-toc-chapter">BAB ${chapterIndex + 1} ${escapeHtml((chapter.title || `Bab ${chapterIndex + 1}`).toUpperCase())}</li>
    ${(chapter.sections || []).map((section, sectionIndex) => `
      <li class="preview-toc-section">${chapterIndex + 1}.${sectionIndex + 1} ${escapeHtml(section.title || `Subbab ${sectionIndex + 1}`)}</li>
      ${(section.subsections || []).map((subsection, subsectionIndex) => `
        <li class="preview-toc-subsection">${chapterIndex + 1}.${sectionIndex + 1}.${subsectionIndex + 1} ${escapeHtml(subsection.title || `Sub-subbab ${subsectionIndex + 1}`)}</li>`).join("")}`).join("")}`).join("");
  const chaptersHTML = state.chapters.map((chapter, chapterIndex) => `
    <section class="preview-chapter">
      <h1>BAB ${chapterIndex + 1} ${(chapter.title || `Bab ${chapterIndex + 1}`).toUpperCase()}</h1>
      ${(chapter.sections || []).map((section, sectionIndex) => `
        <section class="preview-subchapter">
          <h2>${chapterIndex + 1}.${sectionIndex + 1} ${escapeHtml(section.title || `Subbab ${sectionIndex + 1}`)}</h2>
          ${(section.blocks || []).map(previewBlockHTML).join("")}
          ${(section.subsections || []).map((subsection, subsectionIndex) => `
            <section class="preview-subsubchapter">
              <h3>${chapterIndex + 1}.${sectionIndex + 1}.${subsectionIndex + 1} ${escapeHtml(subsection.title || `Sub-subbab ${subsectionIndex + 1}`)}</h3>
              ${(subsection.blocks || []).map(previewBlockHTML).join("")}
            </section>`).join("")}
        </section>`).join("")}
    </section>`).join("");
  const citedSources = referenceSourceEntries();
  const numbers = citationNumbers();
  const sortedSources = state.citationStyle === "ieee"
    ? citedSources
    : [...citedSources].sort((a, b) => String(a.authors || "").localeCompare(String(b.authors || "")));
  const references = [
    ...(state.referensi || []).filter(reference => String(reference).trim()),
    ...sortedSources.map(source => formatSourceReference(source, numbers.get(source.id)))
  ];
  const abstract = state.abstrak || {};
  const persantunanText = (state.persantunan || "").trim();
  const prodiClean = (identity.programStudi || "Teknik Informatika").replace(/PROGRAM STUDI/i, "").trim();
  const fakultasClean = (identity.fakultas || "Fakultas Komunikasi dan Informatika").replace(/FAKULTAS/i, "").trim();

  document.getElementById("docPreview").innerHTML = `
    <!-- HALAMAN 1: COVER -->
    <article class="preview-page preview-cover">
      <div>
        <h1 class="cover-title">${escapeHtml((identity.judul || "JUDUL NASKAH PUBLIKASI ILMIAH MAHASISWA").toUpperCase())}</h1>
        <img class="preview-logo" src="/assets/logo_ums.png" alt="Logo Universitas Muhammadiyah Surakarta">
        <p class="cover-type"><strong>PUBLIKASI ILMIAH</strong></p>
        <p class="cover-description">Disusun sebagai salah satu syarat menyelesaikan Program Studi Strata I pada<br>Program Studi ${escapeHtml(prodiClean)} Fakultas ${escapeHtml(fakultasClean)}</p>
      </div>
      <div class="cover-author">
        <p>Oleh:</p>
        <strong style="text-decoration:underline;">${escapeHtml((identity.nama || "NAMA LENGKAP MAHASISWA").toUpperCase())}</strong>
        <span><strong>${escapeHtml(identity.nim || "L200070150")}</strong></span>
      </div>
      <div class="cover-institution">
        <strong>${escapeHtml((identity.programStudi || "PROGRAM STUDI TEKNIK INFORMATIKA").toUpperCase())}</strong>
        <strong>${escapeHtml((identity.fakultas || "FAKULTAS KOMUNIKASI DAN INFORMATIKA").toUpperCase())} ${escapeHtml((identity.universitas || "UNIVERSITAS MUHAMMADIYAH SURAKARTA").toUpperCase())}</strong>
        <strong>${escapeHtml(identity.tahun || "2023")}</strong>
      </div>
    </article>

    <!-- HALAMAN 2: HALAMAN PERSETUJUAN -->
    <article class="preview-page preview-approval">
      <div class="preview-header-num">1</div>
      <h1 class="doc-subheading">HALAMAN PERSETUJUAN</h1>
      <h2 class="doc-maintitle">${escapeHtml((identity.judul || "JUDUL NASKAH PUBLIKASI ILMIAH MAHASISWA").toUpperCase())}</h2>
      <p class="doc-tagline"><strong>PUBLIKASI ILMIAH</strong></p>
      <p class="doc-by">oleh:</p>
      <strong style="text-decoration:underline;">${escapeHtml((identity.nama || "NAMA LENGKAP MAHASISWA").toUpperCase())}</strong>
      <strong style="display:block;margin-bottom:28px;">${escapeHtml(identity.nim || "L200070150")}</strong>
      <p class="approval-statement">Telah diperiksa dan disetujui untuk diuji oleh:<br>Dosen Pembimbing</p>
      <div class="approval-signature" style="margin-top:40px;">
        <div class="signature-space"></div>
        <strong style="text-decoration:underline;">${escapeHtml(identity.pembimbing || "Dr. Dosen Pembimbing, M.Sc.")}</strong>
        <span><strong>NIDN.${escapeHtml(identity.nidn || "123")}</strong></span>
      </div>
    </article>

    <!-- HALAMAN 3: HALAMAN PENGESAHAN -->
    <article class="preview-page preview-approval">
      <div class="preview-header-num">2</div>
      <h1 class="doc-subheading">HALAMAN PENGESAHAN</h1>
      <h2 class="doc-maintitle">${escapeHtml((identity.judul || "JUDUL NASKAH PUBLIKASI ILMIAH MAHASISWA").toUpperCase())}</h2>
      <p class="doc-by">OLEH</p>
      <strong style="text-decoration:underline;">${escapeHtml((identity.nama || "NAMA LENGKAP MAHASISWA").toUpperCase())}</strong>
      <strong style="display:block;margin-bottom:16px;">${escapeHtml(identity.nim || "L200070150")}</strong>
      <div class="approval-board-intro">
        <p><strong>Telah dipertahankan di depan Dewan Penguji<br>Fakultas ${escapeHtml(fakultasClean)}<br>Universitas Muhammadiyah Surakarta<br>Pada hari ${escapeHtml(identity.hariUjian || "…….")}, ${escapeHtml(identity.tanggalUjian || "………. 2023")}<br>dan dinyatakan telah memenuhi syarat</strong></p>
      </div>
      <p style="margin-top:14px;font-weight:bold;">Dewan Penguji:</p>
      <div class="board-members">
        <div class="board-row"><span>1. ${escapeHtml(identity.pembimbing || "Dr. Dosen Pembimbing, M.Sc.")}<br><small>(Ketua Dewan Penguji)</small></span><span>(……..……..)</span></div>
        <div class="board-row"><span>2. ${escapeHtml(identity.penguji1 || "Dosen Penguji, S. Pd. M.Hum.")}<br><small>(Anggota I Dewan Penguji)</small></span><span>(……………)</span></div>
        <div class="board-row"><span>3. ${escapeHtml(identity.penguji2 || "Dr. Dosen Penguji, M. Ed.")}<br><small>(Anggota II Dewan Penguji)</small></span><span>(…………….)</span></div>
      </div>
      <div class="board-officials">
        <div class="official-col">
          <p>Dekan<br>Fakultas ${escapeHtml(fakultasClean)}</p>
          <div class="signature-space"></div>
          <strong>${escapeHtml(identity.dekan || "Prof. Dr. Nama Lengkap")}</strong>
          <span>NIDN. ${escapeHtml(identity.nidnDekan || "…")}</span>
        </div>
        <div class="official-col">
          <p>Ketua Program Studi<br>${escapeHtml(prodiClean)}</p>
          <div class="signature-space"></div>
          <strong>${escapeHtml(identity.kaprodi || "Prof. Dr. Nama Lengkap")}</strong>
          <span>NIDN. ${escapeHtml(identity.nidnKaprodi || "…")}</span>
        </div>
      </div>
    </article>

    <!-- HALAMAN 4: PERNYATAAN -->
    <article class="preview-page preview-approval">
      <div class="preview-header-num">3</div>
      <h1 class="doc-subheading" style="margin-bottom:30px;">PERNYATAAN</h1>
      <p class="preview-body-p" style="text-indent:1.25cm;margin-bottom:14px;line-height:1.6;">Dengan ini saya menyatakan bahwa dalam skripsi ini tidak terdapat karya yang pernah diajukan untuk memperoleh gelar kesarjanaan di suatu perguruan tinggi dan sepanjang pengetahuan saya juga tidak terdapat karya atau pendapat yang pernah ditulis atau diterbitkan orang lain, kecuali secara tertulis diacu dalam naskah dan disebutkan dalam daftar pustaka.</p>
      <p class="preview-body-p" style="text-indent:1.25cm;margin-bottom:40px;line-height:1.6;">Apabila kelak terbukti ada ketidakbenaran dalam pernyataan saya di atas, maka akan saya pertanggungjawabkan sepenuhnya.</p>
      <div style="text-align:right;margin-top:60px;">
        <p>Surakarta, …………….. ${escapeHtml(identity.tahun || "2023")}</p>
        <p>Penulis</p>
        <div class="signature-space" style="height:50px;"></div>
        <strong style="text-decoration:underline;display:block;">${escapeHtml((identity.nama || "NAMA LENGKAP MAHASISWA").toUpperCase())}</strong>
        <span><strong>${escapeHtml(identity.nim || "L20070000")}</strong></span>
      </div>
    </article>

    <!-- HALAMAN 5: SURAT KETERANGAN LULUS PLAGIASI -->
    <article class="preview-page preview-approval">
      <div class="preview-header-num">4</div>
      <h1 class="doc-subheading" style="text-decoration:underline;">SURAT KETERANGAN LULUS PLAGIASI</h1>
      <p style="text-align:center;font-size:16px;margin-top:20px;">:</p>
      <div class="plagiarism-placeholder" style="border:1px dashed var(--line);padding:24px;border-radius:8px;text-align:center;margin-top:40px;color:var(--muted);font-size:11px;">
        [Lampiran hasil cek plagiasi / Turnitin / surat bebas plagiasi perpustakaan ditempel di bagian ini]
      </div>
    </article>

    <!-- HALAMAN 6+: NASKAH PUBLIKASI ILMIAH -->
    <article class="preview-page preview-content">
      <div class="preview-header-num">1</div>
      <div class="article-header">
        <h1 class="article-title">${escapeHtml((identity.judul || "JUDUL NASKAH PUBLIKASI ILMIAH MAHASISWA").toUpperCase())}</h1>
        <p class="article-author-info"><strong>${escapeHtml(identity.nama || "Nama Lengkap Mahasiswa")}</strong><br><span>${escapeHtml(identity.programStudi || "Program Studi Teknik Informatika")}, ${escapeHtml(identity.fakultas || "Fakultas Komunikasi dan Informatika")}, ${escapeHtml(identity.universitas || "Universitas Muhammadiyah Surakarta")}</span></p>
      </div>

      <div class="abstract-box">
        <h3>Abstrak</h3>
        <p class="abstract-text">${escapeHtml(abstract.indonesia || "")}</p>
        <p class="abstract-keywords"><strong>Kata Kunci:</strong> ${escapeHtml(abstract.kataKunci || "")}</p>
      </div>

      <div class="abstract-box" style="margin-top:14px;">
        <h3>Abstract</h3>
        <p class="abstract-text" style="font-style:italic;">${escapeHtml(abstract.english || "")}</p>
        <p class="abstract-keywords"><strong>Keywords:</strong> <em>${escapeHtml(abstract.keywords || "")}</em></p>
      </div>

      <hr class="article-divider" style="margin:24px 0;border:none;border-top:1px solid #ddd;">
      ${chaptersHTML}

      ${persantunanText ? `
        <section class="preview-chapter">
          <h1>PERSANTUNAN</h1>
          <p class="preview-body-p" style="text-indent:0;">${escapeHtml(persantunanText)}</p>
        </section>` : ""}

      ${references.length ? `
        <section class="preview-chapter">
          <h1>DAFTAR PUSTAKA</h1>
          <ul class="preview-references-list">${references.map(reference => `<li>${escapeHtml(reference)}</li>`).join("")}</ul>
        </section>` : ""}
    </article>`;
}

const previewBackdrop = document.getElementById("previewBackdrop");
function openDocumentPreview() {
  saveData();
  renderDocumentPreview();
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([document.getElementById("docPreview")]).catch(() => {});
  }
  previewBackdrop.classList.add("show");
  previewBackdrop.setAttribute("aria-hidden", "false");
  document.getElementById("closePreview").focus();
}
function closeDocumentPreview() {
  previewBackdrop.classList.remove("show");
  previewBackdrop.setAttribute("aria-hidden", "true");
}
document.getElementById("closePreview").onclick = closeDocumentPreview;
document.getElementById("closePreviewIcon").onclick = closeDocumentPreview;
previewBackdrop.addEventListener("click", event => {
  if (event.target === previewBackdrop) closeDocumentPreview();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && previewBackdrop.classList.contains("show")) closeDocumentPreview();
});

async function generateDocx() {
  const buttons = [document.getElementById("generateBtn"), document.getElementById("generateBtnBottom")];
  if (buttons.some(button => button.disabled)) return;
  buttons.forEach(button => { button.disabled = true; });
  saveData();
  toast("Sedang membuat DOCX…");
  try {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state)
    });
    if (!res.ok) {
      let err = "Gagal generate DOCX.";
      try { const j = await res.json(); err = j.error || err; } catch { }
      throw new Error(err);
    }
    const blob = await res.blob();
    const disposition = res.headers.get("Content-Disposition") || "";
    // Coba RFC 5987 format: filename*=UTF-8''...
    let filename = "";
    const rfc5987Match = disposition.match(/filename\*=UTF-8''([^\s;]+)/i);
    if (rfc5987Match) {
      try { filename = decodeURIComponent(rfc5987Match[1]); } catch { filename = rfc5987Match[1]; }
    }
    // Fallback ke filename="..." biasa
    if (!filename) {
      const plainMatch = disposition.match(/filename="?([^";]+)"?/i);
      filename = plainMatch ? plainMatch[1].trim() : "";
    }
    // Fallback ke custom header
    if (!filename) filename = res.headers.get("X-Download-Filename") || "";
    // Fallback terakhir
    if (!filename) filename = "Proposal_Skripsi.docx";
    // Pastikan ekstensi .docx
    if (!filename.toLowerCase().endsWith(".docx")) filename += ".docx";
    const url = URL.createObjectURL(new Blob([blob], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" }));
    const a = document.createElement("a"); a.href = url; a.download = filename; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    toast(`✅ DOCX berhasil diunduh: ${filename}`);
  } catch (err) {
    toast(err.message || "Python generator belum berjalan.");
  } finally {
    buttons.forEach(button => { button.disabled = false; });
  }
}
document.getElementById("generateBtn").onclick = openDocumentPreview;
document.getElementById("generateBtnBottom").onclick = openDocumentPreview;
document.getElementById("previewGenerateBtn").onclick = () => {
  closeDocumentPreview();
  generateDocx();
};

document.getElementById("themeToggle").onclick = () => {
  const next = document.documentElement.dataset.theme === "dark" ? "" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("thesisFlowTheme", next);
};
document.documentElement.dataset.theme = localStorage.getItem("thesisFlowTheme") || "";

document.querySelectorAll(".nav-item").forEach(btn => {
  btn.onclick = () => document.getElementById(btn.dataset.target).scrollIntoView({ behavior: "smooth" });
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.target === entry.target.id));
    }
  });
}, { rootMargin: "-25% 0px -65% 0px", threshold: 0 });
document.querySelectorAll(".form-section").forEach(s => observer.observe(s));

function renderAll() {
  bindSimpleFields();
  renderDynamicList("referensi");
  renderSources();
  renderChapters();
  updateProgress();
}
bindChapterEditor();
renderAll();
pingServer();

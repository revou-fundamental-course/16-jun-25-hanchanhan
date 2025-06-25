const menuItems = document.querySelectorAll(".menu-item");
const kontenSubpage = document.getElementById("konten-subpage");
menuItems.forEach(item => {
  item.addEventListener("click" , () => {
    menuItems.forEach(Element => Element.classList.remove("selected"));
    item.classList.add("selected")
    const file = item.getAttribute("data-file");

    fetch(file)

    .then(response => {
      if(!response.ok) throw new Error("Gagal Memuat" +file);
      return response.text()
    })

    .then(data => {
      kontenSubpage.innerHTML = data;
      if(file==="persegi.html") {initPersegiLogic()}
      if(file==="segitiga.html") {initSegitigaLogic()}
      if(file==="jajargenjang.html") {initJajarGenjangLogic()}
      if(file==="trapesium.html") {initTrapesiumLogic()}
      if(file==="persegipanjang.html") {initPersegiPanjangLogic()}
      if(file==="lingkaran.html") {initLingkaranLogic()}
    })

    .catch(error => {
      kontenSubpage.innerHTML = "<p>Gagal Memuat Konten</p>"
    })
  })
})

function initSegitigaLogic() {
  const sisiA = document.getElementById("sisi-a");
  const sisiB = document.getElementById("sisi-b");
  const sisiC = document.getElementById("sisi-c");
  const outputKeliling = document.getElementById("keliling");
  const hitungKeliling = document.getElementById("hitung-keliling");

  const alas = document.getElementById("alas");
  const tinggi = document.getElementById("tinggi");
  const outputLuas = document.getElementById("luas");
  const hitungLuas = document.getElementById("hitung-luas")

  if(hitungKeliling) {
    hitungKeliling.addEventListener("click", () => {
      const a = parseFloat(sisiA.value);
      const b = parseFloat(sisiB.value);
      const c = parseFloat(sisiC.value);
      if (isNaN(a) || isNaN(b) || isNaN(c) ) {
        outputKeliling.value = "Error";return
      }
      const keliling = a + b + c;
      outputKeliling.value = keliling

    })
  }

  if(hitungLuas) {
    hitungLuas.addEventListener("click", () => {
      const a = parseFloat(alas.value);
      const t = parseFloat(tinggi.value);
      if (isNaN(a) || isNaN(t)) {
        outputLuas.value = "Error";return
      }
      const luas = 0.5 * a * t ;
      outputLuas.value = luas

    })
  }


}


function initPersegiLogic() {
  const Sisi = document.getElementById("sisi");
  const outputKeliling = document.getElementById("keliling");
  const hitungKeliling = document.getElementById("hitung-keliling");

  const outputLuas = document.getElementById("luas");
  const hitungLuas = document.getElementById("hitung-luas")

  if(hitungKeliling) {
    hitungKeliling.addEventListener("click", () => {
      const s = parseFloat(Sisi.value);
      
      if (isNaN(s)) {
        outputKeliling.value = "Error";return
      }
      const keliling = 4 * s ;
      outputKeliling.value = keliling

    })
  }

  if(hitungLuas) {
    hitungLuas.addEventListener("click", () => {
      const s = parseFloat(Sisi.value);
      if (isNaN(s)) {
        outputLuas.value = "Error";return
      }
      const luas = s * s ;
      outputLuas.value = luas

    })
  }


}

function initJajarGenjangLogic() {}

function initTrapesiumLogic() {}

function initPersegiPanjangLogic() {
  const panjang = document.getElementById("panjang");
  const lebar = document.getElementById("lebar");
  const outputKeliling = document.getElementById("keliling");
  const hitungKeliling = document.getElementById("hitung-keliling");

  const outputLuas = document.getElementById("luas");
  const hitungLuas = document.getElementById("hitung-luas")

  if(hitungKeliling) {
    hitungKeliling.addEventListener("click", () => {
      const p = parseFloat(panjang.value);
      const l = parseFloat(lebar.value);
      
      if (isNaN(p) || isNaN(l)) {
        outputKeliling.value = "Error";return
      }
      const keliling = 2* (p+l) ;
      outputKeliling.value = keliling

    })
  }

  if(hitungLuas) {
    hitungLuas.addEventListener("click", () => {
      const p = parseFloat(panjang.value);
      const l = parseFloat(lebar.value);
      if (isNaN(p) || isNaN(l)) {
        outputLuas.value = "Error";return
      }
      const luas = p * l ;
      outputLuas.value = luas

    })
  }


}

function initLingkaranLogic() {}
// Ini Javascript External
document.addEventListener("DOMContentLoaded", function () {
    // Elemen Keliling
    const sisiKelilingInput = document.querySelector(".input-sisi-keliling");
    const hitungKelilingBtn = document.querySelector(".hitung-keliling");
    const resetKelilingBtn = document.querySelector(".reset-keliling");
    const hasilKelilingDiv = document.querySelector(".hasil-keliling");

    // Fungsi Hitung Keliling
    function hitungKeliling() {
        const sisi = parseFloat(sisiKelilingInput.value);

        if (!isNaN(sisi) && sisi > 0) {
            const keliling = 4 * sisi;
            hasilKelilingDiv.innerHTML = `
                <p>K = 4 × S</p>
                <p>K = 4 × ${sisi}</p>
                <p>K = ${keliling}</p>
                <p><strong>Jadi, keliling persegi yang memiliki sisi sebesar ${sisi} adalah ${keliling}.</strong></p>
            `;
        } else {
            hasilKelilingDiv.innerHTML = "<p>Masukkan angka yang valid!</p>";
        }
    }

    // Event Listener Tombol "Hitung"
    hitungKelilingBtn.addEventListener("click", hitungKeliling);

    // Event Listener Tombol "Reset"
    resetKelilingBtn.addEventListener("click", function () {
        sisiKelilingInput.value = "";
        hasilKelilingDiv.innerHTML = "";
    });

    // Event Listener untuk "Enter"
    sisiKelilingInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            hitungKeliling();
        }
    });

    // Elemen Luas
    const sisiLuasInput = document.querySelector(".input-sisi-luas");
    const hitungLuasBtn = document.querySelector(".hitung-luas");
    const resetLuasBtn = document.querySelector(".reset-luas");
    const hasilLuasDiv = document.querySelector(".hasil-luas");

    // Fungsi Hitung Luas
    function hitungLuas() {
        const sisi = parseFloat(sisiLuasInput.value);

        if (!isNaN(sisi) && sisi > 0) {
            const luas = sisi * sisi;
            hasilLuasDiv.innerHTML = `
                <p>L = S × S</p>
                <p>L = ${sisi} × ${sisi}</p>
                <p>L = ${luas}</p>
                <p><strong>Jadi, luas persegi yang memiliki sisi sebesar ${sisi} adalah ${luas}.</strong></p>
            `;
        } else {
            hasilLuasDiv.innerHTML = "<p>Masukkan angka yang valid!</p>";
        }
    }

    // Event Listener Tombol "Hitung"
    hitungLuasBtn.addEventListener("click", hitungLuas);

    // Event Listener Tombol "Reset"
    resetLuasBtn.addEventListener("click", function () {
        sisiLuasInput.value = "";
        hasilLuasDiv.innerHTML = "";
    });

    // Event Listener untuk "Enter"
    sisiLuasInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            hitungLuas();
        }
    });

    
    // Elemen Luas Persegi Panjang
        const panjangLuasInputPP = document.querySelector(".input-panjang-luas-pp");
        const lebarLuasInputPP = document.querySelector(".input-lebar-luas-pp");
        const hitungLuasBtnPP = document.querySelector(".hitung-luas-pp");
        const resetLuasBtnPP = document.querySelector(".reset-luas-pp");
        const hasilLuasDivPP = document.querySelector(".hasil-luas-pp");
    
        function hitungLuasPP() {
            const panjang = parseFloat(panjangLuasInputPP.value);
            const lebar = parseFloat(lebarLuasInputPP.value);
    
            if (!isNaN(panjang) && !isNaN(lebar) && panjang > 0 && lebar > 0) {
                const luas = panjang * lebar;
                hasilLuasDivPP.innerHTML = `
                    <p>L = P × L</p>
                    <p>L = ${panjang} × ${lebar}</p>
                    <p>L = ${luas}</p>
                    <p><strong>Jadi, luas persegi panjang yang memiliki panjang ${panjang} dan lebar ${lebar} adalah ${luas}.</strong></p>
                `;
            } else {
                hasilLuasDivPP.innerHTML = "<p>Masukkan angka yang valid!</p>";
            }
        }
    
        hitungLuasBtnPP.addEventListener("click", hitungLuasPP);
        resetLuasBtnPP.addEventListener("click", function () {
            panjangLuasInputPP.value = "";
            lebarLuasInputPP.value = "";
            hasilLuasDivPP.innerHTML = "";
        });
    
        panjangLuasInputPP.addEventListener("keypress", function (event) {
            if (event.key === "Enter") hitungLuasPP();
        });
        lebarLuasInputPP.addEventListener("keypress", function (event) {
            if (event.key === "Enter") hitungLuasPP();
        });
    
        // Elemen Keliling Persegi Panjang
        const panjangKelilingInputPP = document.querySelector(".input-panjang-keliling-pp");
        const lebarKelilingInputPP = document.querySelector(".input-lebar-keliling-pp");
        const hitungKelilingBtnPP = document.querySelector(".hitung-keliling-pp");
        const resetKelilingBtnPP = document.querySelector(".reset-keliling-pp");
        const hasilKelilingDivPP = document.querySelector(".hasil-keliling-pp");
    
        function hitungKelilingPP() {
            const panjang = parseFloat(panjangKelilingInputPP.value);
            const lebar = parseFloat(lebarKelilingInputPP.value);
    
            if (!isNaN(panjang) && !isNaN(lebar) && panjang > 0 && lebar > 0) {
                const keliling = 2 * (panjang + lebar);
                hasilKelilingDivPP.innerHTML = `
                    <p>K = 2 × (P + L)</p>
                    <p>K = 2 × (${panjang} + ${lebar})</p>
                    <p>K = ${keliling}</p>
                    <p><strong>Jadi, keliling persegi panjang yang memiliki panjang ${panjang} dan lebar ${lebar} adalah ${keliling}.</strong></p>
                `;
            } else {
                hasilKelilingDivPP.innerHTML = "<p>Masukkan angka yang valid!</p>";
            }
        }
    
        hitungKelilingBtnPP.addEventListener("click", hitungKelilingPP);
        resetKelilingBtnPP.addEventListener("click", function () {
            panjangKelilingInputPP.value = "";
            lebarKelilingInputPP.value = "";
            hasilKelilingDivPP.innerHTML = "";
        });
    
        panjangKelilingInputPP.addEventListener("keypress", function (event) {
            if (event.key === "Enter") hitungKelilingPP();
        });
        lebarKelilingInputPP.addEventListener("keypress", function (event) {
            if (event.key === "Enter") hitungKelilingPP();
        });
    });
        // Fungsi untuk auto-scroll
        function scrollToSection(targetClass) {
        const targetElement = document.querySelector(targetClass);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Fungsi untuk auto-scroll
    function scrollToSection(targetClass) {
        const targetElement = document.querySelector(targetClass);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Menangani klik pada tab Persegi
    const tabPersegi = document.querySelector(".nav-fitur a:nth-child(1)"); // Tab pertama (Persegi)
    if (tabPersegi) {
        tabPersegi.addEventListener("click", function (event) {
            event.preventDefault();
            scrollToSection(".section-title-persegi");
        });
    }

    // Menangani klik pada tab Persegi Panjang
    const tabPersegiPanjang = document.querySelector(".nav-fitur a:nth-child(2)"); // Tab kedua (Persegi Panjang)
    if (tabPersegiPanjang) {
        tabPersegiPanjang.addEventListener("click", function (event) {
            event.preventDefault();
            scrollToSection(".section-title-pp");
        });
    }
});


    
    
    
    
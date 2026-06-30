const menuData = [
    {
        id: "m1",
        nama: "Nasi Putih",
        kategori: "Makanan Pokok",
        kalori: 180,
        harga: 5000,
        gambar: "Asset/Nasi-Putih.jpg",
    },
    {
        id: "m2",
        nama: "Nasi Goreng Spesial",
        kategori: "Makanan Pokok",
        kalori: 450,
        harga: 25000,
        gambar: "Asset/Nasi-Goreng-Spesial.jpg"
    },

    {
        id: "m3",
        nama: "Mie Goreng Jawa",
        kategori: "Makanan Pokok",
        kalori: 380,
        harga: 16000,
        gambar: "Asset/Mie-Goreng-Jawa.jpg",
    },
    {
        id: "m4",
        nama: "Spaghetti Aglio Olio",
        kategori: "Makanan Pokok",
        kalori: 420,
        harga: 28000,
        gambar: "Asset/Spaghetti-Aglio-Olio.jpg",
    },
    {
        id: "m5",
        nama: "Kentang Panggang",
        kategori: "Makanan Pokok",
        kalori: 220,
        harga: 15000,
        gambar: "Asset/Kentang-Panggang.jpg",
    },
    {
        id: "m6",
        nama: "Roti Gandum (2 lembar)",
        kategori: "Makanan Pokok",
        kalori: 160,
        harga: 8000,
        gambar: "Asset/Roti-Gandum.jpg",
    },
    {
        id: "m7",
        nama: "Ayam Goreng Tepung",
        kategori: "Lauk-Pauk",
        kalori: 300,
        harga: 17000,
        gambar: "Asset/Ayam-Goreng-Tepung.jpg",
    },
    {
        id: "m8",
        nama: "Ayam Bakar Madu",
        kategori: "Lauk-Pauk",
        kalori: 280,
        harga: 20000,
        gambar: "Asset/Ayam-Bakar-Madu.png",
    },
    {
        id: "m9",
        nama: "Rendang Daging Sapi",
        kategori: "Lauk-Pauk",
        kalori: 380,
        harga: 32000,
        gambar: "Asset/Rendang.jpg",
    },
    {
        id: "m10",
        nama: "Tempe Orek",
        kategori: "Lauk-Pauk",
        kalori: 150,
        harga: 8000,
        gambar: "Asset/Tempe-Orek.jpg",
    },
    {
        id: "m11",
        nama: "Tahu Goreng",
        kategori: "Lauk-Pauk",
        kalori: 120,
        harga: 6000,
        gambar: "Asset/Tahu-Goreng.jpg",
    },
    {
        id: "m12",
        nama: "Ikan Nila Bakar",
        kategori: "Lauk-Pauk",
        kalori: 250,
        harga: 22000,
        gambar: "Asset/Ikan-Nila-Bakar.jpg",
    },
    {
        id: "m13",
        nama: "Telur Dadar",
        kategori: "Lauk-Pauk",
        kalori: 190,
        harga: 7000,
        gambar: "Asset/Telur-Dadar.jpg",
    },
    {
        id: "m14",
        nama: "Beef Steak Sirloin",
        kategori: "Lauk-Pauk",
        kalori: 420,
        harga: 45000,
        gambar: "Asset/Beef-Steak-Sirloin.jpg",
    },
    {
        id: "m15",
        nama: "Tumis Kangkung",
        kategori: "Sayur",
        kalori: 90,
        harga: 9000,
        gambar: "Asset/Tumis-Kangkung.jpg",
    },
    {
        id: "m16",
        nama: "Sayur Asem",
        kategori: "Sayur",
        kalori: 70,
        harga: 8000,
        gambar: "Asset/Sayur-Asem.jpg",
    },
    {
        id: "m17",
        nama: "Capcay Kuah",
        kategori: "Sayur",
        kalori: 110,
        harga: 13000,
        gambar: "Asset/Capcay-Kuah.jpg",
    },
    {
        id: "m18",
        nama: "Salad Sayur Segar",
        kategori: "Sayur",
        kalori: 80,
        harga: 14000,
        gambar: "Asset/Salad-Sayur.jpg",
    },
    {
        id: "m19",
        nama: "Gado-Gado",
        kategori: "Sayur",
        kalori: 280,
        harga: 16000,
        gambar: "Asset/Gado-Gado.jpg",
    },
    {
        id: "m20",
        nama: "Pisang (1 buah)",
        kategori: "Buah",
        kalori: 105,
        harga: 5000,
        gambar: "Asset/Pisang.jpg",
    },
    {
        id: "m21",
        nama: "Apel Fuji (1 buah)",
        kategori: "Buah",
        kalori: 95,
        harga: 7000,
        gambar: "Asset/Apel-Fuji.jpg",
    },
    {
        id: "m22",
        nama: "Semangka (1 potong)",
        kategori: "Buah",
        kalori: 60,
        harga: 6000,
        gambar: "Asset/Semangka.jpg",
    },
    {
        id: "m23",
        nama: "Fruit Salad Cup",
        kategori: "Buah",
        kalori: 140,
        harga: 17000,
        gambar: "Asset/Fruit-Salad.jpg",
    },
    {
        id: "m24",
        nama: "Es Teh Manis",
        kategori: "Minuman",
        kalori: 90,
        harga: 5000,
        gambar: "Asset/Es-Teh-Manis.jpg",
    },
    {
        id: "m25",
        nama: "Air Mineral 600ml",
        kategori: "Minuman",
        kalori: 0,
        harga: 4000,
        gambar: "Asset/Air-Mineral.jpg",
    },
    {
        id: "m26",
        nama: "Jus Alpukat",
        kategori: "Minuman",
        kalori: 230,
        harga: 18000,
        gambar: "Asset/Jus-Alpukat.jpg",
    },
];

const kategoriStatusMap = {
    "Makanan Pokok": "statusPokok",
    "Lauk-Pauk": "statusLauk",
    "Sayur": "statusSayur",
    "Buah": "statusBuah",
    "Minuman": "statusMinuman"
};

function renderMenuTable() {
    const container = document.getElementById("menu-container");
    
    container.innerHTML = "";
    menuData.forEach(menu => {
        const tr = document.createElement("tr");
        // added data-kategori, data-nama, data-gambar -haris
        tr.innerHTML = `
            <td>
                <input type="checkbox" class="menu-checkbox" data-id="${menu.id}" data-kalori="${menu.kalori}" data-harga="${menu.harga}" data-kategori="${menu.kategori}" data-nama="${menu.nama}" data-gambar="${menu.gambar}">
            </td>
            <td>
                <img src="${menu.gambar}" alt="${menu.nama}">
            </td>
            <td><strong>${menu.nama}</strong></td>
            <td>${menu.kategori}</td>
            <td>${menu.kalori} kcal</td>
            <td>Rp ${menu.harga.toLocaleString('id-ID')}</td>
        `;

        container.appendChild(tr);
    });

    // added event listener to checkbox -haris
    container.querySelectorAll(".menu-checkbox").forEach(checkbox => {
        checkbox.addEventListener("change", updatePlanner);
    });
}

// implemented the planner function -haris (ill write documentation what it does later, 25 Jun 2026)
function updatePlanner() {
    const checkedBoxes = Array.from(
        document.querySelectorAll(".menu-checkbox:checked")
    );

    // count checked cal & prices and update the status
    let totalCalories = 0;
    let totalPrice = 0;
    checkedBoxes.forEach(box => {
        totalCalories += Number(box.dataset.kalori);
        totalPrice += Number(box.dataset.harga);
    });

    document.getElementById("totalCalories").textContent = totalCalories.toLocaleString('id-ID');
    document.getElementById("totalPrice").textContent = totalPrice.toLocaleString('id-ID');

    // check the checked categories and update the status by adding or removing 'active' classes
    const kategoriTerpenuhi = new Set(checkedBoxes.map(box => box.dataset.kategori));

    let semuaKategoriAktif = true;
    Object.entries(kategoriStatusMap).forEach(([kategori, statusId]) => {
        const statusEl = document.getElementById(statusId);
        if (kategoriTerpenuhi.has(kategori)) {
            statusEl.classList.add("active");
        } else {
            statusEl.classList.remove("active");
            semuaKategoriAktif = false;
        }
    });

    // update the selected menu on the side (idk if this the best method, i found it on geek for geeks)
    const emptyState = document.getElementById("emptyState");
    const selectedMenuSection = document.querySelector(".selected-menu");
    const selectedImages = document.getElementById("selectedImages");

    selectedImages.innerHTML = "";

    if (checkedBoxes.length > 0) {
        checkedBoxes.forEach(box => {
            const item = document.createElement("div");
            item.className = "selected-item";
            item.innerHTML = `
                <img src="${box.dataset.gambar}" alt="${box.dataset.nama}">
                <span>${box.dataset.nama}</span>
            `;
            selectedImages.appendChild(item);
        });

        emptyState.hidden = true;
        selectedMenuSection.hidden = false;
    } else {
        emptyState.hidden = false;
        selectedMenuSection.hidden = true;
    }

    // show the balaced  badge if all categories fullfilled
    const nutritionStatus = document.querySelector(".nutrition-status");
    const balancedBadge = document.getElementById("balancedBadge");

    if (semuaKategoriAktif) {
        nutritionStatus.hidden = true;
        balancedBadge.hidden = false;
    } else {
        nutritionStatus.hidden = false;
        balancedBadge.hidden = true;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderMenuTable();
});
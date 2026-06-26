const menuData = [
    {
        id: "m1",
        nama: "Nasi Goreng Spesial",
        kategori: "Makanan Utama",
        kalori: 450,
        harga: 25000,
        gambar: "Asset/Nasi-Goreng-Spesial.jpg"
    }
];
function renderMenuTable() {
    const container = document.getElementById("menu-container");
    
    container.innerHTML = "";
    menuData.forEach(menu => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>
                <input type="checkbox" class="menu-checkbox" data-id="${menu.id}" data-kalori="${menu.kalori}" data-harga="${menu.harga}">
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
}

document.addEventListener("DOMContentLoaded", () => {
    renderMenuTable();
});
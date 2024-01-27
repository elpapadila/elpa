const header = document.querySelector("header");
const menu = document.querySelector(".fa-bars");
const nav = document.querySelector(".nav");

window.onscroll = ()=>{
    if(window.scrollY > 100){
        header.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
}

menu.addEventListener("click", ()=>{
    nav.classList.toggle('active');
    menu.classList.toggle('fa-xmark');
})

// pesan 
document.addEventListener('DOMContentLoaded', function() {
    var pesanSekarangButtons = document.querySelectorAll('.pesan-sekarang');

    pesanSekarangButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            // Ambil detail produk dari atribut data
            var productName = button.getAttribute('data-product');
            var productPrice = button.getAttribute('data-price');
            var productDescription = button.getAttribute('data-description');

            // Simpan detail produk dalam sessionStorage
            sessionStorage.setItem('productName', productName);
            sessionStorage.setItem('productPrice', productPrice);
            sessionStorage.setItem('productDescription', productDescription);

            // Alihkan ke halaman order.html
            window.location.href = "order.html";
        });
    });
});
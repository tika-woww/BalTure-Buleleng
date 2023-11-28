const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});


// document ready
$(document).ready(function(){
    $('.loading').addClass('loaded');
    setTimeout(function(){
        $('.loading').css('display', 'none');
    },500);
})
    // navbar active 
    $(document).scroll(function(){
        $('.navbar ul li a').each(function(){
            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();
            if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                $(this).addClass('active');
            } else{
                $(this).removeClass('active');
            }
    
    
        });
    });
   

    // slide navbar
    $(".menu-toggle input").click(function(){
    $(".navbar ul").toggleClass('slide');
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
             $('.navbar').addClass("fix-navbar");
        } else {
         $('.navbar').removeClass("fix-navbar");
         $('.navbar ul li a').first().removeClass('active');
        }	
   });

   function changeBg(bg){
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = `url("./${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';
    console.log(bg);
}

// TARIAN KECAK 
function judulMengoakan() {
    var replaceText = document.getElementsByClassName("judul-kebudayaan");
    replaceText[0].innerHTML = "Megoak-goakan";
}

function asalMengoakan() {
    var replaceText = document.getElementsByClassName("asal-kebudayaan");
    replaceText[0].innerHTML = "Berasal dari Desa Panji";
}

function penjelasanMegoakan() {
    var replaceText = document.getElementsByClassName("penjelasan-kebudayaan");
    replaceText[0].innerHTML = "Berupa permainan tradisional yang biasanya dilakukan oleh anak-anak, Megoak-goakan sendiri di inspirasi oleh seekor burung goak (gagak) yang sedang mengincar mangsanya. Tradsi Megoak-goakan di desa Panji Buleleng ini digelar setiap tahun untuk menghormati jasa dari raja Ki Barak Panji Sakti. ";
}

// JOGED BUMBUNG
function judulGebugEnde() {
    var replaceText = document.getElementsByClassName("judul-kebudayaan");
    replaceText[0].innerHTML = "Kebudayaan Gebug Ende";
}

function asalGebugEnde() {
    var replaceText = document.getElementsByClassName("asal-kebudayaan");
    replaceText[0].innerHTML = "Dikembangkan dari Desa Pejarakan";
}

function penjelasanGebugEnde() {
    var replaceText = document.getElementsByClassName("penjelasan-kebudayaan2");
    replaceText[0].innerHTML = "Gebug Ende berasal dari 2 kata, gebug yang berarti pukul dan Ende yang berarti perisai dari kulit. Secara etimologi, tradisi Gebug Ende berarti permainan yang dilakukan 2 kelompok yang saling menyerang dengan alat khusus. Tradisi Gebug Ende pada dasarnya dilakukan dalam bentuk pertandingan, di mana peserta akan saling menyerang dan menangkis. ";
}

//BARIS
function judulNgesubaBukaka() {
    var replaceText = document.getElementsByClassName("judul-kebudayaan");
    replaceText[0].innerHTML = "Ngusuba Bukakak";
}

function asalNgesubaBukaka() {
    var replaceText = document.getElementsByClassName("asal-kebudayaan");
    replaceText[0].innerHTML = "Berasal dari Desa Giri Mas";
}

function penjelasanNgesubaBukaka() {
    var replaceText = document.getElementsByClassName("penjelasan-kebudayaan2");
    replaceText[0].innerHTML = "Tradisi unik di Buleleng berikutnya adalah Ngusaba Bukakak. Tradisi unik ini berasal dari desa Giri Emas, Kecamatan Sawan. Desa tersebut terkenal akan hasil bumi yang melimpah. Tradisi ini bertujuan untuk menyampaikan terima kasih kepada Ida Sang Hyang Widhi Wasa atas kesuburan tanah dan hasil pertanian yang melimpah. Upacara ini dilakukan setiap 2 tahun sekali setiap bulan April atau pada bulan purnama sasih kedasa menurut kalender Bali.";
}

// PENDET

function judulNyakanDiwan() {
    var replaceText = document.getElementsByClassName("judul-kebudayaan");
    replaceText[0].innerHTML = "Nyakan Diwang";
}

function asalNyakanDiwan() {
    var replaceText = document.getElementsByClassName("asal-kebudayaan");
    replaceText[0].innerHTML = "Berasal dari Banjar";
}

function penjelasanNyakanDiwan() {
    var replaceText = document.getElementsByClassName("penjelasan-kebudayaan2");
    replaceText[0].innerHTML = "Sebuah tradisi unik Kecamatan Banjar Kabupaten Buleleng di namakan Nyakan Diwang tradisi ini di kenal dengan menanak nasi di luar rumah tepatnya di pinggir jalan di Desa Banjar. Menurut kisah Leluhur Nyakan Diwang ini merupakan rangkaian perayaan Hari Raya Nyepi. Yang di nyatakan sebagai bentuk pembersihan rumah terutama penyepian dapur setiap keluarga di desa banjar.";
}

// LEGONG

function judulSapiGerumbungan() {
    var replaceText = document.getElementsByClassName("judul-kebudayaan");
    replaceText[0].innerHTML = "Sampi Gerumbungan";
}

function asalSapiGerumbungan() {
    var replaceText = document.getElementsByClassName("asal-kebudayaan");
    replaceText[0].innerHTML = "Berasal dari Kaliasem";
}

function penjelasanSapiGerumbungan() {
    var replaceText = document.getElementsByClassName("penjelasan-kebudayaan2");
    replaceText[0].innerHTML = "Sampi Gerumbungan merupakan salah satu tradisi khas Buleleng, Bali. Tradisi ini rutin dilaksanakan oleh para petani sebagai wujud ungkapan syukur atas hasil garapan yang melimpah. Sampi Gerumbungan lebih menekankan unsur keindahan, keserasian melalui gerakan sapi yang selaras, dan menonjolkan postur sapi yang baik, tegak, dan gagah.";
}
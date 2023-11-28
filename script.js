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
    replaceText[0].innerHTML = "Tari Kecak sering dipentaskan di berbagai tempat wisata di Bali, seperti Uluwatu dan Ubud. Pertunjukan ini sangat populer di kalangan wisatawan dan menjadi salah satu atraksi budaya terkenal di Bali. kebudayaan ini unik karena tidak menggunakan instrumen musik tradisional Bali seperti gamelan.Sebaliknya, dengan mengunakan suara vocal yang dinyanyikan oleh sekelompok penari pria yang duduk dalam formasi lingkaran."
}

// JOGED BUMBUNG
function judulGebugEnde() {
    var replaceText = document.getElementsByClassName("judul-kebudayaan");
    replaceText[0].innerHTML = "Kebudayaan Gebug Ende";
}

function asalGebugEnde() {
    var replaceText = document.getElementsByClassName("asal-kebudayaan");
    replaceText[0].innerHTML = "Berasal dari Desa Banyumas";
}

function penjelasanGebugEnde() {
    var replaceText = document.getElementsByClassName("penjelasan-kebudayaan");
    replaceText[0].innerHTML = "Joged Bumbung merupakan kebudayaan yang meriah dan menghibur yang mencerminkan semangat hidup masyarakat Bali. kebudayaan ini sering dipentaskan dalam berbagai acara, termasuk upacara adat, perayaan budaya, dan pertunjukan seni di Bali. kebudayaan ini juga sering menjadi daya tarik wisata di Bali."
}

//BARIS
function judulNgesubaBukaka() {
    var replaceText = document.getElementsByClassName("judul-kebudayaan");
    replaceText[0].innerHTML = "Ngesuba Bukakak";
}

function asalNgesubaBukaka() {
    var replaceText = document.getElementsByClassName("asal-kebudayaan");
    replaceText[0].innerHTML = "Berasal dari Bali";
}

function penjelasanNgesubaBukaka() {
    var replaceText = document.getElementsByClassName("penjelasan-kebudayaan");
    replaceText[0].innerHTML = "kebudayaan ini mencerminkan nilai-nilai keberanian, persatuan, dan patriotisme dalam budaya Bali. Selain itu, Tari Baris juga sering digunakan dalam upacara adat untuk menghormati roh leluhur. kebudayaan ini biasanya ditampilkan oleh sekelompok penari pria yang mengenakan kostum prajurit klasik Bali, termasuk pakaian dan peralatan perang tradisional."
}

// PENDET

function judulNyakanDiwan() {
    var replaceText = document.getElementsByClassName("judul-kebudayaan");
    replaceText[0].innerHTML = "Nyakan Diwang";
}

function asalNyakanDiwan() {
    var replaceText = document.getElementsByClassName("asal-kebudayaan");
    replaceText[0].innerHTML = "Berasal dari Klukung";
}

function penjelasanNyakanDiwan() {
    var replaceText = document.getElementsByClassName("penjelasan-kebudayaan");
    replaceText[0].innerHTML = "Tari Pendet berasal dari Desa Sidhakarya, Kabupaten Klungkung, Bali, yang berkembang di Bali. Awalnya diciptakan sebagai ungkapan selamat datang untuk dewa. Seiring berjalannya waktu, kebudayaan ini berkembang menjadi pertunjukan seni dan digunakan dalam berbagai konteks, seperti kebudayaan penyambutan."
}

// LEGONG

function judulSapiGerumbungan() {
    var replaceText = document.getElementsByClassName("judul-kebudayaan");
    replaceText[0].innerHTML = "Sampi Gerumbungan";
}

function asalSapiGerumbungan() {
    var replaceText = document.getElementsByClassName("asal-kebudayaan");
    replaceText[0].innerHTML = "Dikembangkan di Gianyar dan Badung";
}

function penjelasanSapiGerumbungan() {
    var replaceText = document.getElementsByClassName("penjelasan-kebudayaan");
    replaceText[0].innerHTML = "Tari Legong di Bali adalah sebuah seni pertunjukan yang mencerminkan nilai-nilai agama dan sejarah yang melambangkan ungkapan rasa syukur dan terima kasih terhadap nenek moyang. Tari Legong juga merupakan tarian hiburan yang digunakan dalam penyambutan tamu dan menjadi daya tarik bagi wisatawan."
}
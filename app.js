let mhs = [{
    nama:"daren",
    pass:"cintaupb"
}]

const login_upb = document.querySelector('.login-upb');
const login_form = document.querySelector('.login-form');
const login_gambar= document.querySelector('.login-gambar img');
const login_judul= document.querySelector('.login-judul');
const welcome= document.querySelector('.login-form2 p');
const tombolLogin= document.querySelector('.form button');
const tloginBawah= document.querySelectorAll('.login-form3 button');
const change= document.querySelector('.change');
const masuk = document.querySelector('.masuk');

change.addEventListener('click', function(){
    if(document.body.style.backgroundColor=="rgb(68, 57, 122)" || !document.body.style.backgroundColor){
        document.body.style.backgroundColor="#3A393E";
        login_form.style.animation="bayangan .4s ease-in";
        setTimeout(()=>{
            login_form.style.animation="";
        },500)
        login_form.style.border=".2vw #CCBC88 solid";
        login_gambar.src="Paimon-PNG-HD-Isolated 1.svg";
        login_gambar.style.animation="melayang 2s ease-in infinite";
        login_judul.style.background="#CCBC88";
        welcome.style.color="#CCBC88";
        tombolLogin.style.backgroundColor="#3A393E";
        tloginBawah[0].style.backgroundColor="#3A393E";
        tloginBawah[1].style.backgroundColor="#3A393E";
        tloginBawah[0].style.color="white";
        tloginBawah[1].style.color="white";


    }else{
        document.body.style.backgroundColor="#44397A";
        login_form.style.animation="bayangan .4s ease-in";
        setTimeout(()=>{
            login_form.style.animation="";
        },500)
        login_form.style.border="none";
        login_gambar.src="upbwarnanew.gif";
        login_gambar.style.animation="none";
        login_judul.style.background="#44397A";
        welcome.style.color="red";
        tombolLogin.style.backgroundColor="#44397A";
        tloginBawah[0].style.backgroundColor="#DDDDDD";
        tloginBawah[1].style.backgroundColor="#e7e7e7";
        tloginBawah[0].style.color="#44397A";
        tloginBawah[1].style.color="#44397A";
    }


   
})


masuk.addEventListener('click',()=>{
    const name = document.querySelector('#name').value;
    const pass = document.querySelector('#pass').value;
    let login_result = `Login Gagal`;
    mhs.forEach(a => {
        if(name == a.nama && pass == a.pass){
            login_result = `Selamat datang di UPB <3`;
        }
    });

    alert(login_result);
    // console.log(`${name} & ${pass}`)
})
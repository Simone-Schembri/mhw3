window.onload = () =>{
  let citta='';
  
function onClickIndirizzo(){
  const scrivi=document.querySelector('.hidden');
  scrivi.classList.remove('hidden');
}

const indirizzo=document.querySelector("#indirizzo");
indirizzo.addEventListener("click",onClickIndirizzo);

function onClickPartner(event){
  const new_image=document.createElement('img');
  new_image.src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/675px-McDonald%27s_logo.svg.png";
  event.currentTarget.style.backgroundImage= "url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/675px-McDonald%27s_logo.svg.png')"
}

const partneritem=document.querySelector("#partneritem");
partneritem.addEventListener("click",onClickPartner);

function onClickPartner2(event){
  const new_image=document.createElement('img');
  new_image.src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/1012px-Burger_King_logo_%281999%29.svg.png";
  event.currentTarget.style.backgroundImage= "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/1012px-Burger_King_logo_%281999%29.svg.png')"
}

const partneritem2=document.querySelector("#partneritem2");
partneritem2.addEventListener("click",onClickPartner2);

function onClickPartner3(event){
  const new_image=document.createElement('img');
  new_image.src="https://www.emerge.biz/assets/carrefour/img/carrefour_logo.png";
  event.currentTarget.style.backgroundImage= "url('https://www.emerge.biz/assets/carrefour/img/carrefour_logo.png')"
}

const partneritem3=document.querySelector("#partneritem3");
partneritem3.addEventListener("click",onClickPartner3);

function onClickPartner4(event){
  const new_image=document.createElement('img');
  new_image.src="https://citylifeshoppingdistrict.it/wp-content/uploads/2018/01/Logo-Poke-House.jpg";
  event.currentTarget.style.backgroundImage= "url('https://citylifeshoppingdistrict.it/wp-content/uploads/2018/01/Logo-Poke-House.jpg')"
}

const partneritem4=document.querySelector("#partneritem4");
partneritem4.addEventListener("click",onClickPartner4);

function onClickPartner5(event){
  const new_image=document.createElement('img');
  new_image.src="https://www.centronova.com/wp-content/uploads/2021/09/LOGO-OWW-CMYKpiatto-Verticale-PayOff-POS.jpg";
  event.currentTarget.style.backgroundImage= "url('https://www.centronova.com/wp-content/uploads/2021/09/LOGO-OWW-CMYKpiatto-Verticale-PayOff-POS.jpg')"
}

const partneritem5=document.querySelector("#partneritem5");
partneritem5.addEventListener("click",onClickPartner5);

function onClickPartner6(event){
  const new_image=document.createElement('img');
  new_image.src="https://citynews-bresciatoday.stgy.ovh/~media/original-hi/54136597841750/burgez-2.jpg";
  event.currentTarget.style.backgroundImage= "url('https://citynews-bresciatoday.stgy.ovh/~media/original-hi/54136597841750/burgez-2.jpg')"
}

const partneritem6=document.querySelector("#partneritem6");
partneritem6.addEventListener("click",onClickPartner6);

function onClickPartner7(event){
  const new_image=document.createElement('img');
  new_image.src="https://img.uniform.global/p/7MRMFcFzTk2rz0FjpBVLSA/h4BW8G73Ri63NVkRLi407Q-spontini-227.jpeg";
  event.currentTarget.style.backgroundImage= "url('https://img.uniform.global/p/7MRMFcFzTk2rz0FjpBVLSA/h4BW8G73Ri63NVkRLi407Q-spontini-227.jpeg')"
}

const partneritem7=document.querySelector("#partneritem7");
partneritem7.addEventListener("click",onClickPartner7);

function onClickPartner8(event){
  const new_image=document.createElement('img');
  new_image.src="https://www.rundesign.it/wp-content/uploads/2023/08/kfc.jpg";
  event.currentTarget.style.backgroundImage= "url('https://www.rundesign.it/wp-content/uploads/2023/08/kfc.jpg')";
}

const partneritem8=document.querySelector("#partneritem8");
partneritem8.addEventListener("click",onClickPartner8);

function onClickLocazione(event){
  const token='secret';
  const url=`https://ipinfo.io/json?token=${token}`;
  
  fetch(url).then(response=>{
    if(!response.ok) throw new Error("Si è verificato un errore nella risposta dell'API")
    return response.json();
  }).then(data=>{
    citta=data.city;
    const regione=data.region;
    const nazione=data.country;
    const dati=document.querySelector('#scrivi');
    dati.innerHTML=`<p>Posizione tramite IP</p><p>Città: ${citta}</p><p>Regione: ${regione}</p><p>Nazione: ${nazione}</p><button id='meteo'>tocca per scoprire com'è il meteo</button>`;
       document.querySelector('#meteo').addEventListener('click', () => {
          onClickMeteo(citta);
        });
  }).catch(error=>{
    const messaggio=document.querySelector('#scrivi');
    messaggio.textContent="Errore nel recupero dati: " + error.message;
  });
}

const locazione=document.querySelector("#locazione");
locazione.addEventListener("click",onClickLocazione);
  
  async function onClickMeteo(citta){
    const url = `https://wttr.in/${citta}?format=j1`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Errore nel recupero dati meteo");
        const data = await response.json();

        const current = data.current_condition[0];
        const temp = current.temp_C;
        const descrizione = current.weatherDesc[0].value;
      
      const weather=document.querySelector('#scrivi');
      weather.innerHTML=`
          <p><strong>Temperatura:</strong> ${temp}°C</p>
          <p><strong>Condizioni:</strong> ${descrizione}</p>
        `;
    }catch(error){
      document.querySelector('#scrivi').innerHTML= `<p>Errore: ${error.message}</p>`;
    }
  }

  
  
  
}
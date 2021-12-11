
  
  const serverUrl = 'https://api.genderize.io';

  const countrysUrl  = 'https://api.nationalize.io';
  

  document.querySelector('.btn').addEventListener('click', submitName);

   function submitName(){
     let firstName  = document.querySelector('.inp').value;

     const url = `${serverUrl}?name=${firstName}`; 

     const countryServerUrl = `${countrysUrl}?name=${firstName}`;

       fetch(url)
       .then((response) => {
        return response.json();
      })
      .then((data) => {
        alert(data.gender);
      });
      
      fetch(countryServerUrl)
      .then((response)=>{
        return response.json();
      })
      .then((data)=>{
          data.country.forEach(element => {
            alert(element.country_id);
          });
      })
    
      document.querySelector('.inp').value = '';
  }



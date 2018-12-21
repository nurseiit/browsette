/* API CORTESY - http://www.icndb.com */

const callAPI = (myid: string) => {
  const oReq = new XMLHttpRequest();
  oReq.open("GET", "http://api.icndb.com/jokes/random/");
  oReq.send();
  oReq.onreadystatechange = () => {
    if(oReq.readyState === 4) {
      const target = document.getElementById(myid);
      if (!target) {
        return;
      }
      if(oReq.status === 200) {
        try {
          const response = JSON.parse(oReq.responseText).value.joke;
          target.innerText = response;
        } catch(e){
          target.innerHTML = "Oops, something went wrong :( ";    
        }    
      } else {
        target.innerHTML = "Oops, something went wrong :( ";
      }
    }
  };
}

export default callAPI;

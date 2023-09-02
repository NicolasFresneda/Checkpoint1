import data from "./data.js";

console.log(data);

let mode = 0;

class App extends HTMLElement () {


static get observedAttributes () {
  return ["name", "alternate_names", "species", "gender", "house", "dateOfBirth"] ;
}


attributeChangedCallback (propName,_,newValue) {
  switch(propName){

    case "name":
    newValue = this.propName
    break;

    case "alternate_names":
      newValue = this.propName
    break;

    case "species":
      newValue = this.propName
    break;

    case "gender":
      newValue = this.propName
    break;

    case "house":
      newValue = this.propName
    break;

    case "dateOfBirth":
      newValue = this.propName
    break;
  }

}


constructor() {
    super();
    this.attachShadow({ mode: open})
}

render() {

 
      this.shadowRoot.innerHTML = `
      <h1>${data.name}</h1> 
      <h1>${data.species}</h1>
      <h1>${data.gender}</h1>
      <h1>${data.house}</h1>
      <h1>${data.dateOfBirth}</h1>
     
      `
  }
  

  mount() {

    this.render
  
    const btn = this.shadowRoot.queryselector();

    addEventListener(btn) 

    if(mode == 0) {

    } else {

      this.render
    }
  
  
  
  
  };
  
  connectedCallback () {
   this.mount
  };



}







customElements.define("app-container", App)
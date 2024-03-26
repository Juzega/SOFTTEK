const { TranslateClient, ListLanguagesCommand } = require("@aws-sdk/client-translate");
const handler = async(event) => {

  try {
    
    // TODO implement
    let sw = await fetch("https://swapi.py4e.com/api/people/1/").then(res => res.json());
    // console.log(sw)
    // return {sw}

    return{

      nombre: sw.name,
      altura: sw.height,
      masa: sw.mass,
      color_de_pelo: sw.hair_color,
      color_de_piel: sw.skin_color,
      color_de_ojos: sw.eye_color,
      Año_de_nacimiento: sw.birth_year,
      genero: sw.gender,

    }
    
  } catch (error) {
    console.log(error)    
  }
  
};

module.exports = {
  handler,
};
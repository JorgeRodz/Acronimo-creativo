const joyboyDatoCurioso = "🔍 Dato curioso(Personaje del anime 'One Piece'): Joy Boy dejó una carta de disculpa en el siglo Void Century (Siglo Vacío) dirigida a la princesa de la isla Gyojin (Fishman Island) por no haber podido cumplir una promesa relacionada con el Arca Noah. Esto sugiere que Joy Boy tenía planes ambiciosos para unir a las razas del mundo y posiblemente llevar a los hombres pez a la superficie.";

const oharaDatoCurioso = "📚 Dato curioso(Isla del anime 'One piece'): Ohara, la isla de los arqueólogos, fue destruida por el Gobierno Mundial debido a su investigación sobre el Siglo Vacío. Nico Robin, la única sobreviviente, posee la habilidad de leer los Poneglyphs, lo que la convierte en un objetivo clave para el Gobierno Mundial.";

const rigbyDatoCurioso = "🎮 Dato curioso(Personaje de la animacin 'Un show mas'): Aunque Rigby parece perezoso y algo irresponsable, es sorprendentemente hábil en los videojuegos. En varios episodios, demuestra tener un talento natural para los juegos arcade, e incluso derrota a Mordecai (quien normalmente es más maduro) en varios retos gamer.";

const gamesDatoCurioso = "🕹️ Dato curioso: El primer 'huevo de pascua' (easter egg) en la historia de los videojuegos apareció en el juego 'Adventure' para Atari 2600 en 1980. Fue ocultado por el programador Warren Robinett, quien incluyó una habitación secreta con su nombre como forma de recibir crédito, ya que Atari no permitía que los desarrolladores fueran reconocidos públicamente en esa época.";

const eloteDatoCurioso = "🌽 Dato curioso: El elote, conocido como maíz en muchas partes del mundo, es originario de México y ha sido un alimento básico en la dieta de las civilizaciones mesoamericanas durante miles de años. Los antiguos mayas y aztecas consideraban al maíz como un regalo sagrado de los dioses.";

document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".card a");

  botones[0].addEventListener("click", (e) => {
    e.preventDefault();
    alert(joyboyDatoCurioso);
  });

  botones[1].addEventListener("click", (e) => {
    e.preventDefault();
    alert(oharaDatoCurioso);
  });

  botones[2].addEventListener("click", (e) => {
    e.preventDefault();
    alert(rigbyDatoCurioso);
  });

  botones[3].addEventListener("click", (e) => {
    e.preventDefault();
    alert(gamesDatoCurioso);
  });

  botones[4].addEventListener("click", (e) => {
    e.preventDefault();
    alert(eloteDatoCurioso);
  });
});

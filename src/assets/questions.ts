export interface Question {
  id: number,
  name: string,
  options: {
    a: string
    b: string
    c: string
    d: string
  },
  correct: string
}

const Questions = [
  {
    id: 1,
    name: 'Por qué Kimblee(FMA) lleva un traje blanco?',
    options: {
      a: 'Por la muerte de la esposa',
      b: 'Por Mickael Jackson',
      c: 'Para que la sangre sea más visible',
      d: 'Para vestir elegante'
    },
    correct: 'b'
  },
  {
    id: 2,
    name: 'De que color es la capa de super man?',
    options: {
      a: 'Roja',
      b: 'Blanca',
      c: 'Azul',
      d: 'Amarilla'
    },
    correct: 'a'
  },
  {
    id: 3,
    name: 'Albus Dumbledore destruyó qué Horrocrux?',
    options: {
      a: 'El relicario de Slytherin',
      b: 'La Diadema',
      c: 'Copa de Hufflepuff',
      d: 'El anillo de Marvolo Gaunt'
    },
    correct: 'd'
  },
  {
    id: 4,
    name: 'Cual es el numero de evangelion del shinji?',
    options: {
      a: '0',
      b: '3',
      c: '1',
      d: '2'
    },
    correct: 'c'
  },
  {
    id: 5,
    name: 'Dónde se consigue un bezoar?',
    options: {
      a: 'De la lágrima de fenix',
      b: 'Estomago de una cabra',
      c: 'Del corazón de un sapo',
      d: 'De las tripas de una esfinge'
    },
    correct: 'b'
  },
  {
    id: 6,
    name: 'El ingenio sin medida es el mayor tesoro del hombre" es el lema de qué casa?',
    options: {
      a: 'Gryffindor',
      b: 'Hufflepuff',
      c: 'Ravenclaw',
      d: 'Slytherin'
    },
    correct: 'c'
  },
  {
    id: 7,
    name: 'Cuántas evoluciones tiene Eevee?',
    options: {
      a: '8',
      b: '6',
      c: '7',
      d: '5'
    },
    correct: 'a'
  },
  {
    id: 8,
    name: 'En harvest moon cuántos dias dura en crecer un Turnip(Nabo)?',
    options: {
      a: '3',
      b: '6',
      c: '4',
      d: '5'
    },
    correct: 'd'
  },
  {
    id: 9,
    name: 'Cuál de los siguientes monstruos no es un demonio?',
    options: {
      a: 'Bloody Knight',
      b: 'Baphomet',
      c: 'Dark Lord',
      d: 'Moonlight Flower'
    },
    correct: 'a'
  },
  {
    id: 10,
    name: 'En ciudad Plateada Brock le entrega a Ash la medalla?',
    options: {
      a: 'Plateada',
      b: 'Roca',
      c: 'Tierra',
      d: 'Onice'
    },
    correct: 'b'
  },
  {
    id: 11,
    name: 'Qué hechizo uso Harry Potter para derrotar a Lord Voldemort?',
    options: {
      a: 'Expecto Patronum',
      b: 'Avenseguim',
      c: 'Expelliarmus',
      d: 'Avada Kedavra'
    },
    correct: 'd'
  },
  {
    id: 12,
    name: 'En Harry Potter cómo se llamaba el hijo de Ninfadora y Remus?',
    options: {
      a: 'Sam',
      b: 'Teddy',
      c: 'Nott',
      d: 'Oliver'
    },
    correct: 'b'
  },
  {
    id: 13,
    name: 'Por qué a Marito le dicen Marito y no Daniel?',
    options: {
      a: 'Es el segundo nombre',
      b: 'Apodo de la escuela',
      c: 'La mama le dice asi de cariño',
      d: 'Por un juego de peleas'
    },
    correct: 'd'
  },
  {
    id: 14,
    name: 'Cuántos fantasmas persiguen a pacman?',
    options: {
      a: '4',
      b: '2',
      c: '3',
      d: '5'
    },
    correct: 'a'
  },
  {
    id: 15,
    name: 'Como se llama el protagonista de GTA San Andreas?',
    options: {
      a: 'Trevor',
      b: 'Frankklin ',
      c: 'Carl',
      d: 'Michael'
    },
    correct: 'c'
  },
  {
    id: 16,
    name: 'Cuántas piezas distintas hay en tetris?',
    options: {
      a: '6',
      b: '7 ',
      c: '8',
      d: '5'
    },
    correct: 'b'
  },
  {
    id: 17,
    name: 'Hay tres partes de la Trifuerza: poder, sabiduría y…?',
    options: {
      a: 'Espíritu',
      b: 'Esfuerzo',
      c: 'Coraje',
      d: 'Fuerza'
    },
    correct: 'c'
  }
];

export default Questions;

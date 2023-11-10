import { Categoria } from '../interfaces/categorias';

export const CATEGORIAS: Categoria[] = [
  {
    nombre: 'Hamburguesas',
    id: 250,
    imgUrl: 'https://assets.unileversolutions.com/recipes-v2/235078.jpg',
    productos: [
      {
        id: 1,
        nombre: 'Hamburguesa especial',
        precio: 2220,
        ingredientes: [],
        imagen:
          'https://recetinas.com/wp-content/uploads/2023/03/Hamburguesa-con-pan-negro.jpg',
      },
      {
        id: 2,
        nombre: 'Hamburguesa veggie',
        precio: 3330,
        ingredientes: ['Tomate', 'Lechuga'],
        imagen:
          'https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_muqvn0kg1s_e8a3509-1024x683.jpg.webp',
      },
      {
        id: 3,
        nombre: 'Hamburguesa completa',
        precio: 44440,
        ingredientes: [],
        imagen:
          'https://eci.contebio.com/material/aptc/images/aptc/2316406/hamburguesa-torres_0.jpg',
      },
    ],
  },
  {
    nombre: 'Pizzas',
    id: 1,
    imgUrl:
      'https://images.hola.com/imagenes/cocina/recetas/20220208204252/pizza-pepperoni-mozzarella/1-48-890/pepperoni-pizza-abob-t.jpg',
    productos: [
      {
        id: 4,
        nombre: 'Pizza napolitana',
        precio: 1000,
        ingredientes: ['Muzarella', 'Aceitunas', 'Orégano'],
        imagen:
          'https://mandolina.co/wp-content/uploads/2023/05/Pizza-Napolitana-Autentica.png',
      },
      {
        id: 5,
        nombre: 'Pizza especial',
        precio: 1200,
        ingredientes: ['Muzarella', 'Aceitunas', 'Morrones', 'Tomate', 'Huevo'],
        imagen:
          'https://images-gmi-pmc.edge-generalmills.com/fce31bdd-1931-4f30-adef-a5bac0864676.jpg',
      },
      {
        id: 6,
        nombre: 'Pizza 4 quesos',
        precio: 1300,
        ingredientes: ['Muzarella', 'Roquefort', 'Provolone', 'Parmesano'],
        imagen:
          'https://portonovo.com.ar/wp-content/uploads/2022/01/Menuporto-pizzas-4quesos.jpg',
      },
    ],
  },
  {
    nombre: 'Postres',
    id: 2,
    imgUrl:
      'https://img-global.cpcdn.com/recipes/2cfb28b9b3c5bb7a/1200x630cq70/photo.jpg',
    productos: [
      {
        id: 7,
        nombre: 'Lemon pie',
        precio: 800,
        ingredientes: [],
        imagen: 'https://www.annarecetasfaciles.com/files/lemon-pie-scaled.jpg',
      },
      {
        id: 8,
        nombre: 'Chocotorta',
        precio: 800,
        ingredientes: [],
        imagen:
          'https://www.cronica.com.ar/__export/1653520801548/sites/cronica/img/2021/06/17/chocotorta_2_crop1623944104124.jpg_792575817.jpg',
      },
      {
        id: 9,
        nombre: 'Flan con dulce de leche',
        precio: 800,
        ingredientes: [],
        imagen:
          'https://img-global.cpcdn.com/recipes/2cfb28b9b3c5bb7a/1200x630cq70/photo.jpg',
      },
    ],
  },
  {
    nombre: 'Bebidas',
    id: 3,
    imgUrl:
      'https://media.istockphoto.com/id/487787108/es/foto/can-of-coca-cola-sobre-hielo.jpg?s=612x612&w=0&k=20&c=P9lW89YLz4kdzrvj4TItEAS10J_wDAq3fAd21vVdk-c=',
    productos: [
      {
        id: 10,
        nombre: 'Agua',
        precio: 100,
        ingredientes: [],
        imagen:
          'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040004_f.jpg',
      },
      {
        id: 11,
        nombre: 'Jugo de naranja',
        precio: 100,
        ingredientes: [],
        imagen:
          'https://www.paulinacocina.net/wp-content/uploads/2023/06/jugo-de-naranja-receta-y-propiedades.jpg',
      },
      {
        id: 12,
        nombre: 'Coca Cola',
        precio: 100,
        ingredientes: [],
        imagen:
          'https://media.istockphoto.com/id/487787108/es/foto/can-of-coca-cola-sobre-hielo.jpg?s=612x612&w=0&k=20&c=P9lW89YLz4kdzrvj4TItEAS10J_wDAq3fAd21vVdk-c=',
      },
    ],
  },
];

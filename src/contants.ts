import {Ingredient} from "./types.ts";
import meatImage from './assets/meat.png'
import cheeseImage from './assets/cheese.png'
import saladImage from './assets/salad.png'
import baconImage from './assets/bacon.png'

export const INGREDIENTS: Ingredient[] = [
  {name: 'Meat', price: 70, image: meatImage},
  {name: 'Cheese', price: 40, image: cheeseImage},
  {name: 'Salad', price: 15, image: saladImage},
  {name: 'Bacon', price: 50, image: baconImage},
]
import './style.css'
import {wire} from './events.js'
let todo = []

let form = document.querySelector("form")
let heading = document.querySelector("#Heading") // Input 1
let decription = document.querySelector("#decription") // Input 2
let todoTtask = document.querySelector('.toTo-task')

 wire(form,heading,decription,todoTtask);

 let  card = document.querySelector('.card')
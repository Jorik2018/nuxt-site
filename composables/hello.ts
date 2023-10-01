import { upperCase } from "~/utils/string";


export function sayHello(message = 'World') {
    alert(`Hello ${upperCase(message)}!`)
  }
//Método forEach --------
console.log("Array para iteração do método")
const arrayForEach = [10, 20, 30, 44, 55]; // array para iteração do método
console.log(arrayForEach)
//array em que nossa callback vai colocar os números multiplicados

console.log("Array acumulador.")
const arrayVazio = [];
console.log(arrayVazio)

//nossa callback
console.log("Reproduz um forEach, sendo utilizado para múltiplicar os números da lista por dois")
function callbackForEach(element, i, array) {
  return arrayVazio.push(array[i] = element * 2);
}

function forEach(array, callback) {
  
  for (let i = 0; i < array.length; i++) {

      callback(array[i], i, array)
  }
}

forEach(arrayForEach, callbackForEach)
console.log(arrayVazio);

//Método Find --------
console.log("Array para iteração do método.")
const arrayFind = [19, true, "alfafa", 4, 5]; // array para iteração do método
console.log(arrayFind)

//nossa primeira callback testa se o elemento é maior que 2 e menor que 12
function callbackFind(element, i, array) {
  return element > 2 && element < 12
  
}

//nossa segunda callback testa se existe algum elemento maior que 15
function callbackFindTwo(element, i, array) {
  return element > 15
  
}

function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      return array[i]
    }
  }
  return undefined
}

console.log("Reproduz um Find, que retorna o primeiro elemento entre 3 e 11.")
console.log(find(arrayFind, callbackFind));
console.log("Reproduz um Find, que retorna o primeiro elemento maior que 15.")
console.log(find(arrayFind, callbackFindTwo));

//Método IndexOf --------
console.log("Array para iteração do método.")
const arrayIndexOf = [595, 206, "apollo", false, null, undefined, 8]; // array para iteração do método
console.log(arrayIndexOf)

function indexOf(array, elementoPesquisa) {
  
  for(let i = 0; i < array.length; i++) {
    if(array[i] === elementoPesquisa) {
      return i
    }
  }
  return -1
}

console.log("Reproduz um IndexOf, que retorna -1 caso o elemento não seja encontrado.")
console.log(indexOf(arrayIndexOf, 2));
console.log("Reproduz um IndexOf, que retorna a posição do elemento na lista, caso ele seja encontrado.")
console.log(indexOf(arrayIndexOf, "apollo"));

//Método Includes --------
console.log("Array para iteração do método.")
const arrayIncludes = [53, 2, "duck", NaN, 456, 7]; // array para iteração do método
console.log(arrayIncludes)

function includes(array, element) {
  for (let i = 0; i < array.length; i++) {
    if(element > 500) {
      return true
    }else if(element === "duck") {
      return true
    }
  }
  return false
}
console.log("Reproduz um Includes, que retorna false, caso o elemento não seja encontrado na lista.")
console.log(includes(arrayIncludes, 10));
console.log("Reproduz um Includes, que retorna true, caso o elemento seja encontrado na lista.")
console.log(includes(arrayIncludes, "duck"));

//Método some --------
console.log("Array para iteração do método.")
const arrySome = [12, 82, 563, 414, null]; // array para iteração do método
console.log(arrySome)

const callbackSome = (element, i, array) => {
  return element > 82 && true;
};

const callbackSome2 = (element, i, array) => {
  if (element) {
    return false;
  }
};

function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if(callback(array[i])){
      return true
    }
  }
  return false
}

console.log("Reproduz um Some, que retorna true, caso o elemento satisfaça a condição e seja encontrado na lista.")
console.log(some(arrySome, callbackSome));
console.log("Reproduz um Some, que retorna false, caso o elemento não satisfaça a condição e não seja encontrado na lista.")
console.log(some(arrySome, callbackSome2));

//Método Join --------
console.log("Array para iteração do método.")
const arrayJoin = ["Fogo", "no", "Parquinho"]; // array para iteração do método
console.log(arrayJoin)

function join(array, value=",") {
  let res = ""
  for (let i = 0; i < array.length; i++) {
    if(array[i] === null || array[i] === undefined) {
      array[i] = ""
    }
    if(i !== 0) {
      res += value + array[i]
    }else {
      res += array[i] 
    } 
  }
  return res
}

console.log("Reproduz um Join, que retorna o elemento da forma que satisfaça a condição.")
console.log(join(arrayJoin, " "));
console.log("Reproduz um Join, que retorna o elemento da forma que satisfaça a condição.")
console.log(join(arrayJoin, ""));
console.log("Reproduz um Join, que retorna o elemento da forma que satisfaça a condição.")
console.log(join(arrayJoin, "-"));

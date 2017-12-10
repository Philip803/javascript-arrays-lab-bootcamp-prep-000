const app = "I don't do much."

var kittens = ["Milo", "Otis" ,"Garfield"]

function destructivelyAppendKitten(element){
  return kittens.push(element);
}

function destructivelyPrependKitten(element){
  return kittens.unshift(element);
<<<<<<< HEAD
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(element){
  return [...kittens , element];
}

function prependKitten(element){
    return [element , ...kittens];
}

function removeLastKitten(){
  return kittens.slice(0 , kittens.length - 1);
}

function removeFirstKitten(){
    return kittens.slice(1);

=======
>>>>>>> f45c0e54094f6d518a6f0ddf263970aab3a2212e
}
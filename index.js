let qualMercadoIr = "Max atacadista";
let listaDoQueComprar = "Massa de pastel, Carne moída, Mussarela, Coca-cola ZERO";
let qualLista;

if(listaDoQueComprar === "Massa de lasanha, Carne de Porco, Coca-cola Normal")
{qualLista = 1}

 else if (listaDoQueComprar === "Iogurte de melância, Ovomaltine, leite de soja, 1kg de Alcatra, Fanta laranja")
 {qualLista = 2}

 else if (listaDoQueComprar === "Massa de pastel, Carne moída, Mussarela, Coca-cola ZERO")
 { qualLista = 3}

 else if (listaDoQueComprar === "Tubaina, bisteca suína, leite condesado, mortadela")
 {qualLista = 4}

 else {qualLista = 5};

 console.log("O mercado aonde eu vou fazer compras é o " + qualMercadoIr + " e a lista do bloco de notas que eu devo utilizar é a de número " 
+ qualLista + " pois irei fazer pastel de carne moída com queijo")

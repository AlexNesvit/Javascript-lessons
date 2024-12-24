# 🟣 Projet d’apprentissage des bases de JavaScript 🟣

## Ce projet a été conçu pour apprendre et pratiquer les concepts fondamentaux de JavaScript, le langage incontournable du web moderne. 🖥️✨

Objectifs du projet
	•	Découvrir les bases du langage (variables, types, opérateurs, etc.).
	•	Explorer les structures de contrôle (conditions, boucles).
	•	Comprendre les fonctions et leur rôle essentiel dans JavaScript.
	•	Travailler avec les tableaux et les objets.
	•	Manipuler le DOM pour des interactions dynamiques avec les pages web.

Public cible

Ce dépôt est parfait pour :
	•	Les débutants qui souhaitent se lancer dans JavaScript.
	•	Ceux qui veulent renforcer leurs bases avant d’explorer des frameworks comme React, Vue ou Angular.
	•	Les curieux du développement web !

Contenu

Le projet est divisé en plusieurs modules :
	1.	Introduction : Premiers pas avec JavaScript.
	2.	Les bases : Variables, types de données, opérateurs.
	3.	Structures de contrôle : `If/else, boucles`.
	4.	Fonctions : Définition et utilisation.
	5.	Tableaux et Objets : Comprendre et manipuler les collections de données.
	6.	Manipulation du DOM : Apporter du dynamisme aux pages web.


---

##  JS Basics 01 - Qu'est-ce que JavaScript

JavaScript est un langage de programmation haut-niveau

ECMAScript est le standard qui définit les règles et spécifications de JavaScript

Tu peux utiliser JavaScript côté frontend et backend (grâce à NodeJS)

---


## JS Basics 02 - Syntaxe et concepts de base

### Comment ajouter du JS dans une page web?

La première chose dont tu as besoin est une page HTML. Ouvre ton IDE préféré et crée un nouveau document HTML. À la fin de ce document, juste avant de fermer le tag `</body>`, ajoutes un tag `<script>`.

```bash
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>My website</h1>
    <script>
        // JAVASCRIPT GOES HERE!
    </script>
  </body>
</html>
```
C'est à cet endroit précis, entre les deux `<script>` tags que l on va écrire notre code Javascript

Commençons notre programme `"Hello World"`:
```bash
<script>
   console.log("Hello, World!");
</script>
```
Bien joué ! Tu as juste créé ton premier code Javascript! Si tu ouvres ton fichier index.html dans ton navigateur, tu ne dois rien voir de particulier.
C'est normal, le message que tu as créé est uniquement visible dans la console du navigateur.

### Ajouter un fichier externe

Comme avec CSS, il est recommandé d'écrire du Javascript dans un fichier `.js` séparé.

Crée un nouveau fichier appelé `script.js`. Tu peux utiliser le nom de ton choix, mais par convention les fichiers JavaScript sont appelés `script.js`, `main.js` ou `index.js`.

Ensuite, à l'intérieur de ce fichier , tu peux directement écrire du… Javascript ! (obviously 😏)
```bash
console.log("Hello, World");
```
Une fois que cela est fait, ajoute l'attribut src (comme tu ferais pour une image) à ta balise script et donne lui le chemin de ton fichier JS.

```bash
<script src="script.js"></script>
```
### La console du navigateur

Nos navigateurs web ont beaucoup d'outils tous plus fantastiques les uns que les autres, qui sont là pour nous aider à comprendre ce qui se passe dans nos applications.

L'un d'eux est la console.
La console va certainement être ton meilleur ami pour debugger tes programmes. C'est là où tu pourras voir les messages d'erreurs, les avertissements ou même des choses que tu essaies par toi même pour vérifier une hypothèse (par example : "je ne suis plus très sûr si "1" == 1 vaut true ou false" --> "je tape simplement cette expression dans la console de mon navigateur pour vérifier !")

### Syntaxe de base

Le code Javascript se termine avec un point-virgule (semi-colon 🇬🇧 )
Le point-virgule indique la fin de la commande.

Si tu oublies ce point-virgule, Javascript va automatiquement l'ajouter pour chaque retour à la ligne. C'est le mécanisme ASI (Automatic Semicolon Insertion). Mais il faut faire attention, en te fiant à ce mécanisme, tu peux rencontrer des erreurs qui seront alors difficile à repérer.

```bash
console.log("Hello, world!");
console.log("Hi, world!");
```

### String

Les strings en Javascript sont des chaînes de caractères. Elles doivent être entourées de guillemets (quotes 🇬🇧) (simple ou double)Les strings en Javascript sont des chaînes de caractères. Elles doivent être entourées de guillemets (quotes 🇬🇧) (simple ou double)
```bash
console.log("Hello, world");
console.log('Hello, world');
```

### Console.log


`console.log` est une fonction Javascript (on parlera un peu plus des fonctions dans un futur proche)

Une fonction en Javascript est un bout de code réutilisable que l'on peut appeler pour effectuer certaines opérations.

Le Javascript et le navigateur viennent avec tout un tas de fonctions intégrées, mais tu verras un peu plus tard que tu peux écrire tes propres fonctions.

console.log est une de ces fonctions apportées par le navigateur à travers ce qu'on appelle les APIs web.
Ces APIs web ne font pas partie des standards ECMAScript.

Pour utiliser console.log, tu as juste besoin de mettre ton message entre les parenthèses. Et parce que ton message est un String, il doit être entre des guillemets.
```bash
console.log("your message")
```

### Différents types de messages

On peut écrire du Javascript directement dans la console du navigateur pour tester du code.
Il y a différents types de message de console.
console.log est celui qu'on va utiliser le plus souvent, il affiche le message de la manière la plus simple.

Mais il y a aussi:

    `console.info` ⇒ pour afficher des informations
    `console.error` ⇒ pour afficher des erreurs
    `console.warn` ⇒ pour afficher des avertissements

### Sensibilité à la casse

Javascript est sensible à la casse. Écrire `console.log` et `console.Log` n'est pas la même chose !
Souviens-t'en pour éviter des erreurs bêtes 😏

### Écrire des commentaires

Une chose importante en développement est de documenter ton code.
Documenter ton code va le rendre plus lisible pour toi, mais aussi pour les autres développeurs qui peuvent être amenés à travailler dessus.
Une façon de documenter est d'écrire des commentaires.

Les commentaires de code ne seront pas affichés dans la page; Ils sont là juste pour toi, te permettre de prendre quelques notes ou pour expliquer ton code aux autres.

Commentaire simple ligne:
```bash
// This is a comment
```
Commentaire multiple lignes:
```bash
/* This comment
is on multiple lines */
```
Commentaire pour documentation:
```bash
/**
* This comment
* is used for
* documentation
*/
```

### Opérations arithmétiques

Javascript nous permet d'écrire des operations arithmétiques.
Faisons un peu de maths avec Javascript (oui oui des maths !)

Addition:
```bash
1 + 1
// => 2
```

Soustraction:
```bash
2 - 2
// => 0
```

Multiplication:
```bash
2 * 3
// => 6
```

Division:
```bash
6 / 2
// => 3
```

Modulo (donne le reste d'une division euclidienne):
```bash
6 % 2
// => 0
```

### Opération logiques : comparaisons (booléen)

Tu peux aussi utiliser Javascript pour comparer des valeurs.
Javascript te donnera une réponse qui vaudra soit true, soit false (on appelle cela un `booléen`).

Valeur égale et type égal
Dans ce cas, on va regarder si les valeurs sont strictement égales.
Cela signifie que les valeurs et types sont les mêmes:
```bash
1 === 1; // true ✅
"Bob" === "Bob"; // true ✅
"Bob" === "bob"; // false ❌
1 === "1"; // false ❌
```

Valeur égale
Dans ce cas, on regarde seulement si les valeurs sont égales:
```bash
1 == 1; // true ✅
1 == "1"; // true ✅
```

Différentes valeurs
Dans ce cas, on regarde si les valeurs sont différentes:
```bash
1 != 2; // true ✅
1 != "1"; // false ❌
```

Valeur différente ou type différent

Dans ce cas, nous vérifions si les valeurs ou le type sont différents:
```bash
1 !== "1" ;
// true ✅

1 !== 1 ;
// faux ❌
```

Supérieur à, supérieur ou égal
Ici, on vérifie que la valeur est supérieure à une autre
en ajoutant le symbole d'égalité `=` juste après le `>`, on peut vérifier si la valeur est supérieure ou égale:
```bash
2 > 1; // true ✅
2 >= 2; // true ✅
```

Ça fonctionne aussi dans l'autre sens avec le symbole inférieur `<`:
```bash
2 < 3; // true ✅
2 <= 2; // true ✅
```

Parfois, ton IDE (Integrated development environment, comme VSCode) va automatiquement indenter ton code pour toi.
Cela dit, il est essentiel de savoir formater son code correctement !
Généralement, en JS, à chaque fois que tu ouvres des accolades (curly braces 🇬🇧), tu ajoutes une tabulation (ou deux espaces).
```bash
const person = {
	name: "Bob", 
	age: 30,
	sayHello: function(){
		console.log("Hello");
	}
}
```

### Résumé


Tu peux écrire du Javascript dans une page HTML en utilisant les tags `<script>`

Tu peux écrire des messages dans la console de ton navigateur en utilisant `console.log`

Tu peux faire des calculs basiques et comparer deux éléments en JS.


---


## JS Basics 03 - Les variables

### Objectifs


Stocker des informations dans la mémoire de ton ordinateur en utilisant des variables.

Comprendre les différents types de variables.


### Une vaquoi ?

Les variables permettent d'allouer un espace dans la mémoire vive, où on peut y stocker des données.
Pour créer une variable, on va utiliser le mot-clé let, suivi du nom de la variable, puis du symbole = et enfin de la valeur que l'on souhaite lui assigner.

```bash
let myName = "Bob";
console.log(myName);
// Will print "Bob"
```

Dans cet exemple, on crée la variable `myName` et on lui assigne la valeur `"Bob"`.
On peut assigner à une variable, n'importe quel type de donnée ! String, Number, Object, Array, Function, etc.
```bash
let userAge = 30;
let fruits = ['apple', 'banana', 'kiwi'];
let userCar = {
  model: "BMW", 
  year: "2000"
};
let sayMyName = function() {
  console.log("My name is Bob!")
};
```

### Nommer une variable

En JavaScript (et dans n'importe quel langage de programmation..!), on va chercher à nommer nos variables de la façon la plus claire possible. Ça ne va pas casser ton code, mais souviens-toi on cherche à rendre notre code le plus lisible possible !
```bash
let a = "Bob"; // ❌ Bad !
let myName = "Bob"; // ✅ Good !
```

Les noms de variables peuvent contenir des lettres majuscule/minuscule (attention à la casse), des nombres, et les caractères spéciaux `$` et `_`
```bash
Important

Une variable peut commencer par n'importe quoi sauf un nombre!
let 1apple; ❌ error
let apple1; ✅ good
```

On ne peut pas utiliser d'espace dans le nom d'une variable. Du coup, si on veut symboliser le-dit espace, on va utiliser la syntaxe camelCase 🐪. (Il existe aussi la syntaxe snake_case 🐍, mais elle est très peu utilisée en JS)
```bash
let userName = "Bob"; 
let userAge = 26;
let isLoggedIn = false;
```

### Assigner une nouvelle valeur à une variable

Il est possible de réassigner une nouvelle valeur à une variable après sa création.
Par exemple, on peut réassigner à la variable myName une nouvelle valeur comme ceci:
```bash
let myName = "Bob";
console.log(myName);
// Will print "Bob"
myName = "Paul";
console.log(myName);
// Will print "Paul"
```
`⚠️` Remarque bien que l'on ne réutilise pas le mot-clé `let`.

`⚠️` Une variable n'est pas une valeur. C'est une étiquette pour accéder à une valeur. Aussi, la valeur (de type string) ne change pas elle-même. Ce qui change, c'est que la variable pointe vers une autre valeur (nouvellement créée).


## Différents types de variables

En JavaScript, il y a différents types de variables. Historiquement, il n'était possible de créer une variable qu'avec `var`. Mais depuis quelques années (on te laisse chercher depuis quand !), deux autres types de variables sont devenus les standards.
Ils sont:

`const`
`let`

Tu devrais considérer le mot-clé `var` comme obsolète et éviter de l'utiliser.


### Let

`let` représente une variable que l'on peut ré-assigner.
```bash
let myCity = "Paris";
myCity = "Berlin";
console.log(myCity);
// Berlin
```

### Const

`const` représente une variable que l'on ne peut pas ré-assigner.
Tu dois l'utiliser dès que tu sais que la variable ne doit pas être réassignée.

Préfères utiliser `const` si tu as un doute.
```bash
const myName = "Bob";
myName = "John";
// TypeError: Assignment to constant variable.
```

Quand on essaie de ré-assigner la valeur de `myName`, on obtient un `TypeError`!


### Opérateurs d'incrément

En JavaScript, tu peux utiliser différents opérateurs pour incrémenter une variable :

l'opérateur d'incrément `++` pour augmenter la valeur de un : c'est un raccourci pour `+= 1` 👇

l'opérateur d'incrément `+=` pour augmenter la valeur tout en assignant le résultat : `a += 1` est un raccourci pour `a = a + 1` 👇

l'opérateur `+` est l'opérateur "normal" pour faire une addition : celui que tu connais depuis toujours. L'opérateur `+` ne fait "que" une addition : pour stocker le résultat dans une variable, tu dois utiliser l'opérateur `=` dans ton instruction.
```bash
let myBudget = 0;

myBudget++;
console.log(myBudget); // affiche 1

myBudget += 2; 
console.log(myBudget); // affiche 3

myBudget = myBudget + 1;
console.log(myBudget); // affiche 4

myBudget--;
console.log(myBudget); // affiche 3

myBudget -= 2; 
console.log(myBudget); // affiche 1

myBudget = myBudget - 1;
console.log(myBudget); // affiche 0
```

Il est aussi possible de concaténer (ajouter bout à bout) des chaînes de caractères.
```bash
let hello = "Hello";
hello += ", World!";
console.log(hello);
//  "Hello, World!"
```

### Résumé


En Javascript, on peut créer des variables qui pointent vers des valeurs.
Il y a trois façons de créer des variables en JS
    `let`
    `const`
    `var` (déprécié)

`let` quand la valeur peut changer et `const` pour les valeurs qui ne changent pas.


---


## JS Basics 04 - Les types de données

### L'opérateur "`typeof`"

En javascript, on peut utiliser un opérateur appelé "`typeof`" pour voir le type de données d'une valeur.
Pour ce faire, on peut simplement écrire `typeof` suivi de la valeur que nous voulons vérifier.
```bash
typeof 1;
```
Tu verras apparaître résultat "`number`" car la valeur `1` est bien un nombre.

### Deux catégories de types de données:

En Javascript, il existe sept types de données différents. Ils sont classés en deux catégories :
Primitifs et non-primitifs.

### Les types primitifs

Une valeur primitive est une valeur qui ne peut pas changer (on dit généralement que ces valeurs sont immutables, qu'elles ne peuvent pas muter).

Pense aux nombres. Tu peux écrire un code comme celui-ci :
```bash
let a = 1;
a = 2;
```

Dans ce code, tu modifies la valeur pointée par `a`. Mais tu n'as pas modifié la valeur `1`. Tu n'écrirais jamais quelque chose comme ça :
`1 = 2;`
Tu ne peux pas modifier la valeur `1` pour qu'elle devienne `2`. Le nombre `1` sera toujours le nombre `1`. C'est ce que nous entendons par immutable.

Voici les types de données primitifs :

Boolean:

Les booléens sont utilisés pour représenter le vrai (`true`) ou le faux (`false`).
```bash
typeof true;
// "boolean"
```

String

Une "String" est une chaîne (suite) de caractères. Les chaînes sont toujours entourées de guillemets doubles (`""`) ou simples (`''`) .
```bash
typeof "Hello, World !";
// "string"
```

Number

Les nombres sont une représentation d'un nombre entier ou décimal.
```bash
typeof 1234;
// "number"
typeof 12.54;
// "number"
```

Null

La valeur `null` est utilisée pour représenter une absence intentionnelle de valeur.

Si tu utilises typeof avec `null`, tu verras que le type de `null` est "object" ;

C'est une erreur qui a été implémentée dans l'ECMAScript depuis le début et ne peut plus être corrigée de nos jours.
```bash
let empty = null;
typeof empty;
// "object"
```

Undefined

`undefined` est la valeur par défaut d'une variable qui existe (car elle est déclarée) mais qui n'a pas encore de valeur (car elle n'a pas été initialisée/assignée).
```bash
let notDefined;
typeof notDefined;
// "undefined"
```
Important

Il est important de comprendre que "undefined" ne s'applique qu'aux variables qui ont été créées, mais qui ne contiennent aucune valeur.

Si tu essaies d'appeler une variable qui n'existe pas (qui n'a pas été déclarée), tu obtiendras une ReferenceError, ce qui n'est pas du tout la même chose.
```bash
let notDefined;
typeof notDefined;
// "undefined"

typeof nothing;
// ReferenceError: nothing is not defined
```

Comme tu peux le voir, même si le message d'erreur dit "`non défini`", ce qui peut prêter à confusion, ce n'est pas la même chose que undefined. ReferenceError est une erreur fatale ☠️ qui provoque l'arrêt de l'exécution du Javascript.


### Types complexes (non-primitifs)

Les valeurs non primitives sont des valeurs qui peuvent changer (on dit qu'elles sont mutables).

Functions

Une fonction est un bloc de code utilisé pour exécuter un ensemble d'instructions.

On peut exécuter (on dit aussi appeler ou invoquer) une fonction en écrivant son nom suivi de parenthèses.

`console.log("hello")`
```bash
typeof console.log;
// "function"
```

L'opérateur `typeof` distingue les fonctions des objets. En fait, une fonction en Javascript peut être considérée comme un type particulier d'objet !



Objects

Nous parlerons davantage des objets. Pour le moment, saches que les objets sont en quelque sorte des "boîtes" qui peuvent contenir des clés associées à des valeurs, un peu comme dans un dictionnaire où on a des mots associés à des définitions.

Ces paires "clé/valeur" sont entourés d'accolades pour délimiter l'objet décrit.

Les valeurs contenues dans un objet peuvent être de n'importe quel type, cela peut même être des fonctions ! Une fonction contenue dans un objet sera appelée "méthode".
```bash
const person = {
  name: "Bob", 
  age: 25, 
  sayHello: function(){
    console.log("Hello");
  }
}

person.sayHello();
// "Hello"

typeof person;
// "object"
```

Array

Les Arrays sont utilisés pour stocker plusieurs valeurs au sein d'une même variable.
`const colors = ["Red", "Blue", "Yellow"];`

Array n'est pas un type de donnée à proprement parler, c'est un "sous-type" (un cas particulier) du type Object.
```bash
typeof colors;
// "object"
```

### Résumé:

En Javascript, les types de données sont divisés en deux catégories : les types dits "primitifs" et les types "complexes" (non-primitifs) :

Les types de données primitifs (immutables) :
    Boolean
    String
    Number
    Null
    Undefined
Les autres (mutables) :
    Object
    Function


---


## JS Basics 05 - Les instructions conditionnelles


### Si...Sinon

Pour écrire des conditions en Javascript, tu peux utiliser la structure "`if...else`".

L'instruction `if` permet de vérifier une condition (précisée entre les parenthèses). Si la condition est évaluée comme vraie, le code est alors exécuté. Sinon, le code est ignoré.
```bash
if (condition) {
  // Do something if the condition is true
}
```

Nous pouvons ajouter une autre instruction, dans le cas où la condition est évaluée comme étant fausse.
```bash
else {
  // Do something if the condition is false
}
```

Voici un exemple concret :
```bash
const name = "Paul";

if (name === "Paul") {
  console.log("Welcome, Paul");
} else {
  console.log("Go away!");
}
```

Dans cet exemple, on créé d'abord une variable `name` et on lui attribue la valeur "`Paul`".

Ensuite, on compare la valeur assignée à cette variable avec la chaîne "`Paul`".
Si le résultat est vrai, alors on affiche `"Welcome, Paul "` sinon on affiche `"Go away!"`.

Attention, Javascript est sensible à la casse. Ce qui signifie que `"Paul"` n'est pas équivalent à `"paul"` !s


### Prompt

Pour rendre les exemples un peu plus interactifs, tu peux utiliser une fonction nommée `prompt`.

`prompt` est une fonction qui va afficher une boite de dialogue permettant à l'utilisateur d'entrer du texte.

`const userName = prompt("What's your name?");`


### Utiliser prompt avec des nombres

Lors de l'utilisation de `prompt`, ce que l'utilisateur va taper dans la fenêtre de l'invite sera considéré comme une chaîne de caractères.
Si tu veux travailler avec des nombres, tu dois convertir la chaîne de caractères en un nombre. Pour cela, tu peux utiliser la fonction `parseInt`.
```bash
const age = prompt("How old are you?");
console.log(typeof(age));
// String

const ageNumber = parseInt(age);
console.log(typeof(ageNumber));
// Number
```


### `Else if`

Parfois, on peut avoir plus d'une condition. Par exemple, imagine que tu souhaites permettre à plusieurs personnes de jouer avec ton programme d'avant.

Avec la structure `if...else` uniquement, cela va générer beaucoup d'instructions imbriquées les unes dans les autres.
Tu vas heureusement pouvoir gérer des "embranchements" pour traiter plus de cas avec `else if` !

Tu dois écrire `else if` après un `if` et avant un `else`, et tu dois utiliser une condition entre parenthèses.
```bash
else if (condition) {
  // ...
};

const user = prompt("What's your name?");

if(user === "Paul"){
	console.log("Hello, Paul!");
}
else if(user === "John"){
	console.log("Hello, John!");
}
else if(user === "Ringo"){
	console.log("Hello, Ringo!");
}
else{
	console.log("Sorry, not today...");
}
```

On stocke la saisie de l'utilisateur dans une variable appelée `user`.
Ensuite, on compare la valeur saisie avec `Paul` puis `John` pour voir si une d'entre elles correspond.

On peut avoir autant de `else if` que l'on veut.
Le dernier `else` correspondra toujours à tous les autres cas.


### Les valeurs "truthy" et "falsy"


Lorsque tu écris un bloc `if...else`, l'expression que tu écris entre parenthèses est évaluée et transformée en `booléen`.

Par exemple, l'expression `4 === 4` est évaluée comme ("transformée" en) `true`. Si on place cette dernière dans les parenthèses d'un `if`, le code sous condition sera exécuté.

Mais que se passe-t-il si tu mets autre chose qu'un `booléen` à l’intérieur d'une condition ?

Par exemple :
```bash
if (1) {
  console.log("What's going to happen here ? 🤷‍♀️");
}
```
En fait, cela dépend de comment est évaluée la valeur dans un contexte `booléen` (dans une condition) :

Certaines valeurs sont dites "truthy" : elle seront évaluées comme étant vraies (`true`).
D'autres sont "falsy" et seront évaluées comme étant fausses (`false`).

Les valeurs dites "falsy" :

`false`
`""`
`0`
`-0`
`null`
`undefined`
`NaN`

Toutes les autres valeurs sont "truthy" !

Exemple :
```bash
let myName = "";
if (myName) {
  console.log("Hello you!");
  // This will never be run because "empty string" is evaluated as false
} else {
  console.log("you don't have a name");
}
```
Ici, puisque la variable `myName` est une chaîne vide , la condition est évaluée comme `false`.


### Inversion logique

L'opérateur `!` permet d'inverser un `booléen`. Ainsi, `!false` est égal à `true` et `!true` est égal à `false`. Cet opérateur permet d'obtenir l'opposé d'une valeur.
Si on veut évaluer l'opposé logique d'une valeur, on peut utiliser le `!`.
Par exemple, `!true` vaut `false` et `!false` vaut `true`.
```bash
let myName = "";

if(myName === "Paul"){
	console.log("Welcome, Paul :)");
}
else if(!myName){
	console.log("myName is empty: change its value ;)");
}
else{
	console.log("Go Away!");
}
```

### ET / OU

Dans une condition, on peut aussi déterminer la véracité d'une combinaison logique de plusieurs expressions en utilisant les mots-clés `&&` ("and") et `||` ("or").

Exemple:
```bash
const userName = "Paul";
const password = "secret";

if(userName === "Paul" || userName === "Bob"){
	console.log("Welcome!");
}

if(userName === "Paul" && password === "secret"){
	console.log("Welcome!");
}
```
Dans ce code, on vérifie uniquement le nom de l'utilisateur dans le premier `if`. S'il est égal à `Paul` OU `Bob`, le code est exécuté.

Dans le deuxième `if`, on vérifie que le nom vaut `"Paul"` ET que le mot de passe vaut `"secret"`. Si les deux conditions sont remplies, le code est exécuté.

Lorsque `&&` est utilisé, si un des deux booléens vaut `false`, tout sera évalué comme `false`.
Lorsque `||` est utilisé, si un des deux booléens vaut `true`, tout sera évalué comme `true`.


### Portée (scope) / Contexte

En Javascript, dès que l'on écrit du code, le contexte est très important : on ne peut pas utiliser une variable déclarée à l'intérieur d'une condition en dehors de cette dernière.

Les accolades `{ }` définissent un contexte local.

Exemple :
```bash
const name = "Pierre";

if (name === "Pierre") {
  const city = "New York";

  if (city === "New York") {
    console.log("Welcome " + name + " in " + city);
  } else {
    console.log("Welcome " + name); 
  }
  // fonctionne correctement à l'intérieur du contexte de la condition
} else {
  console.log(name);
  // tu verras le nom de la personne

  console.log(city);
  // tu verras une error 'reference error: city is not defined'
}    
```

Par exemple, dans ce cas, la variable `city` sera disponible uniquement dans le contexte de la première condition `if` (à l'intérieur des accolades `{}`) et elle ne sera pas disponible dans le contexte du `else` (en dehors du contexte du `if`).

La variable `name` est disponible dans toute la condition car elle a été créée en dehors du contexte du `if`.

Si tu crées une variable à l'intérieur d'accolades `{}`, cette variable sera disponible uniquement à l'intérieur de ces accolades.

Sachant cela maintenant, nous devrions être capables de créer des conditions qui fonctionnent pour nos projets en tenant compte du contexte.


### Les ternaires

Tu peux simplifier l'écriture d'une condition en utilisant l'opérateur ternaire.
Cet opérateur utilise `?` et `:`, respectivement équivalents à `if` et `else`:
`name === "Bob" ? console.log("Hello, Bob") : console.log("Go Away!");`
Comme tu peux le voir, c'est une écriture plus courte. Elle peut paraître un peu étrange au début. Mais pense à `?` comme le point d’interrogation à la fin d'une question que tu souhaites poser au programme : est-ce que le nom vaut `Bob` ? Si oui, fais ci ! Sinon : fais ça.

Ne t'en fais pas si cela n'est pas encore totalement clair pour le moment, nous y reviendrons ultérieurement. Essaie tout de même de te rappeler à quoi ressemble cet opérateur ternaire pour le reconnaitre si tu le rencontres.

Une utilisation abusive ou non appropriée de l'opérateur ternaire peut rendre ton code moins lisible et compréhensible.
Assure-toi que son utilisation est justifiée et que cela n'impacte pas la lisibilité de ton code.

Rappelle toi que nous codons avant tout pour des être humains, et qu'il est important de penser à la personne qui lira ton code.


## Résumé

Les conditions sont indispensables en Javascript pour ajouter de la logique à nos programmes.

On peut utiliser la structure `if...else` pour écrire ces dernières.


---


## JS Basics 05bis - Les instructions conditionnelles - Variantes


### 🔀 Switch

On peut également utiliser la structure `switch...case` pour évaluer une condition. Voici un exemple :
```bash
let userCountry = prompt("Where are you from");

switch(userCountry){
	case "France":
		console.log("Bonjour");
		break;
	case "England":
		console.log("Hello");
		break;
	case "Germany":
		console.log("Hallo");
		break;
	case "Italy":
		console.log("Ciao");
		break;
	case "Spain":
		console.log("Hola");
		break;
	default:
		console.log("Hey there");
		break;
}
```

On vérifie le pays d'origine de l'utilisateur et, en fonction de ce dernier, on affiche un message spécifique. Dans les parenthèses du `switch`, on met la valeur à comparer (avec l'opérateur d'égalité stricte) avec différents `cas` (case) possibles.
N'oublie surtout pas de rajouter des `break;` pour marquer la fin du traitement de tes différents `cas`, sinon tu risques d'avoir des surprises (essaie de les retirer dans l'exemple précédent pour voir !).

Le mot clé `default` sert à spécifier quoi faire si aucun des cas n'est égal à la valeur testée.

`"switch"` peut être utilisé uniquement si on souhaite tester l'égalité d'une seule valeur avec plusieurs autres valeurs pré-définies. Cette structure peut permettre de gagner un peu en lisibilité, mais elle est moins puissante que `"if...else if...else"`.

En Javascript, on peut récupérer le jour courant en utilisant `new Date().getDay();`.


### ☝️Résumé

Tu peux utiliser un bloc `switch` quand tu as plusieurs cas dont on souhaite tester l'égalité avec une seule valeur.

L'opérateur ternaire `?`: permet de simplifier l'écriture des conditions `if...else`.


---


## JS Basics 06 - Les fonctions


### Créer une fonction

Pour déclarer une fonction, tu peux utiliser le mot clé `function` suivi du nom de la fonction.
```bash
function helloWorld (){
  console.log("Hello,");
  console.log("World!");
}
```

Pour appeler (exécuter/invoquer) la fonction, tu dois écrire son nom suivi par des parenthèses :
`helloWorld();`

![function](/images/2024-12-23.png "function")

Dans cet exemple, on a créé une fonction nommée `sayHello` qui accepte une donnée nommée `name` en paramètre.

Tu peux assigner une valeur à un paramètre entre les parenthèses quand tu appelles la fonction.
Tu dois différencier le paramètre (la variable `name`) et l'argument (la valeur `"Bob"`).

Tu es libre de donner le nom que tu souhaites au paramètre : `name`, `firstName` ou quelque chose d'autre.

Attention : Fais tout de même en sorte que ce nom soit suffisamment explicite pour que toi et les autres compreniez directement ce que représente la donnée.


### Paramètre par défaut

Tu peux définir des valeurs par défaut pour les paramètres de tes fonctions.

De cette façon, si aucun argument n'est donné à la fonction lors de son appel, une valeur par défaut sera utilisée. C'est un bon moyen de se protéger des erreurs.
```bash
function sayHello(name = "World") {
  console.log(`Hello, ${name}!`);
}

sayHello();
// Hello, World!

sayHello("Bob");
// Hello, Bob!
```


### Return

Tu viens de voir que les paramètres d'une fonction représentent ses entrées.
Mais une fonction peut également produire une sortie qu'on appelle valeur de retour.
```bash
function sum(a, b){
	return a + b;
}
console.log(sum(1, 2));
```
Dans ce code, on a créé une fonction pour calculer la somme de deux nombres.
Cette dernière accepte en paramètres les nombres à additionner : `a` et `b`.
La somme `a + b` est renvoyée à l'endroit où on a appelé la fonction grâce au mot-clé `return`.
Maintenant, que se passe-t-il exactement à la ligne `4` ? On appelle la fonction `sum` avec les arguments `1` et `2`.
Le code de la fonction est exécuté et renvoie la valeur `3` au code appelant à la ligne `4`.
Une fois exécutée, l'interpréteur Javascript va substituer l'expression correspondante à l'appel de la fonction par sa valeur de retour une fois exécutée.
À ce moment là, tout se passe donc comme si on avait `console.log(3)` au lieu de `console.log(sum(1, 2))`.

Il n'est pas obligatoire de toujours spécifier une valeur de retour.

Si rien n'est spécifié, la fonction renverra undefined par défaut.

L'utilisation du mot-clé `"return"` stoppe immédiatement l'exécution de la fonction pour revenir au code appelant. Les lignes de code après un return ne seront donc jamais prises en compte.
```bash
function sum(a, b){
  return a + b;
  console.log(a + b); // This code will never be run
}
sum(1, 2);
```

### Portée (scope) / Contexte

En Javascript, dès que l'on écrit du code, le contexte est très important.
Tu ne peux pas utiliser une variable déclarée dans une fonction en dehors de cette fonction.
```bash
function sayMyName() {
  const name = "Pierre"
  console.log(name)
  // works fine within the context of the function
}

function sayMyFullName() {
  const lastName = 'Gerard'
  console.log(lastName + ' ' + name)
  // wont work: name is declared in an other function
}

console.log(lastName + ' ' + name)
// wont work either: lastname and name only exists inside their functions
```
Par exemple, ici la variable `name` sera disponible uniquement dans le contexte de `sayMyName`, pas dans le contexte global.

La fonction s'exécutera donc dans son propre contexte et aura son propre espace mémoire.

Sachant tout cela, nous pouvons créer et appeler des fonctions dans nos projets, mais nous devons tenir compte du contexte.


### Fonctions fléchées `=>`

Les fonctions fléchées sont une autre façon de créer des fonctions. Voici à quoi ressemble la syntaxe :
```bash
const myFunction = (arg1, arg2) => {
  // Code goes here
};
```


---



## JS Basics 06bis - Fonctions d'ordre supérieur


### Fonction Anonyme ?

Nous pouvons créer des fonctions sans aucun label, on les appelle des fonctions anonymes.
```bash
function() {
  console.log("I'm an anonymous function");
}
```

Mais il n'est pas possible de l'utiliser de cette façon, car sans étiquette notre fonction est inutile et ne fonctionne pas..

Tu n'es pas obligé de te souvenir de cette partie, mais nous avons deux options pour cela :

Nous pourrions auto-invoquer la fonction:

Tu peux lancer instantanément une fonction comme cela :
```bash
(function() {
  console.log("I'm a self-invoking anonymous function");
})();
```

Pour information, on appelle ça une IIFE (Immediately Invoked Function Expression).

Une autre façon est de stocker votre fonction anonyme dans une variable:
```bash
const helloWorld = function() {
  console.log("Hello, world!");
};

helloWorld();
// Hello, World!
```


### Fonctions de rappel et fonctions d'ordre supérieur (Higher-Order Function)

Une fonction d'ordre supérieur est une fonction qui accepte une autre fonction en argument ou qui retourne elle-même une fonction.

Une fonction de rappel (callback) est une fonction passée en paramètre d'une autre fonction.

Regardons un exemple concret. Suppose que dans une application on ait trois fonctions : une pour dire `"Hello"`, une pour dire `"Welcome"` et une qui demande son nom à l'utilisateur (avec `prompt`):
 ```bash
 function sayHello(userName) {
  console.log(`Hello, ${userName}`);
}

function sayWelcome(userName) {
  console.log(`Welcome, ${userName}`);
}

function askUserName() {
  const name = prompt("Hey, what's your name?");
}
```
Imagine que tu veux exécuter des fois `sayWelcome` et d'autres fois `sayHello` après avoir demandé son nom à l'utilisateur.

Ce que nous pourrions faire : ajouter un `prompt` au début de `sayHello` et `sayWelcome`.
```bash
function sayHello() {
  const userName = prompt("Hey, what's your name?");
  console.log(`Hello, ${userName}`);
}

function sayWelcome() {
  const userName = prompt("Hey, what's your name?");
  console.log(`Welcome, ${userName}`);
}
```

Mais, ce n'est pas très "D.R.Y.", n'est ce pas ?

Une autre option serait d'accepter une fonction en paramètre pour la fonction `askUserName`. On qualifiera alors cette dernière de fonction d'ordre supérieur.
De cette manière, quand on appellera `askUserName`, on pourra donner soit `sayHello` soit sayWelcome en argument (en tant que fonction de rappel).

Concrètement, voilà ce que ça donne :
```bash
function sayHello(userName) {
  console.log(`Hello, ${userName}`);
}

function sayWelcome(userName) {
  console.log(`Welcome, ${userName}`);
}

function askUserName(callback) {
  const name = prompt("Hey, what's your name?");
  callback(name);
}

askUserName(sayWelcome);
askUserName(sayHello);
```

Puisque `askUserName` accepte maintenant une fonction en argument, nous pouvons aussi écrire des fonctions anonymes (qui n'ont pas de nom associé) directement en place de l'argument.
```bash
askUserName(function(name) {
  console.log(`Hey buddy, welcome ${name}`);
});
```

### Avez-vous dit "retourner une function" ?

Oui.
```bash
// Tableau initial
const people = ['JoHn', 'ChrISTiana', 'anThoNY', 'MARia', 'jaMeS', 'MIChaEl', 'jeNNIFeR'];

// Fonction pour corriger la casse d'un nom
function changeName(name) {
    if (typeof name !== "string") {
        throw new Error("Le paramètre doit être une chaîne de caractères.");
    }
    // Met la première lettre en majuscule et le reste en minuscules
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// Fonction pour appliquer une transformation à tous les noms du tableau
function changeAllNames(array, callback) {
    if (!Array.isArray(array)) {
        throw new Error("Le premier paramètre doit être un tableau.");
    }
    if (typeof callback !== "function") {
        throw new Error("Le second paramètre doit être une fonction.");
    }
    // Transforme tous les noms en utilisant la fonction de rappel (callback)
    return array.map(callback);
}

// Appel de la fonction changeAllNames avec changeName en rappel
const correctedNames = changeAllNames(people, changeName);

// Affichage du tableau transformé
console.log(correctedNames);
```
Explications:

1.	Fonction `changeName` :
	•	Cette fonction prend un `nom` en paramètre.
	•	Elle utilise `charAt(0).toUpperCase()` pour mettre la première lettre en majuscule.
	•	Le reste des lettres est mis en minuscules avec `slice(1).toLowerCase()`.

2.	Fonction `changeAllNames` :
	•	Elle vérifie que le premier paramètre est un tableau et que le second est une fonction.
	•	`Utilise array.map(callback)` pour appliquer la transformation sur chaque élément.

3.	Appel de `changeAllNames` :
	•	On lui passe le tableau people et la fonction changeName.


---


## JS Basics 07 - Les tableaux

### Objectifs

Créer des tableaux

Déterminer la longueur d'un tableau (le nombre d'éléments qu'il contient)

Lire et écrire des éléments d'un tableau

Utiliser des méthodes basiques pour manipuler les tableaux

### Un tableau est une structure de données utilisée pour regrouper plusieurs éléments en un seul endroit.

Imaginons que nous voulions créer une application qui livre des fruits.

Pour l'instant, sans tableau, nous devrions créer une variable pour chaque fruit.
```bash
const kiwi = "Kiwi";
const apple = "Apple";
const pineapple = "Pineapple";
// ...
```

Cela peut être très long, n'est-ce pas ?

Nous pourrions plutôt créer un tableau avec une liste de fruits :
`const fruits = ["Kiwi", "Apple", "Pineapple"];`

Pour créer un tableau, utilise les crochets `[]` et écris à l'intérieur les éléments que tu veux.
Les éléments doivent être séparés par une virgule.

Un tableau peut contenir tout type de données : nombre, booléen, chaîne de caractères, objet, fonction ou d'autres tableaux.
`const myArray = ["Hello", 123, true, ["Hey", "Ho"]];`


### Accéder à un élément du tableau

Pour accéder à un élément du tableau, tape le nom du tableau et la position de l'élément auquel tu veux accéder entre les crochets.

En JavaScript, la position (index) du premier élément est toujours 0.
```bash
const fruits = ["Kiwi", "Apple", "Pineapple"];

console.log(fruits[0]); // will print "Kiwi"

console.log(fruits[1]); // will print "Apple"

console.log(fruits[2]); // will print "Pineapple'
```

Tu peux également définir la valeur d'un élément spécifique dans un tableau:
```bash
fruits[0] = "Banana";
console.log(fruits[0]); // will print "Banana"
```

### Obtenir la longueur d'un tableau

Pour obtenir le nombre d'items du tableau, nous pouvons utiliser `array.length`.
```bash
const fruits = ["Kiwi", "Apple", "Pineapple"];
console.log(fruits.length); // will print 3
```

### Les méthodes des tableaux

Comme nous l'avons appris dans les cours précédents, un tableau est un type spécifique d'objet, et en tant qu'objet, les tableaux sont accompagnés d'un tas de méthodes.

Ces méthodes sont des fonctions que nous pouvons utiliser pour manipuler les tableaux.


### Ajouter un élément à un tableau

#### Push

Prends notre exemple précédent avec le tableau de fruits.

Imagine que nous voulions ajouter un nouveau fruit au tableau. Pour cela, nous utiliserions la méthode `push`.

Il suffit d'exécuter la méthode `push` et de donner le nouvel élément en argument :
```bash
const fruits = ["Kiwi", "Apple", "Pineapple"];
fruits.push("Banana");
console.log(fruits);
// ["Kiwi", "Apple", "Pineapple", "Banana"]
```

#### Unshift

Si tu veux ajouter un élément au début du tableau, utilise la méthode `unshift`.
```bash
const fruits = ["Kiwi", "Apple", "Pineapple"];
fruits.unshift('Strawberry');
console.log(fruits);
// ["Strawberry", "Kiwi", "Apple", "Pineapple"]
```

### Supprimer un élément du tableau

#### Pop

Pour supprimer le dernier élément d'un tableau, utilise la méthode `pop`.
```bash
fruits.pop();
console.log(fruits);
// [ "Kiwi", "Apple" ]
```

#### Shift

Pour supprimer le premier élément, utilise `shift`.
```bash
fruits.shift();
console.log(fruits);
// [ "Apple" ]
```

## Résumé

Un tableau est une liste de valeurs JavaScript regroupées en un seul endroit

Tu peux accéder aux éléments d'un tableau en utilisant les crochets et un nombre indiquant la position de l'élément auquel tu souhaites accéder

Attention, la numérotation des positions commence à 0 et non à 1 !

Les tableaux sont dotés de méthodes que nous pouvons utiliser pour les manipuler


---


## JS Basics 07bis - Les tableaux - Autres méthodes utiles

### Objectifs

Découvrir les méthodes des tableaux :

`includes` et `indexOf` pour déterminer l'existence ou l'emplacement d'une valeur dans un tableau.

`join` et `split` pour transformer un tableau en chaine de caractères et vice-versa.

`slice` pour extraire une partie d'un tableau.

`concat` et `splice` pour ajouter/supprimer des elements.

`reverse` et `sort` pour ré-ordonner les items.


### Includes

`includes` retourne `true` si l'argument correspond à un élément du tableau ou `false` sinon.
```bash
const fruits = ["Kiwi", "Apple", "Pineapple"];
console.log(fruits.includes("Kiwi")); // true
console.log(fruits.includes("Banana")); // false
```

### IndexOf

`indexOf` retournera la position (l'index) du premier élément dans le tableau qui correspond à l'argument. Cette fonction retourne `-1` si et seulement si aucun élément ne correspond.
```bash
const fruits2 = ["Kiwi", "Apple", "Pineapple", "Kiwi"];
//  							 0        1         2          3
console.log(fruits2.indexOf("Kiwi"));
// Will return 0 
```

### Join

`join` transformera un tableau en chaine de caractères. Tu peux spécifier quel caractère utiliser en tant que séparateur :
```bash
const fruits = ["Kiwi", "Apple", "Pineapple"];
const fruitsString = fruits.join();
console.log(fruitsString);
// Kiwi,Apple,Pineapple

const fruitsString2 = fruits.join("-");
console.log(fruitsString2);
// Kiwi-Apple-Pineapple

const fruitsString3 = fruits.join("*");
console.log(fruitsString3);
// Kiwi*Apple*Pineapple
```

### Split

C'est un peu l'opération inverse de `join`. `split` part d'une chaine de caractères pour former un tableau. On donne en argument le caractère permettant de séparer les éléments.
```bash
const fruitsString = "Kiwi,Apple,Pineapple"
const fruits = fruitsString.split(',');
console.log(fruits);
// [ 'Kiwi', 'Apple', 'Pineapple' ]
```

### Slice

La méthode `slice` peut être utilisée pour créer une copie d'un tableau ou pour obtenir un sous-tableau. Cette méthode accepte deux paramètres optionnels permettant de délimiter la partie du tableau que l'on souhaite extraire. Par exemple :
```bash
const myArray = ["hello", true, "world", 42];
console.log(myArray.slice());
console.log(myArray.slice(1));
console.log(myArray.slice(1, 3));
console.log(myArray.slice(-1));
```

### Splice

Attention à ne pas confondre avec la méthode `slice`. Et oui, à une lettre près, tu n'auras pas le même résultat !

Cette méthode peut être utilisée pour supprimer et/ou insérer de nouveaux éléments à une position définie dans un tableau.

Comme arguments splice prend, dans cet ordre :

    L'index de l'élément à supprimer ou à remplacer (obligatoire)
    Le nombre total d'élément(s) à supprimer ou remplacer (optionnel)
    Le nouvel élément à insérer (optionnel)
    Le deuxième nouvel élément à insérer après le premier (optionnel)
    Tu peux en fait mettre un nombre infini d'éléments à insérer dans le tableau en renseignant d'autres arguments.
```bash
let arr = [1, 2, 3, 4]
arr.splice(1)
console.log(arr);
arr = [1, 2, 3, 4];
arr.splice(2, 1)
console.log(arr);
arr = [1, 2, 3, 4];
arr.splice(1, 2)
console.log(arr);
arr = [1, 2, 3, 4];
arr.splice(1, 2, "two", "three")
console.log(arr);
```

### Concat

`concat` fusionnera deux tableaux en un seul :
```bash
const fruits1 = ["Apple", "Strawberry"];
const fruits2 = ["Banana", "Pineapple"];

const mySmoothie = fruits1.concat(fruits2);
console.log(mySmoothie);
```

### Reverse

`reverse` mettra les premiers éléments en dernier et les derniers en premier.
```bash
const myArray = [1, 2, 3];
myArray.reverse();
console.log(myArray);
```

### Sort

Si tu veux trier les éléments d'un tableau, tu peux utiliser la méthode `sort` :
```bash
const fruits2 = ["Kiwi", "Apple", "Pineapple", "Kiwi"];
console.log(fruits2.sort());
// ["Apple", "Kiwi", "Kiwi", "Pineapple"]
```

Avec des nombres, le résultat peut être un peu surprenant :
```bash
const numbers = [1, 20, 45, 2, 3, 5, 8];
console.log(numbers.sort());
// [1, 2, 20, 3, 45, 5, 8]
```

En effet, si tu appelle la méthode `sort` sans arguments, cette dernière va convertir en interne les éléments du tableau en chaine de caractère et faire un tri par ordre alphabétique. Si tu souhaites avec un tri dans l'ordre numérique, tu auras besoin de fournir un argument à `sort` : il s'agit d'une ``fonction de rappel` (`callback function`) qui indique comment les éléments doivent être ordonnés. Tu peux lire cette partie de la documentation pour plus d'informations.
```bash
const numbers = [1, 20, 45, 2, 3, 5, 8];
console.log(numbers.sort(function(a, b){
	return a - b;
}));

// [1, 2, 3, 5, 8, 20, 45]
```














































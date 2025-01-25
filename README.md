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


---


## JS Basics 08 - Les boucles


### un des grands principes en développement est de ne pas se répéter (en anglais "D.R.Y.", comme Don't Repeat Yourself).

Pour éviter d'écrire le même code encore et encore, nous pouvons utiliser quelque chose appelé boucle.

### Qu'est-ce qu'une boucle ?

Une boucle est un moyen d'exécuter le même code plusieurs fois jusqu'à ce qu'une certaine condition soit remplie.

Par exemple, imagine une voiture sur une piste de course, la voiture doit faire x fois le tour de la piste avant d'atteindre la fin du parcours.

Exemple d'une boucle:
```bash
for (let i = 0; i < 5; i++) {
  console.log("Turn number " + i);
}

/*
Turn number 0
Turn number 1
Turn number 2
Turn number 3
Turn number 4
*/
```

### La boucle "for"

![function](/images/boucle.png "function")

`for` nécessite 3 paramètres pour fonctionner:

    Le premier est une variable appelée itérateur, que nous devons créer et fixer à une valeur (ici nous voulons partir de zéro). Cette variable sera notre "compteur".
    La seconde est la condition que nous voulons vérifier avant chaque tour de boucle (itération).
    Et la troisième est l'incrément. L'incrément sera exécuté à la fin de chaque boucle et, généralement, nous ajoutons un à l'itérateur.

Voici un exemple:
```bash
for (let i = 0; i < 5; i++) {
  console.log("Turn number " + i);
}
```
Dans cet exemple, nous créons d'abord la variable `i` qui est fixée à la valeur zero.
`let i = 0`

Par convention, nous appelons souvent cette variable "i" (signifie itérateur ou index)

Ensuite, nous voulons que les instructions dans la boucle soient répétées tant qu'une certaine condition est vérifiée. Dans ce cas, nous voulons faire une boucle jusqu'à ce que la valeur de "i" atteigne 5 (donc cinq fois).
`i < 5`

Pour chaque tour de boucle, nous augmentons la valeur de `"i"` de un (afin que la boucle s'arrête à un moment donné).
`i++`

De cette façon, la boucle partira de `0`, et vérifiera à chaque tour si `"i"` est inférieur à `5`.

Si `Oui` ⇒ Elle exécutera le code et augmentera la valeur de un. Et ensuite, on recommence.

Si `Non` ⇒ la boucle s'arrête.


### Parcourir un tableau

Tu peux utiliser une boucle pour parcourir un tableau :
```bash
const fruits = ["Apple", "Peach", "Banana"];

for (let i = 0; i < fruits.length; i ++) {
  console.log(fruits[i]);
}
```
Ici, tu peux voir que nous avons un tableau qui contient 3 éléments.

Nous créons une boucle `for`, dont l'itérateur va de `0` à `fruits.length` `- 1` (soit 2, il faut bien comprendre que c'est l'opérateur < qui est utilisé ici, donc `i < fruits.length` retourne `false` quand `i` atteint `3` et la boucle s'arrête).

Au premier tour, elle affichera fruits[0], puis fruits[1] et enfin fruits[2].


### Les boucles "while" et "do...while"

Nous avons vu la boucle `for`. Il existe d'autres façons de créer des boucles.

### image
While

Pour utiliser une boucle `while`, tu dois créer l'itérateur avant la déclaration de la boucle.

Passe la condition que tu veux remplir (c'est à dire `i < 5`) dans les parenthèses `()`.

Avec une boucle `while et do...while`, il faut faire attention de ne pas oublier d'incrémenter (augmenter) la valeur de `i`.
Sinon, cela pourrait provoquer une `boucle infinie`.
Si `i` n'augmente pas, il n'atteint jamais `5`, donc la boucle continue et ton ordinateur peut planter.
```bash
let i = 0; 

while (i < 5) {
  console.log(`turn number ${i}`);
  i++;
}
```

### Do...While

`do...while` est similaire à `while` mais l'action est exécutée avant de vérifier la condition (la boucle fait donc toujours au moins un tour).
```bash
let i = 0; 

do{
	console.log(`turn number ${i}`);
	i++;
}while (i < 5);
```

### Que faire en cas de boucle infinie ?

Si tu as lancé une `boucle infinie` par erreur, ferme immédiatement l'onglet de ton navigateur pour y mettre fin.

Tu peux également utiliser le gestionnaire de tâches chrome pour finir le processus ou utiliser le débogueur du navigateur.


### Portée (scope) / Contexte

En Javascript, dès que l'on écrit du code, le contexte est très important : on ne peut pas utiliser une variable déclarée à l'intérieur d'une boucle en dehors de cette dernière.

Les accolades `{ }` définissent un contexte local.

Exemple 1 :
```bash
let sum = 0;

for (let i = 0; i < 10; i++) {
  const name = "Pierre";
  console.log(name + " saw " + sum + " StarWars movies.");
  sum++;
  // fonctionne correctement dans le contexte de la boucle
}

console.log(sum);
// tu verras la valeur de sum
   
console.log(name);
// tu verras une erreur 'reference error: name is not defined'
```
Par exemple, dans ce cas, la variable `name` sera disponible uniquement dans le contexte de la boucle (à l'intérieur des accolades `{}`) et elle ne sera pas disponible en dehors.

La variable `sum` est disponible dans toute la boucle et en dehors, car elle a été créée en dehors du contexte de la boucle.

Si tu crées une variable à l'intérieur d'accolades `{}`, cette variable sera disponible uniquement à l'intérieur de ces accolades.

Sachant cela maintenant, nous devrions être capables de créer des boucles qui fonctionnent pour nos projets en tenant compte du contexte.


### Résumé

On peut utiliser des boucles en Javascript pour répéter l'exécution d'un bloc de code plusieurs fois

Il y a différentes boucles, `"for"` est la plus utilisée mais il y a aussi `"while"` et `"do...while"`.

Faire des erreurs dans tes boucles peut entraîner une `boucle infinie` qui peut faire planter ton programme.


---


## JS Basics 08bis - Approfondissement des boucles


### Boucle imbriquée

Si tu as le cas où tu as un tableau à l'intérieur d'un autre tableau, nous pourrions avoir besoin d'une boucle imbriquée pour manipuler les éléments à l'intérieur de celui-ci.

Voyons un exemple :
`const animals = [["😺","🦁"], ["🐭","🐹"],["🐝","🐛"], ["🦅","🐦"]];`

Dans cet exemple, si on veut imprimer les animaux un par un dans la console, une seule boucle ne sera pas suffisante :
```bash
const animals = [["😺","🦁"], ["🐭","🐹"],["🐝","🐛"], ["🦅","🐦"]];

for(let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}
```

Comme tu peux le voir dans cet exemple, nous ne voyons que les animaux regroupés deux par deux.

Si nous voulons accéder à un élément d'un des sous-tableau, par exemple, la première souris `(🐭)`, nous devons écrire `animals[1][0]`.

Nous devons donc avoir deux nombres sur lesquels itérer afin d'indiquer la position de l'élément souhaité :
```bash
for (let i = 0; i < animals.length; i++) {
  for (let j = 0; j < animals[i].length; j++) {
    console.log(animals[i][j]);
  }
}
```

On a ici deux noms différents pour les deux itérateurs : `i` et `j`. `i` sert à accéder aux sous-tableaux dans le tableau principal et `j` sert à accéder aux animaux dans ces sous-tableaux.
```bash
for (let i = 0; i < animals.length; i++) {

  for (let j = 0; j < animals[i].length; j++) {

    console.log(animals[i][j]);

  }

}
```
Comme tu peux le voir, la première boucle va exécuter le code de la deuxième boucle, jusqu'à ce que la deuxième boucle passe par tous les éléments (dans notre cas 2).
Elle va donc exécuter à 4 fois deux `console.log`.

Ce concept est un peu plus avancé, donc ne te sens pas mal si tu ne comprends pas 100% des boucles imbriquées, ce genre de concept peut prendre un certain temps avant d'être totalement assimilé.


### For...in


Pour faire une boucle à travers un objet, tu peux utiliser la boucle `for...in`.

Dans ce cas, tu écriras une boucle `for` normale, mais au lieu d'ajouter tes conditions entre les parenthèses, tu mettras `let <property> in <object>`.
```bash
const apple = {
  name: "Apple",
  color: "Green",
  shape: "Round",
}

for (let key in apple) {
  console.log(`${key}: ${apple[key]}`);
}
```

La boucle fera autant de tours qu'il y a de propriétés énumérables dans l'objet. A chaque itération la variable définie avant le mot-clé `in` contiendra un nom de propriété différent, que nous pouvons utiliser pour accéder à la valeur associée dans l'objet.


---


## JS Basics 09 - Les objets


### Que sont les objets ?

Les objets en Javascript sont comme les objets qui t'entourent.

Ce sont des sortes de conteneurs, qui contiennent des propriétés qui caractérisent l'objet.

Par exemple, prenons une pomme.

Une pomme a une couleur verte ("#00FF00"), un diamètre de 10cm, etc, etc.

Essayons de décrire une pomme en JavaScript !
```bash
const apple = {
  color: "#00FF00", 
  diameter: 10,
  isEaten: false,
  vitamins: ["A", "B1", "B2", "B6", "C"], 
  variety: { code: 576, name: "Granny Smith" },
  gather: function () {
    return "Here's one apple!";
  }
};
```

Les objets sont créés à l'aide d'accolades (🇬🇧 curly braces) : `{}`.

A l'intérieur de l'objet, on peut créer des clés (ex : color) et associer à ces clés des valeurs en séparant clé et valeur par `:`.

Chaque paire clé/valeur doit être séparée par une virgule.

La valeur que tu mets peut être n'importe quel type de données JavaScript.

Par exemple, comme une pomme peut être source de plusieurs vitamines, on a utilisé un tableau pour les représenter.

Comme tu peux le voir, un objet peut être imbriqué dans autre objet ! Ici, notre pomme appartient à une variété représentée par un objet.

Nous avons aussi donné à la pomme une fonction (appelée méthode) pour cueillir le fruit !


### Accéder aux propriétés d'un objet

Nous pouvons accéder à une propriété de l'objet en utilisant `.` ou `[]`.

Par exemple, si nous voulons accéder a la propriété `color` de l'objet `apple`, il suffit d'écrire `apple.color` ou `apple['color']`.
```bash
apple.color;
// "#00FF00"
apple['color'];
// "#00FF00"
```

```bash
const apple = {
    color: "#00FF00", 
    diameter: 10,
    isEaten: false,
    vitamins: ["A","B1", "B2", "B6", "C"], 
    variety: {code: 576, name: "Granny Smith"},
    gather: function(){
        return "Here's one apple!";
    }
}
console.log(apple.color);
console.log(apple['diameter']);
console.log(apple.vitamins[2]);
console.log(apple.variety.name);
console.log(apple.gather());
```

La plupart du temps, tu utiliseras un point pour accéder à une propriété (`apple.color`), mais les crochets peuvent aussi être très utiles par exemple dans le cas où tu souhaites utiliser une variable pour accéder à une valeur.
```bash
const selectedProperty = prompt('Tape la propriété que tu veux afficher') ;
console.log(apple[selectedProperty]) ;
```

### Ajouter ou modifier la propriété d'un objet

Pour ajouter une propriété à un objet, il suffit de la définir comme ceci :
`apple.growsOn = "Tree" ;`

De même, pour donner une autre valeur à la propriété d'un objet, il suffit d'utiliser le symbole égal `=`.
`apple.color = "Red" ;`

```bash
const apple = {
	color: "#00FF00", 
  diameter: 10,
  isEaten: false,
}

apple.growsOn = "Tree";
apple.color = "Red";
console.log(apple);
```

### Supprimer une propriété

On peut utiliser `delete` pour supprimer une propriété.
`delete apple.name;`

```bash
const apple = {
	color: "#00FF00", 
  diameter: 10,
  isEaten: false
}

delete apple.color;
console.log(apple);
```

### Combiner des tableaux et des objets

Et si nous pouvions combiner des tableaux avec des objets?

Par exemple, nous avons beaucoup de fruits différents, pas seulement des pommes.
Et si nous voulions décrire tous les fruits?

Et bien, nous pourrions mettre nos objets dans un tableau !
```bash
const fruits = [
  { name: "apple", color: "green" },
  { name: "Pineapple", color:"yellow" },
  { name: "Orange", color:"orange" },
  { name: "Cherry", color:"red" },
];
```


### What is `"this"` ?

Le mot-clé `this` se réfère à l'objet courant sur lequel la méthode est appelée. Plus précisément, `this` désigne ce qui précède le `.` lors de l'appel d'une méthode.

Voyons un exemple concret :
```bash
const person1 = {
  name: "Bob", 
  age: 30, 
  sayHello: function () {
    console.log(`Hi, I'm ${this.name}`);
  }
};

person1.sayHello();
// Puisque "this" à la line 5 se réfère à ce qui précède le "." à la line 9 (person1),
// "this.name" vaudra "Bob", donc la méthode affichera "Hi, I'm Bob"
```



Prends le temps de regarder le code et essaie de le comprendre.

Ce qui se passe dans ce code, c'est que notre `pomme` a un état, `isEaten` qui est `false` par défaut.

Lorsqu'on invoque la méthode `eat` on vérifie si le fruit a déjà été mangé, si oui, alors on affiche que le fruit a déjà été mangé, si non, on change la valeur de `isEaten` en `true`.

Ne t'inquiète pas si cela n'est pas clair à 100% pour le moment, nous en parlerons plus tard.


### En JavaScript, tous les objets sont uniques

Les opérateurs d'égalité appliqués aux objets ne comparent pas ce qui se trouve à l'intérieur des objets, mais plutôt les endroits en mémoire où les objets sont stockés.

Si tu prends deux objets, avec exactement les mêmes paires `clé/valeur`, ils ne seront jamais considérés comme `"égaux"` avec les opérateurs `===`, `!==`, `==` ou `!=`.
```bash
console.log({} === {});
// false
console.log({ name: "Billy", species:"Cat" } === { name: "Billy", species:"Cat" });
// false
console.log({ name: "Billy", species:"Cat" } == { name: "Billy", species:"Cat" });
// false
```

A chaque fois que nous écrivons `{}` pour décrire un objet, l'interpréteur Javascript ira créer un nouvel objet en `mémoire**`, c'est pourquoi on peut dire qu'en JS, chaque objet est `"unique"`.


### Résumé

Un objet en JavaScript est un conteneur qui peut avoir un ensemble de paires `"clé/valeur"`

Tu peux accéder à la propriété d'un objet en utilisant le point `.` ou les crochets `[]`.

Tous les objets sont uniques, même s'ils ont les mêmes propriétés et méthodes

Tu peux créer ou modifier une propriété en lui attribuant le symbole égal `=`.
    `ex: apple.color = "red"`


---


# JS Intermédiaire



## JS Intermédiaire 01.1 - Introduction à la manipulation du DOM


###  Qu'est-ce que le DOM?

![function](/images/dom.png "function")

DOM signifie Document Object Model. C'est une interface utilisée pour manipuler le contenu d'une page HTML.
Lorsque ton navigateur analyse ton code HTML et CSS, il crée également une représentation du document sous la forme d'un objet Javascript.
Nous utiliserons ce modèle pour manipuler notre page web.


### 📰 L'Objet Document?

Pour accéder à cet objet document, nous pouvons utiliser l'objet `document` fourni automatiquement par notre navigateur.

Va dans ton navigateur web, ouvre une page Google et la console et regardons ce fameux "Document Object".
`console.log(document);`

Tu devrais voir `#document` dans la console. C'est notre objet document.

![function](/images/doc.png "function")


### 🎯 Sélectionner et modifier des éléments HTML

Voyons comment sélectionner un élément du DOM. L'objet document est fourni avec une méthode appelée `querySelector`.
La méthode `querySelector` fonctionne de la même manière qu'un sélecteur CSS. Entre parenthèses, il suffit d'écrire le sélecteur souhaité.
```bash
const someDivClass = document.querySelector('.my-div');
const someImg = document.querySelector('.my-img');
const someDivId = document.querySelector('#another-div');
const someH1 = document.querySelector('.my-div h1');
```
Maintenant, nous avons accès à toutes les propriétés et méthodes pour cet élément spécifique.

### InnerHTML

La méthode innerHTML est utilisée pour modifier le contenu d'une balise HTML.
```bash
const title = document.querySelector('.title');
title.innerHTML = "Hello, Bob!";
```
Dans cet exemple, nous sélectionnons le h1 avec la classe title, et nous changeons le contenu par Hello, Bob !

### D'autres méthodes de sélection des éléments

Tu peux également utiliser `document.getElementById` ou `document.getElementByTagName` pour sélectionner des éléments HTML, ils sont également pris en charge par les anciens navigateurs tels qu'Internet Explorer 6 - 7 (ce qui n'est pas le cas de querySelector).
```bash
const title = document.getElementById('title');
const heading = document.getElementsByTagName('h1');
```

### Sélectionner plusieurs éléments qui ont la même classe/la même balise

Si tu utilises `document.querySelector`, s'il y a plus d'un élément avec le même sélecteur dans le document (ex multiple `h1`), celui sélectionné par défaut sera la première occurrence.

Si tu veux obtenir une liste avec plusieurs éléments, tu peux utiliser `document.querySelectorAll`.

La méthode collectera tous les éléments qui correspondent à ton sélecteur.
`const allHeadings = document.querySelectorAll('h1');`

La valeur retournée est de type HTMLCollection. C'est une structure de données qui ressemble aux tableaux. Tu peux utiliser les `[]` pour accéder à un élément par exemple : `allHeadings[0]`. Mais d'autres fonctionnalités des tableaux ne sont pas disponibles sur une `HTMLCollection`, comme les les méthodes `push` ou `pop`. Quand tu essaies de travailler sur une collection, vérifie dans la documentation que ce que tu veux faire existe bien.


## JS Intermédiaire 01.2 - Manipulation du DOM - Créer des éléments

### Créer un nouvel élément HTML

Maintenant que tu sais comment obtenir un élément. Voyons comment nous pouvons créer un nouvel élément!

Pour créer un élément, utilise la méthode `createElement` :
`const newCatImage = document.createElement('img');`

Dans ce cas, parce que nous voulons créer une image, nous devons donner une source à cette nouvelle image (et un texte alternatif pour des questions d'accessibilité):
```bash
newCatImage.src = "https://placecats.com/408/287";
newCatImage.alt = "chat trop mignon";
```

Enfin, pour l'ajouter au `DOM`, nous pouvons utiliser la méthode `appendChild`.
La méthode `appendChild` va ajouter l'élément passé à la fin de l'élément sur lequel tu utilises la méthode.

Dans cet exemple, ceci ajoutera `newCatImage` à la fin de `document.body`:
`document.body.appendChild(newCatImage);`

Cette méthode est également disponible sur d'autres noeuds HTML, par exemple, tu peux l'utiliser pour ajouter un élément à une `<div>`.
```bash
const myDiv = document.querySelector('.myDiv');
myDiv.appendChild(myElement);
```

### Changer la position d'un Élément du DOM

Pour changer la position d'un élément, utilise `appendChild`.
Passe l'élément que tu veux déplacer comme paramètre; cela ne créera pas de copie mais déplacera l'élément.
`newDiv.appendChild(newCatImage);`


### Supprimer un Élément du DOM

Tu peux supprimer un élément du DOM en utilisant la propriété `remove`.
`myElement.remove();`


### Changer le style des éléments

Il est possible de changer le style d'un élément HTML en utilisant la propriété `style`.
Le nom de la propriété doit être écrit en utilisant le camel case (nous ne pouvons pas utiliser de - lors du nommage en Javascript).
Exemple:
```bash
someDiv.style.backgroundColor = "lightblue";
someText.style.fontSize = "20px";
```

### Ajouter/Supprimer une classe à un élément

Il est aussi possible d'ajouter/supprimer une classe sur un élément.
```bash
element.classList.add('myClass');
element.classList.remove('myClass');
```
Note que, dans ce cas, comme la nature de l'élément est spécifiée (classList), nous n'avons pas besoin d'utiliser le `.` avant le nom de la classe.


## JS Intermédiaire 01.3 - Manipulation du DOM - Gestion des événements

### Gestionnaires d'événements

Maintenant que tu sais comment sélectionner un élément, modifier une propriété et créer des éléments, il est temps d'ajouter un peu d'interactivité !

Pour cela, nous pouvons utiliser des gestionnaires d'événements.

Pour la gestion des clics, tu peux modifier la propriété `onclick` en y affectant une fonction.
```bash
someDiv.onclick = function () {
  someDiv.style.backgroundColor = "red";
};
```

### AddEventListener

Nous pouvons également utiliser une méthode appelée `addEventListener`.

`addEventListener` est une méthode qui accepte comme premier paramètre le type d'événement, et le second est une fonction de rappel (callback function).
```bash
someDiv.addEventListener('click', function () {
  someDiv.style.backgroundColor = "red";
});
```
`addEventListener` peut être utilisé pour écouter un grand nombre d'événements différents, tels que:

    click
    mousedown
    mouseup
    mousemove
    mouseover
    mouseleave
    ...


### Travailler avec un <form>

Voyons comment nous pouvons obtenir des informations à partir d'éléments d'un formulaire.
Nous pouvons ajouter une fonction qui sera exécutée lorsqu'un formulaire est envoyé, en utilisant la propriété `onsubmit` sur l'élément `form`.
```bash
const form = document.querySelector("#form");

form.onsubmit = function () {
  console.log("Hello world!");
};
```
Le problème avec cette approche est que lorsque l'on appelle `onsubmit`, la page se rafraîchit (un comportement par défaut des navigateurs).

Pour empêcher la page de se rafraîchir, nous pouvons utiliser une méthode que nous obtenons dans l'objet `event` appelée `preventDefault`.

`preventDefault` empêchera la page de se recharger.

```bash
const form = document.querySelector("#form");

form.onsubmit = function (event) {
  event.preventDefault();
  console.log("Hello, world!");
};
```

De plus, nous pourrions obtenir la valeur de l'`input` afin de pouvoir afficher le nom que l'utilisateur a tapé.
```bash
const form = document.querySelector("#form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");

form.onsubmit = function (event) {
  event.preventDefault();
  console.log(`Hello, ${firstName.value} ${lastName.value}`);
};
```

### Changer une classe

L'utilisation de la méthode `classList.toggle` sur un élément ajoutera la classe si la classe n'est pas là, si la classe est déjà présente alors elle la supprimera.
C'est utile, par exemple, dans le cas où tu veux créer un menu déroulant. Lorsque l'utilisateur clique dessus, cela supprime ou ajoute la classe `visible`.


### Obtenir des informations sur l'événement

Comme tu l'as vu tout à l'heure, la fonction de rappel que tu donnes à un addEventListener peut accepter un paramètre; ce paramètre est l'objet `event`.

L'objet `event` contient beaucoup de propriétés et de méthodes concernant l'événement qui vient de se produire.
```bash
const title = document.querySelector(".title");

title.addEventListener("click", function (event) {
  console.log(event);
  title.style.color = "red";
});

document.body.addEventListener("mousemove", function (event) {
  console.log(event);
});
```
Ouvre cette page, Ouvre la console de ton navigateur et déplace ta souris sur l'écran.

Tu devrais voir l'objet `event`.

Si tu cliques sur le bouton, tu devrais voir toutes les différentes propriétés attachées à cet objet.

Par exemple, nous avons accès à la position de la souris sur l'écran avec `clientX` et `clientY`.


### ☝️ Résumé

Le DOM ou Document Object Model est une interface fournie par le navigateur qui nous donne accès à une représentation objet du document HTML

Les éléments du DOM sont appelés des noeuds

Le DOM nous donne accès à un grand nombre de propriétés et de méthodes que nous pouvons utiliser pour modifier les propriétés des éléments

Nous pouvons utiliser `addEventListener` pour `écouter` les événements se produisant sur un certain élément

Nous devons fournir une fonction de callback à `addEventListener`, cette fonction de callback accepte un paramètre `event` qui donne accès à un objet avec des méthodes et des propriétés utiles sur l'événement en cours.


## JS Intermédiaire 02 - Tableaux : méthodes fonctionnelles

### Map

Imagine un tableau de nombres pour lequel tu souhaiterais multiplier tous les éléments par `2`, tout en gardant les nombres originaux. Pour le moment, tu sais le faire comme ceci :
```bash
const numbers = [1, 2, 5, 7];
const doubles = [];

for (let i = 0; i < numbers.length; i++) {
  const currentNumber = numbers[i];
  doubles.push(currentNumber * 2);
}

console.log(doubles); // [2, 4, 10, 14]
```
Ca fonctionne, mais le fait de devoir écrire une boucle `for`, faire évoluer un index et pousser manuellement les éléments dans un tableau est un peu lourd. Heureusement, il y a un meilleur moyen !

`map` est une méthode qu'on peut utiliser pour créer un nouveau tableau en allant transformer chaque élément grâce à une fonction de rappel (`callback`).
```bash
const numbers = [1, 2, 5, 7];

const doubles = numbers.map(function (currentNumber) {
  return currentNumber * 2;
});

console.log(doubles); // [2, 4, 10, 14]
```
`map` retourne un nouveau tableau qui a exactement la même taille que le tableau original, mais où les éléments auront été transformés. La fonction de rappel donnée en argument de `map` est appelée avec chaque élément du tableau original l'un après l'autre et la valeur de retour de ce callback sera la valeur de l'élément dans le nouveau tableau.

### Map avec fonction fléchée

Tu peux utiliser une fonction fléchée lorsque tu déclares ta fonction de rappel, voyons un exemple :
```bash
const numbers = [1, 56, 35, 23, 45];

const halfNumbers = numbers.map(number => number / 2);

console.log(halfNumbers);
```

### ForEach

Map n'est pas la seule méthode que tu peux utiliser sur les tableaux, une autre méthode utile est `forEach`.
Comme son nom l'indique, `forEach` effectuera une action pour chaque élément du tableau.
```bash
const numbers = [1, 2, 5, 7];
numbers.forEach((num) => console.log(num * 2));

// 2
// 4
// 10
// 14
```

Mais attends... C'est quoi la différence avec `map` ?!

`map` va générer un nouveau tableau. `forEach` va juste faire une action pour chaque élément du tableau.
```bash
let sentences = animals.forEach(
  (animal, index) => `${animal.name} the ${animal.species}, the number ${index}`
);

console.log(sentences); // undefined
```
Ici nous avons fait le même code que celui que nous avons utilisé pour `map` mais nous avons remplacé `map` par `forEach`.

### Filter

La méthode `filter` crée un nouveau tableau avec seulement les éléments qui vérifient une condition donnée.

Ex : Nous voulons un nouveau tableau avec seulement les nombres qui sont supérieurs à `5`
```bash
const myArray = [3, 2, 40, 15, 20];
const greaterThanFive = myArray.filter(number => number > 5);
console.log(greaterThanFive);
// [40, 15, 20]
```
Si et seulement si la valeur de retour du callback est `true`, l'élément sera copié dans le nouveau tableau.


## JS Intermédiaire 02bis -Tableaux : d'autres méthodes fonctionnelles

### Every

La méthode `every` vérifie si tous les éléments d'un tableau répondent à une condition. Le résultat de la méthode `every` est un booléen.

Ex : Nous voulons tester si tous les éléments sont supérieurs à 10 :
```bash
const myArray = [11, 34, 54, 32, 54];
console.log(myArray.every(element => element > 10));
// true 
```

### Some

`some` est très similaire à `every`, excepté qu'il suffit d'un élément du tableau vérifiant la condition pour que cette méthode renvoie `true`.

Ex : Nous voulons tester si au moins un des éléments est supérieur à `30` :
```bash
const myArray = [11, 34, 54, 32, 54];
console.log(myArray.some(element => element > 30)); // true 
```

### Reduce

La méthode `reduce` réduira le tableau à une seule valeur.

Ex : Nous avons un tableau de nombres et nous voulons connaître la somme de tous les nombres
```bash
const myArray = [13, 200, 404, 430, 10];
console.log(myArray.reduce((acc, currentValue) => acc + currentValue));
// 1057
```
Le premier argument donné à la méthode `reduce` est une fonction de rappel qui sera exécutée pour tous les elements du tableau (par défaut à partir du 2ème).
Cette fonction sera rappelée par `reduce` avec les arguments suivants :

  `L'accumulateur` : c'est le résultat de toutes les opérations précédentes. Dans notre cas, `l'accumulateur` commence avec la valeur du premier élément dans le tableau.
  La valeur de l'element actuellement parcouru dans le tableau, qui sera égale à `200` au premier tour de la boucle, puis `404`, puis `430`, et ainsi de suite...

Cette fonction de rappel retourne la valeur de l'accumulateur pour l'itération suivante.
La méthode `reduce` quand à elle retournera la valeur finale de l'accumulateur une fois les éléments parcourus.

Voyons ce qui se passe en détail :
```bash
/*
  Premier tour : acc = 13, currentValue = 200. acc + currentValue = 213. L'accumulateur est maintenant à 213. 
  Deuxième tour : acc : 213, currentValue = 404. acc + currentValue = 617. L'accumulateur est maintenant à 617.
  Troisième tour : acc : 617, currentValue = 430. acc + currentValue = 1047. L'accumulateur est maintenant à 1047.
  Quatrième tour : acc : 1047, currentValue = 10. acc + currentValue = 1057. L'accumulateur est maintenant à 1057.

  Renverra le résultat final : 1057. 
*/
```
Cette méthode peut être un peu difficile à comprendre au début. Ne t'inquiète pas et laisse toi le temps de la pratiquer.

### Préciser une valeur de départ

Tu peux spécifier une valeur départ comme deuxième argument de la méthode `reduce`. Par exemple, si je veux que mon accumulateur commence à `100` :
```bash
const myArray = [13, 200, 404, 430, 10];
console.log(myArray.reduce((acc, currentValue) => acc + currentValue, 100));
// 1157
```

### ☝️ En résumé

Les tableaux ont de nombreuses méthodes que tu peux utiliser afin de les manipuler


## JS Intermédiaire 03 - Affectation par décomposition

## 🪓 Décomposer pour mieux régner

### Objets

Des fois, il peut être pratique de déclarer des variables pointant une propriété d'un objet, comme ceci :
```bash
const product = { name: "socks", price: 5, color: "red" };
const name = product.name;
const price = product.price;
const color = product.color;

console.log(`Those ${color} ${name} cost ${price} euros`);
```
La `décomposition` permet de raccourcir ce code :
```bash
const product = { name: "socks", price: 5, color: "red" };
const { name, price, color } = product;

console.log(`Those ${color} ${name} cost ${price} euros`);
```
Ici, on déclare des `variables` avec le même nom que les `clés de l'objet` sur lequel on vient extraire les informations.


### Tableaux

Ce code est bien trop verbeux :
```bash
const animals = ["Hubert", "Rosemary", "Paul"];
const hamster = animals[0]; 
const kiwi = animals[1]; 
const guineaFowl = animals[2]; 

console.log(hamster); // "Hubert"
console.log(kiwi); // "Rosemary"
console.log(guineaFowl); // "Paul"
```
Heureusement, la `décomposition` fonctionne également avec les `tableaux` ! Seule la syntaxe change :
```bash
const animals = ["Hubert", "Rosemary", "Paul"];
const [hamster, kiwi, guineaFowl] = animals;

console.log(hamster); // "Hubert"
console.log(kiwi); // "Rosemary"
console.log(guineaFowl); // "Paul"
```
La `déstructuration` de tableau crée automatiquement des `variables` qui correspondent à un ou plusieurs `éléments` d'un `tableau`.
Dans cet exemple, tu peux voir que nous pouvons attribuer des `variables` (`labels`) spécifiques aux `valeurs` contenues dans les `tableaux`. le premier `label` entre les crochets désignera le premier `élément` du tableau, le deuxième désignera le second `élément` et ainsi de suite.

### ☮️ syntaxe "`rest`"

### Objets

Un exemple vaut plus que 1000 mots:
```bash
const product = { name: "socks", price: 5, color: "red" };
const { name, ...otherProperties } = product;

console.log(name);
console.log(otherProperties)
```
Comme tu peux le voir, l'opérateur `...` utilisé juste avant l'accolade fermante de la décomposition permet de désigner le reste des propriétés de l'objet.
Autrement dit, le nom de variable suivant les `...` référencera un nouvel objet contenant les propriétés qui n'ont pas été citées dans les accolades de la décomposition.

### Tableaux

L'opérateur "`rest`" (`...`) peut aussi symboliser ce qu'il reste d'un `tableau`. Par exemple, nous pourrions créer deux `variables` et ensuite une troisième qui contiendrait le reste du `tableau` :
```bash
const animals = ["Hubert", "Rosemary", "Paul", "Pierre"];
const [hamster, kiwi, ...others ] = animals;

console.log(hamster); // "Hubert"
console.log(kiwi); // "Rosemary"
console.log(others); // ["Paul", "Pierre"];
```


## JS Intermédiaire 04 - "Fetcher" des données depuis une API

### Introduction

En anglais, la définition de Fetch est “Go for and then bring back (someone or something)”. (Va chercher et puis ramène). L’API Fetch est un outil nous permettant de récupérer des ressources extérieures grâce au réseau. Elle est aujourd’hui totalement intégrée à JavaScript avec la méthode globale `fetch()`.

### L'API fetch

Commençons par voir à quoi ressemble un `fetch()` :
```bash
fetch("https://www.wildcodeschool.com/")
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(err => console.error(err));
  ```
`fetch()` lance une requête `HTTP` sur le réseau et retourne une `Promise` qui sera résolue dès que la `Response` sera disponible. C'est en fait la version code de "je tape une adresse dans la barre d'URL de mon navigateur, et après un peu d'attente, j'obtiens la page demandée".

`fetch()` peut prendre jusqu’à 2 paramètres :

  Le premier est la ressource que l’on souhaite récupérer (très généralement, on indiquera l’URL de la ressource sous forme de chaîne de caractère). Attention ! Il est obligatoire.
  Un second qui représente des options liées à notre requête. Il se caractérise sous la forme d’un objet et il est optionnel.

Il suffit de lui donner l'adresse où récupérer les informations, d’attendre son retour et de lui dire ce que contiennent ces informations pour qu'il les transforme en données exploitables (`text, JSON, image, etc …`).
```bash
fetch("https://www.wildcodeschool.com/")
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(err => console.error(err))
  ```































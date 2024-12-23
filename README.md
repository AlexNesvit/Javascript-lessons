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



















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
	3.	Structures de contrôle : If/else, boucles.
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

La première chose dont tu as besoin est une page HTML. Ouvre ton IDE préféré et crée un nouveau document HTML. À la fin de ce document, juste avant de fermer le tag </body>, ajoutes un tag <script>

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
C'est à cet endroit précis, entre les deux <script> tags que l on va écrire notre code Javascript

Commençons notre programme "Hello World":
```bash
<script>
   console.log("Hello, World!");
</script>
```
Bien joué ! Tu as juste créé ton premier code Javascript! Si tu ouvres ton fichier index.html dans ton navigateur, tu ne dois rien voir de particulier.
C'est normal, le message que tu as créé est uniquement visible dans la console du navigateur.

### Ajouter un fichier externe

Comme avec CSS, il est recommandé d'écrire du Javascript dans un fichier .js séparé.

Crée un nouveau fichier appelé script.js. Tu peux utiliser le nom de ton choix, mais par convention les fichiers JavaScript sont appelés script.js, main.js ou index.js.

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



console.log est une fonction Javascript (on parlera un peu plus des fonctions dans un futur proche)

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

    console.info ⇒ pour afficher des informations
    console.error ⇒ pour afficher des erreurs
    console.warn ⇒ pour afficher des avertissements

### Sensibilité à la casse

Javascript est sensible à la casse. Écrire console.log et console.Log n'est pas la même chose !
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
Javascript te donnera une réponse qui vaudra soit true, soit false (on appelle cela un booléen).

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
en ajoutant le symbole d'égalité = juste après le >, on peut vérifier si la valeur est supérieure ou égale:
```bash
2 > 1; // true ✅
2 >= 2; // true ✅
```

Ça fonctionne aussi dans l'autre sens avec le symbole inférieur <:
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


Tu peux écrire du Javascript dans une page HTML en utilisant les tags <script>

Tu peux écrire des messages dans la console de ton navigateur en utilisant console.log

Tu peux faire des calculs basiques et comparer deux éléments en JS.


---





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


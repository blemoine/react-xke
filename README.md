TP de prise en main React / Flux
================================

Démarrer le hand's on
---------------------

  * Si vous n'avez pas git, installez git.
  * Si vous n'avez pas node, installez node. Avec nvm (https://github.com/creationix/nvm)
  * récupérer le projet sur ```git clone https://github.com/blemoine/react-xke.git```
  * démarrer l'application avec la commande ```npm start```. Les dépendances s'installeront d'elle-même
  * ouvrez un navigateur moderne et aller sur [http://localhost:3000](http://localhost:3000)

Notes préliminaires
-------------------

### Browserify
Ce hand's on s'appuie sur [browserify](http://browserify.org/), une préprocesseur permettant d'utiliser le système de module
 commonJS y compris dans le navigateur.
 
Par exemple, il suffit d'installer *jquery* par npm avec la commande `npm install --save jquery`, pour ensuite pouvoir l'utiliser
en faisant `var $ = require('jquery');`

### Console

Nous vous encourageons à travailler ce TP avec la console de développement ouverte car React y affiche de nombreux messages informatifs.

### Ecmascript 6

Vous pouvez dans ce TP utiliser la syntaxe EcmaScript 6 supporté par React.

### Séparation en fichier

Afin d'être au plus proche du monde réel, vous êtes invités à séparer vos composants, stores, action, etc. dans un fichier à chaque fois.
Les composants doivent avoir l'extension *.jsx* mais les autres fichier peuvent (doivent) porter l'extension *.js* 

Mon premier composant - Le header
---------------------------------

 Créer un composant `Header`, dans son propre fichier *Header.jsx* simple qui générera le markup
 ```
 <header>
       <h1></h1>    
       <h2></h2>
 </header>
 ```
    
 et qui devra être attaché à l'élement d'id `react`
 
 Pour un exemple de composant simple : (http://facebook.github.io/react/index.html#examples)
    
Mon deuxième composant - Affichage d'une liste
----------------------------------------------

  Créer un composant `Bars` affichant la liste des bars renvoyées par le serveur à l'adresse (http://localhost:3000/bars)
  
  La liste des bars doit faire parti de l'état du composant.
  
  Pour rappel, on pourra utiliser jquery de la façon suivante pour récupérer la liste des bars :
  ```
  $.getJSON('/bars').then(function (response) {
     var bars = response.bars;
  })
  ```
  
  Le format d'un objet `bar` est :
   ```
   {
   consumer: "nom du consommateur",
   id: 3,
   name: "Le Network",
   producer: "nom du producteur
   }
   ```
  
  Le markup attendu doit avoir la forme suivante :
  ```
  <div class="left-part">
      <div>
            <!-- Repetition commence ici -->
           <div class="hoverable">
                  <div class="bar-name-col">
                      <span>BAR 1</span>
                  </div>
           </div>
           <div class="hoverable">
                 <div class="bar-name-col">
                     <span>BAR 2</span>
                 </div>
          </div>
          <div class="hoverable">
                <div class="bar-name-col">
                    <span>BAR 3</span>
                </div>
         </div>
           <!-- Repetition fini ici -->
      </div>
  </div>
  ```
  
  On trouvera dans les liens suivants :
  
  * un exemple d'utilisation de state : (http://facebook.github.io/react/index.html#timerExample)
  * un exemple de génération d'une liste : (http://facebook.github.io/react/docs/multiple-components.html#dynamic-children)
  
  
Mon deuxième composant ++ - Etat d'occupation des salles
--------------------------------------------------------

  Créer un composant `Bar` affichant l'état d'occupation d'un bar qui remplacera le bloc `hoverable` de `Bars` par le markup
  
  ```
  <div class="hoverable">
      <div class="bar-name-col">
           <span>Nom du bar</span>
       </div>
      <div class="producer-col">
          <!-- Si c'est occupé mettre le nom de l'occupant et la class occupied -->
          <span class="occupied">Nom de l'occupant</span>
      </div>
      <div class="consumer-col">
          <!-- Si c'est libre mettre juste un span vide avec la classe free -->
          <span class="free"></span>      
      </div>
  </div>
  ```
  
  On utilisera ici une `props` `bar` sur le composant `Bar` pour passer les informations nécessaires au composant.
  Il est bon de prendre l'habitude de valider les `props` du composant.
  Ici un exemple de comment faire la validation : (http://facebook.github.io/react/docs/reusable-components.html)
  

Flux - Affichage depuis un store
--------------------------------

   Externaliser le chargement des bars dans un `BarStore` dédié.
   
   Vous pouvez utiliser :
     
   * [l'eventEmitter](http://nodejs.org/api/events.html) de node (```var EventEmitter = require('events').EventEmitter;```)
   * ```_.assign``` de lodash pour "étendre" l'eventEmitter. Cette fonction fournit l'équivalent de [Object.assign](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/assign)
   
   Le principe d'utilisation du store est :
     
   1. Initialiser la liste des bars dans le store à vide
   2. Le composant `Bars` écoute les changement de `BarStore` et met à jour son état
   3. l'appel JSON dans le store modifie la liste des bars du store et emet un evénement de changement
   4. N'oubliez pas de retirer l'écouteur à la destruction du composant   
   
   
   Un exemple de store peut être trouvé ici : (http://blemoine.github.io/react-xke/#/18/3) 
     
Flux - Modification en utilisant le store
-----------------------------------------

### Création d'un formulaire

   Créer un composant `PseudoForm` qui générera le markup suivant :
   ```
    <form>        
        <input type="text" placeholder="Pseudo" />
        <input type="submit" value="Enregistrer" />
    </form>
   ```
    
   et intégrer ce composant dans le composant `Bars` en l'entourant de
   ```
    <div class="right-part">
        <!-- ici votre composant PseudoForm-->
    </div>
   ```

### Remplissage du formulaire depuis un click

 Remplir le champ `input` du formulaire lorsque l'on clique sur une case de la liste avec le nom de l'occupant, s'il y en a un
   
 Hints : 
    
* vous pouvez passer 2 fonctions en `props` du composant `Bar`, l'une permettant de modifier le producer, l'autre le consumer
* vous ne devez jamais modifier un état ou une property "par référence"
* vous pouvez utiliser un attribut d'état supplémentaire dans `Bars`, représentant le nom actuellement sélectionné.

### Créer un dispatcher

Pour pouvoir notifier le store que l'on souhaite modifier l'occupation des bars, il va être nécessaire de créer un `Dispatcher`
Il n'y en a qu'un par application.

On pourra utiliser celui fournit par le package `flux`

Exemple de dispatcher : (https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/dispatcher/AppDispatcher.js)

### Créer une action

La notification du dispatcher se fait par l'intermédiaire d'objet spécifique *Action*.
Ici, on crééra `BarAction` contenant une fonction ```updateBar``` qui prend en paramètre un bar, 
et notifie le dispatcher que l'on modifie ce bar.
      
Exemple d'Actions : (https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/actions/TodoActions.js)      
      
### Ecoute des actions par le store

Le store doit écouter le dispatcher pour modifier sa liste de bars. 

Une fois la liste de bars modifiée, le store emet un évenement de changement.

Attention : essayez dans le mesure du possible de continuer de traiter les bars comme étant des objets immutables.

Un exemple de store peut être trouvé ici : (http://blemoine.github.io/react-xke/#/18/3)

### Enregistrer la modif depuis le composant

Ajouter un comportement ```onSubmit``` sur le formulaire de façon à pouvoir enregistrer les modifications.

Pour récupérer la valeur de l'input, vous pouvez utiliser le [databinding](http://facebook.github.io/react/docs/two-way-binding-helpers.html)

Pour utiliser les addons, pensez à ajouter ```require('react-addons')```

Pour initialiser l'état, vous pouvez utiliser ```componentWillReceiveProps```

Vous pouvez passer la fonction d'enregistrement en `props` de `PseudoForm`.

Pour savoir quel est le nom que l'on change, il faut stocker une information supplémentaire dans l'état de `Bars`

Pensez à continuer de traiter les bars comme s'ils étaient immutables : vous pouvez cloner un bar en utlisant `_.clone` de lodash

Pensez à vider le formulaire après soumission.
  
  

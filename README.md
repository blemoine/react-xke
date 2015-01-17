TP de prise en main React / Flux
================================

Démarrer le hand's on
---------------------

  * Si vous n'avez pas git, installez git.
  * Si vous n'avez pas node, installez node. Avec nvm (https://github.com/creationix/nvm)
  * récupérer le projet sur ```git clone https://github.com/blemoine/react-xke.git```
  * démarrer l'application avec la commande ```npm start```. Les dépendances s'installeront d'elle-même
  * ouvrez un navigateur moderne et aller sur [http://localhost:3000](http://localhost:3000)

Mon premier composant - Le header
---------------------------------

  Créer un composant *Header* simple qui contiendra le markup
    ```
    <header>
        <h1>GHM</h1>    
        <h2></h2>
    </header>
    ```
    
    et qui devra être attaché à l'élemnt d'id *react*
    
Mon deuxième composant - Affichage d'une liste
----------------------------------------------

  Créer un composant *Bars* affichant la liste des bars renvoyées par le serveur à l'adresse http://localhost:3000/bars
  
  La liste des bars doit faire parti de l'état du composant.
  Pour rappel, on pourra utiliser jquery de la façon suivante pour récupérer la liste des bars :
     ```
     $.getJSON('/bars').then(function (response) {
         var bars = response.bars;
     })
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
  
Mon deuxième composant ++ - Etat d'occupation des salles
--------------------------------------------------------

  Créer un composant Bar* affichant l'état d'occupation d'un bar qui remplacera le bloc ```hoverable``` par le markup
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

Flux - Affichage depuis un store
--------------------------------

   Externaliser le chargement des bars dans un *BarStore* dédié.
   Vous pouvez utiliser :
     
     * [l'eventEmitter](http://nodejs.org/api/events.html) de node (```var EventEmitter = require('events').EventEmitter;```)
     * ```_.assign``` de lodash pour "étendre" l'eventEmitter 
   
   
   
   Le principe d'utilisation du store est :
     
     1. Initialiser la liste des bars dans le store à vide
     2. Le composant *Bars* écoute les changement de *BarStore* et met à jour son état
     3. l'appel JSON dans le store modifie la liste des bars et emet un evénement de changement
     4. N'oubliez pas de retirer l'écouteur à la destruction du composant
     
Flux - Modification en utilisant le store
-----------------------------------------

### Création d'un formulaire

   Créer un composant *PseudoForm* qui générera le markup suivant :
    ```
    <form>        
        <input type="text" placeholder="Pseudo" />
        <input type="submit" value="Enregister" />
    </form>
    ```
    
    et intégrer ce composant dans le composant *Bars* en l'entourant de
    ```
    <div class="right-part">
        <!-- ici votre composnt -->
    </div>
    ```
   


### Remplissage du formulaire depuis un click

   Remplir le champ *input* du formulaire lorsque l'on clique sur une case de la liste avec le nom de l'occupant, s'il 
   y en a un
   
   Hints : 
    
    * vous pouvez passer 2 fonctions en *props* du composant Bar, l'une permettant de modifier le producer, l'autre le consumer
    * vous ne devez jamais modifier un état ou une property "par référence"
    * vous pouvez utiliser un attribut d'état supplémentaire dans *Bars* 

### Créer un dispatcher

    Pour pouvoir notifier le store que l'on souhaite modifier l'occupation des bars, il va etre nécessaire de créer un *Dispatcher*
    Il n'y en a qu'un par application.
    
    On pourra utiliser celui fournit par le package *flux*

### Créer une action
### Ecoute des actions par le store
### Ajout d'un bouton valider permettant d'enregistrer la modif
  
  
  

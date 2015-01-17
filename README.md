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
  <div className="left-part">
      <div>
            <!-- Repetition commence ici -->
           <div className="hoverable">
                  <div className="bar-name-col">
                      <span>BAR 1</span>
                  </div>
           </div>
           <div className="hoverable">
                 <div className="bar-name-col">
                     <span>BAR 2</span>
                 </div>
          </div>
          <div className="hoverable">
                <div className="bar-name-col">
                    <span>BAR 3</span>
                </div>
         </div>
           <!-- Repetition fini ici -->
      </div>
  </div>
  ```
  
Mon deuxième composant ++ - Etat d'occupation des salles
--------------------------------------------------------

  Créer un composant *Bar* affichant l'état d'occupation d'un bar qui remplacera le bloc ```hoverable``` par le markup
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
  
  
  

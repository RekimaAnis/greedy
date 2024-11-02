# TP 3 : Projet 1 - mangez des fruits

## Mise en place du TP

  Cette mise en place est similaire à celle du TP précédent. Le dossier `tp3` contient une structure telle que celle décrite dans ce [document](https://intranet.fil.univ-lille.fr/2020/04/09/nodejs-et-npm/).  
  1. Dans le dossier `tp3/` exécutez
```bash  	  
tp3$  npm install
```  
  2. Exécutez la commande `npm run build` pour créer le dossier `./dist/` et construire un premier *bundle*
  3. Vous pouvez ouvrir le fichier `dist/index.html`, pour vérifier que tout s'est bien déroulé en consultant la console (<kbd>Ctrl Shift K</kbd>) dans laquelle vous devez lire le message `le bundle a été généré`.  

  >  Attention, le résultat <strong>ne se consulte pas</strong> avec le fichier `src/index.html` : vous devez faire vos modifications et votre travail dans le dossier `src/` **mais le résultat du travail est observé dans le dossier `dist/`**.

  4.	Pendant le TP vous devrez compléter ou créer les modules JavaScript demandés.  
    Comme dans le TP précédent, profitez des facilités offertes par Webpack pendant la phase de développement pour construire le bundle et visualiser les résultats "à chaud" en démarrant le serveur de développement :Après chaque modification, il faut générer le <q>nouveau</q> <i>bundle</i>, toujours à l'aide de la commande <code>npm run build</code> et c'est le fichier **`dist`**`/index.html` qu'il faut consulter pour avoir le résultat

```bash
tp3$  npm run dev-server
```

  **C'est la solution que l'on vous conseille d'adopter.**

  5. N'oubliez pas d'exécuter la commande <code>npm run build</code> après l'arrêt du serveur de développement pour mettre à jour le dossier `dist/`.

> NB : le dossier `dist/` ne sera pas mis sur le dépôt car il peut être regénéré à partir des sources.

## Votre travail

Après avoir suvis la mise en place comme indiqué si-dessus, fermé le terminal et mettez vous sur la base du tp3
c'est-à-dire ../tp3$ puis ecriver npm run dev-server. Cette action est censé déclancher l'affichage du tp3 sur un navigateur internet(../tp3$ npm run dev-server)

### Travail réalisé
Durant ce tp j'ai réaliser la conception d'un jeu en Node.js. Le principe est simple le greedy doit essayer de manger le plus de fruit sans se faire toucher par les hungry. Les fruits apparaissent toutes les secondes et disparaissent si 8 secondes se sont écoulé ou si le greedy ou le hungry est rentré en collision avec. Le hungry suit le greedy tant qu'il n'y a pas de fruit, si il mange plus de 7 fruits un autre hungry apparait. Le greedy lui possède 3 vies representer sur le coter du plateau quand il en perd une une image disparait et il réapparait en centre du plateau, quand il meurt une alert pop et marque le nombre de point marqué et le meilleur score  
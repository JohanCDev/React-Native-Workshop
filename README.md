# WorkShop React-Native

## Installe une application

Tu auras besoin de l'application Expo Go pour réaliser ce workshop

## Lancer l'application

Avant tout, connectes ton ordinateur et ton téléphone sur le même réseau WiFi

Pour lancer l'application, tapes la commande `npx expo start`. Un QR Code est généré pour l'utiliser:

- Sur iOS, scannes le directement depuis la caméra du téléphone

- Sur Android, scannes le depuis l'application Expo Go

## Ajouter un fond de couleur dégradé

Dans App.tsx, tu trouveras le code principal de l'application.

Pour commencer, ligne 101: Changes la balise et rajoute une variable qui permettra d'avoir un fond dégradé dans ton application

## Ajoute une image

Toujours dans App.tsx, ligne 110.

Ajoute une image de fond que tu vas stocker dans le dossier assets. Si tu veux une image qui convient déjà bien, prends celle qui s'appelle illustration.png.

Trouves un moyen de rajouter cette image ici, et donnes lui le style "styles.image"

## Créées tes propres tâches

Si tu as remarqué, l'application contient déjà une zone pour pouvoir entrer du texte.

Cependant, si tu appuies sur le + après avoir tapé du texte, il ne se passe rien.

Essayes de trouver comment faire dans App.tsx, ligne 71

Si tu vois ta nouvelle tâche dans le terminal de ton ordinateur, ça veut dire que tu as réussi ! 🎉

**_Bonus_** Si une nouvelle tâche est vide ou remplie d'espaces, ne le rajoute pas !

## Affiches tes tâches

Actuellement, l'affichage de tes tâches n'est pas très beau, désolé. Essayes d'améliorer ça en changeant les styles présents dans le fichier Components/Task.tsx

## Supprimes des tâches

Pour t'y retrouver, ce serait bien de pouvoir supprimer tes tâches une fois faites. Pour ça, implémentes la suppression d'une tâche dans App.tsx ligne 90.

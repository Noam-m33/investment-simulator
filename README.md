# investment-simulator

The project is live on https://ad-education-simulator.web.app/

Stack technique : ReactJS / Typescript / MUI5 / React-Hook-Form / React Context

#Étape 1
Titre de gauche : Profil
Sous-titre de gauche : Vos informations
Titre du formulaire : Vos informations personnelles
Champs du formulaire : Nom (string), Prénom (string), Email (string => regex de validation
pour l’email), Genre (string), Date de naissance (Date), Code Postal (number => limit to 5)

#Étape 2
Titre de gauche : Budget
Sous-titre de gauche : Votre investissement
Titre du formulaire : Sélectionnez votre budget
Champ du formulaire : Sélecteur, comme présenté sur le screenshot, permettant de
sélectionner une somme allant de 1000 à 100000€.

#Étape 3
Titre de gauche : Recommandations
Sous-titre de gauche : Conseil personnalisé
Titre du formulaire : Sélectionnez une option
Contenu : Deux boutons permettant de choisir soit Bitcoin,
soit Ethereum en s’inspirant du screenshot ci-contre.
Une fois l’un des crypto-actif sélectionné, un texte récapitulatif
apparaît : “<Genre> <Nom>, au vu de votre profil et de votre âge (<Age (déduit de la date de
naissance)> ans), nous vous recommandons l’achat de <Choix crypto>. Votre budget vous
permettra d’en acquérir <Quantité>.

Précisions:
- Il sera possible à l’utilisateur de revenir à l’étape précédente en cliquant sur le bouton
“Précédent”.
- Au clic sur le bouton “Suivant” l’utilisateur avance vers l’étape suivante.
- Ce bouton ne s’active qu’une fois tous les champs du formulaire rempli sur la
première étape.
- Le formulaire est encadré par React-Hook-Form qui gère la soumission des
données.
- Un React Context sera utilisé pour la sauvegarde / l’utilisation des informations du
formulaire.

Bonus :
- Récupérer dynamiquement le prix du BTC et de l’ETH
- Rendre le formulaire mobile friendly (tirer partie des capacités de MUI)
- Une fois arrivé au bout du formulaire, un bouton de réinitialisation vide les
informations, ramène l’utilisateur à la première étape.
- Déploiement de l’application sur Firebase hosting.
- Création d’un test end-to-end avec Cypress ou Playwright.

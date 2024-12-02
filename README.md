# Gestion des Inscriptions Sportives - Backend

## Description du Projet

Ce backend a été développé avec **Node.js** (Express.js) et **MongoDB** pour gérer les événements sportifs et les inscriptions des participants. Il inclut des fonctionnalités d’authentification sécurisée, de gestion des erreurs et de protection des routes sensibles.

---

## Fonctionnalités Principales

- **Gestion des événements :** 
  - Création, modification, suppression des événements.  
- **Gestion des inscriptions :** 
  - Ajout et modification des participants pour chaque événement.
- **Authentification sécurisée :**
  - Utilisation de JWT pour sécuriser les routes.
- **Liste des inscrits :**
  - Génération et impression des listes des participants par événement.

---

## Technologies Utilisées

- **Node.js** avec **Express.js**  
- **MongoDB** avec **Mongoose**  
- **JWT** pour l'authentification  
- **Mocha**, **Jest**, pour les tests unitaires  

---

## Installation

1. Clonez le dépôt :  
   ```bash
   git clone https://github.com/ghollamsimo/Systeme_de_gestion_evenements_Backend
   cd backend
   npm install
   npm run dev
   npm test

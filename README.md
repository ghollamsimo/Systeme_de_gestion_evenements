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

## Hexagonal Architecture -->

src

├── core

│   ├── dto

│   ├── entities

│   ├── interfaces

├── infrastructure

│   ├── database

│   ├── repositories

├── application

│   ├── use-cases

├── interface

│   ├── http

├── routes

├── middleware

└── main.ts

--------------------------

Core (Domain) :

     -- the core layer represents the heart of the application.

     ── entities :

          Define the core business model and define the properties.

     ── interfaces :

          Define the interface with method and this interface will be implemented by adapter.

Infrastructure :

     -- the infrastructure layer the actual implementations of our Core (domain) interfaces

     ── database :

           ── schemas :

                      Define the structure of Document for mongoose.

     ── repository :

           Define the logic of the application.

Application :

     -- The application layer is responsible for coordinating the domain logic.

     ── usecases or (services) :

           Represent actions our application can perform.

Interface :

     -- The interface layer is responsible for exposing the functionality of our application to the outside world (req, res).

     ── http :

           Defines API endpoints and delegates requests to use cases.

App Module (Dependency Injection) :

     -- In NestJS, we use dependency injection to connect these layers and manage dependencies efficiently.

---

## Installation

1. Clonez le dépôt :  
   ```bash
   git clone https://github.com/ghollamsimo/Systeme_de_gestion_evenements_Backend
   cd backend
   npm install
   npm run dev
   npm test
   

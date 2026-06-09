# AdoniSport

AdoniSport est un projet e-commerce développé dans le but d'apprendre et de mettre en pratique les technologies modernes du développement web fullstack.

Le projet permet la gestion d'un catalogue de produits sportifs avec un espace d'administration sécurisé.

## Fonctionnalités

### Authentification

- Création de compte
- Connexion
- Déconnexion
- Gestion des rôles administrateur

### Administration

- Gestion des produits
  - Création
  - Modification
  - Suppression

- Gestion des catégories
- Gestion des marques

### Catalogue

- Consultation des produits
- Affichage des informations détaillées
- Gestion des stocks

## Technologies utilisées

### Frontend

- Vue 3
- Inertia.js
- TypeScript
- Tailwind CSS

### Backend

- AdonisJS 7
- Lucid ORM
- TypeScript

### Base de données

- PostgreSQL

## Architecture

Le projet est organisé autour de :

- Models
- Controllers
- Validators
- Transformers
- Components Vue
- Layouts Inertia

## Installation

### Cloner le projet

```bash
git clone https://github.com/ugurkaya67/adonisport.git
cd adonisport
```

### Installer les dépendances

```bash
npm install
```

### Configurer l'environnement

Créer un fichier `.env` à partir du fichier d'exemple :

```bash
cp .env.example .env
```

Configurer ensuite la connexion PostgreSQL.

### Lancer les migrations

```bash
node ace migration:run
```

### Démarrer le projet

```bash
npm run dev
```

Le site sera accessible en local sur :

```txt
http://localhost:3333
```

## Commandes utiles

Créer un modèle avec sa migration :

```bash
node ace make:model Brand -m
```

Créer un contrôleur :

```bash
node ace make:controller Admin
```

## Database Diagram

![Database Diagram](docs/database/adonisport-schema.png)

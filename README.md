# Mon-Portfolio

Bienvenue dans **Mon-Portfolio**, un site portfolio développé avec Next.js, TypeScript et Tailwind CSS, présentant mes compétences, projets et contact.

## 🚀 Prérequis

* Node.js (>=16)
* npm ou yarn
* Git

## 📦 Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/stouf06/Mon-Portfolio.git Mon-Portfolio
   cd Mon-Portfolio
   ```

2. Installez les dépendances :

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Démarrage du serveur de développement :

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir votre portfolio.

## ⚙️ Scripts disponibles

| Commande        | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Démarre le serveur en mode développement |
| `npm run build` | Compile le projet pour la production     |
| `npm run start` | Démarre le serveur en mode production    |
| `npm run lint`  | Lint le code avec Next.js Linter         |

## 🗂️ Structure du projet

```text
Mon-Portfolio/
├─ pages/
│  ├─ _app.tsx         # Wrapper global
│  └─ index.tsx        # Page d'accueil (Portfolio)
├─ components/
│  └─ ui/              # Composants UI (Badge, Button, Card…)
├─ public/             # Assets statiques (images, favicon)
├─ styles/
│  └─ globals.css      # Styles globaux Tailwind
├─ next.config.js      # Configuration Next.js
├─ tailwind.config.js  # Configuration Tailwind CSS
├─ postcss.config.js   # Plugins PostCSS
├─ tsconfig.json       # TypeScript config
└─ package.json        # Dépendances et scripts
```

## 🔧 Configuration

* **TypeScript** : `tsconfig.json` généré automatiquement.
* **Tailwind CSS** : Fichiers `tailwind.config.js` et `postcss.config.js`.
* **Next.js** : React Strict Mode activé dans `next.config.js`.

## 📐 Composants UI

* `Badge` : étiquettes de compétence et de technologie.
* `Button` : boutons variants (default, outline) et tailles.
* `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent` : cartes pour sections et projets.

## 📖 Guide de déploiement

### Vercel

1. Installez Vercel CLI :

   ```bash
   npm install -g vercel
   ```
2. Depuis la racine du projet :

   ```bash
   vercel
   ```
3. Suivez les instructions pour connecter votre repo GitHub et déployer.

### Autres plateformes

* **Netlify**, **Heroku**, etc. : configurez la branche `main` et la commande de build `npm run build`, ainsi que le dossier de sortie `.next`.

## 📝 Personnalisation

Vous pouvez :

* Modifier les sections (About, Skills, Projects, Contact).
* Ajouter vos propres projets dans `pages/index.tsx`.
* Modifier les thèmes ou couleurs dans `tailwind.config.js`.

---

©️ 2025 Mon-Portfolio. Construit avec ❤️ par Stéphane Haluszczak.

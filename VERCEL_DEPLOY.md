# Déploiement sur Vercel

## Déploiement rapide

1. **Installer Vercel CLI** (optionnel) :
   ```bash
   npm i -g vercel
   ```

2. **Déployer** :
   ```bash
   vercel
   ```
   Ou connecter le dépôt Git sur [vercel.com/new](https://vercel.com/new).

## Variables d'environnement

Dans le tableau de bord Vercel → Settings → Environment Variables, ajouter :

| Variable | Description |
|----------|-------------|
| `JWT_SECRET` | Secret pour les tokens JWT (générer une chaîne aléatoire) |

## Note sur l'authentification

Sur Vercel (serverless), les utilisateurs sont stockés dans `/tmp/users.json`. Les données **ne persistent pas** entre les déploiements ni après un cold start prolongé. Pour une persistance réelle, utiliser une base de données (Vercel Postgres, Supabase, etc.).

## HTTPS

Vercel fournit HTTPS automatiquement. Le micro et le GPS fonctionneront correctement sur mobile.

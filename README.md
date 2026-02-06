# Portfolio Website

A professional portfolio website built with React, Express, and Tailwind CSS.

## Prerequisites

- [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager)

## Setup

```bash
# 1. Install nvm (skip if already installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# 2. Restart your terminal, then:
cd m-portfolio
nvm install 20
nvm use 20

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

The app will be available at **http://localhost:5000**.

## Production Build

```bash
npm run build
npm start
```

## Troubleshooting

### Vite crashes with `crypto.hash is not a function`

This happens when using an incompatible Node.js version. Vite 7 requires Node v20.19+ or v22.12+. Run `nvm use 20` to switch to the correct version.

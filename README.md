# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Deploying to a shared host

The GitHub Actions workflow in `.github/workflows/deploy_to_shared_host.yml` builds the app and deploys `dist/` to the shared host when changes are pushed to `main`. It can also be started manually from the Actions tab.

Add these repository secrets under **Settings > Secrets and variables > Actions**:

- `FTP_SERVER`: the host name of the FTP server
- `FTP_USERNAME`: the FTP account username
- `FTP_PASSWORD`: the FTP account password

Optionally, add these repository variables under **Settings > Secrets and variables > Actions > Variables**:

- `FTP_SERVER_DIR`: the destination directory, including leading and trailing slashes (defaults to `/public_html/`)
- `FTP_PROTOCOL`: `ftps` (the default) or `ftp`; prefer `ftps` to encrypt credentials and file transfers

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

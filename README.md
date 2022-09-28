# Frontend Assignment

[Check out the live version](https://demo.hasanustun.com/)

This is a simple product listing application. It consists of:

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://typescriptlang.org)

## Installation

1. Clone this repository

```
git clone https://github.com/hustun/getir-assignment.git
cd getir-assignment
```

2. Install dependencies

```bash
npm install
```

3. Run application

```bash
npm start
```

## File Structure

    ├── ...
    ├── src
    │   ├── app                         # Redux related files(store and hooks)
    │   ├── common                      # Common functions, enums
    │   ├── components                  # General components not related to any application logic
    |   │   ├── icons                   # Maps svg icons to jsx elements
    │   |   └── ui                      # UI components that are used across the application
    │   ├── features                    # Application logic is divided by features, each feature contains related components and slices
    │   |   ├── cart                    # cart components and cart slice
    │   |   ├── product                 # product components and product slice
    │   |   |   ├── filtering           # filtering components
    │   |   |   └── sorting             # sorting components
    │   └── types                       # Type definitions
    └── ...

## Deployment

- [Frontend Application](https://demo.hasanustun.com/) is deployed using [Vercel](https://vercel.com/)
- [Mock Backend](https://hustun-mock-server.herokuapp.com/) is deployed using [Heroku](https://www.heroku.com/)

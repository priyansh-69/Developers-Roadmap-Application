# Developers-Roadmap-Application


[![GitHub issues](https://img.shields.io/github/issues/priyansh-69/Developers-Roadmap-Application)](https://github.com/priyansh-69/Developers-Roadmap-Application/issues)
[![GitHub stars](https://img.shields.io/github/stars/priyansh-69/Developers-Roadmap-Application)](https://github.com/priyansh-69/Developers-Roadmap-Application/stargazers)
[![GitHub license](https://img.shields.io/github/license/priyansh-69/Developers-Roadmap-Application)](https://github.com/priyansh-69/Developers-Roadmap-Application/blob/main/LICENSE)

> **Interactive Developer Roadmap:**  
> A comprehensive, frontend-only application that visually guides developers through learning paths in Frontend, Backend, DevOps, and more. Built with React and [ShadCN UI](https://ui.shadcn.com/).

---

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Interactive Roadmap Preview](#interactive-roadmap-preview)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Live Demo

Check out the live demo here:  
👉 [Live Demo on Netlify](https://developers-roadmap-demo.netlify.app/)  
*(Replace this URL with your actual demo link)*

---

## Features

- **Interactive Roadmap Cards:**  
  Click on each card to expand or collapse details about learning steps, progress, and resources.

- **Dark/Light Mode Toggle:**  
  Switch between themes instantly with an intuitive toggle button.

- **Search Functionality:**  
  Filter roadmap topics dynamically using the integrated search bar.

- **Responsive Design:**  
  Optimized for both desktop and mobile devices.

<details>
  <summary>More details on features</summary>

  - **Expandable Sections:**  
    Uses built-in accordion components (from ShadCN UI) to reveal more information without cluttering the interface.

  - **Progress Tracking:**  
    Visual indicators show your progress as you complete different learning milestones.

  - **Static Data Integration:**  
    Roadmap data is managed via local JSON files, ensuring fast load times and offline support.
  
</details>

---

## Interactive Roadmap Preview

Below is a preview of the interactive roadmap component. Click to expand for more details:

<details>
  <summary><strong>Interactive Roadmap Component Preview</strong></summary>

  ![Roadmap Screenshot](./assets/roadmap-screenshot.gif)  
  *(Add an animated GIF or screenshot here that demonstrates the interactive cards, theme toggle, and search filtering.)*

  **How to interact:**
  - **Expand a Roadmap Card:** Click on a card header to reveal detailed steps.
  - **Toggle Theme:** Use the switch button in the header to change between dark and light mode.
  - **Filter Topics:** Type into the search bar to narrow down roadmap categories.
  
</details>

---

## Getting Started

Follow these instructions to set up the project locally.

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/priyansh-69/Developers-Roadmap-Application.git
   ## Navigate to the project directory:

```sh
cd Developers-Roadmap-Application
```

## Install dependencies:

```sh
npm install
```

or

```sh
yarn
```

## Running Locally

Start the development server with:

```sh
npm start
```

or

```sh
yarn start
```

The application should open at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
Developers-Roadmap-Application/
├── public/
│   └── index.html            # Main HTML file
└── src/
    ├── assets/               # Images, screenshots, and GIFs
    ├── components/           # UI components
    │   ├── Header.tsx        # Contains title, navigation, and theme toggle
    │   ├── SearchBar.tsx     # Interactive search bar
    │   └── Roadmap/          
    │       ├── RoadmapSection.tsx  # Category section (e.g., Frontend, Backend)
    │       └── RoadmapCard.tsx     # Expandable card with details and progress
    ├── data/
    │   └── roadmapData.ts    # Static roadmap data (learning steps, progress, etc.)
    ├── styles/
    │   ├── global.css        # Global styles and dark/light mode CSS variables
    │   └── roadmap.css       # Styles specific to roadmap components
    ├── App.tsx               # Main application component combining all sections
    └── index.tsx             # Entry point rendering <App />
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature/YourFeature
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m "Add some feature"
   ```
4. Push to your branch:
   ```sh
   git push origin feature/YourFeature
   ```
5. Create a pull request describing your changes.

Please follow the Code of Conduct when contributing.

## License

Distributed under the MIT License. See LICENSE for more information.

Happy coding! 🚀

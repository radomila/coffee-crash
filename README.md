# Coffee Crash 
Coffee Crash is a simple responsive web application, which shows the listing of coffees. It is possible to show the listing of all products, or only the available ones.

## Technology Stack 

- ReactJS v19 + Vite
- TypeScript 
- Tailwind CSS v4

## Project Structure
Project is structured into several directories and files, each serving a specific purpose:

- ```src``` - the main application code 
  - ```UI components``` - reusable components, every component is in its own directory
  - ```assets``` - static assets like images
  - ```utils``` - utility functions
  - ```theme.css``` - theme definition file for Tailwind CSS, containing variable definitions
  - ```index.css``` - global styles file, where Tailwind CSS is imported
  - ```hooks``` - custom hooks for managing state and fetching data
  - ```context``` - context definitions for global state management
  - ```providers``` - providers for context and other global configurations

## Styling
Modern design is provided by devChallenges.io, as the project is part of their challenges. The design is implemented using Tailwind CSS v4, which allows for rapid styling and responsiveness.

File ```theme.css``` contains the theme definition, including colors and font sizes used throughout the application.

````
@import 'tailwindcss';

@theme {
  --color-background-primary: #111315;
  --color-background-secondary: #1b1d1f;
  --color-text-primary: #fef7ee;
  --color-text-secondary: #6f757c;
  --color-button: #4d5562;
  --color-vector: #302522;
  --color-yellow-tag: #f6c768;
  --color-green-tag: #bee3cc;
  --color-sold-out: #ed735d;

  --text-body: 1rem;
  --text-label: 0.875rem;
  --text-small-text: 0.625rem;
  --text-price-tag: 0.75rem;
}
````

## Responsiveness
Web application is fully responsive, ensuring a seamless user experience across various devices and screen sizes. It can be displayed on mobile phones, tablets, laptops and larger screens.

## Running the Project
To run the project locally, follow these steps:

- Clone the repository ````git clone````
- Install dependencies using ````npm install````
- Run the dev server with ````npm run dev````
- Open your browser and navigate to ````http://localhost:5173````

## Possible Improvements
Coffee Crash has a potential for further enhancements, including:
- **Loading** when fetching data to enhance user experience
- **Error handling** for API requests to manage potential issues gracefully


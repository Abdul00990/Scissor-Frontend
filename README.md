Scissor URL-Shortening Frontend

Project Overview

The frontend of the Scissor project is a web-based interface that allows users to interact with the Scissor URL-shortening service. It is built using React, with a focus on providing a responsive, user-friendly interface for managing URLs, viewing analytics, and handling user authentication. This README provides an in-depth explanation of the project structure, the purpose of each file, and how the code works together to deliver the features of the application.

Project Structure

The frontend project structure is organized as follows:

src/

  components/
  
  pages/
  
  App.tsx
  
  index.tsx
  
  ...
  
public/

  ...
  
.env

tsconfig.json

package.json


- components/: Reusable UI components used across the application.

- context/: Contains context providers for managing global state.

- pages/: Contains the different pages/screens of the application.

- routes/: Defines the application's routing configuration.

- services/: Contains functions that interact with the backend API.

- styles/: Contains global and component-specific styling.

File Explanations

- 'src/index.tsx'

  The 'index.tsx' file is the entry point for the React application. It renders the root component, App, inside a BrowserRouter to enable client-side routing.

- 'src/App.tsx'

  The 'App.tsx' file is the main component that defines the structure of the application. It includes the routing logic and renders the different pages based on the current route.

- src/components

  The components directory contains reusable UI components used across the application.

- 'src/components/Navbar.tsx'

  The Navbar.tsx file defines the navigation bar that appears on every page. It provides links to different parts of the application, such as Home, Login, and Register.

- src/pages

  The pages directory contains the different pages/screens of the application.

- 'src/pages/HomePage.tsx'
  
  The HomePage.tsx file is the main page of the application where users can shorten URLs and view their URL history.

- 'src/pages/LoginPage.tsx'

  The LoginPage.tsx file handles user login. It allows users to authenticate and access the application.

- 'src/pages/RegisterPage.tsx'

  The RegisterPage.tsx file handles user registration. It allows new users to create an account.

- 'src/pages/UrlAnalytics.tsx'
  
  The UrlAnalytics.tsx file displays analytics for a specific shortened URL, such as the number of clicks.


It explains the project structure, details the functionality of each file, and provides setup and testing instructions.

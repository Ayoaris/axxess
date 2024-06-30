## Axxess Assignment

### Project Overview

This project is built using Vite due to compatibility issues encountered with Create React App when installing Tailwind CSS for styling. Vite was chosen for its fast build times and optimized development experience.

### Starting the Project

To start the project, use the following command:

```
yarn dev
```

### Styling and Responsiveness

Tailwind CSS was selected for its ability to enhance responsiveness and provide flexibility through custom styling, which is configured in the `tailwind.config.js` file. Tailwind’s utility-first approach simplifies the creation of responsive designs.

### Routing

The application uses `react-router-dom` for client-side routing. This enables seamless navigation between different parts of the application without reloading the page.

### Component Structure

- **Header, Footer, LinkCard**: These components handle the layout and navigation, displaying routes to either the Series or Movies components.
- **ItemCard**: A reusable component that displays content, including URL images and program titles, for both Movies and Series.

### Icon Management

Some icons required for the project were not provided in the assets folder. To address this, custom icons from ICONSAX were used, including the search icon and the dropdown icon for the sort input field. An `icon` folder was created to store SVGs for the App Store, Play Store, and Microsoft icons.

### Data Fetching

Axios was installed along with React Query to fetch data from the API. The query functions are stored in a `hooks` folder, which is responsible for fetching Movies and Series data.

### Handling Data Fetching Issues

During data fetching, issues were encountered with some URLs in the provided JSON file, which resulted in images not displaying. To mitigate this, the `lazy` attribute was added to image tags to ensure content loads progressively. It was also discovered that some URLs were deprecated in the JSON list.

### Customization

The title and icon of the app were customized by modifying the `index.html` file. This helps in personalizing the application to better align with project requirements.

### Conclusion

The project leverages Vite, Tailwind CSS, React, and React Router to create a responsive, dynamic application. By addressing compatibility issues, optimizing for responsiveness, and ensuring smooth data fetching, the project meets modern web development standards.

## Axxess Assignment

### Project Overview

This project is built using Vite due to compatibility issues encountered with Create React App when installing Tailwind CSS for styling. Vite was chosen for its fast build times and optimized development experience.

### Starting the Project

To start the project "AxxessMovies.com", use the following command:

```
Clone the repository
Installation: Yarn install
Run command : yarn dev

```

### Styling and Responsiveness

Tailwind CSS was selected for its ability to enhance responsiveness and provide flexibility through custom styling, which is configured in the `tailwind.config.js` file. Tailwind’s utility-first approach simplifies the creation of responsive designs.

### Routing

The application uses `react-router-dom` for client-side routing. This enables seamless navigation between different parts of the application without reloading the page.

### Component Structure

- **Header, Footer, LinkCard**: These components handle the layout and navigation, displaying routes to either the Series or Movies components.
- **ItemCard**: A reusable component that displays content, including URL images and program titles, for both Movies and Series.
- \*\*Search Input: Implements filtering based on title attribute values of movies and series, activating after typing three characters.
- \*\*Sort Input: Allows sorting by year and title in ascending or descending order.

### Icon Management

Some icons required for the project were not provided in the assets folder. To address this, custom icons from ICONSAX were used, including the search icon and the dropdown icon for the sort input field. An `icon` folder was created to store SVGs for the App Store, Play Store, and Microsoft icons.

### Data Fetching

After going through the react query documentation and a little practice, the next day I took up the challenge to implement react query into the project, which was a nice experince, because it helps handle alot of server side state management such as isLoading, isPending, isError etc by destructuring it out of the query function.
Axios was installed along with React Query to fetch data from the API. The query functions are stored in a `hooks` folder, which is responsible for fetching Movies and Series data, further research I found out using axios wasn't not strictly necessary, but it is a common and practical combination.

### Handling Data Fetching Issues

During data fetching, issues were encountered with some URLs in the provided JSON file, which resulted in images not displaying. To mitigate this, the `lazy` attribute was added to image tags to ensure content loads progressively. It was also discovered that some URLs were deprecated in the JSON list, while some don't correspond with the title.

I wasn't comfortable with url broken, so i had create a state to replace the url with static url onError displaying no poster found instead of broken url images

### Customization

The title and icon of the app were customized by modifying the `index.html` file. changing the svg icon, This helps in personalizing the application to better align with project requirements.

## Testing

Installed Jest and react

I started out reading the documentation and trying to follow some tutorials to implement testing, but i kept getting errors on yarn test,

Validation Error :Module@testing-libary/jest-dom/exted-expect in the setupFileAfterEnv option was not found.

### Conclusion

The project leverages Vite, Tailwind CSS, React, and React Router to create a responsive, dynamic application. By addressing compatibility issues, optimizing for responsiveness, and ensuring smooth data fetching, the project meets modern web development standards.

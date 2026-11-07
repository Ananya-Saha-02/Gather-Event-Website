# Gather — Event Management Website

A responsive and interactive event management website built using HTML, CSS, and JavaScript. Gather provides a simple interface for discovering events, exploring event details, and registering for upcoming experiences.

**Live Website:** https://ananya-saha-02.github.io/Gather-Event-Website/  
**GitHub Repository:** https://github.com/Ananya-Saha-02/Gather-Event-Website

---

## 1. Project Overview

Gather is a front-end web development project created as part of the K-Explore Web Designing assignment. The project demonstrates the practical application of core web technologies to develop a responsive, visually engaging, and interactive event management platform.

The website allows users to browse upcoming events, search for events, filter them by category, view event details, and register through a validated registration form. It also incorporates dynamic visual effects and browser-based storage to improve the user experience.

The interface follows a warm burnt-orange and cream visual theme, supported by responsive layouts, animated elements, and interactive components.

## 2. Objectives

The primary objectives of the project are:

- Develop a responsive website using HTML, CSS, and JavaScript.
- Implement interactive event browsing and filtering functionality.
- Create a registration form with client-side validation.
- Demonstrate DOM manipulation and event handling in JavaScript.
- Use LocalStorage for browser-based data persistence.
- Apply modern UI design principles and CSS animations.
- Deploy the website using GitHub Pages.

## 3. Features

### Event Discovery
- Display upcoming events through dynamically generated event cards.
- Present event information such as title, category, date, location, and description.
- Provide a dedicated event details modal.

### Search and Filtering
- Search events using the event name.
- Filter events according to their categories.
- Update the displayed event list dynamically based on user input.

### Event Registration
- Register for an event through an interactive registration form.
- Collect participant information.
- Validate form inputs before submission.
- Display a registration confirmation message.
- Store registration details in the browser using LocalStorage.

### User Interface and Experience
- Responsive layout for desktop, tablet, and mobile screens.
- Burnt-orange and cream colour palette.
- Animated floating objects in the hero section.
- Hover effects on event cards, images, and buttons.
- Scroll-based reveal animations.
- Dark and light theme support.
- Dynamic countdown display for upcoming events.

## 4. Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and semantic content |
| CSS3 | Styling, responsive layouts, transitions, and animations |
| JavaScript | Event rendering, filtering, form validation, and interactivity |
| LocalStorage | Persistent storage of registration data and user theme preference |
| GitHub | Source code hosting and version control |
| GitHub Pages | Website deployment and hosting |

## 5. Project Structure

```text
Gather-Event-Website/
│
├── assets/
│   └── Images and other static resources
│
├── index.html
│   └── Main webpage structure
│
├── style.css
│   └── Styling, responsive design, and animations
│
├── script.js
│   └── Event data, filtering, registration, and interactive features
│
└── README.md
    └── Project documentation
```

## 6. Implementation Details

### HTML Structure

The HTML file defines the main components of the website, including:

- Navigation bar
- Hero section
- Event discovery section
- Event cards container
- About section
- Registration modal
- Footer

The structure provides the foundation for styling and JavaScript-driven interactions.

### CSS Styling

The CSS file manages the visual presentation of the website. It includes:

- Responsive layouts using CSS techniques
- Consistent colour palette and typography
- Event card styling
- Modal presentation
- Hover transitions
- Floating hero animations
- Scroll-reveal effects
- Dark and light theme styling

### JavaScript Functionality

The JavaScript file handles the dynamic behaviour of the website, including:

- Rendering event cards from event data
- Searching and filtering events
- Opening and closing event details
- Handling registration form submissions
- Validating user input
- Saving registration information in LocalStorage
- Managing the selected theme
- Updating the event countdown
- Applying scroll-based animations

## 7. Data Persistence

Gather uses the browser's LocalStorage to retain selected information between page reloads.

Registration details and theme preferences are stored locally in the user's browser.

This implementation is intended for a front-end demonstration. LocalStorage is not a secure database and does not provide centralized storage, authentication, or server-side processing.

## 8. Responsive Design

The website is designed to adapt to different screen sizes and device types.

The responsive interface aims to provide a consistent browsing experience across:

- Desktop computers
- Laptops
- Tablets
- Mobile phones

Layout adjustments ensure that event cards, navigation elements, and registration components remain usable on smaller screens.

## 9. Installation and Usage

No additional packages or build tools are required.

### Run Locally

1. Clone or download the repository.
2. Open the project directory.
3. Open `index.html` in a web browser.

Alternatively, use the Live Server extension in Visual Studio Code to run the website locally.

### Clone the Repository

```bash
git clone https://github.com/Ananya-Saha-02/Gather-Event-Website.git
```

Navigate to the project directory:

```bash
cd Gather-Event-Website
```

Open `index.html` in your browser.

## 10. Deployment

The website is hosted using GitHub Pages.

Deployment configuration:

- **Repository:** Gather-Event-Website
- **Branch:** `main`
- **Source Directory:** `/ (root)`
- **Hosting Platform:** GitHub Pages

The live website can be accessed at:

https://ananya-saha-02.github.io/Gather-Event-Website/

## 11. Future Enhancements

Potential improvements include:

- Backend integration for centralized event and registration management.
- User authentication and personalized profiles.
- Database integration for storing participant information.
- Admin dashboard for event creation and management.
- Email confirmation for successful registrations.
- Payment integration for paid events.
- Advanced filtering by date, location, and availability.

## 12. Limitations

- The project is primarily a front-end implementation.
- Registration data is stored locally in the browser.
- Registrations are not shared across different devices or browsers.
- Client-side validation does not replace server-side validation.
- No authentication or administrative functionality is currently implemented.

## 13. Academic Information

**Project Name:** Gather — Event Management Website  
**Course:** K-Explore Web Designing  
**Project Type:** Web Designing Assignment  
**Technologies:** HTML5, CSS3, JavaScript  
**Deployment:** GitHub Pages

---

## Conclusion

Gather demonstrates the development of a responsive and interactive event management website using fundamental web technologies. The project integrates event discovery, category filtering, registration validation, browser-based storage, and animated user interface elements into a cohesive web application.

It serves as a practical demonstration of front-end development concepts, responsive design principles, and JavaScript-based interactivity.

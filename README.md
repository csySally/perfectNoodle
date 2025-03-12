# Perfect Noodle 🍜

## Description

Perfect Noodle is a fun and simple desktop app designed to help users make the perfect instant noodles every time! With a variety of noodle brands and flavors to choose from, the app offers the ideal cooking times for different types of noodles. Just select your favorite noodle brand, start the timer, and wait for the perfect noodle experience!
The app features playful, animated icons representing different noodle types, which change over time as the noodles "cook." Once the timer reaches zero, a delightful notification will appear to tell you that your noodles are ready, complete with a fun animation of chopsticks picking up the noodles.

## Features

- Choose from different noodle brands and flavors
- Customizable timer for each noodle type
- Fun "noodle ready" notifications with animations
- Option to save your own preferred cooking times

## Tech Stack

### Frontend

- React: A JavaScript library used to build the user interface.
- Next.js: A React framework that provides server-side rendering, static site generation, and simplified routing.

### Styling

- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs. It provides the foundation for the app's layout and basic styling.
- Custom CSS: For more complex animations and transitions that go beyond Tailwind's capabilities.

### Animations

- Lottie: An animation library that renders Adobe After Effects animations in real-time. Used for the smooth, high-quality cooking animations and steam effects.

### Backend Logic

JavaScript: The programming language that powers the app's logic and interactivity, managing the timer countdown, user input, and notifications.

### Desktop Application

Electron.js: A framework that allows you to package your web app as a desktop application for Windows, macOS, and Linux, combining the power of web technologies with native functionality.

## Development Approach

The app's UI is primarily built with React and Tailwind CSS for efficient development. For the complex animations showing noodles cooking and steam rising, we use Lottie to ensure smooth, high-quality animations that would be difficult to achieve with CSS alone. This hybrid approach gives us both development speed and superior visual quality.

## Installation & Setup

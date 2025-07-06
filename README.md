# Voter Card Generator

A simple, interactive React application that generates a voter card based on user input. It includes client-side form validation, modal-based preview, and responsive layout. Built using React and Bootstrap for a modern and adaptive user interface.

---

## 🧠 Features & Techniques

- **React Functional Components** with `useState` for local state management
- **Form validation using React-Bootstrap**'s [`Form`](https://react-bootstrap.netlify.app/docs/forms/overview/) and [`InputGroup`](https://react-bootstrap.netlify.app/docs/forms/input-group/)
- **Modal implementation** with conditional rendering and event propagation control
- **Responsive design** using Bootstrap's grid system (`Row`, `Col`) and custom CSS
- **Image import and rendering** inside components using Webpack asset handling
- **Font Icons** using [`react-icons`](https://react-icons.github.io/react-icons/)
- **Bootstrap** styling via [`react-bootstrap`](https://react-bootstrap.github.io/) and [`bootstrap`](https://getbootstrap.com/)
- Uses `react-icons`'s [`IoMdClose`](https://react-icons.github.io/react-icons/icons/io/#iomeclose) for the modal close icon

---

## 📦 Technologies & Libraries

- [React](https://react.dev/) – UI framework
- [React Bootstrap](https://react-bootstrap.github.io/) – UI component library
- [Bootstrap](https://getbootstrap.com/) – Grid and layout framework
- [React Icons](https://react-icons.github.io/react-icons/) – Icon library
- [Google Fonts – Poppins](https://fonts.google.com/specimen/Poppins) – Primary font used in styling
- Webpack asset bundling via Create React App

---

## 📂 Directory Structure

```
public/
src/
├── App.js
├── App.css
├── Components/
│   ├── VoterForm.js
│   ├── Cards.js
│   └── Cards.css
├── images/
│   └── votingman.webp
```

- `Components/`: Contains the form logic (`VoterForm.js`) and modal (`Cards.js`)
- `images/`: Assets used inside the UI
- `App.js`: Entry point that loads the main form
- `App.css`: Custom project-wide styles

---

## 🚀 How to Run

1. Clone the repository  
   `git clone <your-repo-url>`

2. Navigate to the project folder  
   `cd voter-card-react`

3. Install dependencies  
   `npm install`

4. Start the development server  
   `npm start`

App will be running at `http://localhost:3000`

---

## 📝 License

This project is licensed for educational and demo purposes only.

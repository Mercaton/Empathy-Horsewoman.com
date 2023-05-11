import React from 'react'
import ReactDOM from 'react-dom/client'
import '/src/assets/scss/_main.scss';
import Header from "./templates/Header.jsx";
import Hero from "./templates/Hero.jsx";
import Footer from "./templates/Footer.jsx";
import ContactForm from "./templates/ContactForm.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Aboutme from "./templates/Aboutme.jsx";
import BookALesson from "./templates/BookALesson.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Hero/>
    },
    {
        path: "/about-me",
        element: <Aboutme/>
    },
    {
        path: "/book",
        element: <BookALesson/>
    },
    {
        path: "/contact",
        element: <ContactForm/>
    },
  ]);



ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <Header/>
        <RouterProvider router={router} />
            <Footer/>
        </React.StrictMode>
);
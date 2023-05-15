import React from 'react'
import ReactDOM from 'react-dom/client'
import '/src/assets/scss/_main.scss';
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import ContactForm from "./components/ContactForm.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Aboutme from "./components/Aboutme.jsx";
import BookALesson from "./components/BookALesson.jsx";

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
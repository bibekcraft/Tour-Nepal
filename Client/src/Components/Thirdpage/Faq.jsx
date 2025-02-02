import { useState } from "react";
import Footer from "../navbar/Footer";

function Faq() {
    const[open,setOpen]=useState("null");
    const toggleOpen=(index)=>{
      setOpen(open===index ? null:index);
    }
    const faqData = [
        { 
          question: "What is React?",
          answer:
            "React is a JavaScript library for building user interfaces. It allows the creation of reusable UI components and offers efficient rendering using a virtual DOM.",
        },
        {
          question: "What are hooks in React?",
          answer:
            "Hooks are functions that let you use state and other React features in functional components. They enable managing state and side effects in functional components without needing class components.",
        },
        {
          question: "What is JSX?",
          answer:
            "JSX is a syntax extension for JavaScript, allowing you to write HTML-like code in your JavaScript files. It gets compiled into JavaScript that React can understand and use to create elements.",
        },
        // Add more FAQs as needed
      ];
  return (
    
    <div>
                <section className="max-w-4xl p-6 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white rounded-lg shadow-lg"
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="flex items-center justify-between w-full p-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transition-transform transform ${
                      open === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {open === index && (
                  <div className="p-4 text-gray-700 border-t border-gray-200 bg-gray-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <Footer />
    </div>
  )
}

export default Faq
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Reusable Components",
        description:
            "Build reusable UI components with React, enabling you to efficiently develop applications by composing complex interfaces from simple and isolated pieces.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--violet),var(--indigo))] flex items-center justify-center text-white">
                Reusable Components
            </div>

        ),
    },
    {
        title: "Server-Side Rendering",
        description:
            "Leverage Next.js's server-side rendering capabilities to ensure faster page loads and better SEO performance by generating pages on the server and sending fully rendered HTML to the client.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red),var(--orange))] flex items-center justify-center text-white">
                Server-Side Rendering
            </div>

        ),
    },
    {
        title: "Efficient Routing",
        description:
            "Utilize Next.js's built-in routing system to create dynamic and optimized routes for your React applications, ensuring seamless navigation and improved user experience.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink),var(--purple))] flex items-center justify-center text-white">
                Efficient Routing
            </div>

        ),
    },
    {
        title: "Static Site Generation",
        description:
            "With Next.js, easily generate static websites for improved performance, security, and scalability, allowing you to pre-render pages at build time and serve them as static files to your users.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan),var(--teal))] flex items-center justify-center text-white">
                Static Site Generation
            </div>

        ),
    },
];


export default function WhyChooseUs() {
    return (
        <StickyScroll content={content} />
    )
}
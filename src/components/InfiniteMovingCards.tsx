"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
        quote:
            "Using React has revolutionized our frontend development process. Its component-based architecture allows for modular and efficient code, resulting in faster load times and a smoother user experience.",
        name: "Sarah Johnson",
        title: "Lead Frontend Developer"
    },
    {
        quote:
            "Node.js has been a game-changer for our backend development. Its non-blocking I/O model ensures high performance, and the vast npm ecosystem provides solutions for virtually any task, making development seamless and efficient.",
        name: "Michael Smith",
        title: "Backend Engineer"
    },
    {
        quote:
            "Next.js has elevated our web applications to a new level. Its intuitive API combined with server-side rendering capabilities has drastically improved SEO and user engagement, resulting in higher conversion rates and happier users.",
        name: "Emily Brown",
        title: "Full Stack Developer"
    },
    {
        quote:
            "MongoDB has transformed how we handle data storage. Its flexible document-based model allows for easy scalability and adaptability to changing requirements. With MongoDB, managing complex data structures has never been easier.",
        name: "David Miller",
        title: "Database Administrator"
    }
];


export default function InfiniteMovingCardsComponent() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.2] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="slow"
            />
        </div>
    )
}
'use client'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

export const webinars = [
  {
    "title": "React Hooks: Simplifying State and Side Effects",
    "description": "Discover the power of React Hooks and learn how they simplify state management and side effects in your applications. Whether you're new to React or an experienced developer, this webinar provides insights into using Hooks effectively to streamline your development workflow and create more maintainable code.",
    "link": "https://reactjs.org/docs/hooks-intro.html"
  },
  {
    "title": "Mastering Next.js: Building Modern Web Applications",
    "description": "Join us for an in-depth exploration of Next.js, the popular React framework for building modern web applications. From server-side rendering to static site generation, this webinar covers advanced features and best practices for developing high-performance and SEO-friendly web applications with Next.js.",
    "link": "https://nextjs.org/docs/getting-started"
  },
  {
    "title": "Node.js Security: Best Practices and Common Pitfalls",
    "description": "Security is paramount when building Node.js applications. In this webinar, we dive into best practices for securing your Node.js applications and avoiding common security pitfalls. From authentication and authorization to data validation and secure coding practices, learn how to protect your Node.js applications from vulnerabilities and attacks.",
    "link": "https://nodejs.org/en/docs/guides/"
  },
  {
    "title": "GraphQL Fundamentals: Building APIs with GraphQL",
    "description": "Discover the fundamentals of GraphQL and learn how to build flexible and efficient APIs with GraphQL. This webinar covers the core concepts of GraphQL, including schema definition, queries, mutations, and subscriptions. Whether you're new to GraphQL or looking to deepen your understanding, this webinar is for you.",
    "link": "https://graphql.org/learn/"
  },
  {
    "title": "Microservices Architecture: Designing Scalable Systems",
    "description": "Explore the principles and best practices of microservices architecture in this comprehensive webinar. From service decomposition to inter-service communication, we cover everything you need to know to design scalable and resilient microservices-based systems. Whether you're considering adopting microservices or looking to optimize your existing architecture, this webinar provides valuable insights.",
    "link": "https://microservices.io/"
  },
  {
    "title": "CI/CD Pipelines with Jenkins and Docker: Automating Deployment",
    "description": "Learn how to set up continuous integration and continuous deployment (CI/CD) pipelines using Jenkins and Docker. In this webinar, we walk you through the process of automating your deployment workflow, from building Docker images to deploying applications to production environments. By implementing CI/CD pipelines, you can accelerate your development cycle and ensure a smoother and more reliable deployment process.",
    "link": "https://www.jenkins.io/doc/"
  }
];


export default function UpcomingWebinar() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600
                    font-semibold tracking-wide uppercase">Featured webinars</h2>
          <p className="mt-2 text-3xl leading-8
                    font-extrabold tracking-tight text-white
                    sm:text-4xl
                    ">Enhance Your Coding Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect className="" items={webinars} />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"} className='px-4 py-2 rounded border
                border-neutral-600 text-neutral-700 bg-white
                hover:bg-gray-300 transition duration-200'
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  )
}
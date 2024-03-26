'use client'

import React from "react";
import { Meteors } from "@/components/ui/meteors";

export default function pages() {

  function openEmail() {
    var senderEmail = "sufiyanpatel2770@gmail.com";
    var subject = "Subject of the email";
    var body = "Body of the email";

    var mailtoLink = "mailto:" + senderEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
  }

  return (
    <div className=" w-full h-screen relative">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">


        <h1 className="font-bold text-2xl xl:text-6xl text-white">
          Contact Us
        </h1>

        <p className="font-normal text-base text-slate-500 mt-6 relative max-w-[700px] text-center z-50">
          We&apos;re here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your coding journy.
        </p>

        <button className="border mt-10 px-4 py-1 rounded-lg  border-gray-500 text-gray-300" onClick={() => openEmail()}>
          Contact
        </button>
      </div>
      <Meteors number={20} />
    </div>
  )
}
"use client";

import React, { useState } from "react";
import { Logo } from "@/components/Header";
import Link from "next/link";
import { Footer } from "@/components/Footer";

const HelpPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        <header className="flex justify-between items-center border-b pb-3 mb-6">
          <Logo />
        </header>
        <div>
          <h1 className="text-3xl font-bold mb-4">Help centre</h1>
          <p className="mb-8">Everything you need to know about app</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">Support</h2>
              <h3 className="font-bold text-lg mb-2">FAQ</h3>
              <p className="mb-4">
                Can't find answer you're looking for?{" "}
                <Link href="mailto:support@steerer.co">
                  Please write an email to{" "}
                  <span className="text-blue-600 font-bold">
                    support@steerer.co
                  </span>
                </Link>
              </p>
              <p className="mb-4">
                <Link className="text-blue-600" href="/privacy">
                  Privacy Policy
                </Link>
              </p>
              <p className="mb-4">
                <Link className="text-blue-600" href="/terms">
                  Terms of Service
                </Link>
              </p>
            </div>
            <div>
              <div className="accordion">
                <div className="accordion-item">
                  <h3
                    className="accordion-header font-bold text-lg mb-2 cursor-pointer"
                    onClick={() => toggleAccordion(2)}
                  >
                    How can I sign up?
                  </h3>
                  <div
                    className={`accordion-content ${
                      activeIndex === 2 ? "block" : "hidden"
                    }`}
                  >
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Download the app from the app store</li>
                      <li>
                        Open the Application: Launch the application on your
                        device.
                      </li>
                      <li>
                        Navigate to Registration: Look for the "Register" or
                        "Sign Up" button on the main screen.
                      </li>
                      <li>
                        Provide Information: Enter the required information such
                        as your email address, username, and password.
                      </li>
                      <li>
                        Verify Your Email: Check your email inbox for a
                        verification link. Click on the link to confirm your
                        registration.
                      </li>
                      <li>
                        Complete Registration: Follow any additional prompts to
                        complete the registration process.
                      </li>
                      <li>
                        Log In: Once registered, you can log in using your
                        credentials anytime.
                      </li>
                    </ol>
                    <p>
                      If you encounter any issues during registration, please
                      contact our support team for assistance.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3
                    className="accordion-header font-bold text-lg mb-2 cursor-pointer"
                    onClick={() => toggleAccordion(3)}
                  >
                    How can I reset my password?
                  </h3>
                  <div
                    className={`accordion-content ${
                      activeIndex === 3 ? "block" : "hidden"
                    }`}
                  >
                    <ol className="list-decimal list-inside space-y-1">
                      <li>
                        Access the Password Reset Option: Look for the "Forgot
                        Password" link on the login screen of the application.
                      </li>
                      <li>
                        Enter Your Email: Provide the email address associated
                        with your account.
                      </li>
                      <li>
                        Check Your Email: You'll receive instructions on how to
                        reset your password via email.
                      </li>
                      <li>
                        Follow the Instructions: Click on the link provided in
                        the email and follow the instructions to reset your
                        password.
                      </li>
                      <li>
                        Create a New Password: Enter a new password and confirm
                        it.
                      </li>
                    </ol>
                    <p>
                      If you encounter any difficulties resetting your password,
                      please reach out to our support team for assistance.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3
                    className="accordion-header font-bold text-lg mb-2 cursor-pointer"
                    onClick={() => toggleAccordion(4)}
                  >
                    How do I update my account information?
                  </h3>
                  <div
                    className={`accordion-content ${
                      activeIndex === 4 ? "block" : "hidden"
                    }`}
                  >
                    <p>
                      To update your account information, follow these steps:
                    </p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Log in to the application.</li>
                      <li>
                        Navigate to the "Profile" or "Account Settings" section.
                      </li>
                      <li>
                        Locate the option to edit your information such as name,
                        email, or profile picture.
                      </li>
                      <li>Make the desired changes and save them.</li>
                    </ol>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3
                    className="accordion-header font-bold text-lg mb-2 cursor-pointer"
                    onClick={() => toggleAccordion(5)}
                  >
                    What should I do if I encounter technical issues with the
                    app?
                  </h3>
                  <div
                    className={`accordion-content ${
                      activeIndex === 5 ? "block" : "hidden"
                    }`}
                  >
                    <p>
                      If you encounter any technical issues while using our app,
                      please follow these steps:
                    </p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>
                        Check if your device meets the minimum requirements for
                        the app.
                      </li>
                      <li>
                        Ensure that you have a stable internet connection.
                      </li>
                      <li>Try restarting the app or your device.</li>
                      <li>
                        If the issue persists, contact our support team for
                        further assistance.
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3
                    className="accordion-header font-bold text-lg mb-2 cursor-pointer"
                    onClick={() => toggleAccordion(6)}
                  >
                    Can I use the app on multiple devices?
                  </h3>
                  <div
                    className={`accordion-content ${
                      activeIndex === 6 ? "block" : "hidden"
                    }`}
                  >
                    <p>
                      Yes, you can use our app on multiple devices. Simply log
                      in to your account on each device using the same
                      credentials to access your account and data.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3
                    className="accordion-header font-bold text-lg mb-2 cursor-pointer"
                    onClick={() => toggleAccordion(7)}
                  >
                    How do I delete my account?
                  </h3>
                  <div
                    className={`accordion-content ${
                      activeIndex === 7 ? "block" : "hidden"
                    }`}
                  >
                    <p>
                      If you wish to delete your account, please follow these
                      steps:
                    </p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Log in to the application.</li>
                      <li>
                        Navigate to the "Account Settings" or "Profile" section.
                      </li>
                      <li>Look for the option to delete your account.</li>
                      <li>
                        Follow the prompts to confirm the deletion of your
                        account. Note that this action is irreversible and will
                        delete all associated data.
                      </li>
                    </ol>
                    <p>
                      If you have any other questions or need further
                      assistance, feel free to contact our support team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;

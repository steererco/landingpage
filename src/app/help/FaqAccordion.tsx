"use client";

import { ReactNode, useState, type JSX } from "react";
import { Icons } from "../components/landing/icons";

interface FaqEntry {
  q: string;
  a: ReactNode;
}

const FAQ: FaqEntry[] = [
  {
    q: "How can I sign up?",
    a: (
      <>
        <ol>
          <li>Download the app from the app store</li>
          <li>Open the Application: Launch the application on your device.</li>
          <li>
            Navigate to Registration: Look for the &quot;Register&quot; or &quot;Sign Up&quot;
            button on the main screen.
          </li>
          <li>
            Provide Information: Enter the required information such as your email address,
            username, and password.
          </li>
          <li>
            Verify Your Email: Check your email inbox for a verification link. Click on the link to
            confirm your registration.
          </li>
          <li>Complete Registration: Follow any additional prompts to complete the registration process.</li>
          <li>Log In: Once registered, you can log in using your credentials anytime.</li>
        </ol>
        <p>
          If you encounter any issues during registration, please contact our support team for
          assistance.
        </p>
      </>
    ),
  },
  {
    q: "How can I reset my password?",
    a: (
      <>
        <ol>
          <li>
            Access the Password Reset Option: Look for the &quot;Forgot Password&quot; link on the
            login screen of the application.
          </li>
          <li>Enter Your Email: Provide the email address associated with your account.</li>
          <li>Check Your Email: You&apos;ll receive instructions on how to reset your password via email.</li>
          <li>
            Follow the Instructions: Click on the link provided in the email and follow the
            instructions to reset your password.
          </li>
          <li>Create a New Password: Enter a new password and confirm it.</li>
        </ol>
        <p>
          If you encounter any difficulties resetting your password, please reach out to our
          support team for assistance.
        </p>
      </>
    ),
  },
  {
    q: "How do I update my account information?",
    a: (
      <>
        <p>To update your account information, follow these steps:</p>
        <ol>
          <li>Log in to the application.</li>
          <li>Navigate to the &quot;Profile&quot; or &quot;Account Settings&quot; section.</li>
          <li>Locate the option to edit your information such as name, email, or profile picture.</li>
          <li>Make the desired changes and save them.</li>
        </ol>
      </>
    ),
  },
  {
    q: "What should I do if I encounter technical issues with the app?",
    a: (
      <>
        <p>If you encounter any technical issues while using our app, please follow these steps:</p>
        <ol>
          <li>Check if your device meets the minimum requirements for the app.</li>
          <li>Ensure that you have a stable internet connection.</li>
          <li>Try restarting the app or your device.</li>
          <li>If the issue persists, contact our support team for further assistance.</li>
        </ol>
      </>
    ),
  },
  {
    q: "Can I use the app on multiple devices?",
    a: (
      <p>
        Yes, you can use our app on multiple devices. Simply log in to your account on each device
        using the same credentials to access your account and data.
      </p>
    ),
  },
  {
    q: "How do I delete my account?",
    a: (
      <>
        <p>If you wish to delete your account, please follow these steps:</p>
        <ol>
          <li>Log in to the application.</li>
          <li>Navigate to the &quot;Account Settings&quot; or &quot;Profile&quot; section.</li>
          <li>Look for the option to delete your account.</li>
          <li>
            Follow the prompts to confirm the deletion of your account. Note that this action is
            irreversible and will delete all associated data.
          </li>
        </ol>
        <p>
          If you have any other questions or need further assistance, feel free to contact our
          support team.
        </p>
      </>
    ),
  },
];

export const FaqAccordion = (): JSX.Element => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq">
      {FAQ.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={"faq__item s-card" + (isOpen ? " is-open" : "")}>
            <button
              className="faq__q"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              {item.q}
              <span className="faq__chev">
                <Icons.chevronRight size={20} />
              </span>
            </button>
            {isOpen && <div className="faq__a">{item.a}</div>}
          </div>
        );
      })}
    </div>
  );
};

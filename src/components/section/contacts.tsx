import { siteConfig } from "@/src/config/site";
import React from "react";
import { Icons } from "../ui/icons";


const socials = [
    {
      label: 'View GitHub profile',
      href: siteConfig.links.github,
      icon: Icons.GitHub,
    },
    {
      label: 'View GeekForGeeks profile',
      href: siteConfig.links.GeekForGeeks,
      icon: Icons.GeekforGeeks,
    },
    {
      label: 'View LinkedIn profile',
      href: siteConfig.links.linkedin,
      icon: Icons.LinkedIn,
    },
  ] as const;


const Contacts = () => {
    return(
        <div id="contacts" aria-labelledby="contacts">
            <ul
                aria-label="Socials"
                className="flex flex-wrap justify-center items-center gap-2"
            >
                {socials.map(({ label, href, icon: Icon }) => (
                <li key={href}>
                    <a
                    href={href}
                    title={label}
                    aria-label={label}
                    rel="noreferrer"
                    target="_blank"
                    className="text-[#6919ff] hover:text-[#7d7b7b] focus-visible:text-white">
                    <Icon
                        aria-hidden
                        className="size-7"
                    />
                    </a>
                </li>
                ))}
            </ul>
        </div>
    )
};

export default Contacts;  // Exporting the component
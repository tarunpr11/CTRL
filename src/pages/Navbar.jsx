"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconBriefcase, IconHome, IconInfoCircle, IconMessage, IconTool, IconTools, IconTooltip, IconUser, IconUsers } from "@tabler/icons-react";
const FloatingNavDemo = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      sectionid: "home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/",
      sectionid: "about",
      icon: <IconInfoCircle className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "/",
      sectionid: "services",
      icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Our Team",
      link: "/",
      sectionid: "team",
      icon: (
        <IconUsers className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

export default FloatingNavDemo

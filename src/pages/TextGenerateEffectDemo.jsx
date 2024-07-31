"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = "Hey there! Welcome to Ctrl.! We're a bunch of creative techies who love to build cool stuff online. Whether it's a slick website, a handy app, an awesome video, or a snazzy logo and social media posts, we've got you covered. We're all about making your ideas pop and helping your brand stand out. Let's create something amazing together!";

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}

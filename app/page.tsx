"use client"
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import React from "react";

export default function Home() {
  return (
    <main className="mx-12">
    <Navbar />
    <Hero />
    </main>
  );
}

import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <div className="p-10 space-y-4">
        <h1 className="text-2xl font-bold">About Page</h1>

        <Button size="small" shape="rounded-sm">Small Button</Button>
        <Button size="medium" shape="rounded-md">Medium Button</Button>
        <Button size="large" shape="rounded-full">Large Round Button</Button>
      </div>
    </div>
  );
}

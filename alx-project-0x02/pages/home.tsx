import React from "react";
import Card from "@/components/common/Card";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>

      {/* Example Card components */}
      <Card title="Card 1" content="This is the content for card number 1." />
      <Card title="Card 2" content="Here is some different content for card 2." />
      <Card title="Card 3" content="Another card with unique content." />
    </div>
  );
};

export default Home;

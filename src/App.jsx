import { useState } from "react";
import DishARView from "./DishARView";

function App() {
  const [screen, setScreen] = useState("home");

  const restaurantName = "Nom du restaurant";
  const dish = {
    name: "Penne au saumon",
    price: 10,
    description: "Penne, saumon, crème fraîche, parmesan",
  };

  if (screen === "home") {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <h1 style={{ fontSize: "28px", marginBottom: "24px" }}>
          {restaurantName}
        </h1>

        <button
          onClick={() => setScreen("menu")}
          style={{
            padding: "12px 24px",
            fontSize: "18px",
            borderRadius: "999px",
            border: "none",
            backgroundColor: "#111",
            color: "white",
            cursor: "pointer",
          }}
        >
          Menu
        </button>
      </div>
    );
  }

  if (screen === "menu") {
    return (
      <div
        style={{
          minHeight: "100vh",
          padding: "16px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <header
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <button
            onClick={() => setScreen("home")}
            style={{
              marginRight: "12px",
              border: "none",
              background: "transparent",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            ←
          </button>

          <h2 style={{ fontSize: "22px", margin: 0 }}>Menu</h2>
        </header>

        <div
          style={{
            borderRadius: "12px",
            border: "1px solid #eee",
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
          onClick={() => setScreen("dish")}
        >
          <span style={{ fontSize: "18px" }}>{dish.name}</span>
          <span style={{ fontSize: "18px", fontWeight: "600" }}>
            {dish.price}
          </span>
        </div>
      </div>
    );
  }

  return <DishARView dish={dish} onBack={() => setScreen("menu")} />;
}

export default App;

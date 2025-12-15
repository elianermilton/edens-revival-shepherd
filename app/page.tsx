export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "system-ui",
        backgroundColor: "#fafafa",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem"
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>Eden’s Revival</h1>

      <p style={{ maxWidth: 420, textAlign: "center", color: "#444" }}>
        Choose your garden type. This sets how Eden observes, remembers,
        and guides your plants.
      </p>

      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          style={{
            padding: "1rem 1.5rem",
            borderRadius: "12px",
            border: "1px solid #ccc",
            background: "white",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          Indoor
        </button>

        <button
          style={{
            padding: "1rem 1.5rem",
            borderRadius: "12px",
            border: "1px solid #ccc",
            background: "white",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          Outdoor
        </button>
      </div>
    </main>
  );
}


import "./App.css";

function App() {
  return (
    <div className="card">
      <p>
        {Object.entries(import.meta.env).map(([key, value]) => (
          <p key={key} style={{ fontWeight: 500 }}>
            {key}: {value}
          </p>
        ))}
      </p>
    </div>
  );
}

export default App;

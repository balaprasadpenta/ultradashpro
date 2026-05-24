import { useTheme } from "./app/providers/use-theme";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className="text-7xl text-black justify-center items-center">
        Ultra dash pro
      </div>

      <div className="mb-6">current Theme: {theme}</div>

      <button
        onClick={toggleTheme}
        className="bg-primary text-primary-foreground rounded-lg px-4 py-2"
      >
        change theme
      </button>
    </>
  );
}

export default App;

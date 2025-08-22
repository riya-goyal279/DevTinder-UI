import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <h1 className="text-red-500">Hello World</h1>
        <div className="flex min-h-svh flex-col items-center justify-center">
          <Button>Click me</Button>
        </div>
        <ModeToggle />
      </ThemeProvider>
    </>
  )
}

export default App

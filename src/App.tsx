import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/layout/Body";
import Login from "./components/layout/Login";

function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes>
            <Route path="/" element={<Body/>}>
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App

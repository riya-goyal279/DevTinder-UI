import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/layout/Body";
import Login from "./components/layout/Login";
import Signup from "./components/layout/Signup";
import { Provider } from 'react-redux';
import { appStore } from "./utils/appStore";

function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Provider store={appStore}>
            <Routes>
              <Route path="/" element={<Body/>}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Route>
            </Routes>
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App

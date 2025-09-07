import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Toaster } from "sonner";

const BackgroundBlobs = () => (
    <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[30vw] h-[30vw] rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] rounded-full bg-orange-400/10 blur-3xl" />
    </div>
);

const Body = () => {
    return (
        <div
            className="relative tracking-wide min-h-screen h-dvh
        bg-gradient-to-br dark:from-black dark:via-orange-950/20 dark:to-black
        from-orange-50 via-white to-orange-50">
            <BackgroundBlobs />
            <Header />
            <main className="pt-6 px-4 min-h-[calc(100vh-72px)]">
                <Outlet />
            </main>

            {/* ✅ Toast provider (only once in your app) */}
            <Toaster
                richColors
                position="top-center"
                closeButton
                theme="light"
            />
        </div>
    );
};

export default Body;

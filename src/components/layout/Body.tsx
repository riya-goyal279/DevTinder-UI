import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import { toast, Toaster } from "sonner";
import axios from "axios";
import { BASE_URL } from "@/utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "@/utils/userSlice";
import type { RootState } from "@/utils/appStore";

const BackgroundBlobs = () => (
    <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[30vw] h-[30vw] rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] rounded-full bg-orange-400/10 blur-3xl" />
    </div>
);

const Body = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((state: RootState) => state.user);

    const fetchUser = async () => {
        try {
            const user = await axios.get(`${BASE_URL}/profile/view`, {
                withCredentials: true,
            });
            dispatch(addUser(user.data));
            navigate("/");
        } catch (error: any) {
            navigate("/login");
            if (error.status === 401) {
                toast("🚀 Please log in to continue.", { style: {
                    background: "#fef3c7",
                    color: "#111827",
                    border: "1px solid #fdba74",
                }});
            } else {
                toast.error("😢 Something went wrong.");
            }
        }
    };

    useEffect(() => {
        if (!userData) fetchUser();
    }, []);

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

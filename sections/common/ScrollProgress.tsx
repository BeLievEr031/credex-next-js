import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            console.log(progress)
            const scrollTop = window.scrollY;
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const scrolled = (scrollTop / height) * 100;
            setProgress(scrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {progress > 8 ? <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
                <div
                    className="h-full bg-emerald-500 transition-all duration-150"
                    style={{ width: `${progress < 90 ? progress - 8 : progress}%` }}
                />
            </div> : ""}
        </>
    );
}
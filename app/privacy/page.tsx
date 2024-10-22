import Privacy from "@/markdown/privacy.mdx";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Page() {
    return (
        <>
            <main className="flex flex-col items-center w-full px-4 py-20">
                <div className="prose prose-invert">
                    <Privacy />
                </div>
            </main>
            <Footer />
        </>
    );
}
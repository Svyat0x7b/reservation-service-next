import Navbar from '@/components/Navbar';
import Header from '@/components/Home/Header';
import CardList from '@/components/Home/CardList';
export default function Home() {
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                <Navbar />
                <main>
                    <Header />
                    <CardList />
                </main>
            </main>
        </main>
    );
}

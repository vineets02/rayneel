// src/components/Layout.jsx
// import Header from './Header';
// import Footer from './Footer';

import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

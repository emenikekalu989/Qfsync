export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-blue-400 flex items-center">
          <span className="bg-gradient-to-r from-yellow-400 to-blue-400 text-transparent bg-clip-text text-4xl">Q</span>
          <span className="ml-2">FSync</span>
        </h1>
        <div className="flex gap-6">
          <a href="/features" className="hover:text-yellow-400">Features</a>
          <a href="/security" className="hover:text-yellow-400">Security</a>
          <a href="/vault" className="hover:text-yellow-400">Vault</a>
          <a href="/about" className="hover:text-yellow-400">About</a>
          <a href="/support" className="hover:text-yellow-400">Support</a>
        </div>
        <a
          href="https://wa.me/18502605544"
          target="_blank"
          className="bg-gradient-to-r from-blue-400 to-yellow-400 px-6 py-2 rounded-lg font-semibold"
        >
          Get Synced
        </a>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center flex-grow">
        <h2 className="text-5xl font-extrabold">
          Sync your assets. Secure your future.
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl">
          QFSync is the hybrid quantum neobank — 100x stronger than blockchain itself. 
          A vault beyond limits, designed for the new financial system.
        </p>
        <div className="flex gap-6 mt-8">
          <a
            href="https://wa.me/18502605544"
            target="_blank"
            className="bg-blue-500 px-8 py-3 rounded-lg font-bold hover:bg-blue-600"
          >
            Get Synced (WhatsApp)
          </a>
          <a
            href="https://t.me/@maerox33"
            target="_blank"
            className="bg-yellow-500 px-8 py-3 rounded-lg font-bold hover:bg-yellow-600"
          >
            Get Synced (Telegram)
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        © {new Date().getFullYear()} QFSync — Quantum Beyond Blockchain.
      </footer>
    </div>
  );
}

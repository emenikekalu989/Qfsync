export default function About() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold text-purple-400">About QFSync</h1>
        <p className="text-gray-400 mt-4 max-w-2xl text-center">
          QFSync is more than a wallet — it’s the bridge between legacy finance
          and the quantum future. Built to empower users with security, speed,
          and sovereignty over their assets.
        </p>
      </main>
    </div>
  )
}
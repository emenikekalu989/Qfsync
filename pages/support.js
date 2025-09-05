export default function Support() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold text-red-400">Support</h1>
        <p className="text-gray-400 mt-4 max-w-2xl text-center">
          Need help? Contact us directly through WhatsApp or Telegram. 
          Our QFSync guides will get you synced in minutes.
        </p>
        <div className="flex gap-6 mt-6">
          <a href="https://wa.me/18502605544" target="_blank" className="bg-blue-500 px-6 py-2 rounded-lg font-bold">WhatsApp</a>
          <a href="https://t.me/@maerox33" target="_blank" className="bg-yellow-500 px-6 py-2 rounded-lg font-bold">Telegram</a>
        </div>
      </main>
    </div>
  )
}
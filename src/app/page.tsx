export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <main className="max-w-3xl w-full space-y-8">
        <h1 className="text-3xl font-bold text-center sm:text-4xl">
          🚀 Waitlist Form Implementation
        </h1>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 m-2">
          Readme:{" "}
          <a
            href="https://github.com/heverton-bl/waitlist"
            className="text-blue-500 font-mono"
          >
            <code>https://github.com/heverton-bl/waitlist</code>
          </a>
        </p>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300">
          API base URL:{" "}
          <a
            href="https://bucketlisterswaitlist.vercel.app/api"
            className="text-blue-500 font-mono"
          >
            <code>https://bucketlisterswaitlist.vercel.app/api</code>
          </a>
        </p>
      </main>
    </div>
  );
}

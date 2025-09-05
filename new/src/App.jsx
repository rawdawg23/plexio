import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Play } from "lucide-react";

// Minimal UI components
function Card({ children, className }) {
  return <div className={`bg-gray-800 rounded-xl ${className}`}>{children}</div>;
}

function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl font-semibold transition ${className}`}
    >
      {children}
    </button>
  );
}

const sampleMovies = [
  { id: 1, title: "Inception", poster: "/posters/inception.jpg" },
  { id: 2, title: "Interstellar", poster: "/posters/interstellar.jpg" },
  { id: 3, title: "The Dark Knight", poster: "/posters/darkknight.jpg" },
];

const sampleStore = [
  { id: 1, name: "Plex Streaming Box", image: "/store/plexbox.jpg", price: "$99" },
  { id: 2, name: "4K Media Hub", image: "/store/4kbox.jpg", price: "$149" },
];

export default function PlexSite() {
  const [movies] = useState(sampleMovies);
  const [store] = useState(sampleStore);
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center neon">🎬 HODGE Plex Server</h1>

      {/* Movies */}
      <section className="mb-12">
        <h2 className="text-2xl mb-4">Now Streaming</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <motion.div
              key={movie.id}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => setSelected(movie)}
            >
              <Card className="overflow-hidden shadow-lg">
                <img src={movie.poster} alt={movie.title} className="w-full h-80 object-cover" />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{movie.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Store */}
      <section>
        <h2 className="text-2xl mb-4">Store</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {store.map((item) => (
            <motion.div key={item.id} whileHover={{ scale: 1.05 }}>
              <Card className="overflow-hidden shadow-lg">
                <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
                <CardContent className="p-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-400">{item.price}</p>
                  </div>
                  <a href="https://t.me/ogadm1n" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-blue-500 hover:bg-blue-600 flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4" /> Contact
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Movie Modal */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="bg-gray-900 rounded-xl p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">{selected.title}</h2>
            <img src={selected.poster} alt={selected.title} className="rounded-lg mb-4" />
            <Button className="bg-green-500 hover:bg-green-600 flex items-center gap-2">
              <Play className="w-4 h-4" /> Play Now
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

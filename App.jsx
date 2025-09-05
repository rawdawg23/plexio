import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Play } from "lucide-react";

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
  const [movies, setMovies] = useState(sampleMovies);
  const [store, setStore] = useState(sampleStore);
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center neon">🎬 HODGE Plex Server</h1>

      {/* Movies */}
      <section className="mb-12">
        <h2 className="text-2xl mb-4">Now Streaming</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <motion.div
              key={movie.id}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="cursor-pointer relative group"
              onClick={() => setSelected(movie)}
            >
              <Card className="overflow-hidden rounded-2xl shadow-lg bg-gray-800 transition-all">
                <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover" />
                <CardContent className="p-2 text-center">{movie.title}</CardContent>
              </Card>
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition shadow-[0_0_30px_5px_rgba(56,189,248,0.7)]" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Store */}
      <section>
        <h2 className="text-2xl mb-4 flex items-center gap-2"><ShoppingBag /> Store</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {store.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="cursor-pointer relative group"
            >
              <Card className="overflow-hidden rounded-2xl shadow-lg bg-gray-800 transition-all">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-xl mb-3">{item.price}</p>
                  <Button className="bg-green-500 hover:bg-green-600" onClick={() => window.open("https://t.me/ogadm1n", "_blank")}>Contact on Telegram</Button>
                </CardContent>
              </Card>
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition shadow-[0_0_30px_5px_rgba(56,189,248,0.7)]" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Movie Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 rounded-2xl shadow-xl p-6 max-w-lg w-full"
          >
            <img src={selected.poster} alt={selected.title} className="rounded-xl mb-4" />
            <h3 className="text-2xl mb-4">{selected.title}</h3>
            <Button className="bg-blue-500 hover:bg-blue-600" onClick={() => alert("Playing movie...")}> <Play className="mr-2" /> Play</Button>
            <Button variant="ghost" className="mt-4 text-red-400" onClick={() => setSelected(null)}>Close</Button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

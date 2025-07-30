// Welcome to CineDrop
// A community-driven movie hub for real opinions, real ratings, and real access.

// At CineDrop, we're building more than just a movie-sharing platform — we're building a community of movie lovers. Whether you're a casual viewer or a die-hard film enthusiast, this is your space to rate, review, discuss, and share movies with others who care about honest opinions.

// We believe that movie ratings should be shaped by real people, not algorithms or hype. That’s why our platform puts the power in your hands — to rate, comment, and connect over the films you love (or hate). Plus, we make it easy to share and access download links, helping others discover movies they might otherwise miss.

// So whether you're here to explore public ratings, discover download links, or share your own movie takes — welcome to the home of open cinema conversation.

import { FaStar, FaFilm, FaUsers } from "react-icons/fa";
import Footer from "../../components/Footer";

const AboutUs = () => {
  return (
    <div className="w-full px-4 md:px-10 py-10 flex flex-col bg-black text-white">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-Raleway font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto font-Nunito">
          We are a community driven platform where people can share, review, and discuss movies
          while also providing access to download links. Your voice matters in the world of
          film.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4 font-Raleway">Our Mission</h2>
          <p className="text-gray-400 font-Nunito leading-relaxed">
            To provide a transparent and open space for movie lovers to share honest opinions,
            rate films, and provide access to helpful resources such as download links.
            <br />
            <br />
            Whether it's the latest blockbuster or a hidden gem, we believe everyone should
            have a platform to contribute and connect through cinema.
          </p>
        </div>
        <div
          className="w-full h-[300px] rounded-lg bg-cover bg-center shadow-lg"
          style={{ backgroundImage: `url('/images/okay.jpg')` }}
        />
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="bg-[#ffffff10] p-6 rounded-xl border border-gray-700 text-center shadow-md">
          <FaUsers className="text-white text-3xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 font-Raleway">Community First</h3>
          <p className="text-sm text-gray-400 font-Nunito">
            Built around passionate viewers who love sharing their thoughts and helping others
            discover great movies.
          </p>
        </div>
        <div className="bg-[#ffffff10] p-6 rounded-xl border border-gray-700 text-center shadow-md">
          <FaStar className="text-[#FFFF00] text-3xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 font-Raleway">Real Ratings</h3>
          <p className="text-sm text-gray-400 font-Nunito">
            Our ratings are shaped by real people, not algorithms. Get genuine feedback on what
            to watch next.
          </p>
        </div>
        <div className="bg-[#ffffff10] p-6 rounded-xl border border-gray-700 text-center shadow-md">
          <FaFilm className="text-white text-3xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 font-Raleway">Access & Sharing</h3>
          <p className="text-sm text-gray-400 font-Nunito">
            Easily find download links shared by others, and give back by sharing your own.
            We’re building a helpful movie space.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-bold font-Raleway mb-4">Join the Community</h2>
        <p className="text-gray-300 mb-6 font-Nunito">
          Rate movies, drop download links, share reviews, and become part of something bigger.
        </p>
        <a
          href="/signup"
          className="bg-primary hover:bg-[#ad4831] text-white font-medium py-3 px-8 rounded-full transition duration-300"
        >
          Get Started
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;

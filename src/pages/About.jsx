
export default function About() {
    return (
        <main className="p-10 bg-gray-50 min-h-screen flex flex-col items-center">
            <h2 className="text-4xl font-semibold text-center mb-10 pt-3 relative after:content-[''] after:block after:w-16 after:h-[3px] after:bg-red-600 after:mx-auto after:mt-3 mt-12">
                About Us
            </h2>

            <div className="max-w-5xl bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-10 hover:shadow-xl transition-all duration-300">
                <img
                    src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&auto=format&fit=crop&q=60"
                    alt="About Us"
                    className="w-72 h-72 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
                />

                <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">Who We Are</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Welcome to <span className="font-semibold text-red-600">Our Store</span> —
                        your one-stop destination for premium quality products at unbeatable prices.
                        Our mission is to bring you handpicked items that combine style, comfort,
                        and value. We’re passionate about quality and dedicated to providing
                        top-notch service to our customers.
                    </p>

                    <h4 className="text-xl font-semibold mt-6 text-gray-800">Our Mission</h4>
                    <p className="text-gray-600 leading-relaxed mt-2">
                        To make online shopping simple, enjoyable, and accessible to everyone.
                        We continuously strive to curate the best products that enhance your
                        lifestyle and bring value to your everyday life.
                    </p>
                </div>
            </div>

            <div className="mt-16 text-center max-w-3xl">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h4>
                <p className="text-gray-600 leading-relaxed">
                    🌟 High-quality products | 🚚 Fast delivery | 💬 24/7 Customer support | 💰
                    Great value for money
                </p>
            </div>
        </main>
    );
}

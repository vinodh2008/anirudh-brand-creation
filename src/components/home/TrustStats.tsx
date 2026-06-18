export function TrustStats() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "1000+", label: "Projects Completed" },
    { value: "500+", label: "Happy Clients" },
    { value: "100%", label: "Quality Assured" },
  ];

  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

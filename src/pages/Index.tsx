import React from 'react';

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center h-screen px-4 text-center">
        {/* Background animation div */}
        <div
          className="absolute inset-0 z-[-1] opacity-30 blur-3xl animate-background-pan"
          style={{
            background: 'radial-gradient(circle at center, var(--primary-color) 0%, var(--violet-color) 50%, transparent 100%)',
            '--primary-color': '#6366f1', // Exemplo de cor primária (indigo-500)
            '--violet-color': '#8b5cf6' // Exemplo de cor violeta (violet-600)
          } as React.CSSProperties}
        ></div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Bem-vindo ao Lovable
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Sua plataforma definitiva para desenvolvimento web moderno.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
          Comece Agora
        </button>
      </section>

      {/* Other sections can go here */}
      <section className="relative z-10 py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nossos Recursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">React Rápido</h3>
            <p className="text-gray-300">Desenvolva interfaces de usuário dinâmicas com a velocidade do React.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Tailwind CSS</h3>
            <p className="text-gray-300">Estilize seu aplicativo com utilitários poderosos e responsivos.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">TypeScript</h3>
            <p className="text-gray-300">Adicione segurança de tipo e melhoria na produtividade ao seu código.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
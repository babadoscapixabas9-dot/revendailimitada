import { Button } from '@/components/ui/button';
// Importações existentes...

export function Index() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Seção de navegação ou cabeçalho existente */}

      <section id="hero" className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl font-extrabold leading-tight mb-4">Seja um Revendedor e Impulsione Suas Vendas</h1>
            <p className="text-xl mb-8">Junte-se à nossa rede e descubra um mundo de oportunidades para crescer seu negócio.</p>
            <Button className="bg-green-500 text-white hover:bg-green-600 px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Quero me tornar um Revendedor
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Imagem ou ilustração aqui */}
            <img src="/placeholder-image.png" alt="Ilustração de negócio" className="max-w-full h-auto rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Outras seções do Index.tsx */}

    </div>
  );
}

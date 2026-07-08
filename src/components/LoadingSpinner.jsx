// Importações necessárias
import { motion } from "framer-motion";

// Componente LoadingSpinner - Spinner de carregamento com animações
const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      {/* Elementos de fundo */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-orange-100/50 dark:bg-orange-900/25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-200/30 dark:bg-orange-900/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-orange-300/20 dark:bg-orange-800/20 rounded-full blur-2xl animate-pulse delay-500" />

      {/* Spinner principal */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 dark:border-orange-400/20 dark:border-t-orange-400 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Texto de carregamento */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100 title-poppins mb-2">
            Carregando Reflexões
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Carregando conteúdo...
          </p>
        </motion.div>

        {/* Pontos animados */}
        <div className="flex justify-center mt-4 space-x-1">
          <motion.div
            className="w-2 h-2 bg-orange-500 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="w-2 h-2 bg-orange-500 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className="w-2 h-2 bg-orange-500 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

// Importações necessárias
import { motion } from "framer-motion";
import { useState } from "react";

// Componente ImageLoader - Loading para imagens
const ImageLoader = ({ src, alt, className, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Loading placeholder */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
        >
          <div className="flex flex-col items-center space-y-2">
            <motion.div
              className="w-8 h-8 border-2 border-orange-200 border-t-orange-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <span className="text-xs text-gray-500">Carregando...</span>
          </div>
        </motion.div>
      )}

      {/* Imagem */}
      <img
        src={src}
        alt={alt}
        className={`${className} ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />

      {/* Fallback para erro */}
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-xs text-gray-500">Imagem não disponível</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageLoader;


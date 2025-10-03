"use client";

import { useLoadingControl } from "./hooks/useLoading";

export const LoadingOverlay = () => {
  const { message, isVisible, shouldRender } = useLoadingControl();
  if (!shouldRender) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex items-center justify-center
        bg-black/60 backdrop-blur-0
        transition-all duration-300 ease-out
        ${isVisible ? 'opacity-100 backdrop-blur-sm' : 'opacity-0'}
      `}
    >
      <div
        className={`
          bg-white rounded-2xl shadow-2xl
          min-w-[300px] min-h-[400px] max-w-md w-full mx-4
          flex flex-col justify-between
          transform transition-transform duration-300 ease-out
          ${isVisible
            ? 'scale-100 translate-y-0'
            : 'scale-90 translate-y-5'
          }
        `}
      >
        <div className="flex-shrink-0 p-6 text-center border-b border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-800">
            {message}
          </h3>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-8 py-0 md:py-4 space-y-6">
          <span className="loader"></span>

          <p className="text-gray-600 font-medium text-center text-sm leading-relaxed max-w-xs">
            Por favor, espera un momento...
          </p>
        </div>
      </div>
    </div>
  );
};
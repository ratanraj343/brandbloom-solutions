import { useEffect, useState } from "react";

const ProductImageModal = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset to first image whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !images?.length) {
    return null;
  }

  const showPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-brand-green shadow-md transition hover:bg-brand-cream"
        >
          ×
        </button>

        {/* Previous */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous image"
            className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl text-brand-green shadow-md transition hover:bg-brand-cream"
          >
            ‹
          </button>
        )}

        {/* Image */}
        <img
          src={images[currentIndex]}
          alt={`Product view ${currentIndex + 1}`}
          className="max-h-[85vh] max-w-[85vw] rounded-xl object-contain"
        />

        {/* Next */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={showNext}
            aria-label="Next image"
            className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl text-brand-green shadow-md transition hover:bg-brand-cream"
          >
            ›
          </button>
        )}

        {/* Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === currentIndex
                    ? "bg-brand-gold"
                    : "bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImageModal;
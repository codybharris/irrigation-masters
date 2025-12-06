import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formContainerRef.current && !formContainerRef.current.querySelector('script')) {
      // Create and insert the Cognito Forms script into the container
      const script = document.createElement('script');
      script.src = 'https://www.cognitoforms.com/f/seamless.js';
      script.setAttribute('data-key', 'yFb0-oxVBES7CXARIPtZIQ');
      script.setAttribute('data-form', '1');
      formContainerRef.current.appendChild(script);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8"
    >
      <style>{`
        /* Seamless iframe container */
        .cog-cognito {
          border: none !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .cog-cognito iframe {
          border: none !important;
          width: 100% !important;
        }

        /* Match Cognito Forms styling to existing design */
        .cog-form,
        .cog-form * {
          font-family: inherit !important;
        }

        .cog-form input[type="text"],
        .cog-form input[type="email"],
        .cog-form input[type="tel"],
        .cog-form input[type="number"],
        .cog-form select,
        .cog-form textarea {
          width: 100% !important;
          padding: 0.75rem 1rem !important;
          border: 1px solid #d1d5db !important;
          border-radius: 0.5rem !important;
          outline: none !important;
          transition: all 0.2s !important;
          font-size: 1rem !important;
        }

        .cog-form input[type="text"]:focus,
        .cog-form input[type="email"]:focus,
        .cog-form input[type="tel"]:focus,
        .cog-form input[type="number"]:focus,
        .cog-form select:focus,
        .cog-form textarea:focus {
          border-color: #15803d !important;
          box-shadow: 0 0 0 2px rgba(21, 128, 61, 0.2) !important;
        }

        .cog-form label {
          display: block !important;
          font-size: 0.875rem !important;
          font-weight: 600 !important;
          color: #374151 !important;
          margin-bottom: 0.5rem !important;
        }

        .cog-form .cog-button,
        .cog-form button[type="submit"] {
          width: 100% !important;
          background-color: #15803d !important;
          color: white !important;
          padding: 1rem 2rem !important;
          border-radius: 0.5rem !important;
          font-weight: 600 !important;
          font-size: 1.125rem !important;
          border: none !important;
          cursor: pointer !important;
          transition: background-color 0.2s !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
        }

        .cog-form .cog-button:hover,
        .cog-form button[type="submit"]:hover {
          background-color: #166534 !important;
        }

        .cog-form .cog-required {
          color: #ef4444 !important;
        }

        /* CHECKBOX AND RADIO - Nuclear option */
        .cog-form input[type="checkbox"],
        .cog-form input[type="radio"] {
          -webkit-appearance: none !important;
          -moz-appearance: none !important;
          appearance: none !important;
          width: 18px !important;
          height: 18px !important;
          min-width: 18px !important;
          min-height: 18px !important;
          border: 2px solid #d1d5db !important;
          border-radius: 4px !important;
          cursor: pointer !important;
          position: relative !important;
          margin: 0 !important;
          vertical-align: middle !important;
          flex-shrink: 0 !important;
          background-color: white !important;
          transition: all 0.2s !important;
        }

        .cog-form input[type="radio"] {
          border-radius: 50% !important;
        }

        .cog-form input[type="checkbox"]:checked,
        .cog-form input[type="radio"]:checked {
          background-color: #15803d !important;
          border-color: #15803d !important;
        }

        .cog-form input[type="checkbox"]:checked::after {
          content: '' !important;
          position: absolute !important;
          left: 5px !important;
          top: 2px !important;
          width: 4px !important;
          height: 8px !important;
          border: solid white !important;
          border-width: 0 2px 2px 0 !important;
          transform: rotate(45deg) !important;
        }

        .cog-form input[type="radio"]:checked::after {
          content: '' !important;
          position: absolute !important;
          left: 4px !important;
          top: 4px !important;
          width: 6px !important;
          height: 6px !important;
          border-radius: 50% !important;
          background: white !important;
        }

        /* Checkbox/Radio containers and labels */
        .cog-form label > input[type="checkbox"],
        .cog-form label > input[type="radio"] {
          margin-right: 10px !important;
        }

        .cog-form label:has(input[type="checkbox"]),
        .cog-form label:has(input[type="radio"]) {
          display: inline-flex !important;
          align-items: center !important;
          margin-bottom: 0.75rem !important;
          font-weight: 400 !important;
          cursor: pointer !important;
        }

        /* FILE UPLOAD - Smaller green button */
        .cog-form .cog-upload,
        .cog-form .cog-file-upload {
          padding: 0.75rem !important;
        }

        .cog-form .cog-upload button,
        .cog-form .cog-file-upload button,
        .cog-form button[data-test="upload-button"] {
          background-color: #15803d !important;
          border-color: #15803d !important;
          padding: 0.5rem 1.5rem !important;
          font-size: 0.875rem !important;
          max-width: 150px !important;
        }

        .cog-form .cog-upload button:hover,
        .cog-form .cog-file-upload button:hover,
        .cog-form button[data-test="upload-button"]:hover {
          background-color: #166534 !important;
          border-color: #166534 !important;
        }

        .cog-form textarea {
          min-height: 120px !important;
          resize: vertical !important;
        }

        .cog-form .cog-field-group,
        .cog-form .cog-form__fieldset {
          margin-bottom: 1.5rem !important;
        }

        .cog-form .cog-form__field-description {
          font-size: 0.75rem !important;
          color: #6b7280 !important;
          margin-top: 0.5rem !important;
        }

        /* Error messages */
        .cog-form .cog-error {
          color: #ef4444 !important;
          font-size: 0.875rem !important;
          margin-top: 0.25rem !important;
        }

        /* Success message */
        .cog-form .cog-success {
          background-color: #d1fae5 !important;
          color: #065f46 !important;
          padding: 1rem !important;
          border-radius: 0.5rem !important;
          margin-bottom: 1rem !important;
        }
      `}</style>

      <div className="cognito" ref={formContainerRef}></div>
    </motion.div>
  );
}

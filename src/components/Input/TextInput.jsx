import { motion } from "framer-motion";

const TextInput = ({isDarkMode, value, handleInputChange, textarea, label, error, name, autocomplete}) => {
    const InputComponent = textarea ? "textarea" : "input";

    // Shake animation if there's an error
    const shakeAnimation = {
        x: error ? [0, -5, 5, -5, 5, 0] : [0],
    };

    return (
        <motion.div animate={shakeAnimation} transition={{ duration: 0.4 }} className="relative">
            <InputComponent
                id={name} // link label
                name={name} // good for forms and autocomplete
                autoComplete={autocomplete}
                type="text"
                className={`w-full px-4 pt-6 pb-2 border rounded-xl transition-all duration-300 outline-none resize-none ${
                    isDarkMode
                        ? `bg-gray-800/50 text-white ${
                              error
                                  ? "border-red-500 bg-red-50"
                                  : "border-gray-700 focus:border-blue-500 focus:bg-gray-800/70"
                          }`
                        : `bg-white/80 text-gray-900 ${
                              error
                                  ? "border-red-500 bg-red-50"
                                  : "border-gray-300 focus:border-blue-500 focus:bg-white"
                          }`
                }`}
                value={value}
                onChange={({ target }) => handleInputChange(target.value)}
            />
            <label htmlFor={name} className="text-sm absolute left-4 top-2 pointer-events-none origin-left">
                {label}
            </label>
            {error && (
                <span className="text-red-500 text-sm mt-1 block">
                    This field is required or invalid.
                </span>
            )}
        </motion.div>
    );
}

export default TextInput

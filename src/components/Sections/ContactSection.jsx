import { useState, useRef } from "react";
import {
    motion,
    useInView,
    useScroll,
    useTransform,
} from "framer-motion";
import { Send } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import TextInput from "../Input/TextInput";
import SuccessModel from "../SuccessModel";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const { isDarkMode } = useTheme();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Added state to track errors
    const [formErrors, setFormErrors] = useState({
        name: false,
        email: false,
        message: false,
    });

    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const handleInputChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        // Reset errors
        setFormErrors({ name: false, email: false, message: false });

        let errors = {};

        // Check required fields
        if (!name) errors.name = true;
        if (!email) errors.email = true;
        if (!message) errors.message = true;

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) errors.email = true;

        // If there are errors, stop submission and highlight
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setIsSubmitting(true);

        try {
            await emailjs.send(
                'service_f9fidvy',
                'template_s2e6pvi',
                formData,           // { name, email, message }
                '2sEGfE3IMO26-oT8D'   // EmailJS public key
            );

            setShowSuccess(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setShowSuccess(false), 3000);

        } catch (err) {
            console.error('Email send error:', err);
            alert('Failed to send email. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };


    return <section
        id="contact"
        ref={sectionRef}
        className={`py-24 px-6 ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        } relative overflow-hidden`}
    >
        {/* Background Elements */}
        <motion.div style={{ y }} className="">
            <div
                className={`absolute top--20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${
                    isDarkMode ? "bg-blue-500" : "bg-blue-400"
                } `}
            />
            <div
                className={`absolute bottom-40 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${
                    isDarkMode ? "bg-purple-500" : "bg-purple-400"
                }`}
            />
        </motion.div>

        <div className="max-w-6xl mx-auto relative z-10">
            {/* Section Header */}
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="text-center mb-20"
            >
                <motion.div
                    variants={itemVariants}
                    className={`text-sm uppercase tracking-widest ${
                        isDarkMode ? "text-gray-500" : "text-gray-600"
                    } mb-4`}
                >
                    Let's Connect
                </motion.div>

                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-5xl font-light mb-6"
                >
                    Get In 
                    <span className="text-teal-500 font-medium"> Touch </span>
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className={`text-xl max-w-2xl mx-auto ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                    Looking for a full-time role? Same here! Let’s connect if you’re hiring.
                </motion.p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Contact Form */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <motion.div
                        variants={itemVariants}
                        className={`p-8 rounded-2xl border ${
                            isDarkMode
                            ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                            : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
                        }`}
                    >
                        <h3 className="text-2xl font-medium mb-8">
                            Send me a message
                        </h3>

                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <TextInput
                                    label="Your Name"
                                    value={formData.name}
                                    name="name"
                                    autocomplete="name"
                                    handleInputChange={(text) => handleInputChange("name", text)}
                                    error={formErrors.name}
                                    isDarkMode={isDarkMode}
                                />

                                <TextInput
                                    label="Email Address"
                                    value={formData.email}
                                    name="email"
                                    autocomplete="email"
                                    handleInputChange={(text) => handleInputChange("email", text)}
                                    error={formErrors.email}
                                    isDarkMode={isDarkMode}
                                />
                            </div>

                                <TextInput
                                    label="Your Message"
                                    value={formData.message}
                                    name="message"
                                    autocomplete="off"
                                    textarea
                                    handleInputChange={(text) => handleInputChange("message", text)}
                                    error={formErrors.message}
                                    isDarkMode={isDarkMode}
                                />

                            <motion.button
                                disabled={isSubmitting}
                                whileHover={{ y: -2, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-teal-400 text-white py-4 rounded-xl text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                                onClick={handleSubmit}
                            >


                                {isSubmitting ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                        />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Contact Info & Social Links */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="space-y-8"
                >
                    {/* Contact Information */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
                        <div className="space-y-4">
                            {CONTACT_INFO.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    variants={itemVariants}
                                    whileHover={{ x: 4 }}
                                    className={`flex items-center space-x-4 p-4 rounded-xl ${
                                        isDarkMode
                                        ? "bg-gray-800/30 hover:bg-gray-800/50"
                                        : "bg-gray-50/50 hover:bg-gray-100/50"
                                    } transition-all duration-300`}
                                >
                                    <div
                                        className={`p-3 rounded-lg ${
                                            isDarkMode ? "bg-gray-700" : "bg-white"
                                        }`}
                                    >
                                        <info.icon size={20} className="text-teal-600" />
                                    </div>
                                    <div>
                                        <div
                                            className={`text-sm ${
                                                isDarkMode ? "text-gray-500" : "text-gray-600"
                                            }`}
                                        >
                                            {info.label}
                                        </div>
                                        <div className="font-medium">{info.value}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-medium mb-6">Follow Me</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {SOCIAL_LINKS.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`flex items-center space-x-3 p-4 rounded-xl border transition-all duration-300 ${
                                        isDarkMode
                                        ? "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                                        : "bg-white/80 border-gray-200 hover:border-gray-300"
                                    } ${social.bgColor} ${social.color}`}
                                >
                                    <social.icon size={20} />
                                    <span className="font-medium">{social.name}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Availability Status */}
                    <motion.div
                        variants={itemVariants}
                        className={`p-6 rounded-xl border ${
                            isDarkMode
                            ? "bg-green-500/10 border-green-500/20"
                            : "bg-green-50 border-green-200"
                        }`}
                    >
                        <div className="flex items-center space-x-3 mb-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="font-medium text-green-500">
                                Available for work
                            </span>
                        </div>

                        <p
                            className={`text-sm ${
                                isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                        >
                            I'm currently available for full-time opportunities.
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom CTA */}
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="text-center mt-20"
            >
                <motion.div
                    variants={itemVariants}
                    className={`max-w-2xl mx-auto p-8 rounded-2xl border ${
                        isDarkMode
                        ? "bg-gray-800/30 border-gray-700"
                        : "bg-gray-50/50 border-gray-200"
                    }`}
                >
                    <h3 className="text-xl font-medium mb-4">Want to know more?</h3>
                    <p
                        className={`${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                        } mb-6`}
                    >
                        Check out my resume for my full experience and skills.
                    </p>
                    <a href="https://drive.google.com/file/d/1nKZ7PVKyMAhIQRwFFTAhh3ZwsOuvByE6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <motion.button
                            whileHover={{ y: -2, scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className={`px-6 py-3 rounded-full border font-medium transition-all duration-300 ${
                                isDarkMode
                                ? "border-gray-600 hover:border-teal-500 hover:text-teal-400"
                                : "border-gray-300 hover:border-teal-500 hover:text-teal-600"
                            }`}
                        >
                            View Resume 
                        </motion.button>
                    </a>
                </motion.div>
            </motion.div>

        </div>

        <SuccessModel 
            showSuccess={showSuccess} 
            setShowSuccess={setShowSuccess}
            isDarkMode={isDarkMode}
        />
    </section>
}

export default ContactSection

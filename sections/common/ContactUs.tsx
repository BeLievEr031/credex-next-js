"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { useRouter } from "next/navigation";
import TallyForm from "react-tally"
interface ContactFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    id: string;
}
export default function ContactFormModal({ isOpen, onClose, id }: ContactFormModalProps) {
    const router = useRouter();
    const [formLoaded, setFormLoaded] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFormLoaded(false);
        }
    }, [isOpen]);


    // Animation variants
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const modalVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 50,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center px-4"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        variants={backdropVariants}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="p-6 md:p-10 relative w-full max-w-[600px] max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
                        variants={modalVariants}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 size-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            aria-label="Close modal"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 4L4 12M4 4L12 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>

                        {/* Form Content */}
                        <h2 className="text-[32px] md:text-[40px] text-center font-pp-mori-semibold font-semibold mb-6">
                            Contact Us
                        </h2>
                        <div className="relative w-full h-[500px]">
                            {!formLoaded && (
                                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/90 text-gray-700">
                                    <div className="mb-2 h-6 w-6 animate-spin rounded-full border-4 border-gray-300 border-t-gray-600" />
                                    <p className="text-sm font-medium">Loading form…</p>
                                </div>
                            )}

                            <TallyForm
                                formId={id}
                                onFormLoad={() => setFormLoaded(true)}
                                onSubmission={(event) => {
                                    console.log('Form submitted!', event);
                                    router.push('/form-submission');
                                }}

                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    </motion.div>


                </motion.div>
            )}


        </AnimatePresence>
    );
}


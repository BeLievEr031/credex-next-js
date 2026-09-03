"use client";

import { useState, useEffect, useId } from "react";
import clsx from "clsx";
import { motion } from "motion/react";
import { Check, Loader2 } from "lucide-react";
import Select, { type MultiValue } from "react-select";
import { countries, getEmojiFlag, type TCountryCode } from "countries-list";
import { inquiryApi } from "@/api/api";

const platforms = [
    { platform: "OpenAI", color: "#000000" },
    { platform: "Anthropic/Claude", color: "#D97706" },
    { platform: "AWS", color: "#9f5704" },
    { platform: "AWS (Claude Models via Bedrock)", color: "#FF9900" },
    { platform: "GCP/Vertex AI (Gemini Models)", color: "#34A853" },
    { platform: "Azure OpenAI (GPT Models)", color: "#0078D4" },
    { platform: "MongoDB", color: "#47A248" },
    { platform: "Supabase", color: "#3ECF8E" },
    { platform: "PostHog", color: "#F97316" },
    { platform: "Eleven Labs", color: "#8B5CF6" },
    { platform: "Digital Ocean", color: "#0080FF" },
    { platform: "Deepgram", color: "#4F46E5" },
    { platform: "Cursor", color: "#5F50E1" },
    { platform: "Lambda (GPUs)", color: "#EC4899" },
];

const labelClasses = "block text-[15px] md:text-[16px] font-bold mb-1.5 text-black/85 ml-1";

export default function ContactForm({ type = "BUYER" }: { type?: "SELLER" | "BUYER" }) {
    const options = platforms.map((item) => ({
        label: item.platform,
        value: item.platform,
        color: item.color
    }));

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        selectedLicenses: [] as string[],
        otherPlatforms: "",
        message: "",
        type: type,
        countryCode: "+971"
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const countrySelectId = useId();
    const platformSelectId = useId();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name) newErrors.name = "Full name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.phone) newErrors.phone = "Phone number is required";
        if (!formData.countryCode) newErrors.phone = "Phone number is required";
        if (!formData.companyName) newErrors.companyName = "Company name is required";
        if (formData.selectedLicenses.length === 0) newErrors.selectedLicenses = "Please select at least one platform";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        try {
            const { countryCode, ...restOfData } = formData;
            const data = {
                ...restOfData,
                phone: `${formData.countryCode} - ${formData.phone}`
            };
            await inquiryApi.submitInquiry({ ...data, type: type });
            setIsSuccess(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                companyName: "",
                selectedLicenses: [],
                otherPlatforms: "",
                message: "",
                type: type,
                countryCode: "+971"
            });
        } catch (error) {
            console.error("Submission failed:", error);
        } finally {
            setIsSubmitting(false);
        }

        setTimeout(() => setIsSuccess(false), 7000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrs = { ...prev };
                delete newErrs[name];
                return newErrs;
            });
        }
    };

    const handleSelectChange = (newValue: MultiValue<{ label: string; value: string }>) => {
        const selected = newValue ? newValue.map(opt => opt.value) : [];
        setFormData(prev => ({ ...prev, selectedLicenses: selected }));

        if (errors.selectedLicenses) {
            setErrors(prev => {
                const newErrs = { ...prev };
                delete newErrs.selectedLicenses;
                return newErrs;
            });
        }
    };

    const inputClasses = (name: string) => clsx(
        "w-full bg-[#f9f9f9] border-2 rounded-xl px-4 py-3 outline-none transition-all duration-200 text-[14px] md:text-[16px]",
        errors[name] ? "border-red-400 focus:border-red-500" : "border-transparent focus:border-black/10 focus:bg-white"
    );

    const countryOptions = Object.entries(countries).map(([iso, data]) => ({
        value: `+${data.phone[0]}`,
        label: `${getEmojiFlag(iso as TCountryCode)} ${data.name} (+${data.phone[0]})`,
        shortLabel: `${getEmojiFlag(iso as TCountryCode)} +${data.phone[0]}`
    }));

    const selectedOption = countryOptions.find(
        (opt) => opt.value === (formData.countryCode || "+971")
    );

    return (
        <div className="min-h-[850px] md:min-h-[780px] flex flex-col text-left">
            {isSuccess ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border-2 border-green-100 p-10 rounded-3xl text-center my-auto w-full"
                >
                    <div className="size-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                        <Check size={32} strokeWidth={3} />
                    </div>
                    <h3 className="text-2xl font-pp-mori-semibold font-semibold mb-2">Message Received!</h3>
                    <p className="text-black/60">
                        Thanks for sharing your information! Our team will be in touch with you shortly.</p>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6 w-full">
                    {/* Name */}
                    <div>
                        <label className={labelClasses}>Full Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Sarah Ferguson"
                            className={inputClasses("name")}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Email */}
                        <div>
                            <label className={labelClasses}>Email Address <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="team@credex.rocks"
                                className={inputClasses("email")}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className={labelClasses}>Phone Number <span className="text-red-500">*</span></label>
                            <div className="flex gap-2 items-center">
                                {isMounted ? (
                                    <Select
                                        instanceId={countrySelectId}
                                        options={countryOptions}
                                        value={selectedOption}
                                        onChange={(option) => {
                                            handleChange({
                                                target: {
                                                    name: "countryCode",
                                                    value: option ? option.value : "+971",
                                                },
                                            } as React.ChangeEvent<HTMLInputElement>);
                                        }}
                                        formatOptionLabel={(option, { context }) =>
                                            context === "value" ? option.shortLabel : option.label
                                        }
                                        placeholder="Select..."
                                        classNamePrefix="react-select"
                                        isSearchable={true}
                                        styles={{
                                            control: (provided, state) => ({
                                                ...provided,
                                                minHeight: "auto",
                                                height: "48px",
                                                borderColor: state.isFocused ? "#3b82f6" : provided.borderColor,
                                                boxShadow: state.isFocused ? "0 0 0 1px #3b82f6" : "none",
                                                "&:hover": {
                                                    borderColor: state.isFocused ? "#3b82f6" : provided.borderColor
                                                },
                                                borderRadius: "12px"
                                            }),
                                            valueContainer: (provided) => ({
                                                ...provided,
                                                height: "100%",
                                                padding: "0 8px",
                                            }),
                                            input: (provided) => ({
                                                ...provided,
                                                margin: 0,
                                                padding: 0,
                                            }),
                                            indicatorsContainer: (provided) => ({
                                                ...provided,
                                                height: "100%",
                                            }),
                                        }}
                                    />
                                ) : (
                                    <div className="h-[48px] min-w-[120px] bg-white border border-neutral-200 rounded-[12px] flex items-center justify-between px-3 text-black text-[14px] select-none pointer-events-none">
                                        <span>🇦🇪 +971</span>
                                        <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="text-gray-400 fill-current"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
                                    </div>
                                )}

                                {/* Phone Number Input */}
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="(555) 000-0000"
                                    className={`flex-1 ${inputClasses("phone")}`}
                                />
                            </div>

                            {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
                        </div>
                    </div>

                    {/* Company Name */}
                    <div>
                        <label className={labelClasses}>Company Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Credex"
                            className={inputClasses("companyName")}
                        />
                        {errors.companyName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.companyName}</p>}
                    </div>

                    {/* Select Platforms (react-select) */}
                    <div className="relative">
                        <label className={labelClasses}>Select Platforms <span className="text-red-500">*</span></label>
                        {isMounted ? (
                            <Select
                                instanceId={platformSelectId}
                                isMulti
                                options={options}
                                value={options.filter(opt => formData.selectedLicenses.includes(opt.value))}
                                onChange={handleSelectChange}
                                placeholder="Select platforms..."
                                className={clsx(
                                    "text-[14px] md:text-[16px]",
                                    errors.selectedLicenses ? "border-red-400" : "border-transparent"
                                )}
                                classNamePrefix="select"
                                styles={{
                                    control: (base, state) => ({
                                        ...base,
                                        backgroundColor: "#f9f9f9",
                                        borderColor: errors.selectedLicenses ? "#f87171" : state.isFocused ? "rgba(0,0,0,0.1)" : "transparent",
                                        borderWidth: "2px",
                                        borderRadius: "0.75rem",
                                        padding: "4px",
                                        boxShadow: "none",
                                        "&:hover": {
                                            borderColor: state.isFocused ? "rgba(0,0,0,0.1)" : "transparent",
                                        }
                                    }),
                                    multiValue: (base, state) => ({
                                        ...base,
                                        backgroundColor: state.data.color ? `${state.data.color}eb` : "#000000eb",
                                        color: "#fff",
                                        borderRadius: "8px",
                                        padding: "2px 6px",
                                        margin: "2px",
                                    }),
                                    multiValueLabel: (base) => ({
                                        ...base,
                                        color: "#fff",
                                        fontSize: "13px",
                                        fontWeight: "600",
                                        paddingLeft: "4px",
                                    }),
                                    multiValueRemove: (base) => ({
                                        ...base,
                                        color: "#fff",
                                        cursor: "pointer",
                                        "&:hover": {
                                            backgroundColor: "rgba(255,255,255,0.2)",
                                            color: "#fff",
                                        }
                                    }),
                                    option: (base, state) => ({
                                        ...base,
                                        backgroundColor: state.isFocused ? "rgba(0,0,0,0.05)" : "white",
                                        color: "black",
                                        cursor: "pointer",
                                        fontSize: "14px",
                                        padding: "10px 15px",
                                        "&:active": {
                                            backgroundColor: "rgba(0,0,0,0.1)",
                                        }
                                    })
                                }}
                            />
                        ) : (
                            <div className={clsx(
                                "w-full bg-[#f9f9f9] border-2 rounded-xl px-4 py-3 text-[14px] md:text-[16px] text-black/35 flex items-center justify-between select-none pointer-events-none",
                                errors.selectedLicenses ? "border-red-400" : "border-transparent"
                            )}>
                                <span>Select platforms...</span>
                                <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="text-gray-400 fill-current"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
                            </div>
                        )}
                        {errors.selectedLicenses && <p className="text-red-500 text-xs mt-1 ml-1">{errors.selectedLicenses}</p>}
                    </div>

                    {/* Other Platforms */}
                    <div>
                        <label className={labelClasses}>Others (Please specify)</label>
                        <input
                            type="text"
                            name="otherPlatforms"
                            value={formData.otherPlatforms}
                            onChange={handleChange}
                            placeholder="e.g. Gemma AI, etc."
                            className={inputClasses("otherPlatforms")}
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className={labelClasses}>Message (Optional)</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                            rows={4}
                            className={clsx(inputClasses("message"), "resize-none")}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={clsx(
                            "w-full py-4 rounded-xl font-pp-mori-semibold font-semibold text-[16px] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer",
                            isSubmitting
                                ? "bg-gray-200 text-black/40 cursor-not-allowed"
                                : "bg-black text-white hover:bg-black/90 active:scale-[0.98]"
                        )}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="animate-spin" size={20} />
                                Sending...
                            </>
                        ) : (
                            "SUBMIT"
                        )}
                    </button>
                </form>
            )}
        </div>
    );
}

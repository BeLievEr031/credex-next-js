"use client";
import { useState } from 'react';
import { 
    Eye, 
    EyeOff, 
    ChevronRight, 
    ChevronLeft, 
    CheckCircle, 
    User, 
    Mail, 
    Phone, 
    Globe, 
    Building, 
    Briefcase, 
    Lock, 
    Shield, 
    Check, 
    ArrowRight, 
    Sparkles,
    CheckCircle2
} from 'lucide-react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { createTenant } from '@/api/api';

interface FormData {
    // Step 1: Personal Info
    name: string;
    email: string;
    country: string;
    phone: string;
    companyEmail: string;
    designation: string;

    // Step 2: Account Credentials
    username: string;
    password: string;
    confirmPassword: string;
}

interface FormErrors {
    [key: string]: string;
}

const RefferalForm = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [currentStep, setCurrentStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        country: 'INDIA',
        phone: '',
        companyEmail: '',
        designation: '',
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [apiError, setApiError] = useState<string | null>(null);

    // Detect if we are on seller or buyer referral path
    const pathname = usePathname();
    const isSeller = pathname ? pathname.includes('seller') : false;
    const partnerRole = isSeller ? 'Seller Referral Partner' : 'Buyer Referral Partner';

    const validateStep1 = () => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Full name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.country) {
            newErrors.country = 'Country selection is required';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\+?[\d\s\-()]{7,}$/.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        // Optional fields validation
        if (formData.companyEmail.trim()) {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.companyEmail)) {
                newErrors.companyEmail = 'Please enter a valid company email address';
            }
        }

        return newErrors;
    };

    const validateStep2 = () => {
        const newErrors: FormErrors = {};

        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
        } else if (formData.username.length < 3) {
            newErrors.username = 'Username must be at least 3 characters';
        } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
            newErrors.username = 'Username can only contain alphanumeric characters and underscores';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        return newErrors;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        
        // Clear api error reactively
        if (apiError) setApiError(null);
        
        // Clear errors reactively as user types
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleNext = () => {
        const step1Errors = validateStep1();
        if (Object.keys(step1Errors).length === 0) {
            setErrors({});
            setApiError(null);
            setCurrentStep(2);
        } else {
            setErrors(step1Errors);
        }
    };

    const handleBack = () => {
        setErrors({});
        setApiError(null);
        setCurrentStep(1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const step2Errors = validateStep2();
        if (Object.keys(step2Errors).length === 0) {
            setErrors({});
            setApiError(null);
            setIsSubmitting(true);
            
            const payload: Record<string, any> = {
                username: formData.username,
                name: formData.name,
                email: formData.email,
                companyEmail: formData.companyEmail || undefined,
                designation: formData.designation || undefined,
                country: formData.country,
                phone: formData.phone,
                password: formData.password,
            };

            const referrerCode = searchParams.get('code')?.replace(/^["']|["']$/g, '');
            if (referrerCode) {
                payload.refferarCode = referrerCode;
            }

            try {
                const response = await createTenant(isSeller ? "SELLER" : "BUYER", payload);
                setIsSubmitting(false);
                setSubmitted(true);
                console.log('Registration schema submitted:', response.data);
            } catch (error: any) {
                setIsSubmitting(false);
                const message = error.response?.data?.message || error.message || 'An error occurred during registration. Please try again.';
                setApiError(message);
            }
        } else {
            setErrors(step2Errors);
        }
    };

    // Live password validators
    const isPasswordLengthValid = formData.password.length >= 8;
    const isPasswordMatching = formData.password !== '' && formData.password === formData.confirmPassword;

    // List of countries
    const countries = [
        { code: 'INDIA', name: 'India' },
        { code: 'USA', name: 'United States' },
        { code: 'UK', name: 'United Kingdom' },
        { code: 'CANADA', name: 'Canada' },
        { code: 'AUSTRALIA', name: 'Australia' },
        { code: 'SINGAPORE', name: 'Singapore' },
        { code: 'UAE', name: 'United Arab Emirates' },
        { code: 'GERMANY', name: 'Germany' },
        { code: 'FRANCE', name: 'France' },
        { code: 'OTHER', name: 'Other Country' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50/40 via-slate-50 to-green-50/40 font-pp-mori-regular relative overflow-hidden flex flex-col">
            <Navbar />
            
            {/* Ambient background decoration blobs */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#086841]/5 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            <div className="flex-grow flex items-center justify-center px-4 py-28 z-10">
                <div className="w-full max-w-5xl bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
                    
                    {/* Left Column: Branding, Steps Progress & Trusted Stats */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-[#086841] to-[#043320] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                        {/* Background subtle mesh overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>
                        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-emerald-400/20 rounded-full blur-[80px] pointer-events-none"></div>

                        <div className="relative z-10 space-y-8">
                            <div>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/5">
                                    <Sparkles size={12} className="animate-pulse" />
                                    Credex Partner
                                </span>
                                <h1 className="text-3xl md:text-4xl font-semibold font-pp-mori-semibold leading-tight">
                                    Create Your Account
                                </h1>
                                <p className="text-emerald-100/70 text-sm mt-2 font-pp-mori-regular">
                                    Join us as a <span className="text-emerald-300 font-semibold">{partnerRole}</span> and begin optimizing cloud/AI resources.
                                </p>
                            </div>

                            {/* Stepper Display */}
                            <div className="relative pl-1 py-4 space-y-10">
                                {/* Vertical progress line */}
                                <div className="absolute left-[17px] top-6 bottom-6 w-0.5 bg-white/10">
                                    <div 
                                        className="w-full bg-emerald-400 transition-all duration-500 ease-out" 
                                        style={{ height: currentStep === 1 ? '0%' : '100%' }}
                                    ></div>
                                </div>

                                {/* Step 1 */}
                                <div className="flex items-center gap-4 group relative">
                                    <div className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 z-10 ${
                                        currentStep > 1 
                                            ? 'bg-emerald-400 border-emerald-400 text-[#043320]' 
                                            : 'bg-[#086841] border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.3)]'
                                    }`}>
                                        {currentStep > 1 ? <Check size={18} strokeWidth={3} /> : <span className="font-semibold text-sm">1</span>}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-white font-pp-mori-semibold">Profile Details</h3>
                                        <p className="text-xs text-emerald-200/60 font-pp-mori-regular">Name, Contact, & Designation</p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="flex items-center gap-4 group relative">
                                    <div className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 z-10 ${
                                        currentStep === 2 
                                            ? 'bg-[#086841] border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.3)]' 
                                            : 'bg-white/5 border-white/20 text-white/50'
                                    }`}>
                                        <span className="font-semibold text-sm">2</span>
                                    </div>
                                    <div>
                                        <h3 className={`font-semibold text-sm font-pp-mori-semibold ${currentStep === 2 ? 'text-white' : 'text-white/50'}`}>Security Credentials</h3>
                                        <p className={`text-xs font-pp-mori-regular ${currentStep === 2 ? 'text-emerald-200/60' : 'text-white/30'}`}>Username & Password</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer trust badge */}
                        <div className="relative z-10 pt-8 border-t border-white/10 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-emerald-300">
                                    <Shield size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold font-pp-mori-semibold text-white">Secure Escrow Platform</p>
                                    <p className="text-[11px] text-emerald-200/50 font-pp-mori-regular">Escrow guarantee & identity shielding built-in</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Multi-Step Interactive Form */}
                    <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center bg-white/40">
                        {submitted ? (
                            /* Step 3: SUCCESS STATE */
                            <div className="text-center py-10 px-4 space-y-6 flex flex-col items-center justify-center h-full">
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-75"></div>
                                    <CheckCircle2 size={80} className="text-[#086841] relative z-10 bg-white rounded-full shadow-lg" />
                                </div>
                                
                                <div className="space-y-2 max-w-sm">
                                    <h2 className="text-2xl font-bold font-pp-mori-semibold text-gray-900">Registration Complete!</h2>
                                    <p className="text-sm text-gray-500 font-pp-mori-regular">
                                        Your partner account has been created successfully. Welcome to the Credex network.
                                    </p>
                                </div>

                                <div className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-100 text-left w-full max-w-sm">
                                    <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">Registered Details</p>
                                    <div className="space-y-1 text-xs text-gray-600 font-pp-mori-regular">
                                        <p><span className="font-semibold text-gray-800">Partner:</span> {formData.name}</p>
                                        <p><span className="font-semibold text-gray-800">Username:</span> @{formData.username}</p>
                                        <p><span className="font-semibold text-gray-800">Country:</span> {formData.country}</p>
                                        <p><span className="font-semibold text-gray-800">Role:</span> {partnerRole}</p>
                                    </div>
                                </div>

                                <button 
                                    onClick={() => router.push('/')}
                                    className="px-8 py-3 bg-[#086841] hover:bg-[#065032] text-white rounded-xl font-semibold font-pp-mori-semibold shadow-lg shadow-emerald-900/10 hover:shadow-emerald-900/20 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center gap-2"
                                >
                                    Proceed to Home Page
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-between h-full">
                                <div className="space-y-6">
                                    {/* Header block for current step */}
                                    <div>
                                        <h2 className="text-xl font-bold font-pp-mori-semibold text-gray-900">
                                            {currentStep === 1 ? 'Personal Details' : 'Credentials Setup'}
                                        </h2>
                                        <p className="text-xs text-gray-500 font-pp-mori-regular">
                                            {currentStep === 1 
                                                ? 'Provide your contact and company details to get verified.' 
                                                : 'Secure your partner account with a username and password.'
                                            }
                                        </p>
                                    </div>

                                    {/* API Error Message */}
                                    {apiError && (
                                        <div className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 text-red-800 animate-fadeIn">
                                            <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0 mt-0.5">
                                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-xs font-semibold font-pp-mori-semibold">Registration Failed</p>
                                                <p className="text-xs font-pp-mori-regular opacity-90 font-mono">{apiError}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 1 FIELDS */}
                                    {currentStep === 1 && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            {/* Full Name */}
                                            <div className="space-y-1.5 md:col-span-2">
                                                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider flex justify-between">
                                                    <span>Full Name</span>
                                                    <span className="text-red-500 font-bold">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                                        <User size={16} />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        className={`w-full pl-10 pr-4 py-3 bg-gray-50/50 border ${
                                                            errors.name ? 'border-red-400 ring-4 ring-red-500/5' : 'border-gray-200 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/5 focus:bg-white'
                                                        } rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none font-pp-mori-regular text-sm`}
                                                        placeholder="John Doe"
                                                    />
                                                </div>
                                                {errors.name && <p className="text-xs text-red-500 font-pp-mori-regular">{errors.name}</p>}
                                            </div>

                                            {/* Email Address */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider flex justify-between">
                                                    <span>Email Address</span>
                                                    <span className="text-red-500 font-bold">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                                        <Mail size={16} />
                                                    </div>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className={`w-full pl-10 pr-4 py-3 bg-gray-50/50 border ${
                                                            errors.email ? 'border-red-400 ring-4 ring-red-500/5' : 'border-gray-200 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/5 focus:bg-white'
                                                        } rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none font-pp-mori-regular text-sm`}
                                                        placeholder="johndoe@gmail.com"
                                                    />
                                                </div>
                                                {errors.email && <p className="text-xs text-red-500 font-pp-mori-regular">{errors.email}</p>}
                                            </div>

                                            {/* Phone Number */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider flex justify-between">
                                                    <span>Phone Number</span>
                                                    <span className="text-red-500 font-bold">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                                        <Phone size={16} />
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        className={`w-full pl-10 pr-4 py-3 bg-gray-50/50 border ${
                                                            errors.phone ? 'border-red-400 ring-4 ring-red-500/5' : 'border-gray-200 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/5 focus:bg-white'
                                                        } rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none font-pp-mori-regular text-sm`}
                                                        placeholder="+919876543211"
                                                    />
                                                </div>
                                                {errors.phone && <p className="text-xs text-red-500 font-pp-mori-regular">{errors.phone}</p>}
                                            </div>

                                            {/* Country Select */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider flex justify-between">
                                                    <span>Country</span>
                                                    <span className="text-red-500 font-bold">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                                        <Globe size={16} />
                                                    </div>
                                                    <select
                                                        name="country"
                                                        value={formData.country}
                                                        onChange={handleInputChange}
                                                        className={`w-full pl-10 pr-4 py-3 bg-gray-50/50 border ${
                                                            errors.country ? 'border-red-400 ring-4 ring-red-500/5' : 'border-gray-200 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/5 focus:bg-white'
                                                        } rounded-xl text-gray-900 transition-all duration-200 outline-none font-pp-mori-regular text-sm appearance-none`}
                                                    >
                                                        {countries.map((c) => (
                                                            <option key={c.code} value={c.code}>
                                                                {c.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {/* Custom indicator icon for select */}
                                                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-400">
                                                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                {errors.country && <p className="text-xs text-red-500 font-pp-mori-regular">{errors.country}</p>}
                                            </div>

                                            {/* Designation (Optional) */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex justify-between">
                                                    <span>Designation</span>
                                                    <span className="text-gray-400 font-normal italic lowercase">(optional)</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                                        <Briefcase size={16} />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="designation"
                                                        value={formData.designation}
                                                        onChange={handleInputChange}
                                                        className="w-full pl-10 pr-4 py-3 bg-gray-50/50 border border-gray-200 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/5 focus:bg-white rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none font-pp-mori-regular text-sm"
                                                        placeholder="Software Engineer"
                                                    />
                                                </div>
                                            </div>

                                            {/* Company Email (Optional) */}
                                            <div className="space-y-1.5 md:col-span-2">
                                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex justify-between">
                                                    <span>Company Email</span>
                                                    <span className="text-gray-400 font-normal italic lowercase">(optional)</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                                        <Building size={16} />
                                                    </div>
                                                    <input
                                                        type="email"
                                                        name="companyEmail"
                                                        value={formData.companyEmail}
                                                        onChange={handleInputChange}
                                                        className={`w-full pl-10 pr-4 py-3 bg-gray-50/50 border ${
                                                            errors.companyEmail ? 'border-red-400 ring-4 ring-red-500/5' : 'border-gray-200 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/5 focus:bg-white'
                                                        } rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none font-pp-mori-regular text-sm`}
                                                        placeholder="john.doe@credex.com"
                                                    />
                                                </div>
                                                {errors.companyEmail && <p className="text-xs text-red-500 font-pp-mori-regular">{errors.companyEmail}</p>}
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 2 FIELDS */}
                                    {currentStep === 2 && (
                                        <div className="space-y-5">
                                            {/* Username */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider flex justify-between">
                                                    <span>Username</span>
                                                    <span className="text-red-500 font-bold">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                                        <User size={16} />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        value={formData.username}
                                                        onChange={handleInputChange}
                                                        className={`w-full pl-10 pr-4 py-3 bg-gray-50/50 border ${
                                                            errors.username ? 'border-red-400 ring-4 ring-red-500/5' : 'border-gray-200 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/5 focus:bg-white'
                                                        } rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none font-pp-mori-regular text-sm`}
                                                        placeholder="johndoe"
                                                    />
                                                </div>
                                                {errors.username && <p className="text-xs text-red-500 font-pp-mori-regular">{errors.username}</p>}
                                            </div>

                                            {/* Password */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider flex justify-between">
                                                    <span>Password</span>
                                                    <span className="text-red-500 font-bold">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                                        <Lock size={16} />
                                                    </div>
                                                    <input
                                                        type={showPassword ? 'text' : 'password'}
                                                        name="password"
                                                        value={formData.password}
                                                        onChange={handleInputChange}
                                                        className={`w-full pl-10 pr-12 py-3 bg-gray-50/50 border ${
                                                            errors.password ? 'border-red-400 ring-4 ring-red-500/5' : 'border-gray-200 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/5 focus:bg-white'
                                                        } rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none font-pp-mori-regular text-sm`}
                                                        placeholder="Enter complex password"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-[#086841] transition-colors"
                                                    >
                                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                                    </button>
                                                </div>
                                                {errors.password && <p className="text-xs text-red-500 font-pp-mori-regular">{errors.password}</p>}
                                            </div>

                                            {/* Confirm Password */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider flex justify-between">
                                                    <span>Confirm Password</span>
                                                    <span className="text-red-500 font-bold">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                                        <Lock size={16} />
                                                    </div>
                                                    <input
                                                        type={showConfirmPassword ? 'text' : 'password'}
                                                        name="confirmPassword"
                                                        value={formData.confirmPassword}
                                                        onChange={handleInputChange}
                                                        className={`w-full pl-10 pr-12 py-3 bg-gray-50/50 border ${
                                                            errors.confirmPassword ? 'border-red-400 ring-4 ring-red-500/5' : 'border-gray-200 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/5 focus:bg-white'
                                                        } rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none font-pp-mori-regular text-sm`}
                                                        placeholder="Confirm your password"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-[#086841] transition-colors"
                                                    >
                                                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                                    </button>
                                                </div>
                                                {errors.confirmPassword && <p className="text-xs text-red-500 font-pp-mori-regular">{errors.confirmPassword}</p>}
                                            </div>

                                            {/* Password Strength Checklist */}
                                            <div className="bg-slate-50/80 rounded-xl p-4 border border-gray-100 space-y-2">
                                                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Security Requirements</p>
                                                <ul className="space-y-1.5">
                                                    <li className="flex items-center gap-2 text-xs font-pp-mori-regular">
                                                        <span className={`w-4 h-4 rounded-full flex items-center justify-center border text-[10px] ${
                                                            isPasswordLengthValid 
                                                                ? 'bg-emerald-100 border-emerald-300 text-emerald-700' 
                                                                : 'bg-white border-gray-300 text-gray-400'
                                                        }`}>
                                                            {isPasswordLengthValid ? <Check size={10} strokeWidth={3} /> : '•'}
                                                        </span>
                                                        <span className={isPasswordLengthValid ? 'text-emerald-700 font-medium' : 'text-gray-500'}>
                                                            At least 8 characters long
                                                        </span>
                                                    </li>
                                                    <li className="flex items-center gap-2 text-xs font-pp-mori-regular">
                                                        <span className={`w-4 h-4 rounded-full flex items-center justify-center border text-[10px] ${
                                                            isPasswordMatching 
                                                                ? 'bg-emerald-100 border-emerald-300 text-emerald-700' 
                                                                : 'bg-white border-gray-300 text-gray-400'
                                                        }`}>
                                                            {isPasswordMatching ? <Check size={10} strokeWidth={3} /> : '•'}
                                                        </span>
                                                        <span className={isPasswordMatching ? 'text-emerald-700 font-medium' : 'text-gray-500'}>
                                                            Passwords must match exactly
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Form Actions Footer */}
                                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                    {currentStep === 1 ? (
                                        <>
                                            {/* Dummy space for left alignment */}
                                            <div></div>
                                            <button
                                                type="button"
                                                onClick={handleNext}
                                                className="px-6 py-3 bg-[#086841] hover:bg-[#065032] text-white rounded-xl font-semibold font-pp-mori-semibold flex items-center gap-2 shadow-lg shadow-emerald-900/5 hover:shadow-emerald-900/15 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer text-sm"
                                            >
                                                Next Setup
                                                <ChevronRight size={16} />
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                type="button"
                                                onClick={handleBack}
                                                className="px-5 py-3 border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50 rounded-xl font-semibold font-pp-mori-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer text-sm"
                                            >
                                                <ChevronLeft size={16} />
                                                Back
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`px-6 py-3 ${
                                                    isSubmitting 
                                                        ? 'bg-emerald-700/60 cursor-not-allowed' 
                                                        : 'bg-[#086841] hover:bg-[#065032] hover:shadow-emerald-900/15 transform hover:-translate-y-0.5'
                                                } text-white rounded-xl font-semibold font-pp-mori-semibold shadow-lg shadow-emerald-900/5 transition-all duration-200 cursor-pointer text-sm flex items-center gap-2`}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Submitting...
                                                    </>
                                                ) : (
                                                    <>
                                                        Create Account
                                                        <CheckCircle size={16} />
                                                    </>
                                                )}
                                            </button>
                                        </>
                                    )}
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefferalForm;
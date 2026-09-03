import axiosInstance from "./axios";

// --- Testimonial APIs ---
export const testimonialApi = {
    getTestimonials: (params?: { type?: "SELLER" | "BUYER" }) =>
        axiosInstance.get("/testimonial", { params }),
};

// --- Product APIs ---
export const productApi = {
    getProducts: (params?: { page?: number; limit?: number; active?: boolean; validity?: string }) =>
        axiosInstance.get("/product/view", { params }),
    getProduct: (id: string) => axiosInstance.get(`/product/view/${id}`),
};

// --- Newsletter APIs ---
export const newsletterApi = {
    subscribe: (data: { email: string }) =>
        axiosInstance.post("/newsletter/subscribe", data),
};

// --- Blog APIs ---
export const blogApi = {
    getBlogs: (params?: { page?: number; limit?: number; active?: boolean }) =>
        axiosInstance.get("/blog/list", { params }),
    getBlogBySlug: (slug: string) =>
        axiosInstance.get(`/blog/list/${slug}`),
};

// --- Inquiry APIs ---
export const inquiryApi = {
    submitInquiry: (data: Record<string, unknown>) =>
        axiosInstance.post("/inquiry", data),
};


// Tenant creation API
export const createTenant = (type: "SELLER" | "BUYER", data: Record<string, unknown>) =>
    axiosInstance.post(`/auth/register-tenant/${type.toLowerCase()}`, data);



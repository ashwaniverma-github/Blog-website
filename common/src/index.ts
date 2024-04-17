import { number, z } from "zod";

export const signupInput = z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()
})

export const signinInput = z.object({
    email:z.string().email(),
    password:z.string()
})

export const createBlogInput = z.object({
    title:z.string(),
    content:z.string()
})

export const updateBlogInput = z.object({
    title:z.string(),
    content:z.string(),
    id:z.number()
})

export type SignupInput = z.infer< typeof signupInput>  
export type SigninInput = z.infer< typeof signupInput>  
export type CreateBlogInput = z.infer< typeof signupInput>  
export type UpdateBlogInput = z.infer< typeof signupInput>  
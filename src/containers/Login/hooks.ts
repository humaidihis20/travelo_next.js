import type { SubmitHandler } from "react-hook-form"

import { useForm } from "react-hook-form"

import { FormInputs } from './interfaces';

export const useComponentLogic = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>()

    const onSubmit: SubmitHandler<FormInputs>  = (data) => {
        console.log('data::', data)
    }

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
    }
}
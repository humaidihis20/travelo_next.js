import Layout from "components/Layout";

import Button from "components/Button";

import styles from "./Login.module.css";

import Input from "components/Input";

import { useComponentLogic } from "./hooks";

import { REG_EXP } from "src/constants/regex";

const Login = () => {
    const { register, handleSubmit, onSubmit, errors } = useComponentLogic()
    
    return (
        <Layout noFooter>
            <section className={styles.section}>
                <div className={styles.formWrapper}>
                    <p className="text-heading-3 font-label font-extrabold">Masuk</p>
                    <div className="flex mt-3">
                        <p className="text-heading-5 text-gray-50 font-semibold">
                            Belum punya akun?
                        </p>
                        <a href="#" className="text-heading-5 text-blue-100 font-semibold ml-2 hover:underline">
                            Daftar disini
                        </a>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-8">
                        <Input 
                            register={register}
                            errors={errors}
                            required={{ value: true, message: 'Email harus diisi' }}
                            pattern={{ 
                                value:  REG_EXP.email,
                                message: 'Gunakan Format Email Dengan Benar'
                            }}
                            type="email" 
                            label="email"
                            name="email"
                            placeholder="Masukkan Email"
                            className="mb-6"
                        />

                        <Input 
                            register={register}
                            errors={errors}
                            required={{ value: true, message: 'Password harus diisi' }}
                            type="password" 
                            label="password"
                            name="password"
                            placeholder="Masukkan Password"
                            className="mt-1"
                        />

                        <a href="#" className="text-heading-5 text-blue-100 font-semibold mt-7 mb-4  hover:underline">Lupa Kata Sandi?</a>

                        <Button type="submit" fullWidth>Masuk</Button>
                    </form>

                    <p className="text-heading-5 text-gray-70 my-8">
                        Atau Masuk Dengan
                    </p>
                    <Button className="mb-4" variant="google">Masuk Dengan Google</Button>
                    <Button className="mb-0" variant="facebook">Masuk Dengan Facebook</Button>
                </div>
            </section>
        </Layout>
    )
}

export default Login;
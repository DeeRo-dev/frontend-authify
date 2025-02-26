import { FormRegister } from "@/components/forms/register/Register";



export default function Register() {
    return (
     <section className="flex flex-col w-3/4 gap-4">
                <h1 className="text-4xl font-bold text-[#1B9FF1] mb-8">Registro de usuario</h1>
                <FormRegister/>
            </section>
    );
}

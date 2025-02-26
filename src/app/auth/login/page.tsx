import { FormLogin } from "@/components/forms/login/Login";

const Login: React.FC = () => {
    return (
        <section className="flex flex-col w-96 gap-4">
            <h1 className="text-4xl font-bold">Inicio de sesión</h1>
            <FormLogin />
        </section>
    );
}

export default Login;

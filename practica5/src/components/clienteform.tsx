import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clienteSchema, type ClienteType } from "../schemas/cliente.schema";

type Props = {
  onGuardar: (cliente: ClienteType) => void;
  onCerrar: () => void;
};

function ClienteForm({ onGuardar, onCerrar }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ClienteType>({
    resolver: zodResolver(clienteSchema),
  });

  const guardarCliente = (data: ClienteType) => {
    onGuardar(data);
    reset();
    onCerrar();
  };

  return (
    <form onSubmit={handleSubmit(guardarCliente)}>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          {...register("primer_nombre")}
          placeholder="Primer Nombre"
          className={`input input-bordered w-full h-12 px-4 ${errors.primer_nombre ? "input-error" : ""}`}
        />
        {errors.primer_nombre && (
          <span className="text-red-500" role="alert" aria-live="polite">
            {errors.primer_nombre.message}
          </span>
        )}

        <input
          type="text"
          {...register("segundo_nombre")}
          placeholder="Segundo Nombre"
          className={`input input-bordered w-full h-12 px-4 ${errors.segundo_nombre ? "input-error" : ""}`}
        />
        {errors.segundo_nombre && (
          <span className="text-red-500" role="alert" aria-live="polite">
            {errors.segundo_nombre.message}
          </span>
        )}

        <input
          type="text"
          {...register("primer_apellido")}
          placeholder="Primer Apellido"
          className={`input input-bordered w-full h-12 px-4 ${errors.primer_apellido ? "input-error" : ""}`}
        />
        {errors.primer_apellido && (
          <span className="text-red-500" role="alert" aria-live="polite">
            {errors.primer_apellido.message}
          </span>
        )}

        <input
          type="text"
          {...register("segundo_apellido")}
          placeholder="Segundo Apellido"
          className={`input input-bordered w-full h-12 px-4 ${errors.segundo_apellido ? "input-error" : ""}`}
        />
        {errors.segundo_apellido && (
          <span className="text-red-500" role="alert" aria-live="polite">
            {errors.segundo_apellido.message}
          </span>
        )}

        <input
          type="text"
          {...register("email")}
          placeholder="Email"
          className={`input input-bordered w-full h-12 px-4 ${errors.email ? "input-error" : ""}`}
        />
        {errors.email && (
          <span className="text-red-500" role="alert" aria-live="polite">
            {errors.email.message}
          </span>
        )}

        <input
          type="text"
          {...register("telefono")}
          placeholder="Teléfono"
          className={`input input-bordered w-full h-12 px-4 ${errors.telefono ? "input-error" : ""}`}
        />
        {errors.telefono && (
          <span className="text-red-500" role="alert" aria-live="polite">
            {errors.telefono.message}
          </span>
        )}

        <input
          type="text"
          {...register("direccion")}
          placeholder="Dirección"
          className={`input input-bordered w-full h-12 px-4 ${errors.direccion ? "input-error" : ""}`}
        />
        {errors.direccion && (
          <span className="text-red-500" role="alert" aria-live="polite">
            {errors.direccion.message}
          </span>
        )}

        <button type="submit" className="btn btn-soft btn-accent w-full h-12">
          Guardar Cliente
        </button>
      </div>
    </form>

  );
}

export default ClienteForm;

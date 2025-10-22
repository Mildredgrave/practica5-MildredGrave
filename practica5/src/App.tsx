import { useState } from "react";
import ClienteForm from "./components/clienteform";
import { type ClienteType } from "./schemas/cliente.schema";
import "./App.css";

function App() {
  const [clientes, setClientes] = useState<ClienteType[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const agregarCliente = (cliente: ClienteType) => {
    setClientes([...clientes, cliente]);
  };

  return (
    <div>
      <div className="navbar w-full bg-green-500 shadow-sm">
        <a className="btn btn-ghost text-xl text-white">Lista de Clientes</a>
      </div>

      <div className="p-6">

        {clientes.length === 0 ? (
          <p className="text-gray-500">No hay clientes registrados.</p>
        ) : (
          <table className="table table-zebra w-full">
            <thead className="bg-sky-400 text-white">
              <tr>
                <th>Nombre Completo</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Dirección</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((c, i) => (
                <tr key={i}>
                  <td>{`${c.primer_nombre} ${c.segundo_nombre ?? ""} ${c.primer_apellido} ${c.segundo_apellido ?? ""}`}</td>
                  <td>{c.email}</td>
                  <td>{c.telefono}</td>
                  <td>{c.direccion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="mt-6">
          <button className="btn btn-soft btn-accent" onClick={() => setIsOpen(true)}>
            Agregar Cliente
          </button>
        </div>

        {isOpen && (
          <dialog open className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg mb-4">Nuevo Cliente</h3>
              <ClienteForm onGuardar={agregarCliente} onCerrar={() => setIsOpen(false)} />
            </div>
            <form method="dialog" className="modal-backdrop" onClick={() => setIsOpen(false)}>
              <button>cerrar</button>
            </form>
          </dialog>
        )}
      </div>
    </div>
  );
}

export default App;

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ItemPedido({datos}) {
  // eslint-disable-next-line react/prop-types
  const { id,fecha,hora,status}= datos;
  return (
    <section className=" border border-black/25  rounded-xl p-2  px-6 mb-4">
      <Link to={id} className="flex justify-between items-center ">
        <div>
            <h3 className="text-lg font-medium mb-2">Pedido : {id}</h3>
            <p>Realizado : {fecha}</p>
            <p>Hora : {hora}</p>
           <div className="my-1">
             <span className={`px-3 py-1 rounded-lg font-medium capitalize ${status === 'En proceso' ? 'bg-green-400	' : ''}`}>{status}</span>
           </div>
        </div>
        <div>
            <svg viewBox="0 0 24 24" fill="none" className="w-7 md:w-9" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V10.9673M10.4 21H13.6C15.8402 21 16.9603 21 17.816 20.564C18.5686 20.1805 19.1805 19.5686 19.564 18.816C20 17.9603 20 16.8402 20 14.6V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V14.6C4 16.8402 4 17.9603 4.43597 18.816C4.81947 19.5686 5.43139 20.1805 6.18404 20.564C7.03968 21 8.15979 21 10.4 21Z"
                  stroke="#000000"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </g>
            </svg>
        </div>
      </Link>
    </section>
  );
}

export default ItemPedido;

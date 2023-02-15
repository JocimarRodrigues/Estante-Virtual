import "./Modal.css";

const Modal = ({
  mostrarModal,
  titulo,
  fecharModal,
  imagem,
  sinopse,
}) => {
  return (
    <>
      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-conteudo">
            <div className="fechar">
              <button onClick={fecharModal}>X</button>
            </div>
            <div className="modal-grid">
              <img src={imagem}></img>
              <h1>{titulo}</h1>
              <h2>Descrição</h2>
              <h2></h2>
              <h4>{sinopse}</h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

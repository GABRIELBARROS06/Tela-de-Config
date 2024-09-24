import React from 'react';
import { FaSearch, FaHeadset,  FaTrashAlt  } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import { GoGraph } from "react-icons/go";

function Configuracoes() {
  return (
    <div className="configuracoes">
      {/* Cabeçalho */}
      <header>
        <button>
          
        </button>
        <h2>Configurações</h2>
      </header>

      {/* Barra de Pesquisa */}
      <div className="search-bar">
      <FaSearch />
        <input type="text" placeholder="Pesquisar..."  />
      </div>

      {/* Lista de Opções */}
      
      <div className="options-list">
      <button className="perfil">
      <FaRegUser />
        <p>Meu perfil</p>
      </button>
      <button className="suport">
      <FaHeadset />
        <p>Suporte/Denuncia</p>
        </button>
      <button className="sobre">
      <IoMdAlert />
        <p>Sobre Nós</p>
        </button>
          <button className="nivel">
          <GoGraph />
          <p>Verificar Nivel</p>
          </button>
          <button className="excluir">
          <FaTrashAlt />
          <p>Excluir Conta</p>
          </button>
      </div>

      {/* Botão Excluir Conta */}
      
    </div>
  );
}

export default Configuracoes;
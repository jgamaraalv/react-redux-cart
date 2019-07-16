import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/kit-3-pares-de-sapatenis-sapatofran-sw-masculino/56/HAP-0151-256/HAP-0151-256_zoom2.jpg"
          alt="Tênis"
        />
        <strong>Tênis</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/kit-3-pares-de-sapatenis-sapatofran-sw-masculino/56/HAP-0151-256/HAP-0151-256_zoom2.jpg"
          alt="Tênis"
        />
        <strong>Tênis</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/kit-3-pares-de-sapatenis-sapatofran-sw-masculino/56/HAP-0151-256/HAP-0151-256_zoom2.jpg"
          alt="Tênis"
        />
        <strong>Tênis</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}

import React from "react";

class Datas extends React.Component {
  render() {
    return(
      <fieldset>

        <label>
          Nome:
          <input type="text" name="name" maxlength="40" />
        </label>

        <label>
          Email:
          <input type="email" name="email" maxlength="50" />
        </label>

        <label>
          CPF:
          <input type="text" name="cpf" maxlength="11" />
        </label>

        <label>
          Endereço:
          <input type="text" name="endereco" maxlength="200" />
        </label>

        <label>
          Cidade:
          <input type="text" name="Cidade" maxlength="28" />
        </label>

        <label>
          Estado:
          <input type="text" name="estado" />
        </label>

        <label>
          Tipo:
          <input type="radio" name="tipo" />casa
          <input type="radio" name="tipo" />apartamento
        </label>

      </fieldset>
    )
  }
}

export default Datas;
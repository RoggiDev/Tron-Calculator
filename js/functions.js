// Notifica cuando ya cargó la página
window.onload = () => {
  Swal.fire({
    icon: "success",
    title: "Bienvenido a Tron Calculator",
    text: "Un proyecto para hacer diferentes operaciones usando únicamente 2 números",
    theme: "dark",
    customClass: {
      confirmButton: "c-confirm-button",
    },
  });
};

// Agrega el número al display
const numberInput = (button) => {
  const numero = button.textContent.trim();

  const operador = document.getElementById("operatorInput").textContent.trim();

  if (operador == "") {
    const input01 = document.getElementById("input01");

    input01.textContent += numero;
  } else {
    const input02 = document.getElementById("input02");

    input02.classList.add("ms-2");
    input02.textContent += numero;
  }

  const result = document.getElementById("result");

  if (result.value != "") {
    result.value = "";
  }
};

// Agrega el operador matemático
const operatorInput = (button) => {
  const operador = button.textContent.trim();
  const operatorInput = document.getElementById("operatorInput");

  operatorInput.textContent = operador;

  const input01 = document.getElementById("input01");
  const input02 = document.getElementById("input02");
  const result = document.getElementById("result");

  // Si ya existe resultado
  if (result.value != "" && result.value !== "Operación desconocida") {
    input01.textContent = result.value;
    input01.classList.add("me-2");

    result.value = "";
    input02.textContent = "";
    input02.classList.remove("ms-2");
  } else {
    if (input01.textContent == "") {
      input01.textContent = "0";
    }

    input01.classList.add("me-2");
  }
};

// Compara qué el operador y realiza la operación correspondiente
const operacion = () => {
  const operador = document.getElementById("operatorInput").textContent.trim();

  let numero01 = document.getElementById("input01").textContent.trim();
  if (numero01 == "") {
    numero01 = 0;
    document.getElementById("input01").textContent = "0";
    document.getElementById("input01").classList.add("me-2");
  } else {
    numero01 = parseFloat(numero01);
  }

  let numero02 = document.getElementById("input02").textContent.trim();

  if (numero02 == "") {
    numero02 = 0;
    document.getElementById("input02").textContent = "0";
    document.getElementById("input02").classList.add("ms-2");
  } else {
    numero02 = parseFloat(numero02);
  }

  let resultado = 0;

  switch (operador) {
    case "+":
      resultado = suma(numero01, numero02);
      break;
    case "-":
      resultado = resta(numero01, numero02);
      break;
    case "x":
      resultado = multiplicacion(numero01, numero02);
      break;
    case "÷":
      resultado = division(numero01, numero02);
      break;
    default:
      // En lugar de operación no disponible
      resultado = "Operación desconocida";
      document.getElementById("input01").textContent = "";
      document.getElementById("operatorInput").textContent = "";
      document.getElementById("input02").textContent = "";

      document.getElementById("input01").classList.remove("me-2");
      document.getElementById("input02").classList.remove("ms-2");
      break;
  }

  document.getElementById("result").value = resultado;
};

// Suma ambos números
const suma = (numero01, numero02) => {
  let respuesta = 0;

  respuesta = numero01 + numero02;

  return respuesta;
};

// Resta ambos números
const resta = (numero01, numero02) => {
  let respuesta = 0;

  respuesta = numero01 - numero02;

  return respuesta;
};

// Resta ambos números
const multiplicacion = (numero01, numero02) => {
  let respuesta = 0;

  respuesta = numero01 * numero02;

  return respuesta;
};

// Resta ambos números
const division = (numero01, numero02) => {
  let respuesta = 0;

  respuesta = numero01 / numero02;

  return respuesta;
};

// Borra los inpuuts,la  operación y el resultado del display
const resetearCalculadora = () => {
  document.getElementById("input01").textContent = "";
  document.getElementById("operatorInput").textContent = "";
  document.getElementById("input02").textContent = "";

  document.getElementById("input01").classList.remove("me-2");
  document.getElementById("input02").classList.remove("ms-2");

  document.getElementById("result").value = "";
};

// Borra el último input
const deleteInput = () => {
  const input01 = document.getElementById("input01");
  const operatorInput = document.getElementById("operatorInput");
  const input02 = document.getElementById("input02");

  if (input02.textContent.trim() != "") {
    input02.textContent = input02.textContent.slice(0, -1);

    if (input02.textContent.trim() == "") {
      input02.classList.remove("ms-2");
    }
  } else if (
    input02.textContent.trim() === "" &&
    operatorInput.textContent.trim() != ""
  ) {
    operatorInput.textContent = "";
    input01.classList.remove("me-2");
  } else if (
    input02.textContent.trim() === "" &&
    operatorInput.textContent.trim() === "" &&
    input01.textContent.trim() != ""
  ) {
    input01.textContent = input01.textContent.slice(0, -1);
  }

  document.getElementById("result").value = "";
};

// Event Listeners
const resultBtn = document.getElementById("resultBtn");
const resetearBtn = document.getElementById("resetearBtn");
const deleteBtn = document.getElementById("deleteBtn");

resultBtn.addEventListener("click", operacion);
resetearBtn.addEventListener("click", resetearCalculadora);
deleteBtn.addEventListener("click", deleteInput);

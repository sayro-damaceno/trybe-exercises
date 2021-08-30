// Parte I;
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const client = order.name;
  const phone = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const ap = order.address.apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${client}, Telefone: ${phone}, R. ${street}, Nº: ${number}, AP: ${ap}`)
}

// customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment.total = 50;

  console.log(`Olá ${order.name}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${order.payment.total},00.`);
}

// orderModifier(order);

// Parte II

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// ex1
const addTurn = (object, key, value) => object[key] = value;
addTurn(lesson2, 'turno', 'manhã');

// ex2
const keysList = object => Object.keys(object);

// ex3
const objectLength = object => Object.keys(object).length;

// ex4
const valuesList = object => Object.values(object);

// ex5
const allLesssons = Object.assign({}, { lesson1, lesson2, lesson3 });

// ex6
const totalAlunos = obj => {
  const lesson1Alunos =  obj.lesson1.numeroEstudantes;
  const lesson2Alunos =  obj.lesson2.numeroEstudantes;
  const lesson3Alunos =  obj.lesson3.numeroEstudantes;

  return lesson1Alunos + lesson2Alunos + lesson3Alunos;
}

// ex7
const getValueByNumber = (obj,number) => Object.values(obj)[number];

// ex8
const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));
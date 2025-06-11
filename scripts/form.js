const products = [
  { id: 'fc-1888', name: 'Flux Capacitor' },
  { id: 'fc-2050', name: 'Power Laces'    },
  { id: 'fs-1987', name: 'Time Circuits'  },
  { id: 'ac-2000', name: 'Low Voltage Reactor' },
  { id: 'jj-1969', name: 'Warp Drive'     }
];

function populateProductOptions() {
  const select = document.querySelector('#productName');

  products.forEach(prod => {
    const opt = document.createElement('option');
    opt.value = prod.name;          // ➜ valor = nome, conforme especificação
    opt.textContent = prod.name;
    select.appendChild(opt);
  });
}

document.addEventListener('DOMContentLoaded', populateProductOptions);

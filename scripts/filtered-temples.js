// Footer
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Menu Hamburguer
const hamburgerBtn = document.querySelector('#hamburgerBtn');
const hamburgerIcon = document.querySelector('#hamburgerIcon');
const navMenu = document.querySelector('#primaryNav');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  hamburgerIcon.textContent = navMenu.classList.contains('open') ? '✖' : '☰';
});

// Temples array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
    templeName: "Salvador Brazil",
    location: "Bahia, Brasil",
    dedicated: "2024, October, 20",
    area: 29963,
    imageUrl:"https://www.churchofjesuschrist.org/imgs/UlFyrs8Nz5vUZKIrUWEuLcfmvVr5wLfBnrDFKkAy/full/500%2C/0/default"
  },
  {
    templeName: "Curitiba Brazil",
    location: "Curitiba, Brasil",
    dedicated: "2008, June, 1",
    area: 27850 ,
    imageUrl:"https://www.churchofjesuschrist.org/imgs/ea7e0f39c8e26d163a4dfedfcb1ce5c41d650b5b/full/500%2C/0/default"
  },
  {
    templeName: "Bangkok Thailand",
    location: "Bangkok, Thailand",
    dedicated: "2023, October, 22",
    area: 48525 ,
    imageUrl:"https://www.churchofjesuschrist.org/imgs/4052d9f8ff0e11edb9dbeeeeac1e97aea1b93079/full/500%2C/0/default"
  },
];

// Render function
const templeContainer = document.querySelector("#templeContainer");

function displayTemples(list) {
  templeContainer.innerHTML = "";
  list.forEach((temple) => {
    const card = document.createElement("section");
    card.classList.add("temple-card");
    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}">
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;
    templeContainer.appendChild(card);
  });
}

// Initial display
displayTemples(temples);

// Filter logic
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const filter = e.target.dataset.filter;

    let filtered = temples;

    switch (filter) {
      case "old":
        filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
        break;
      case "new":
        filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
        break;
      case "large":
        filtered = temples.filter(t => t.area > 90000);
        break;
      case "small":
        filtered = temples.filter(t => t.area < 10000);
        break;
      case "home":
      default:
        filtered = temples;
    }

    displayTemples(filtered);
  });
});

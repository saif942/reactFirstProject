import React from "react";
import Dynamic from "./Dynamic";
let cons = [
  {
    id: 1,
    name: "saif",
    img: "https://www.hindustantimes.com/ht-img/img/2024/04/16/550x309/Cricket_1713260878026_1713260990583.jpg",
    number: "9140128101",
    email: "saif@gmail.com",
  },
  {
    id: 2,
    name: "Ghar",
    img: "https://www.hindustantimes.com/ht-img/img/2024/04/16/550x309/Cricket_1713260878026_1713260990583.jpg",
    number: "8115905022",
    email: "ghar@gmail.com",
  },
  {
    id: 3,
    name: "akki",
    img: "https://www.hindustantimes.com/ht-img/img/2024/04/16/550x309/Cricket_1713260878026_1713260990583.jpg",
    number: "9568851308",
    email: "akki@gmail.com",
  },
];

function createCard(contact) {
  return (
    <Dynamic
      key={contact.id}
      name={contact.name}
      img={contact.img}
      number={contact.number}
      email={contact.email}
    />
  );
}

function Apps() {
  return (
    <div>
      <h1>List of people</h1>
      {cons.map(createCard)}
    </div>
  );
}
export default Apps;

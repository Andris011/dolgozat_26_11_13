import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

let data = [
  {"id": 0, "nev": "afa", "ev": 24542, "ar": 1324},
  {"id": 1, "nev": "afhsfdhhfda", "ev": 2422, "ar": 1324},
  {"id": 2, "nev": "afasgsfdh", "ev": 2422, "ar": 1324},
  {"id": 3, "nev": "afasgfd", "ev": 2422, "ar": 1324},
  {"id": 4, "nev": "agsdgfa", "ev": 2422, "ar": 1324}
]


function show()
{
  let place = document.getElementById("cards");
  place.innerHTML = "";

  let sumPrice = 0;

  for (const elem in data)
  {
    console.log(data[elem])

  let cardDiv = document.createElement("div");
  cardDiv.className = "card"
  cardDiv.style = "width: 18rem"

  let cardbodyDiv = document.createElement("div");
  cardbodyDiv.className = "card-body";

  let cardTitle = document.createElement("h5");
  cardTitle.className = "card-text";
  cardTitle.textContent = data[elem].nev;
  
  let delete_button = document.createElement("button")
  delete_button.innerHTML = "Törlés"
  delete_button.className = "btn btn-danger"
  
  delete_button.addEventListener("click", () => {
    data.splice(data.indexOf, 1);
    show();

    sumPrice += data[elem].ar;
  })

  let cardText = document.createElement("p");
  cardText.innerHTML = `id: ${data[elem].id}, ev: ${data[elem].ev}, ar: ${data[elem].ar}`;

  cardbodyDiv.appendChild(cardTitle);
  cardbodyDiv.appendChild(cardText);
  cardbodyDiv.appendChild(delete_button);

  cardDiv.appendChild(cardbodyDiv);

  place.appendChild(cardDiv);

  let statisztikaHely = document.getElementById("statisztika");
  statisztikaHely.innerHTML = ""

  let numberOfElements = document.createElement("p")

  numberOfElements.innerHTML = data.length;
  
  statisztikaHely.appendChild(numberOfElements);
  statisztikaHely.appendChild(sumPrice);


  }
}


function addData() {
  event.preventDefault()
  console.log("aaa")

  let id = document.getElementById("id").value;
  let nev = document.getElementById("nev").value;
  let kategoria = document.getElementById("kategoria").value;
  let ev = document.getElementById("ev").value;
  let ar = document.getElementById("ar").vale;

  if (id && nev && kategoria && ev != NaN && ar != NaN) {
    console.log("aaaaa")
    data.push({"id": id, "nev": nev, "kategoria": kategoria, "ev": ev, "ar": ar})
    console.log(data)
    show();
  }
  else {
    alert("Minden mező kitöltése kötelező!")
  }


}


function init()
{
  show()
}


document.addEventListener("submit", addData)
document.addEventListener("DOMContentLoaded", init)
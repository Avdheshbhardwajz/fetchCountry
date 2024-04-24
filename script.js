let btn = document.querySelector("a");
let Sortbtn = document.querySelector(".sortbtn");
let container = document.querySelector(".container");
btn.addEventListener("click", async function () {
  try {
    let apiData = await fetch(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries"
    );
    let data = await apiData.json();
    console.log(`data fetched ${data}`);
    showData(data);
  } catch (error) {
    console.log(error);
  }
});

Sortbtn.addEventListener("click", async function () {
  try {
    let apiData = await fetch(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=desc"
    );
    let data = await apiData.json();
    console.log(`data fetched ${data}`);
    showData(data);
  } catch (error) {
    console.log(error);
  }
});
function showData(data) {
  container.innerHTML = "";
  data.data.forEach((ele) => {
    let box = document.createElement("div");
    box.classList.add("card");
    box.innerHTML = `<div class="card-content">
        <h2>${ele.country}</h2>
        
        <p>Population: ${ele.population} | Rank: ${ele.Rank}</p>
      </div>`;
    container.appendChild(box);
  });
}

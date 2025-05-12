// grap all items in html

let item_counter = 0;
let total_price_value = 0;

const show_items_btn = document.querySelector("#show_items_list");
const hide_items_btn = document.querySelector("#hide_items_list");

const show_price_btn = document.querySelector("#show_price");
const hide_price_btn = document.querySelector("#hide_price");

const total_items = document.querySelector(".total_items");
const total_price = document.querySelector(
  ".checkout .checkout_prices .total_price"
);

const item_btns = document.querySelectorAll("#item_btn");
const item_selected_btns = document.querySelectorAll("#selected");

// console.log(item_btns);
/* 
 create the function you need 
 {
    item_selected, done
    update_list, done
    update_Total_price, done
    show_item_lists, done
    show_total_price
}
*/
const items = document.querySelectorAll(".products .item_container");
console.log(items);

function generate_random_prices_for_items() {
  return Math.floor(Math.random() * (70000 - 200 + 1) + 200);
}

function select_item(btn) {
  const item_container = btn.closest(".item_container");
  //   const item_name = item_container.querySelector("figcaption");

  //   console.log(item_name.textContent);
  console.log("item selected");

  item_container.querySelector(".item_container #item_btn").style.display =
    "none";
  item_container.querySelector(".item_container #selected").style.display =
    "inline-block";
  update_list(btn, "add");
}

function Unselect_item(btn) {
  const item_container = btn.closest(".item_container");
  const item_name = item_container.querySelector("figcaption");

  console.log(item_name.textContent);
  console.log("item Removed");

  item_container.querySelector("#item_btn").style.display = "inline-block";
  item_container.querySelector("#selected").style.display = "none";

  update_list(btn, "remove");
}

function update_list(btn, keyword) {
  const item_container = btn.closest(".item_container");
  const item_name = item_container.querySelector("figcaption");
  const item_price = item_container.querySelector(".item_price .value").textContent;
  const items_list = document.querySelector(".items_list");

  console.log("price is:" + `${item_price}`);

  if (keyword == "add") {
    const new_li = document.createElement("li");

    new_li.textContent = `Item ${++item_counter}: ${item_name.textContent}      Price: ${item_price}`;
    new_li.setAttribute("name", item_name.textContent);

    items_list.insertAdjacentElement("beforeend", new_li);
    console.log(items_list != "");

    total_items.textContent = `Total Items: ${item_counter}`;
    update_Total_price(Number(item_price));
  }
  if (keyword == "remove") {
    console.log("remove item");
    const removeli = items_list.querySelector(
      `li[name="${item_name.textContent}"]`
    );
    if (removeli) {
      removeli.remove();
      item_counter--;
    }
    console.log(items_list != "");
    total_items.textContent += item_counter;
    total_items.textContent = `Total Items: ${item_counter}`;
    update_Total_price(-Number(item_price));
  }
}

function update_Total_price(add_price) {
  console.log("add_price=" + `${add_price}`);
  total_price_value += add_price;
  // console.log("Total="+`${total_price_value}`);
  total_price.innerHTML = `<span>Total Price: ${total_price_value}</span>`;
}

function show_item_list() {
  document.querySelector(".items_list").style.display = "block";
  document.querySelector("#show_items_list").style.display = "none";
  document.querySelector("#hide_items_list").style.display = "inline-block";
}
function hide_item_list() {
  document.querySelector(".items_list").style.display = "none";
  document.querySelector("#show_items_list").style.display = "inline-block";
  document.querySelector("#hide_items_list").style.display = "none";
}

function show_total_price() {
  document.querySelector(
    ".checkout .checkout_prices .total_price"
  ).style.display = "inline";
  document.querySelector(
    ".checkout .checkout_prices #show_price"
  ).style.display = "none";
  document.querySelector(
    ".checkout .checkout_prices #hide_price"
  ).style.display = "inline-block";
}

function hide_total_price() {
  document.querySelector(
    ".checkout .checkout_prices .total_price"
  ).style.display = "none";
  document.querySelector(
    ".checkout .checkout_prices #show_price"
  ).style.display = "inline-block";
  document.querySelector(
    ".checkout .checkout_prices #hide_price"
  ).style.display = "none";
}
// create the events and trigggers
// item_btns.onclick = select_item;

items.forEach((item) => {
  item.querySelector(".item_price .value").textContent = Number(
    generate_random_prices_for_items()
  );
});

item_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    select_item(btn);
  });
});

item_selected_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    Unselect_item(btn);
  });
});

show_items_btn.onclick = show_item_list;
hide_items_btn.onclick = hide_item_list;

show_price_btn.onclick = show_total_price;
hide_price_btn.onclick = hide_total_price;

total_items.textContent = `Total Items: ${item_counter}`;

// item_btns.forEach(btn =>{
//     btn.addEventListener("click", select_item(btn));
// });

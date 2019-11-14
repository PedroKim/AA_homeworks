function dinerBreakfast() {
  let orders = ["scrambled eggs", "bacon"];
  // console.log(`I'd like ${orders.join(" and ")} please.`);

  return function(newOrder) { // an annonymouse closure
    // callback closes over orders variable, which we can add newOrder to.
    orders.push(newOrder);
    console.log(`I'd like ${orders.join(" and ")} please.`);
  };
}

let bfastOrder = dinerBreakfast();
bfastOrder("chocolate chip pancakes");
bfastOrder("grits");
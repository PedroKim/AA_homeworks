function printCallback(titleized_names) {
  titleized_names.forEach(function (name) {
    console.log(name);
  });
}

function titleize(names, callback) {
  let titleized_names = names.map(name => "Mx. " + name + " Jingleheimer Schmidt");
  callback(titleized_names);
}

titleize(["Mary", "Brian", "Leo"], printCallback);
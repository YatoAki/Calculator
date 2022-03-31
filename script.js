function add(a,b) {
  return a+b;
}

function sub(a,b) {
  return a-b;
}

function multi(a,b) {
  return a*b;
}

function div(a,b) {
  return a/b;
}

function operator(a,b,sign) {
  if (sign === '+'){
    return add(a,b)
  }else if (sign === '-'){
    return sub(a,b)
  }else if (sign === '*'){
    return multi(a,b)
  }else if (sign === '/'){
    return div(a,b)
  }
}

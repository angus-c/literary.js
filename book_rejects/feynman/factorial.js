//using Ramanujan's approximation
function fractorail(n){
  with(Math) {
    var r = sqrt(PI)*pow(n/E,n);
    r *= pow(8*pow(n, 3) + 4*(n*n) + n + 1/30, 1/6);
    return r;
  }
}
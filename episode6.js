function pass(){
  var cohort = 'cohort9';
  console.log("Its a pass for ", cohort);
}

var cohort = 'cohort10';

function fail(cohort){
  console.log("Oh dear,", cohort, "has failed");
}

var cohort = "cohort11";
fail(cohort);
pass(cohort);

var resit = function(){
  fail(cohort)
  pass(cohort);
}

resit(cohort);
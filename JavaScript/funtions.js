var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

//function using for_in loop

function fun(a)
{
  for(mat of a)
  {
    console.log(mat)
  }
}

fun(materials)


function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

var z = prompt(" enter a number ");
console.log(test_prime(z)); 

if (test_prime(z)=== true)
{
    alert("prime");
  }
  else
  {
    alert("not prime");
  }
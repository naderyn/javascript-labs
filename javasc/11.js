
        var no1 = prompt("enter first number ");
		var no2 = prompt("enter second number ");
		var no3 = prompt("enter third number ");

		if (no1 > no2 && no1 > no3)
		{
				if (no2 > no3)
				{
					alert (no1 + "  @  " + no2 + "  @  " +no3);
				}
				else
				{
					 alert (no1 + "  @  " + no3 + "  @ " +no2);
				}
		}
		else if (no2 > no1 && no2 > no3)
		{
				if (no1 > no3)
				{
					 alert(no2 + "  @  " + no1 + "   @   " +no3);
				}
				else
				{
					 alert(no2 + "  @   " + no3 + "  @ " +no1);
				}
		}
		else if  (no3 > no1 && no3 > no2)
		{
				if (no1>no2)
				{
					alert(no3 + "   @    " + no1 + "   @   " +no2);
				}
				else
				{
					alert(no3 + "   @   " + no2 + "   @   " +no1);
				}
		}  
		
























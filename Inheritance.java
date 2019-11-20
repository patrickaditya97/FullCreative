package Full;
interface Inter1
{
	default void car()
	{
		System.out.println("Car is here");
	}
}

interface Inter2
{
	default void Bus()
	{
		System.out.println("Bus is here");
	}
}


public class Inheritance implements Inter1,Inter2{

	public void show() 
    { 
        // use super keyword to call the show 
        // method of PI1 interface 
		Inter1.super.car(); 
  
        // use super keyword to call the show 
        // method of PI2 interface 
		Inter2.super.Bus(); 
    } 
  
    public static void main(String args[]) 
    { 
        Inheritance d = new Inheritance(); 
        d.show(); 
    } 

}

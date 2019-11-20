package Full;
class PolyAdd
{
	static void print(int a)
	{
		System.out.println("This is an int " + a);
	}
	static void print(double a)
	{
		System.out.println("This is an double " + a);
	}
}


public class Polymorphism extends PolyAdd{

	public static void main(String[] args) {
		
		PolyAdd.print(11);
		PolyAdd.print(11.21);

	}
}
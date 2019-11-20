package Full;
abstract class NewClass
{

	public abstract void abstractmethod();
	
}

public class Abstraction extends NewClass
{

	@Override
	public void abstractmethod() {
		// TODO Auto-generated method stub
		System.out.println("This is abstract");
	}
	
	public static void main(String[] args)
	{
		Abstraction abstracts = new Abstraction();
		abstracts.abstractmethod();
	}
}
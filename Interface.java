package Full;

interface Intt
{
	public void age();
}

class Interface implements Intt
{
	public void age()
	{
		System.out.println("23");
	}
	public static void main(String[] args)
	{
		Interface ne = new Interface();
		ne.age();
	}
}

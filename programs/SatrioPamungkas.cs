using System;

namespace SingletonSatrio.Module;

public class Singleton
{
    private Singleton() 
    { 
        
    }
    
    private static Singleton _instanceClass;
    
    public static Singleton GetInstance()
    {
        if (_instanceClass == null)
        {
            _instanceClass = new Singleton();
        }
        return _instanceClass;
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        Singleton firstInstance = Singleton.GetInstance();
        Singleton secondInstance = Singleton.GetInstance();

        if (firstInstance == secondInstance)
        {
            Console.WriteLine("Both instance is simillar");
        }
    }
}

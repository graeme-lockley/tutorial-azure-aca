// The build of this is from the following page: https://docs.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis

var app = WebApplication.Create(args);

var fibonacci = new Fibonacci.Fibonacci();

app.MapGet("/api/v1/fibonacci/{n}", (System.Numerics.BigInteger n) => fibonacci.Calculate(n).ToString("D"));

app.Run("http://localhost:3000");

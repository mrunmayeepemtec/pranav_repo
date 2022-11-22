using CalculatorLib;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CalculatorWebapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

            //separate result for all method
        /*        public int GetValue()
                {
                    CalculatorLib.CalcOperations calcOperations=new CalculatorLib.CalcOperations();
                    int add = calcOperations.Add(10, 20);

                    return add;
                          }
        */
        //combine Result for all method
        [HttpGet]
        public IEnumerable<int> Get()
        {
            CalculatorLib.CalcOperations calcOperations = new CalculatorLib.CalcOperations();
            return new int[] {  calcOperations.Add(10, 20), calcOperations.Multiply(10, 20), calcOperations.Substract(10, 20), calcOperations.Divide(10, 20) };
          
        }
    }
}

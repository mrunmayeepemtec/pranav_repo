using ArithmaticMvc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ArithmaticMvc.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        [HttpPost]
        public ActionResult Index(Calculator calculator)
        {
            int num1, num2;
            num1 = calculator.value1;
            num2 = calculator.value2;
            if (calculator.calculate == "add")
            {
                calculator.result = num1 + num2;
            }
            else if (calculator.calculate == "sub")
            {
                calculator.result = num1 - num2;
            }
            else if (calculator.calculate == "mul")
            {
                calculator.result = num1 * num2;
            }
            else
            {
                calculator.result = num1 / num2;

            }
            ViewData["result"] = calculator.result;
            return View();
        }


        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
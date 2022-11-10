using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentList
{
    class Employee
    {
        int emp_id;
        string emp_dept;
        string emp_name;
        int emp_salary;

        static void Main(string[] args)
        {
            List<Employee> emp= new List<Employee>()
    {
          
        // Create 3 Student details
        new Employee{ emp_id = 1, emp_name = "Pranav",
                     emp_dept = "CSE", emp_salary = 2890},
        new Employee{ emp_id = 2, emp_name = "Shivam",
                     emp_dept = "EEE", emp_salary = 1222},
        new Employee{ emp_id = 3, emp_name = "Abc",
                     emp_dept = "EEE", emp_salary = 4333},
    };

            // Iterate the Employee 
            // using select function
            //IEnumerable<Student> Query = from student in stu select student;
            var result_set = emp.Where(emp => emp.emp_dept == "EEE").OrderByDescending(
                                sal => sal.emp_salary);
            // Display student details
            Console.WriteLine("ID  Name  Department Semester");
            Console.WriteLine("+++++++++++++++++++++++++++");
            foreach (Employee e in result_set)
            {

                // print Details
                Console.WriteLine(e.emp_id + "  " + e.emp_name + "   " + e.emp_dept + "    " + e.emp_salary);
            }
        }
    }
}

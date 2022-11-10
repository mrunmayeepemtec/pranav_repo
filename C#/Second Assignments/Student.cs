using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentList
{
    class Student
    {
        int stu_id;
        string stu_dept;
        string stu_name;
        int stu_semester;

        static void Main(string[] args)
        {
            List<Student> stu = new List<Student>()
    {
          
        // Create 3 Student details
        new Student{ stu_id = 1, stu_name = "Pranav",
                     stu_dept = "CSE", stu_semester = 2 },
        new Student{ stu_id = 2, stu_name = "Shivam",
                     stu_dept = "EEE", stu_semester = 1 },
        new Student{ stu_id = 3, stu_name = "Abc",
                     stu_dept = "EEE", stu_semester = 4},
    };

            // Iterate the Employee 
            // using select function
            IEnumerable<Student> Query = from student in stu select student;
            var result_set = stu.Where(stu => stu.stu_dept == "EEE").OrderByDescending(
                                sal => sal.stu_semester);
            // Display student details
            Console.WriteLine("ID  Name  Department Semester");
            Console.WriteLine("+++++++++++++++++++++++++++");
            foreach (Student e in result_set)
            {

                // print Details
                Console.WriteLine(e.stu_id+"  "+e.stu_name+"   "+e.stu_dept+"    "+e.stu_semester );
            }
        }
    }
}

namespace NewCrudPractice.Entities
{
    public class Company
    {
        public int Id { get; set; }
        public String? Name { get; set; }
        public String? Address { get; set; }
        public String? Country { get; set; }
        
        //List of Employee
        public List<Employee> Employees { get; set; }=new List<Employee>();


    }
}

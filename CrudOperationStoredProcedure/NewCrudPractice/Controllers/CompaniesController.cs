using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NewCrudPractice.Contracts;

namespace NewCrudPractice.Controllers
{
    [Route("api/companies")]
    [ApiController]
    public class CompaniesController : ControllerBase
    {
        private readonly ICompanyRepository _companyRepo;

        public CompaniesController(ICompanyRepository companyRepo)
        {
            _companyRepo = companyRepo;
        }

        //get All Employees
        [HttpGet]
        public async Task<IActionResult> GetCompanies() {
            var companies = await _companyRepo.GetCompanies();
            return Ok(companies);
        }

        [HttpGet("{id}", Name = "CompanyById")]
        public  async Task<IActionResult> GetCompany(int id)
        {
            var company=await _companyRepo.GetCompany(id);
            if(company == null)
            {
                return NotFound();
            }
            return Ok(company);
        }

        [HttpGet("ByEmployeeId/{id}")]
        public async Task<IActionResult> GetCompanyForEmployee(int id)
        {
            var company=await _companyRepo.GetCompanyByEmployeeId(id);
            if(company == null)
            {
                return NotFound();
            }
            return Ok(company);
        }

    } 
}

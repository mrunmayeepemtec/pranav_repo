using NewCrudPractice.Entities;

namespace NewCrudPractice.Contracts
{
    public interface ICompanyRepository
    {
        public Task<IEnumerable<Company>> GetCompanies();
        public Task<Company> GetCompany(int id);
        public Task<Company> GetCompanyByEmployeeId(int id);

    }
}

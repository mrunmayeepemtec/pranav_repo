using Dapper;
using NewCrudPractice.Context;
using NewCrudPractice.Entities;
using System.Data;

namespace NewCrudPractice.Repository
{
    public class CompanyRepository : Contracts.ICompanyRepository
    {
        private readonly DapperContext _context;

        public CompanyRepository(DapperContext context)
        {
            _context = context;
        }

        public  async Task<IEnumerable<Company>> GetCompanies()
        {
            var query = "Select Name,Address,Country from Companies";

            using(var connection= _context.CreateConnection())
            {
                var companies= await connection.QueryAsync<Company>(query);
                return companies.ToList();
            }
        }

        public async Task<Company> GetCompany(int id)
        {
            var query = "Select Name,Address,Country from Companies where Id = @Id";

            using (var connection = _context.CreateConnection())
            {
                var company = await connection.QuerySingleOrDefaultAsync<Company>(query,new { id });
                return company;
            }
        }

        
    
        public async Task<Company> GetCompanyByEmployeeId(int id)
        {
            var procedureName = "ShowCompanyByEmployeeId";
            var parameters = new DynamicParameters();
            parameters.Add("Id", id, DbType.Int32, ParameterDirection.Input);
            using (var connection = _context.CreateConnection())
            {
                var company = await connection.QueryFirstOrDefaultAsync<Company>(procedureName, parameters ,commandType:CommandType.StoredProcedure);

                return company;
            }
        }
    }
}
 
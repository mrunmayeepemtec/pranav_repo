using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System;
using ADOAssignment.Model;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography.X509Certificates;

namespace ADOAssignment.Repositories
{
    public class ItemRepo
    {
        private readonly string _connectionString;
        public IConfiguration Configuration { get; }

        public ItemRepo(IConfiguration configuration)
        {
            Configuration = configuration;
            _connectionString = Configuration["ConnectionStrings:DefaultConnection"];
        }
        public IEnumerable<ItemModel> Get()
        {
            var items = new List<ItemModel>();
            DataTable dataTable = new DataTable();

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                string sql = "Select * from items";
                SqlCommand command = new SqlCommand(sql, connection);
                SqlDataAdapter dataAdapter = new SqlDataAdapter(command);
                dataAdapter.Fill(dataTable);
            }
            for (int i = 0; i < dataTable.Rows.Count; i++)
            {
                var item = new ItemModel()
                {
                    id = Convert.ToInt32(dataTable.Rows[i]["id"]),
                    itemname = dataTable.Rows[i]["itemName"].ToString(),
                    itemCode = dataTable.Rows[i]["itemCode"].ToString(),
                    prise = Convert.ToInt32(dataTable.Rows[i]["prise"]),
                };
                items.Add(item);
            }

            return items;
        }
        
        public bool Create(ItemModel itemModel)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
   string sql = $"Insert into items (id,itemCode,itemName,prise) Values ('{itemModel.id}', " +
                             $"'{itemModel.itemCode}', '{itemModel.itemname}','{itemModel.prise} ')";

                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    command.CommandType = CommandType.Text;
                    connection.Open();
                    command.ExecuteNonQuery();
                    connection.Close();
                }
                return true;
            }
        }

        //delete
        public bool Delete(int id)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                string sql = $"Delete From items Where id='{id}'";
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    connection.Open();
                    command.ExecuteNonQuery();
                    connection.Close();
                }

                return true;
            }
        }

        internal bool UpdateItems(ItemModel itemModel, int id)
        {
                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    string sql = $"Update items SET itemName='{itemModel.itemname}'" +
                    $", itemCode='{itemModel.itemCode}', prise='{itemModel.prise}' Where Id='{id}'";
                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        connection.Open();
                        command.ExecuteNonQuery();
                        connection.Close();
                    }

                    return true;
                }
            }

        
    }
}

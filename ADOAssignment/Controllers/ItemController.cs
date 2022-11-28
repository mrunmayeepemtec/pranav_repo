using ADOAssignment.Model;
using ADOAssignment.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace ADOAssignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        public readonly ItemRepo _itemRepo;

        public ItemController(IConfiguration configuration)
        {
            _itemRepo = new ItemRepo(configuration);
        }
   
        [HttpGet]
        //[Route("Display")]
        public IActionResult Display()
        {
            return Ok(_itemRepo.Get());
        }

        [HttpPost]
        public IActionResult InsertData(ItemModel itemModel)
        {
            return Ok(_itemRepo.Create(itemModel));
        }
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            return Ok(_itemRepo.Delete(id));
        }

        [HttpPut]
        public IActionResult Put([FromBody] ItemModel itemModel, int id)
        {
            return Ok(_itemRepo.UpdateItems(itemModel, id));
        }



    }




}

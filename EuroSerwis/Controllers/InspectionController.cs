using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using EuroSerwis.DTO;
using EuroSerwis.Model;
using EuroSerwis.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EuroSerwis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InspectionController : ControllerBase
    {
        private readonly IInspection _inspection;

        public InspectionController(IMapper mapper, IInspection inspection)
        {
            _inspection = inspection;
        }

        [HttpPost]
        public async Task<ActionResult> Add([FromBody]InspectionDTO inspection)
        {
            await _inspection.Add(inspection);

            return Ok();
        }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var inspections = await _inspection.Get(false);

            if(inspections == null)
            {
                return NotFound();
            }

            return Ok(inspections);
        }

        [HttpGet]
        [Route("upcoming")]
        public async Task<IActionResult> GetUpcoming()
        {
            var inspections = await _inspection.Get(true);

            if (inspections == null)
            {
                return NotFound();
            }

            return Ok(inspections);
        }


        [HttpPut]
        public async Task<IActionResult> Update([FromBody]InspectionDTO inspection)
        {
            await _inspection.Update(inspection);

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Remove(int id)
        {
            await _inspection.Remove(id);

            return Ok();
        }
    }
}
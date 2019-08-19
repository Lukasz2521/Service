using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using EuroSerwis.DTO;
using EuroSerwis.Model;
using EuroSerwis.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EuroSerwis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InspectionController : ControllerBase
    {
        private readonly IInspection _inspection;
        private readonly IMapper _mapper;

        public InspectionController(IMapper mapper, IInspection inspection)
        {
            _mapper = mapper;
            _inspection = inspection;
        }

        [HttpPost("[action]")]
        public async Task<ActionResult> Add([FromBody]InspectionDTO inspection)
        {
            await _inspection.Add(inspection);

            return StatusCode(200);
        }


        [HttpGet("[action]")]
        public async Task<IEnumerable<InspectionDTO>> Get()
        {
            var inspections = await _inspection.Get();

            return inspections;
        }

        public async Task<IActionResult> Update([FromBody]InspectionDTO inspection)
        {
            await _inspection.Update(_mapper.Map<InspectionDTO, Inspection>(inspection));

            return Ok();
        }
    }
}
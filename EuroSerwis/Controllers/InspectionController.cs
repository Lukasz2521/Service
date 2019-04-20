using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EuroSerwis.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EuroSerwis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InspectionController : ControllerBase
    {
        [HttpGet("[action]")]
        public Inspection Get()
        {
            return new Inspection() { Date = new DateTime() };
        }
    }
}
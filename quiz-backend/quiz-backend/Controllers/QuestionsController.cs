using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using quiz_backend.Models;

namespace quiz_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Questions")]
    public class QuestionsController : Controller
    {
        [HttpGet]
        public IEnumerable<Models.Question> Get()
        {
            return new[]
            {
                new Question() { Text = "Hello" },
                new Question() { Text = "Hi" },
                new Question() { Text = "Greeting" }
            };
        }

        [HttpPost]
        public void Post([FromBody]Models.Question question)
        {
        }
    }
}
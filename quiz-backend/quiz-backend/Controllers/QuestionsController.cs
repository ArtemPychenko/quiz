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
        private readonly QuizContext _context;

        public QuestionsController(QuizContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Models.Question> Get()
        {
            return _context.Questions;
        }

        [HttpPost]
        public void Post([FromBody]Models.Question question)
        {
            _context.Questions.Add(question);

            _context.SaveChanges();
        }
    }
}
﻿using System;
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
        public async Task<IActionResult> Post([FromBody]Models.Question question)
        {
            await _context.Questions.AddAsync(question);
            _context.SaveChanges();

            return Ok(question);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Models.Question question)
        {
            if (id != question.Id)
            {
                return BadRequest();
            }
            _context.Entry(question).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok(question);
        }
    }
}
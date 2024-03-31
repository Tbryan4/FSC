using System;
using System.Collections.Generic;

namespace Project1.Models
{
    public partial class Blog
    {
        public int BlogId { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }
        public string? Author { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? DeletedAt { get; set; }
        public string? ImagePath { get; set; }
    }
}

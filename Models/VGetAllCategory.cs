﻿using System;
using System.Collections.Generic;

namespace Project1.Models
{
    public partial class VGetAllCategory
    {
        public string ParentProductCategoryName { get; set; } = null!;
        public string? ProductCategoryName { get; set; }
        public int? ProductCategoryId { get; set; }
    }
}

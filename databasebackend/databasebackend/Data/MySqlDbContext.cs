using DatabaseBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace DatabaseBackend.Data
{
    public class MySqlDbContext : DbContext
    {
        public MySqlDbContext(DbContextOptions<MySqlDbContext> options)
            : base(options)
        {
        }

        public DbSet<MyTableModel> MyTable { get; set; }
    }
}

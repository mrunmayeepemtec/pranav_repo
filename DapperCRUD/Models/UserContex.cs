using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Reflection.Emit;




namespace DapperCRUD.Models
{
    public partial class UserContex : DbContext
    {

        public UserContex()
        {
        }
        public UserContex(DbContextOptions<UserContex> options) : base(options)
        {
        }
        public virtual DbSet<Userinfo> UserInfos { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Userinfo>(entity =>
            {
                entity.HasNoKey();
                entity.ToTable("UserInfo");
                entity.Property(e => e.UserId).HasColumnName("UserId");
                entity.Property(e => e.UserName).HasMaxLength(30).IsUnicode(false);
                entity.Property(e => e.Email).HasMaxLength(50).IsUnicode(false);
                entity.Property(e => e.Password).HasMaxLength(20).IsUnicode(false);
            });
            OnModelCreatingPartial(modelBuilder);
        }
        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);


    }
}

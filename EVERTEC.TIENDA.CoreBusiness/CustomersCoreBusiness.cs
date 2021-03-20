using EVERTEC.TIENDA.CoreBusiness.Interfaces;
using EVERTEC.TIENDA.DataAccess;
using EVERTEC.TIENDA.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace EVERTEC.TIENDA.CoreBusiness
{
    public class CustomersCoreBusiness : CRUDGenerico<Customers>, ICustomersCoreBusiness
    {
        private IntPtr nativeResource = Marshal.AllocHGlobal(100);

        public CustomersCoreBusiness(EVERTECEntities context) : base(context)
        {


        }

        public CustomersCoreBusiness() : this(new EVERTECEntities())
        {

        }
        public new async Task CreateAsync(Customers entity)
        {
            try
            {
                await base.CreateAsync(entity);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Task DeleteAsync(Customers entity)
        {
            throw new NotImplementedException();
        }

        public Task DeleteRangeAsync(IEnumerable<Customers> entity)
        {
            throw new NotImplementedException();
        }

        public Task<bool> ExistAsync(Expression<Func<Customers, bool>> match)
        {
            throw new NotImplementedException();
        }

        public Task<Customers> FindAsync(Expression<Func<Customers, bool>> match)
        {
            throw new NotImplementedException();
        }

        public List<Customers> FindWhere(Expression<Func<Customers, bool>> match)
        {
            throw new NotImplementedException();
        }

        public Task<List<Customers>> FindWhereAsync(Expression<Func<Customers, bool>> match)
        {
            throw new NotImplementedException();
        }

        public List<Customers> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<List<Customers>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task UpdateAsync(Customers entity)
        {
            throw new NotImplementedException();
        }

        #region Dispose
        public new void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        ~CustomersCoreBusiness()
        {
            Dispose(false);
        }

        protected new virtual void Dispose(bool disposing)
        {

            if (nativeResource != IntPtr.Zero)
            {
                Marshal.FreeHGlobal(nativeResource);
                nativeResource = IntPtr.Zero;
            }
        }



        #endregion Dispose
    }
}

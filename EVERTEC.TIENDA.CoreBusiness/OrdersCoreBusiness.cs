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
    public class OrdersCoreBusiness : CRUDGenerico<Orders>, IOrdersCoreBusiness
    {
        private IntPtr nativeResource = Marshal.AllocHGlobal(100);

        public OrdersCoreBusiness(EVERTECEntities context) : base(context)
        {


        }

        public OrdersCoreBusiness() : this(new EVERTECEntities())
        {

        }
        public new async Task CreateAsync(Orders entity)
        {
            try
            {
                entity.CreateAT = DateTime.Now;
                await base.CreateAsync(entity);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Task DeleteAsync(Orders entity)
        {
            throw new NotImplementedException();
        }

        public Task DeleteRangeAsync(IEnumerable<Orders> entity)
        {
            throw new NotImplementedException();
        }


        public Task<bool> ExistAsync(Expression<Func<Orders, bool>> match)
        {
            throw new NotImplementedException();
        }

        public Task<Orders> FindAsync(Expression<Func<Orders, bool>> match)
        {
            throw new NotImplementedException();
        }

        public List<Orders> FindWhere(Expression<Func<Orders, bool>> match)
        {
            throw new NotImplementedException();
        }

        public new async Task<List<Orders>> FindWhereAsync(Expression<Func<Orders, bool>> match)
        {
            try
            {
                return await base.FindWhereAsync(match);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<Orders> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<List<Orders>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public new async Task UpdateAsync(Orders entity)
        {
            try
            {
                entity.UpdateAT = DateTime.Now;
                await base.UpdateAsync(entity);
            }
            catch (Exception)
            {

                throw;
            }
        }

        #region Dispose
        public new void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        ~OrdersCoreBusiness()
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

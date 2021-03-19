using EVERTEC.TIENDA.DataAccess.Interfaces;
using EVERTEC.TIENDA.Entities;
using System;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace EVERTEC.TIENDA.DataAccess
{
    public class LogExceptionsDataProvider : ILogExceptionsDataProvider
    {
        private IntPtr nativeResource = Marshal.AllocHGlobal(100);
        public async Task<int> CrearLogException(string Mensaje)
        {
            try
            {
                var modelo = new LogExceptions
                {
                    Mensaje = Mensaje,
                    Fecha = DateTime.Now
                };

                using (EVERTECEntities _modelo = new EVERTECEntities())
                {
                    _modelo.LogExceptions.Add(modelo);

                    await _modelo.SaveChangesAsync();

                    return modelo.LogExceptionID;

                }

            }
            catch (Exception)
            {

                throw;
            }
        }

        #region Dispose

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        ~LogExceptionsDataProvider()
        {
            Dispose(false);
        }

        protected virtual void Dispose(bool disposing)
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

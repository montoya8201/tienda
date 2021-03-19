using EVERTEC.TIENDA.CoreBusiness.Interfaces;
using EVERTEC.TIENDA.DataAccess;
using EVERTEC.TIENDA.DataAccess.Interfaces;
using System;
using System.Threading.Tasks;

namespace EVERTEC.TIENDA.CoreBusiness
{
    public class LogExceptionsCoreBusiness : ILogExceptionsCoreBusiness
    {

        ILogExceptionsDataProvider _ILogExceptionsDataProvider;

        public LogExceptionsCoreBusiness()
        {
            _ILogExceptionsDataProvider = new LogExceptionsDataProvider();
        }
        public async Task<int> CrearLogException(Exception ex)
        {
            try
            {
                string MensajeError = "Error message: " + ex.Message;
                if (ex.InnerException != null)
                {
                    MensajeError = MensajeError + " Inner exception: " + ex.InnerException.Message;
                }
                MensajeError = MensajeError + " Stack trace: " + ex.StackTrace;

                int result = await _ILogExceptionsDataProvider.CrearLogException(MensajeError);
                return result;
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

        ~LogExceptionsCoreBusiness()
        {
            Dispose(false);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {

                if (_ILogExceptionsDataProvider != null)
                {
                    _ILogExceptionsDataProvider.Dispose();
                }

            }

        }



        #endregion Dispose
    }
}

using EVERTEC.TIENDA.CoreBusiness.Interfaces;
using System;
using System.Threading.Tasks;

namespace EVERTEC.TIENDA.CoreBusiness
{
    public class CommonCoreBusiness : IDisposable
    {
        ILogExceptionsCoreBusiness _ILogExceptionsCoreBusiness;

        public CommonCoreBusiness()
        {
            _ILogExceptionsCoreBusiness = new LogExceptionsCoreBusiness();
        }
        public async Task<string> CrearLogException(Exception ex)
        {


            if (ex.Message == "The underlying provider failed on Open.")
            {
                return "Lo sentimos, pero no podemos procesar tu solicitud. Inténtalo de nuevo más tarde.";
            }

            int LogID = await _ILogExceptionsCoreBusiness.CrearLogException(ex);
            string Mensaje = string.Format("Se genero un error inesperado, ErrorID{0}. Fecha{1}", LogID.ToString(), DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss"));

            return Mensaje;

        }

        #region Dispose
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        ~CommonCoreBusiness()
        {
            Dispose(false);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {

                if (_ILogExceptionsCoreBusiness != null)
                {
                    _ILogExceptionsCoreBusiness.Dispose();
                }

            }

        }



        #endregion Dispose
    }
}

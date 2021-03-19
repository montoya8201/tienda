using System;
using System.Threading.Tasks;

namespace EVERTEC.TIENDA.CoreBusiness.Interfaces
{
    public interface ILogExceptionsCoreBusiness : IDisposable
    {
        Task<int> CrearLogException(Exception ex);
    }
}

using System;
using System.Threading.Tasks;

namespace EVERTEC.TIENDA.DataAccess.Interfaces
{
    public interface ILogExceptionsDataProvider : IDisposable
    {
        Task<int> CrearLogException(string Mensaje);
    }
}

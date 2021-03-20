using EVERTEC.TIENDA.DataAccess.Interfaces;
using EVERTEC.TIENDA.Entities;
using System;

namespace EVERTEC.TIENDA.CoreBusiness.Interfaces
{
    public interface IOrdersCoreBusiness : ICRUDGenerico<Orders>, IDisposable
    {
    }
}

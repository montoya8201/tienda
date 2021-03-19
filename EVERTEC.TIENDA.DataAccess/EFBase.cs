using EVERTEC.TIENDA.Entities;

namespace EVERTEC.TIENDA.DataAccess
{
    public class EFBase
    {
        protected EVERTECEntities _modelo;

        public EFBase()
        {
            _modelo = new EVERTECEntities();
        }
    }
}

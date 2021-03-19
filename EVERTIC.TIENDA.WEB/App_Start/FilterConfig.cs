using System.Web;
using System.Web.Mvc;

namespace EVERTEC.TIENDA.WEB
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}

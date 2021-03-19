using EVERTEC.TIENDA.CoreBusiness;
using EVERTEC.TIENDA.CoreBusiness.Interfaces;
using EVERTEC.TIENDA.Entities;
using Microsoft.AspNet.Identity;
using System;
using System.Threading.Tasks;
using System.Web.Mvc;
using static EVERTEC.TIENDA.Across.Enumeraciones;

namespace EVERTEC.TIENDA.WEB.Controllers
{
    [Authorize]
    public class ComprasController : Controller
    {
        private CommonCoreBusiness _CommonCoreBusiness { get { return new CommonCoreBusiness(); } }
        private IOrdersCoreBusiness _IOrdersCoreBusiness { get { return new OrdersCoreBusiness(); } }

        // GET: Compras
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult CrearOrden()
        {
            return View();
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> CrearOrdenDeCompraAsync()
        {
            try
            {

                var modelo = new Orders()
                {
                    CustomerID = User.Identity.GetUserId(),
                    Status=EnumStatus.CREATED.ToString(),
                    Valor= 2563256
                };
                
                await _IOrdersCoreBusiness.CreateAsync(modelo);

                return Json(new { msn = ReponseType.success.ToString() }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                string Mensaje = await _CommonCoreBusiness.CrearLogException(ex);
                return Json(new { error = Mensaje }, JsonRequestBehavior.AllowGet);
            }
        }
    }
}
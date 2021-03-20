using EVERTEC.TIENDA.CoreBusiness;
using EVERTEC.TIENDA.CoreBusiness.Interfaces;
using EVERTEC.TIENDA.Entities;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using PlacetoPay.Integrations.Library.CSharp.Entities;
using PlacetoPay.Integrations.Library.CSharp.Message;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using static EVERTEC.TIENDA.Across.Enumeraciones;

namespace EVERTEC.TIENDA.WEB.Controllers
{
    [Authorize]
    public class ComprasController : ParentController
    {
        private ApplicationUserManager _userManager;
        public ApplicationUserManager UserManager
        {
            get
            {
                return _userManager ?? HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
            private set
            {
                _userManager = value;
            }
        }
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

        public async Task<ActionResult> ResumenOrden()
        {
            string Status = EnumStatus.CREATED.ToString();
            string CustomerID = User.Identity.GetUserId();
            var lista = await _IOrdersCoreBusiness.FindWhereAsync(x => x.CustomerID == CustomerID && x.Status == Status);
            return View(lista);
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
                    Status = EnumStatus.CREATED.ToString(),
                    Valor = 2563256
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

        public async Task<ActionResult> IniciarPago(int NroFactura)
        {
            try
            {

                Amount amount = new Amount(Convert.ToDouble(2563256));


                Payment payment = new Payment(NroFactura.ToString(), "Pruebas...", amount);

                var Usuario = await UserManager.FindByIdAsync(User.Identity.GetUserId());

                Person persona = new Person("", "", Usuario.UserName, "", Usuario.Email);


                String userAgent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";

                // El proceso expira en 30 minutos
                String expiration = (DateTime.Now).AddMinutes(30).ToString("yyyy-MM-ddTHH\\:mm\\:sszzz");

                String returnUrl = string.Format(System.Configuration.ConfigurationManager.AppSettings["urlRetornoPago"], NroFactura);



                String ipAddress = Request.UserHostAddress.ToString();

                RedirectRequest request = new RedirectRequest(payment, returnUrl, ipAddress, userAgent, expiration, null, persona);
                RedirectResponse response = gateway.Request(request);

                if (response.Status.status == "OK")
                {
                    string a = "";
                }
                else //Consultar estado de la transaccion 
                {
                    RedirectInformation redirectInformation = gateway.Query(response.RequestId);



                    response.Status.status = redirectInformation.Status.status;
                    response.Status.Message = redirectInformation.Status.Message;


                }

                Session["RequestId"] = response.RequestId;

                var jsonResponse = new { responsePago = response, RequestId = response.RequestId };

                return Json(jsonResponse);
            }
            catch (Exception ex)
            {
                string MsnError = await _CommonCoreBusiness.CrearLogException(ex);
                return Json(new { error = MsnError, msn = "200" }, JsonRequestBehavior.AllowGet);
            }
        }
        [AllowAnonymous]
        public async Task<ActionResult> ResultadoPago(int NroFactura)
        {
            try
            {
                string RequestId = Session["RequestId"].ToString();
                RedirectInformation redirectInformation = gateway.Query(RequestId);



                List<Transaction> listTransactiones = redirectInformation.Payment;
                if (listTransactiones.Count > 0)
                {
                    Transaction transaction = listTransactiones[0];

                    
                    Orders orders = new Orders();

                    orders.Status = redirectInformation.Status.status;
                    orders.OrderID = NroFactura;
                    await _IOrdersCoreBusiness.UpdateAsync(orders);

                    return View(transaction);
                }
                else
                {
                    return PartialView("_Mensaje");
                }
            }
            catch (Exception ex)
            {
                string MsnError = await _CommonCoreBusiness.CrearLogException(ex);
                return Json(new { error = MsnError, msn = "200" }, JsonRequestBehavior.AllowGet);
            }

        }


        public async Task<ActionResult> EstadoOrden()
        {
            string CustomerID = User.Identity.GetUserId();
            var lista = await _IOrdersCoreBusiness.FindWhereAsync(x => x.CustomerID == CustomerID );
            return View(lista);
        }
    }
}
using EVERTEC.TIENDA.CoreBusiness;
using EVERTEC.TIENDA.CoreBusiness.Interfaces;
using EVERTEC.TIENDA.Entities;
using Microsoft.AspNet.Identity;
using System;
using System.Threading.Tasks;
using System.Web.Mvc;
using static EVERTEC.TIENDA.Across.Enumeraciones;
using PlacetoPay.Integrations.Library.CSharp.Entities;
using PlacetoPay.Integrations.Library.CSharp.Message;

namespace EVERTEC.TIENDA.WEB.Controllers
{
    [Authorize]
    public class ComprasController : ParentController
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

        public ActionResult IniciarPago(double NroFactura)
        {
            try
            {

                Amount amount = new Amount(Convert.ToDouble(2563256));
                //amount.Taxes.Add(new TaxDetail())

                Payment payment = new Payment(NroFactura.ToString(), "Pruebas...", amount);

                Person persona = new Person("", "", "Jhon", "Montoya","jhon.montoya@outlook.com");


                String userAgent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";

                // El proceso expira en 30 minutos
                String expiration = (DateTime.Now).AddMinutes(30).ToString("yyyy-MM-ddTHH\\:mm\\:sszzz");

                String returnUrl = string.Format(System.Configuration.ConfigurationManager.AppSettings["urlRetornoPago"], NroFactura);

                //.Configuration.AppSettingsSection[]

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

               

                var jsonResponse = new { responsePago = response, RequestId = response.RequestId };

                return Json(jsonResponse);
            }
            catch (Exception ex)
            {
                return View("Error", new HandleErrorInfo(ex, "IUSH", "Index"));
            }
        }
    }
}
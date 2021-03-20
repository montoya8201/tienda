using PlacetoPay.Integrations.Library.CSharp.Contracts;
using System;
using P2P = PlacetoPay.Integrations.Library.CSharp.PlacetoPay;
using System.Web.Mvc;

namespace EVERTEC.TIENDA.WEB.Controllers
{
    public class ParentController : Controller
    {

        public Gateway gateway;

        public ParentController()
        {
            // Gateway.TP_REST or Gateway.TP_SOAP
            this.gateway = new P2P(System.Configuration.ConfigurationManager.AppSettings["loginPlaceToPay"], System.Configuration.ConfigurationManager.AppSettings["trankey"], new Uri(System.Configuration.ConfigurationManager.AppSettings["urlRedireccion"]), Gateway.TP_REST);
        }
    }
}
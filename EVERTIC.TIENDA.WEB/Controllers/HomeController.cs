using System.Web.Mvc;

namespace EVERTEC.TIENDA.WEB.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            if (User.Identity.IsAuthenticated)
            {
                return RedirectToAction("Welcome", "Home");
            }
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult ModuloEnMantenimiento()
        {

            return View();
        }

        public ActionResult Error()
        {

            return View();
        }
        [Authorize]
        public ActionResult Welcome()
        {

            return View();
        }

        public ActionResult AccessDenied()
        {

            return View();
        }
    }
}
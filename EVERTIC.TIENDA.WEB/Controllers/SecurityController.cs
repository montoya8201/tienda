using EVERTEC.TIENDA.CoreBusiness;
using EVERTEC.TIENDA.CoreBusiness.Interfaces;
using EVERTEC.TIENDA.Entities;
using EVERTEC.TIENDA.WEB.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using System;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using static EVERTEC.TIENDA.Across.Enumeraciones;

namespace EVERTEC.TIENDA.WEB.Controllers
{

    public class SecurityController : Controller
    {

        #region Variables
        private ApplicationSignInManager _signInManager;
        private ApplicationUserManager _userManager;
        public ApplicationSignInManager SignInManager
        {
            get
            {
                return _signInManager ?? HttpContext.GetOwinContext().Get<ApplicationSignInManager>();
            }
            private set
            {
                _signInManager = value;
            }
        }
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

        private ICustomersCoreBusiness _ICustomersCoreBusiness { get { return new CustomersCoreBusiness(); } }

        #endregion Variables


        public ActionResult Index() => View();

        public ActionResult UsersOnline() => View();

        #region Admnistar Usuarios



        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> CrearUsuario(FormCollection collection)
        {
            try
            {
                RegisterViewModel Modelo = new RegisterViewModel();


                Modelo.UserName = collection["UserName"].ToString().Trim().ToUpper();
                Modelo.Email = collection["Email"].ToString().Trim();
                Modelo.Password = collection["Password"].ToString().Trim();
                Modelo.Mobile = collection["Mobile"].ToString().Trim();


                var user = new ApplicationUser { UserName = Modelo.UserName, Email = Modelo.Email, DateCreated = DateTime.Now };
                UserManager.PasswordValidator = new PasswordValidator
                {
                    RequiredLength = 0,
                    RequireNonLetterOrDigit = false,
                    RequireDigit = false,
                    RequireLowercase = false,
                    RequireUppercase = false
                };

                var result = await UserManager.CreateAsync(user, Modelo.Password);

                if (result.Succeeded)
                {

                    await _ICustomersCoreBusiness.CreateAsync(new Customers { CustomerID = user.Id, Name = Modelo.UserName, Email = Modelo.Email, Mobile = Modelo.Mobile });

                    return Json(new { msn = ReponseType.success.ToString() }, JsonRequestBehavior.AllowGet);
                }

                return Json(new { error = string.Join(", ", result.Errors) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                string Mensaje = await _CommonCoreBusiness.CrearLogException(ex);
                return Json(new { error = Mensaje }, JsonRequestBehavior.AllowGet);
            }
        }


        #endregion Administar Usuarios





        #region Ingreso al sistema

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Login(LoginViewModel model)
        {
            try
            {



                string Mensaje = string.Empty;

                if (User.Identity.IsAuthenticated)
                {
                    return Json(new { msn = "0" }, JsonRequestBehavior.AllowGet);
                }

                var user = await UserManager.FindByEmailAsync(model.Email);

                if (user != null)
                {

                    int NroMinutosBloqueo = 10;
                    int NroIntentosBloqueoInicioAlSistema = 3;
                    var validCredentials = await SignInManager.PasswordSignInAsync(user.UserName, model.Password, model.RememberMe, shouldLockout: false);

                    if (await UserManager.IsLockedOutAsync(user.Id))
                    {
                        DateTime dateTime = new DateTime();
                        dateTime = user.LockoutEndDateUtc.Value;

                        if (dateTime.Year == 2120)
                        {
                            return Json(new { msn = string.Format("Su cuenta ha sido bloqueada, por favor contacte al administrador del sistema", NroMinutosBloqueo.ToString()) }, JsonRequestBehavior.AllowGet);
                        }

                        return Json(new { msn = string.Format("Su cuenta ha sido bloqueada por {0} minutos debido a múltiples intentos fallidos de inicio de sesión.", NroMinutosBloqueo.ToString()) }, JsonRequestBehavior.AllowGet);
                    }
                    else if (await UserManager.GetLockoutEnabledAsync(user.Id) && validCredentials != SignInStatus.Success)
                    {

                        await UserManager.AccessFailedAsync(user.Id);

                        if (await UserManager.IsLockedOutAsync(user.Id))
                        {
                            return Json(new { msn = string.Format("Su cuenta ha sido bloqueada por {0} minutos debido a múltiples intentos fallidos de inicio  de sesión.", NroIntentosBloqueoInicioAlSistema.ToString()) }, JsonRequestBehavior.AllowGet);
                        }
                        else
                        {
                            int accessFailedCount = await UserManager.GetAccessFailedCountAsync(user.Id);

                            if (accessFailedCount == NroIntentosBloqueoInicioAlSistema)
                            {
                                DateTimeOffset localTime = DateTimeOffset.Now.AddMinutes(NroMinutosBloqueo);
                                await UserManager.SetLockoutEndDateAsync(user.Id, localTime);
                                await UserManager.ResetAccessFailedCountAsync(user.Id);
                                return Json(new { msn = string.Format("Su cuenta ha sido bloqueada por {0} minutos debido a múltiples intentos fallidos de inicio de sesión.", NroMinutosBloqueo.ToString()) }, JsonRequestBehavior.AllowGet);
                            }
                            return Json(new { msn = string.Format("Credenciales no válidas. Tiene {0} intentos más antes de que tu cuenta se bloquee.", (NroIntentosBloqueoInicioAlSistema - accessFailedCount).ToString()) }, JsonRequestBehavior.AllowGet);
                        }

                    }
                    else if (validCredentials != SignInStatus.Success)
                    {
                        return Json(new { msn = "Credenciales no válidas. Inténtalo de nuevo." }, JsonRequestBehavior.AllowGet);

                    }
                    else
                    {

                        await UserManager.ResetAccessFailedCountAsync(user.Id);

                        var currentUser = UserManager.FindById(user.Id);
                        currentUser.LockoutEndDateUtc = null;
                        var result = await UserManager.UpdateAsync(currentUser);

                        return Json(new { msn = "0" }, JsonRequestBehavior.AllowGet);
                    }

                }

                return Json(new { msn = "Credenciales no válidas. Inténtalo de nuevo." }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {


                string MsnError = await _CommonCoreBusiness.CrearLogException(ex);
                return Json(new { error = MsnError, msn = "200" }, JsonRequestBehavior.AllowGet);

            }
        }


        #endregion Ingreso al sistema

        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult> LogOff()
        {
            try
            {
                Session.Contents.RemoveAll();
                Session.Abandon();
                Response.Cookies.Add(new HttpCookie("ASP.NET_SessionId", ""));
                Response.AppendHeader("Cache-Control", "no-store");
                AuthenticationManager.SignOut(DefaultAuthenticationTypes.ApplicationCookie);



                return Json(new { msn = ReponseType.success.ToString() }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                string Mensaje = await _CommonCoreBusiness.CrearLogException(ex);
                return Json(new { msn = Mensaje }, JsonRequestBehavior.AllowGet);
            }
        }


        private IAuthenticationManager AuthenticationManager
        {
            get
            {
                return HttpContext.GetOwinContext().Authentication;
            }
        }



        [AllowAnonymous]
        public ActionResult ForgotPassword()
        {
            return View();
        }
        [AllowAnonymous]
        public ActionResult Recover()
        {
            return View();
        }


        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> ForgotPassword(string Email)
        {
            try
            {
                Email = Email.Trim();
                var user = await UserManager.FindByEmailAsync(Email);
                if (user == null)
                {

                    return Json(new { msn = "Por favor revise su correo electrónico para restablecer su contraseña." });
                }


                return Json(new { msn = "Por favor revise su correo electrónico para restablecer su contraseña." });
            }
            catch (Exception ex)
            {

                string Mensaje = await _CommonCoreBusiness.CrearLogException(ex);
                return Json(new { error = Mensaje, msn = "" }, JsonRequestBehavior.AllowGet);
            }

        }
        [AllowAnonymous]
        public ActionResult CrearCuenta()
        {
            return View();
        }

    }
}
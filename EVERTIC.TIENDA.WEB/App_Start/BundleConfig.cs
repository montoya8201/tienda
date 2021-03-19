using System.Web.Optimization;

namespace EVERTEC.TIENDA.WEB
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/Scripts/app.js"));

            bundles.Add(new ScriptBundle("~/bundles/utilidades").Include(
                "~/ScriptsPropios/Utilidades.js"));
        }
    }
}

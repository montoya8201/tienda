using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EVERTEC.TIENDA.WEB.Startup))]
namespace EVERTEC.TIENDA.WEB
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

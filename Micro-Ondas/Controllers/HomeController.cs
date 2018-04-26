using Micro_Ondas.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data;
using System.IO;
using System.Net;



namespace Micro_Ondas.Controllers
{
	public class HomeController : Controller
	{
		private Entities db = new Entities();

		public ActionResult Index()
		{

			return View(db.Tipos.ToList());
		}

		[HttpPost]
		public ActionResult Index(string Nome)
		{
			if (Nome == "")
				ModelState.AddModelError("inserirNome", "*Selecione um tipo de alimento!");

			if (ModelState.IsValid)
			{
				
				return RedirectToAction("Aquecer","Home", new {Nome });
			}
			else
				return View(db.Tipos.ToList());
		}


		public ActionResult Aquecer(string Nome)
		{
			Tipos x = db.Tipos.SingleOrDefault(m => m.Nome.Equals(Nome));
			return View (x);
		}

		public ActionResult AquecerR()
		{
			return View();
		}

	}
}
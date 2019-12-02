import static spark.Spark.*;
import static spark.debug.DebugScreen.*;

import api.Api;
import users.Users;
import util.*;

public class IsoServer {

	public static void main(String[] args) {
		enableDebugScreen();
		port(9000);
		before("/api/secret/*", Filters.checkAuthentication);

		get(Path.Web.INTRO, (request, response) -> {
			return "Isomorphic Spark Jwt Implementation";
		});
		// set up login routes
		post(Path.Web.LOGIN, Users.serveLoginPage);
		// set up routes
		post(Path.Api.TEST, Api.demoTest);

		// set up blank routes
		get("*", ViewUtil.notFound);

		// set up after-filters (called after each get/post)
		after("*", Filters.addHeaders);
	}

}

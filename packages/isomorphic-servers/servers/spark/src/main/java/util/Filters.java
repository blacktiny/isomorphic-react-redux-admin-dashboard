package util;

import java.util.HashMap;

import spark.*;

public class Filters {

	static HashMap<String, String> corsFilter() {
		HashMap<String, String> customHeaders = new HashMap<>();
		customHeaders.put("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
		customHeaders.put("Access-Control-Allow-Origin", "*");
		customHeaders.put("Access-Control-Allow-Headers",
				"Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin");
		return customHeaders;
	}

	// Enable GZIP && Cores for all responses
	public static Filter addHeaders = (Request request, Response response) -> {
		HashMap<String, String> customHeaders = corsFilter();
		customHeaders.forEach((key, value) -> {
			response.header(key, value);
		});
	};
	// Check Authentication
	public static Filter checkAuthentication = (Request request, Response response) -> {
		if (!(JWTToken.checkExpirity(GetResponseData.getHeaderParams(request, "Authorization")))) {
			response.redirect(Path.Web.UNAUTHORIZED);
		}
	};

}

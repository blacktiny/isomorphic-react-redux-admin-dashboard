package users;

import java.util.HashMap;
import java.util.Map;
import util.*;
import spark.Route;

public class Users {

	static Map<String, String> getdemoUser() {
		Map<String, String> demoUser = new HashMap<>();
		demoUser.put("id", "1");
		demoUser.put("username", "demo@gmail.com");
		demoUser.put("password", "demodemo");
		return demoUser;
	}

	static Map<String, String> isLoggedIn(String username, String password) {
		Map<String, String> demoUser = getdemoUser();
		if ((username + "").matches(demoUser.get("username")) && (password + "").matches(demoUser.get("password"))) {
			Map<String, String> model = new HashMap<>();
			model.put("username", demoUser.get("username"));
			model.put("id", demoUser.get("id"));
			model.put("token", JWTToken.getToken(username, demoUser.get("id")));
			return model;
		}
		return null;
	}

	public static Route serveLoginPage = (request, response) -> {
		 String username = GetResponseData.getBodyParams(request, "username");
		 String password = GetResponseData.getBodyParams(request, "password");
		 Map<String, String> model = isLoggedIn(username, password);
		 if (model == null) {
		 return ViewUtil.unAuthorized(request, response);
		 }
		 return ViewUtil.authorized(request, response, model);
	};
}

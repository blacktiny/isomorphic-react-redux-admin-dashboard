package api;

import java.util.HashMap;
import java.util.Map;

import util.ViewUtil;
import spark.Route;

public class Api {
	public static Route demoTest = (request, response) -> {
		Map<String, String> model = new HashMap<>();
		model.put("message", "succcesful");
		model.put("status", "200");
		return ViewUtil.testResponse(request, response, model);

	};
}
